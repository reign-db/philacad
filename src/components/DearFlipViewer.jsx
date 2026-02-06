import { useEffect, useRef, useState } from 'react'

/**
 * DearFlip 3D PDF Flipbook viewer.
 * Uses the _df_book HTML approach - renders a div that DearFlip initializes.
 * Requires: jQuery + dflip.min.js loaded (see index.html).
 * License: DearFlip lite is free for personal non-profit use (CC BY-NC-ND).
 */
export default function DearFlipViewer({ pdfUrl, height = 500, options = {}, className = '' }) {
  const containerRef = useRef(null)
  const flipbookId = useRef(`df_${Math.random().toString(36).slice(2, 9)}`)

  useEffect(() => {
    if (!pdfUrl || !containerRef.current) return

    const id = flipbookId.current
    const $ = window.jQuery
    if (!$?.fn?.flipBook) {
      console.warn('DearFlip not loaded. Ensure jQuery and dflip.min.js are in index.html.')
      return
    }

    const fullSource = pdfUrl.startsWith('http') ? pdfUrl : `${window.location.origin}${pdfUrl}`
    const opts = {
      webgl: true,
      height: typeof height === 'number' ? height : 500,
      backgroundColor: '#1a1a1a',
      ...options,
    }

    try {
      $(containerRef.current).flipBook(fullSource, opts)
    } catch (err) {
      console.error('DearFlip init error:', err)
    }

    return () => {
      try {
        const inst = $(containerRef.current).data('dflip_instance') || $(containerRef.current).data('flipBook')
        if (inst?.destroy) inst.destroy()
        $(containerRef.current).empty()
      } catch {}
    }
  }, [pdfUrl, height])

  if (!pdfUrl) return null

  return (
    <div
      ref={containerRef}
      className={`dearflip-viewer min-h-[300px] bg-[#1a1a1a] ${className}`}
      style={{ minHeight: typeof height === 'number' ? height : 500 }}
    />
  )
}
