import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import directorPortrait from '../../assets/images/director-portrait.png'

export default function DirectorMessage() {
  const [page, setPage] = useState(0)

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16">
          {/* Mobile: image first; Desktop: image + name/title left (40%) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-1 lg:w-[40%] flex flex-col items-center lg:items-start lg:pt-[3.5rem]"
          >
            <div className="relative w-full max-w-4xl">
              {/* Navy layered box behind image */}
              <div
                className="absolute top-4 left-4 w-full h-full rounded-tr-[4rem] rounded-bl-[4rem] bg-navy -z-10"
                aria-hidden
              />
              <img
                src={directorPortrait}
                alt="Dr. Minsoware S. Bacolod - Founder"
                className="w-full aspect-[3/4] object-cover shadow-lg relative"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 w-full max-w-4xl text-left"
            >
              <p className="font-serif text-xl sm:text-2xl font-bold text-navy">
                Dr. Minsoware S. Bacolod
              </p>
              <p className="text-gold-dark font-medium mt-0.5">
                Founder
              </p>
            </motion.div>
          </motion.div>

          {/* Desktop: About the Founder desc right (60%) */}
          <div className="flex flex-col order-2 lg:order-2 lg:w-[60%]">
            <motion.span
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-gold text-white text-xs font-semibold tracking-widest uppercase mb-6 w-fit"
            >
              THE FOUNDER
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="font-sans text-3xl lg:text-5xl font-bold text-gray-900 leading-tight uppercase mb-6"
            >
              About the Founder
            </motion.h2>

            <div className="space-y-4 text-gray-600 leading-relaxed relative min-h-[280px] sm:min-h-[260px]">
              <AnimatePresence mode="wait" initial={false}>
                {page === 0 ? (
                  <motion.div
                    key="page1"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 12 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <p>
                      Dr. Minsoware S. Bacolod graduated from Emilio Aguinaldo
                      College-Cavite in 2008 with a Bachelor of Secondary Education
                      major in History. At Philippine Christian University, he earned
                      his Master of Arts in Education specializing in Educational
                      Administration in 2021 and his Doctor of Education specializing
                      in Educational Management in 2023. He is currently pursuing his
                      Post-Doctoral Studies in Strategic Management and Leadership at
                      the same institution.
                    </p>
                    <p>
                      Following his graduation in 2008, Dr. Bacolod began his teaching
                      career as an Araling Panlipunan teacher at Immaculate Conception
                      Academy, where he also served as West Campus Student Government
                      adviser. He later joined Fiat Lux Academe, serving as a Junior
                      and Senior High School MAPEH faculty member, club adviser, and
                      subject coordinator from 2010 to 2018.
                    </p>
                    <p>
                      His exceptional performance and commitment to the profession
                      earned him recognition as an &quot;Outstanding Teacher&quot;. He
                      has held positions as a part-time instructor at Philippine
                      Christian University and PNTC Colleges in Dasmariñas City,
                      Cavite.
                    </p>
                    <p>
                      Currently, he serves as Full-time Assistant Professor 4, Social
                      Sciences Cluster Head, Nationalian Coordinator, and a member of
                      the Internal Quality Auditor Team at National University—Mall of
                      Asia in Pasay City, teaching a variety of Social Sciences
                      courses. Dr. Bacolod is a published and registered author-writer
                      at the National Book Development Board of the Philippines and
                      various publishing platforms.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="page2"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="pt-2">
                      <p className="font-semibold text-navy mb-2">
                        Authored and co-authored works:
                      </p>
                      <ul className="space-y-1 text-sm sm:text-base text-gray-600 list-disc list-inside marker:text-gold">
                        <li>Readings in Philippine History</li>
                        <li>Ethics</li>
                        <li>Gender and Society</li>
                        <li>Art Appreciation, 2nd Edition</li>
                        <li>Understanding the Self</li>
                        <li>Life and Works of Jose P. Rizal</li>
                        <li>The Contemporary World</li>
                        <li>Politics and Governance with Philippine Constitution</li>
                        <li>Philippine Politics and Governance with 1987 Philippine Constitution</li>
                        <li>The Educators In The 21st Century: Resilience and Understanding Your Purpose</li>
                        <li>The Transformational Leaders of the 21st Century</li>
                        <li>The EduHeart Magazine, Maiden Issue (Magazine, printed &amp; e-copy)</li>
                        <li>Good Governance, Social Science, Business, Management and Public Administration (Magazine, e-copy)</li>
                      </ul>
                    </div>

                    <p>
                      Dr. Bacolod&apos;s excellence extends beyond the classroom. He
                      is a sought-after speaker and research panelist, participating
                      in numerous training sessions, seminars, and workshops locally
                      and internationally, and his expertise has positively impacted
                      various disciplines.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-center gap-4 mt-6 pt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setPage(0)}
                className={`p-1.5 rounded transition-colors ${page === 0 ? 'text-gray-300 cursor-default' : 'text-gray-400 hover:text-gray-600'}`}
                disabled={page === 0}
                aria-label="Previous"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="text-xs text-gray-400 tabular-nums">
                {page + 1} / 2
              </span>
              <button
                type="button"
                onClick={() => setPage(1)}
                className={`p-1.5 rounded transition-colors ${page === 1 ? 'text-gray-300 cursor-default' : 'text-gray-400 hover:text-gray-600'}`}
                disabled={page === 1}
                aria-label="Next"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
