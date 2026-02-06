import PageHero from '../components/PageHero'
import DearFlipViewer from '../components/DearFlipViewer'

const EMAGAZINES = [
  {
    id: 'maiden-issue-2024',
    title: 'The Phil-cad Maiden Issue',
    subtitle: 'Volume 1 Issue No. 1 Series of 2024',
    frontCover: '/emagazines/maiden-issue-front.png',
    backCover: '/emagazines/maiden-issue-back.png',
    downloadUrl: '/emagazines/maiden-issue-2024.pdf',
    downloadFilename: 'THE PHILCAD MAIDEN ISSUE 2024.pdf',
  },
  {
    id: 'issue-2',
    title: 'The Phil-cad Second Issue',
    subtitle: 'Issue No. 2 Series of 2024',
    frontCover: '/emagazines/issue-2-front.webp',
    backCover: '/emagazines/issue-2-back.webp',
    downloadUrl: '/emagazines/issue-2.pdf',
    downloadFilename: 'THE-PHILCAD_2nd-Issue.pdf',
  },
  {
    id: 'issue-3',
    title: 'The Phil-cad Third Issue',
    subtitle: 'Issue No. 3 Series of 2024',
    frontCover: '/emagazines/issue-3-front.webp',
    backCover: '/emagazines/issue-3-back.webp',
    downloadUrl: '/emagazines/issue-3.pdf',
    downloadFilename: 'Phil-cad-3rd-Issue-Magazine.pdf',
  },
  {
    id: 'issue-4',
    title: 'The Phil-cad Fourth Issue',
    subtitle: 'Issue No. 4 Series of 2024',
    frontCover: '/emagazines/issue-4-front.webp',
    backCover: '/emagazines/issue-4-back.webp',
    downloadUrl: null,
    downloadFilename: null,
  },
  {
    id: 'issue-5',
    title: 'INTERNATIONAL QUARTERLY MAGAZINE',
    subtitle: 'Issue No. 1 Series of 2025',
    frontCover: '/emagazines/issue-5-front.webp',
    backCover: '/emagazines/issue-5-back.webp',
    downloadUrl: '/emagazines/issue-5.pdf',
    downloadFilename: 'Volume-2-Issue-No-1-Series-of-2025.pdf',
  },
  {
    id: 'issue-6',
    title: 'INTERNATIONAL QUARTERLY MAGAZINE',
    subtitle: 'Volume 2 Issue No. 2 Series of 2025',
    frontCover: '/emagazines/issue-6-front.webp',
    backCover: '/emagazines/issue-6-back.webp',
    downloadUrl: '/emagazines/issue-6.pdf',
    downloadFilename: 'Volume-2-Issue-No-2-Series-of-2025.pdf',
  },
  {
    id: 'issue-7',
    title: 'THE PHILCAD MAGAZINE',
    subtitle: 'Volume 2 Issue No. 3 Series of 2025',
    frontCover: '/emagazines/issue-7-front.png',
    backCover: '/emagazines/issue-7-back.png',
    downloadUrl: '/emagazines/issue-7.pdf',
    downloadFilename: 'Volume-2-Issue-No-3-Series-of-2025.pdf',
  },
]

