import PageHero from '../components/PageHero'
import DearFlipViewer from '../components/DearFlipViewer'

const JOURNALS = [
  {
    id: 'journal-1',
    title: 'Philippine Journal of Academicians & Professionals (PJAP)',
    subtitle: 'Issue No. 1 Series of 2025',
    frontCover: '/journals/journal-1-front.webp',
    backCover: '/journals/journal-1-back.webp',
    downloadUrl: '/journals/journal-1.pdf',
    downloadFilename: 'PJAP-Volume-1-Number-1-2025.pdf',
  },
]

export default function JournalPage() {
  return (
    <>
      <PageHero buttonLabel="Browse Journal" />
      <div className="flex-1 flex flex-col bg-[#f8f8f8]">
        <section className="relative z-10 py-16 flex-1">
        <div className="w-full bg-[#f8f8f8] py-10 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-charcoal mb-10">
              Journal
            </h2>
            <div className="space-y-20">
              {JOURNALS.map((issue) => (
                <article
                  key={issue.id}
                  className="flex flex-col items-center text-center w-full max-w-6xl mx-auto"
                >
                  <div className="flex flex-wrap justify-center gap-5 sm:gap-8 mb-8">
                    <img
                      src={issue.frontCover}
                      alt={`${issue.title} – front cover`}
                      className="w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[480px] rounded-lg shadow-lg object-cover"
                    />
                    <img
                      src={issue.backCover}
                      alt={`${issue.title} – back cover`}
                      className="w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[480px] rounded-lg shadow-lg object-cover"
                    />
                  </div>
                  {issue.downloadUrl && (
                    <div className="w-full max-w-[720px] sm:max-w-[880px] lg:max-w-[1000px] mx-auto my-10">
                      <DearFlipViewer
                        pdfUrl={issue.downloadUrl}
                        height={580}
                        options={{ pageMode: 2 }}
                      />
                    </div>
                  )}
                  <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-charcoal">
                    {issue.title}
                  </h3>
                  <p className="text-navy text-base sm:text-lg mt-2">{issue.subtitle}</p>
                  {issue.downloadUrl && (
                    <a
                      href={issue.downloadUrl}
                      download={issue.downloadFilename}
                      className="download-button mt-8"
                    >
                      <span className="download-button__text">Download</span>
                      <span className="download-button__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" className="download-button__svg" aria-hidden="true">
                          <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z" />
                          <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z" />
                          <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z" />
                        </svg>
                      </span>
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
        </section>
      </div>
    </>
  )
}
