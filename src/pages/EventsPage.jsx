import { useState } from 'react'
import PageHero from '../components/PageHero'

const EVENTS = [
  {
    id: 'event-1',
    date: 'February 26, 2024',
    location: 'Pambansang Aklatan ng Pilipinas',
    title: 'THE PHIL-CAD PHILIPPINE ACADEMIAN-MAGAZINE',
    subtitle: 'Volume No. 1 Issue No. 1 Series of 2024',
    description:
      'The PHIL-CAD Philippine Academician founded under the name of Dr. Minsoware Sarip Bacolod has already submitted the magazine, Volume No. 1 Issue No. 1 Series of 2024, as required by ISSN guidelines. We would like to express our sincerest gratitude to the National Library of the Philippines for accommodating us and likewise Congratulations to our Articles- Contributors and Members of the Editorial Board headed by the Editor In Chief and Head- Consultant, Dr. Christian Simeon Castillo for this inaugural issue.',
    images: ['/events/event-1/1.webp', '/events/event-1/2.webp', '/events/event-1/3.webp', '/events/event-1/4.webp'],
  },
  {
    id: 'event-2',
    date: 'June 03, 2024',
    location: 'Pambansang Aklatan ng Pilipinas',
    title: 'THE PHIL-CAD PHILIPPINE ACADEMIAN-MAGAZINE',
    subtitle: 'Volume No. 1 Issue No. 2 Series of 2024',
    description:
      'The Phil-cad Academician Publishing, founded under the name of Dr. Minsoware S. Bacolod has already submitted the magazine, Volume No. 1 Issue No. 2 Series of 2024, as required by ISSN guidelines. We would like to express our sincerest gratitude to the National Library of the Philippines for accommodating us and likewise Congratulations to our Articles- Contributors and Members of the Editorial Board for this inaugural issue.',
    images: ['/events/event-2/1.webp', '/events/event-2/2.webp', '/events/event-2/3.webp', '/events/event-2/4.webp'],
  },
]

export default function EventsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const event = EVENTS[currentIndex]
  const canGoPrev = currentIndex > 0
  const canGoNext = currentIndex < EVENTS.length - 1

  return (
    <>
      <PageHero
        title="Events and Accomplishments"
        subtitle="Discover the key moments and achievements that define our journey and inspire future successes."
      />

      <section className="relative z-10 bg-[#f8f8f8] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Event card - single event in view */}
          <article className="bg-white rounded-xl shadow-sm border border-charcoal/5 overflow-hidden">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="mb-4">
                <time className="text-sm font-medium text-charcoal/70 tracking-wide uppercase">
                  {event.date}
                </time>
                <p className="mt-1 text-charcoal/80 font-light">{event.location}</p>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal tracking-tight">
                {event.title}
              </h2>
              <p className="mt-1 text-lg text-charcoal/80 font-medium">{event.subtitle}</p>
              <p className="mt-6 text-charcoal/80 leading-relaxed max-w-3xl">
                {event.description}
              </p>

              {/* Image grid */}
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {event.images.map((src, i) => (
                  <div
                    key={i}
                    className="aspect-[3/4] rounded-lg overflow-hidden bg-charcoal/5 shadow-sm"
                  >
                    <img
                      src={src}
                      alt={`${event.title} — Image ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Previous / Next navigation */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
              disabled={!canGoPrev}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border-2 border-charcoal/30 text-charcoal font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-charcoal/5 hover:border-charcoal/50 focus:outline-none focus:ring-2 focus:ring-charcoal/30 focus:ring-offset-2 transition-colors"
              aria-label="Previous event"
            >
              <span aria-hidden>←</span> Back
            </button>

            <span className="text-sm text-charcoal/70 font-medium">
              Event {currentIndex + 1} of {EVENTS.length}
            </span>

            <button
              type="button"
              onClick={() => setCurrentIndex((i) => Math.min(EVENTS.length - 1, i + 1))}
              disabled={!canGoNext}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border-2 border-charcoal/30 text-charcoal font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-charcoal/5 hover:border-charcoal/50 focus:outline-none focus:ring-2 focus:ring-charcoal/30 focus:ring-offset-2 transition-colors"
              aria-label="Next event"
            >
              Next <span aria-hidden>→</span>
            </button>
          </div>

          {/* Dot indicators */}
          <div className="mt-4 flex justify-center gap-2">
            {EVENTS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                className={`h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-charcoal/30 focus:ring-offset-2 ${
                  i === currentIndex
                    ? 'w-8 bg-charcoal'
                    : 'w-2.5 bg-charcoal/30 hover:bg-charcoal/50'
                }`}
                aria-label={`Go to event ${i + 1}`}
                aria-current={i === currentIndex ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CALL FOR ARTICLES section */}
      <section className="relative z-10 bg-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-charcoal tracking-tight text-center">
            Call for Articles
          </h2>
        </div>
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 space-y-4 sm:space-y-6">
          <div className="w-full">
            <img
              src="/call-for-articles/call-1.png"
              alt="Call for Site Coordinators — PHIL-CAD Academician Publishing"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-full">
            <img
              src="/call-for-articles/call-2.png"
              alt="Call for Articles — Volume I Issue No. 3 Series of 2024"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-full">
            <img
              src="/call-for-articles/call-3.png"
              alt="Call for Reviewers — PHIL-CAD Academician Publishing"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>
    </>
  )
}
