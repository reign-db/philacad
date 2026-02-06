import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from 'react'
import * as pdfjsLib from 'pdfjs-dist'
import HTMLFlipBook from 'react-pageflip'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import screenfull from 'screenfull'
import {
  ChevronLeft,
  ChevronRight,
  Grid3X3,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  X,
} from 'lucide-react'

// PDF.js worker for Vite
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url'
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker

const PAGE_WIDTH = 320
const PAGE_HEIGHT = 440
const SCALE = 2

const FlipbookPage = React.forwardRef(({ children }, ref) => (
  <div ref={ref} className="flipbook-page">
    {children}
  </div>
))
FlipbookPage.displayName = 'FlipbookPage'

const PdfFlipbook = forwardRef(function PdfFlipbook(
  {
    pdfUrl,
    width = PAGE_WIDTH,
    height = PAGE_HEIGHT,
    downloadUrl,
    downloadFilename,
    shareUrl,
    className = '',
  },
  ref
) {
  const bookRef = useRef(null)
  const containerRef = useRef(null)
  const [pageImages, setPageImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [showThumbnails, setShowThumbnails] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [transformRef, setTransformRef] = useState(null)

  const loadPdfPages = useCallback(async () => {
    if (!pdfUrl) return
    setLoading(true)
    setError(null)
    try {
      const pdf = await pdfjsLib.getDocument(pdfUrl).promise
      const numPages = pdf.numPages
      const urls = []
      for (let i = 1; i <= numPages; i++) {
        const page = await pdf.getPage(i)
        const viewport = page.getViewport({ scale: SCALE })
        const canvas = document.createElement('canvas')
        canvas.width = viewport.width
        canvas.height = viewport.height
        const ctx = canvas.getContext('2d')
        await page.render({
          canvasContext: ctx,
          viewport,
        }).promise
        urls.push(canvas.toDataURL('image/jpeg', 0.92))
      }
      setPageImages(urls)
    } catch (err) {
      console.error('PDF flipbook load error:', err)
      setError(err.message || 'Failed to load PDF')
    } finally {
      setLoading(false)
    }
  }, [pdfUrl])

  useEffect(() => {
    loadPdfPages()
  }, [loadPdfPages])

  const goNext = useCallback(() => {
    if (!bookRef.current?.pageFlip) return
    const flip = bookRef.current.pageFlip()
    if (currentPage < flip.getPageCount() - 1) {
      flip.flipNext()
    }
  }, [currentPage])

  const goPrev = useCallback(() => {
    if (!bookRef.current?.pageFlip) return
    const flip = bookRef.current.pageFlip()
    if (currentPage > 0) {
      flip.flipPrev()
    }
  }, [currentPage])

  const goToPage = useCallback((pageIndex) => {
    if (!bookRef.current?.pageFlip) return
    bookRef.current.pageFlip().flip(pageIndex, 'top')
    setShowThumbnails(false)
  }, [])

  const handleFlip = useCallback((e) => {
    setCurrentPage(e.data)
  }, [])

  const handleKeyDown = useCallback(
    (e) => {
      if (showThumbnails) return
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        goNext()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goPrev()
      } else if (e.key === 'Escape') {
        if (isFullscreen && screenfull.isEnabled) screenfull.exit()
        setShowThumbnails(false)
      }
    },
    [goNext, goPrev, showThumbnails, isFullscreen]
  )

  const toggleFullscreen = useCallback(() => {
    if (!screenfull.isEnabled || !containerRef.current) return
    if (screenfull.isFullscreen) {
      screenfull.exit()
      setIsFullscreen(false)
    } else {
      screenfull.request(containerRef.current)
      setIsFullscreen(true)
    }
  }, [])

  useEffect(() => {
    if (!screenfull.isEnabled) return
    const handler = () => setIsFullscreen(screenfull.isFullscreen)
    screenfull.on('change', handler)
    return () => screenfull.off('change', handler)
  }, [])

  const zoomIn = useCallback(() => transformRef?.zoomIn(), [transformRef])
  const zoomOut = useCallback(() => transformRef?.zoomOut(), [transformRef])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  useImperativeHandle(ref, () => ({
    goNext,
    goPrev,
    goToPage,
    getCurrentPage: () => currentPage,
    getPageCount: () => pageImages.length,
  }))

  if (loading) {
    return (
      <div
        className={`flex flex-col items-center justify-center rounded-lg bg-charcoal/5 border border-charcoal/10 ${className}`}
        style={{ width, height: height + 60 }}
      >
        <div className="animate-pulse text-charcoal/70">Loading flipbook…</div>
      </div>
    )
  }

  if (error) {
    return (
      <div
        className={`flex flex-col items-center justify-center rounded-lg bg-charcoal/5 border border-charcoal/10 text-charcoal/70 text-center px-4 ${className}`}
        style={{ width, height: height + 60 }}
      >
        <p>{error}</p>
      </div>
    )
  }

  if (pageImages.length === 0) return null

  const totalPages = pageImages.length
  const displayPage = currentPage + 1

  return (
    <div
      ref={containerRef}
      className={`flipbook-enhanced rounded-xl overflow-hidden bg-[#2a2a2a] shadow-xl ${className}`}
    >
      {/* Top toolbar */}
      <div className="flex items-center justify-between gap-2 px-3 py-2 bg-[#1e1e1e] text-white/90 text-sm">
        <div className="flex items-center gap-3">
          <span className="tabular-nums font-medium">{displayPage} / {totalPages}</span>
          <button
            type="button"
            onClick={() => setShowThumbnails((v) => !v)}
            className="p-1.5 rounded hover:bg-white/10 transition-colors"
            title="Thumbnails"
            aria-label="Toggle thumbnails"
          >
            <Grid3X3 size={16} strokeWidth={2} />
          </button>
        </div>
        <div className="flex items-center gap-1">
          <button type="button" onClick={zoomOut} className="p-1.5 rounded hover:bg-white/10 transition-colors" title="Zoom out" aria-label="Zoom out">
            <ZoomOut size={16} strokeWidth={2} />
          </button>
          <button type="button" onClick={zoomIn} className="p-1.5 rounded hover:bg-white/10 transition-colors" title="Zoom in" aria-label="Zoom in">
            <ZoomIn size={16} strokeWidth={2} />
          </button>
          <button
            type="button"
            onClick={toggleFullscreen}
            className="p-1.5 rounded hover:bg-white/10 transition-colors"
            title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
            aria-label={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize2 size={16} strokeWidth={2} /> : <Maximize2 size={16} strokeWidth={2} />}
          </button>
        </div>
      </div>

      <div className="relative flex items-center justify-center min-h-[400px] bg-[#333] overflow-hidden">
        <button
          type="button"
          onClick={goPrev}
          disabled={currentPage <= 0}
          className="absolute left-2 z-20 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          aria-label="Previous page"
        >
          <ChevronLeft size={24} strokeWidth={2} />
        </button>
        <button
          type="button"
          onClick={goNext}
          disabled={currentPage >= totalPages - 1}
          className="absolute right-2 z-20 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          aria-label="Next page"
        >
          <ChevronRight size={24} strokeWidth={2} />
        </button>
        <TransformWrapper
          initialScale={1}
          minScale={0.5}
          maxScale={3}
          centerOnInit
          onInit={(ref) => setTransformRef(ref)}
          doubleClick={{ mode: 'reset' }}
          wheel={{ step: 0.1 }}
          panning={{ velocityDisabled: true }}
        >
          <TransformComponent
            wrapperStyle={{ width: '100%', height: '100%' }}
            contentStyle={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <HTMLFlipBook
              ref={bookRef}
              width={width}
              height={height}
              size="fixed"
              drawShadow
              flippingTime={600}
              usePortrait={false}
              showCover={true}
              onFlip={handleFlip}
              className="flipbook-book shadow-2xl"
            >
              {pageImages.map((src, index) => (
                <FlipbookPage key={index}>
                  <img
                    src={src}
                    alt={`Page ${index + 1}`}
                    className="w-full h-full object-contain bg-white select-none"
                    draggable={false}
                  />
                </FlipbookPage>
              ))}
            </HTMLFlipBook>
          </TransformComponent>
        </TransformWrapper>
      </div>

      {showThumbnails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" role="dialog" aria-modal="true" aria-label="Page thumbnails">
          <div className="relative bg-[#1e1e1e] rounded-xl max-w-4xl max-h-[90vh] overflow-auto p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-medium">Jump to page</h3>
              <button type="button" onClick={() => setShowThumbnails(false)} className="p-1.5 rounded hover:bg-white/10 text-white transition-colors" aria-label="Close">
                <X size={20} strokeWidth={2} />
              </button>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
              {pageImages.map((src, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToPage(index)}
                  className={`relative aspect-[0.7] rounded overflow-hidden border-2 transition-all hover:border-gold ${index === currentPage ? 'border-gold ring-2 ring-gold/50' : 'border-transparent'}`}
                >
                  <img src={src} alt={`Page ${index + 1}`} className="w-full h-full object-cover" loading="lazy" />
                  <span className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs py-0.5 text-center">{index + 1}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
})

export default PdfFlipbook
