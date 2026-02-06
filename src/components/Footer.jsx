import { useState } from 'react'
import { Facebook, Mail } from 'lucide-react'

const currentYear = new Date().getFullYear()
const EMAIL = 'filcad2023@gmail.com'

export default function Footer() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async (e) => {
    e.preventDefault()
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <footer className="relative z-10 bg-white text-gray-800 mt-auto border-t border-gray-200 shadow-[0_-1px_0_0_rgba(0,0,0,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <img
              src="/logo-philcad.png"
              alt="Phil-Cad Academician Publishing"
              className="h-14 w-auto min-h-[48px] max-h-16 object-contain object-center block opacity-100"
            />
            <p className="text-sm text-gray-600">
              © {currentYear} The Phil-Cad Philippine Academician. All rights reserved.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="https://www.facebook.com/people/Philcad-Academician-Publishing/61556235612405/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-gray-200 hover:bg-gray-300 text-navy hover:text-navy-dark transition-colors shrink-0 inline-flex items-center justify-center border border-gray-300/80"
              aria-label="Facebook"
            >
              <Facebook size={24} strokeWidth={2} className="shrink-0 text-navy" stroke="currentColor" />
            </a>
            <div className="relative">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2.5 rounded-full bg-gray-200 hover:bg-gray-300 text-navy hover:text-navy-dark transition-colors shrink-0 inline-flex items-center justify-center border border-gray-300/80"
                aria-label="Copy email"
              >
                <Mail size={24} strokeWidth={2} className="shrink-0 text-navy" stroke="currentColor" />
              </button>
              {copied && (
                <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-navy text-white text-sm font-medium rounded-md whitespace-nowrap shadow-lg">
                  Email Copied!
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
