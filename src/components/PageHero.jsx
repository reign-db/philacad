import { motion } from 'framer-motion'

const DEFAULT_TITLE = 'Phil-cad Academician Publishing'
const DEFAULT_SUBTITLE = 'Illuminating Ideas, Empowering Minds'

/**
 * Reusable landing hero for inner pages (Publication, Journal, Events).
 * Same layout as home HeroSection; optional title/subtitle, optional button.
 */
export default function PageHero({ title = DEFAULT_TITLE, subtitle = DEFAULT_SUBTITLE, buttonLabel }) {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 lg:pt-8 lg:pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ========== LEFT: Typography Section ========== */}
          <div className="order-2 lg:order-1 flex flex-col justify-center text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-charcoal leading-[1.1] tracking-tight"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-lg sm:text-xl text-charcoal/80 font-light tracking-wide"
            >
              {subtitle}
            </motion.p>

            {buttonLabel && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start"
              >
                <span
                  className="inline-flex items-center justify-center rounded-full border-2 border-charcoal/30 text-charcoal font-medium px-8 py-4 text-base bg-transparent cursor-default"
                  aria-current="page"
                >
                  {buttonLabel}
                </span>
              </motion.div>
            )}
          </div>

          {/* ========== RIGHT: Logo ========== */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-md lg:max-w-xl flex justify-center items-center"
            >
              <motion.img
                src="/logo-philcad.png"
                alt="Phil-cad Academician Publishing"
                className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] xl:max-w-[480px] h-auto object-contain drop-shadow-[0_12px_40px_rgba(26,26,26,0.12)]"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -12, 0]
                }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.3 },
                  scale: { duration: 0.5, delay: 0.25 },
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut'
                  }
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