const BOOKS = [
  { id: 'book-1', title: 'CONTEMPORARY PHILIPPINE ARTS FROM THE REGIONS', titleLine2: 'For Senior High School', subtitle: 'Issue No. 1 Series of 2024', frontCover: '/books/book-1-front.png', backCover: '/books/book-1-back.png', downloadUrl: '/books/book-1.pdf', downloadFilename: 'Contemporary-Philippine-Arts.pdf' },
  { id: 'book-2', title: 'STRATEGIC INTERVENTION MATERIAL BRAIN AT WORK SCIENCE 4', subtitle: 'Issue No. 1 Series of 2024', frontCover: '/books/book-2-front.webp', backCover: '/books/book-2-back.webp', downloadUrl: '/books/book-2.pdf', downloadFilename: 'SIM-BOOK-TYPE.pdf' },
  { id: 'book-3', title: 'SI PRINSESA AYA', subtitle: 'Issue No. 1 Series of 2024', frontCover: '/books/book-3-front.webp', backCover: '/books/book-3-back.webp', downloadUrl: '/books/book-3.pdf', downloadFilename: 'Si-Prinsesa-Aya.pdf' },
  { id: 'book-4', title: 'ANG NAKATAGONG KAYAMANAN NG BARRIO KAWAYAN', subtitle: 'Issue No. 1 Series of 2024', frontCover: '/books/book-4-front.webp', backCover: '/books/book-4-back.webp', downloadUrl: '/books/book-4.pdf', downloadFilename: 'Ang-Nakatagong-Kayamanan-ng-Barrio-Kawayan.pdf' },
  { id: 'book-5', title: 'ALGEBRA MADE EASY', subtitle: 'Issue No. 1 Series of 2025', frontCover: '/books/book-5-front.webp', backCover: '/books/book-5-back.webp', downloadUrl: '/books/book-5.pdf', downloadFilename: 'ALGEBRA-MADE-EASY.pdf' },
  { id: 'book-6', title: 'STRATEGIC INTERVENTION MATERIAL IN SCIENCE AND HEALTH 5', subtitle: 'Issue No. 1 Series of 2025', frontCover: '/books/book-6-front.webp', backCover: '/books/book-6-back.webp', downloadUrl: '/books/book-6.pdf', downloadFilename: 'SIM-Science-Health-5.pdf' },
  { id: 'book-7', title: 'SCI-KICK SCIENCE', subtitle: 'Issue No. 1 Series of 2025', frontCover: '/books/book-7-front.webp', backCover: '/books/book-7-back.webp', downloadUrl: '/books/book-7.pdf', downloadFilename: 'SCI-KICK-SIM.pdf' },
  { id: 'book-8', title: 'COMMUNICATING EFFECTIVELY IN ENGLISH', titleLine2: 'TEACHING THE FUTURE CALL CENTER AGENTS PART 1', subtitle: 'Issue No. 1 Series of 2025', frontCover: '/books/book-8-front.webp', backCover: '/books/book-8-back.webp', downloadUrl: null, downloadFilename: null },
  { id: 'book-9', title: 'SIMPLIFIED IMRAD FORMAT', titleLine2: 'A BEGINNER\'S GUIDE TO RESEARCH WRITING', subtitle: 'Issue No. 1 Series of 2025', frontCover: '/books/book-9-front.webp', backCover: '/books/book-9-back.webp', downloadUrl: null, downloadFilename: null },
  { id: 'book-10', title: 'SCIENCE, TECHNOLOGY AND SOCIETY', subtitle: 'Issue No. 1 Series of 2025', frontCover: '/books/book-10-front.webp', backCover: '/books/book-10-back.webp', downloadUrl: null, downloadFilename: null },
  { id: 'book-11', title: 'THE CONTEMPORARY WORLD', subtitle: 'Issue No. 1 Series of 2025', frontCover: '/books/book-11-front.webp', backCover: '/books/book-11-back.webp', downloadUrl: null, downloadFilename: null },
  { id: 'book-12', title: 'Software Applications and Network System', subtitle: 'Used in Seagoing Ships (Lecture)', frontCover: '/books/book-12-front.webp', backCover: '/books/book-12-back.webp', downloadUrl: '/books/book-12.pdf', downloadFilename: 'Software-Applications-and-Network-System-Seagoing-Ships.pdf' },
  { id: 'book-13', title: 'PATHWAYS TO PUBLICATION:', subtitle: 'A Comprehensive Guide for Researchers', frontCover: '/books/book-13-front.webp', backCover: '/books/book-13-back.webp', downloadUrl: '/books/book-13.pdf', downloadFilename: 'PATHWAYS-TO-PUBLICATION-2025.pdf' },
]

export default function PublicationPage() {
  return (
    <>
      <PageHero buttonLabel="Browse Publication" />
      <div className="flex-1 flex flex-col bg-[#f8f8f8]">
        <section className="relative z-10 py-16 flex-1">
        {/* E-Magazines - full-width background */}
        <div className="w-full bg-[#f8f8f8] py-10 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-charcoal mb-10">
              E-Magazines
            </h2>
            <div className="space-y-20">
              {EMAGAZINES.map((issue) => (
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
                  <p className="text-charcoal/80 text-base sm:text-lg mt-2">{issue.subtitle}</p>
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

        {/* Books - full-width background */}
        <div className="w-full bg-[#f8f8f8] py-10 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-charcoal mb-10">
              Books
            </h2>
            <div className="space-y-20">
              {BOOKS.map((book) => (
                <article
                  key={book.id}
                  className="flex flex-col items-center text-center w-full max-w-6xl mx-auto"
                >
                  <div className="flex flex-wrap justify-center gap-5 sm:gap-8 mb-8">
                    <img
                      src={book.frontCover}
                      alt={`${book.title} – front cover`}
                      className="w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[480px] rounded-lg shadow-lg object-cover"
                    />
                    {book.backCover && (
                      <img
                        src={book.backCover}
                        alt={`${book.title} – back cover`}
                        className="w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[480px] rounded-lg shadow-lg object-cover"
                      />
                    )}
                  </div>
                  {book.downloadUrl && (
                    <div className="w-full max-w-[720px] sm:max-w-[880px] lg:max-w-[1000px] mx-auto my-10">
                      <DearFlipViewer
                        pdfUrl={book.downloadUrl}
                        height={580}
                        options={{ pageMode: 2 }}
                      />
                    </div>
                  )}
                  <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-charcoal">
                    {book.title}
                  </h3>
                  {book.titleLine2 && (
                    <p className="text-charcoal/90 text-lg sm:text-xl mt-1.5 font-medium">
                      {book.titleLine2}
                    </p>
                  )}
                  <p className="text-charcoal/80 text-base sm:text-lg mt-2">{book.subtitle}</p>
                  {book.downloadUrl && (
                    <a
                      href={book.downloadUrl}
                      download={book.downloadFilename}
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
