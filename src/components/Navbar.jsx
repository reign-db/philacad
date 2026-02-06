import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Navigation links for the landing page.
 * Hover animations use underline slide-in effect.
 */
const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/publication', label: 'Publication' },
  { to: '/journal', label: 'Journal' },
  { to: '/events', label: 'Events & Accomplishments' },
]

/**
 * Navbar with sticky, transparent-to-white scroll behavior.
 * Logo on far left, nav links on right with underline slide-in hover.
 */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isTransparent = !scrolled

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isTransparent ? '' : 'bg-white shadow-sm'
      }`}
      style={isTransparent ? { backgroundColor: 'transparent' } : undefined}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 lg:py-6 min-h-[3rem]">
        {/* Logo - far left */}
        <NavLink to="/" className="flex items-center shrink-0 z-10">
          <img
            src="/logo-philcad.png"
            alt="Phil-cad Academician Publishing"
            className="h-10 w-auto object-contain sm:h-11 md:h-12 lg:h-14"
          />
        </NavLink>

        {/* Desktop nav links - right side with underline hover */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `relative text-sm font-medium text-charcoal transition-colors duration-200 group py-1 ${
                    isActive ? 'text-navy' : 'hover:text-navy'
                  }`
                }
                onClick={() => setMobileOpen(false)}
              >
                {label}
                {/* Underline slide-in on hover */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy transition-all duration-300 group-hover:w-full" />
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right: CTA (desktop only) */}
        <div className="hidden md:block">
          <NavLink
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-navy text-white text-sm font-medium px-6 py-2.5 hover:bg-navy-dark transition-colors duration-200"
          >
            Contact Us
          </NavLink>
        </div>

        {/* Mobile: Hamburger */}
        <button
          type="button"
          className={`md:hidden p-2 rounded-lg transition-colors z-10 ${
            isTransparent ? 'text-charcoal hover:bg-white/20' : 'text-charcoal hover:bg-gray-100'
          }`}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <ul className="flex flex-col py-4 px-4 gap-1">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-md text-charcoal font-medium transition-colors ${
                        isActive ? 'bg-navy/5 text-navy' : 'hover:bg-gray-50'
                      }`
                    }
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
              <li className="mt-2 pt-2 border-t border-gray-100">
                <NavLink
                  to="/contact"
                  className="flex items-center justify-center w-full rounded-full bg-navy text-white text-sm font-medium px-6 py-3 hover:bg-navy-dark transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
