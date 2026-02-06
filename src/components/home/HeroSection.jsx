import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
// Background animation now handled with pure CSS (see index.css)

/**
 * Split Hero Section for Phil-cad Academician Publishing.
 * Left: Premium typography (Playfair Display + tagline).
 * Right: Floating glassmorphism composition with logo.
 */
export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden">
      {/* Background animation is now in Layout so it extends behind the navbar */}
      {/* Breathable whitespace layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 lg:pt-8 lg:pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ========== LEFT: Typography Section ========== */}
          <div className="order-2 lg:order-1 flex flex-col justify-center text-center lg:text-left">
            {/* Main title - Playfair Display for academic premium feel */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-charcoal leading-[1.1] tracking-tight"
            >
              Phil-cad Academician Publishing
            </motion.h1>

            {/* Tagline - elegant sans-serif */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-lg sm:text-xl text-charcoal/80 font-light tracking-wide"
            >
              Illuminating Ideas, Empowering Minds
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start"
            >
              <Link
                to="/#about-publishing"
                className="inline-flex items-center justify-center rounded-full bg-navy text-white font-medium px-8 py-4 text-base hover:bg-navy-dark transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
              >
                About Us
              </Link>
              <Link
                to="/publication"
                className="inline-flex items-center justify-center rounded-full border-2 border-charcoal/30 text-charcoal font-medium px-8 py-4 text-base hover:border-navy hover:text-navy bg-transparent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-navy/50 focus:ring-offset-2"
              >
                Browse Publications
              </Link>
            </motion.div>
          </div>

          {/* ========== RIGHT: Logo (no background, larger, animated) ========== */}
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
