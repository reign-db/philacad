import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Building2, FileCheck, MessageCircle } from 'lucide-react'

const ADDRESS = 'Block 20 Lot 7, Purok Rosal, Brgy. Datu Esmael-H1 Dasmariñas City, Cavite Philippines'
const PHONE = '0927-7753-471'
const EMAIL = 'filcad2023@gmail.com'
const BUSINESS_NO = '5843823'
const FACEBOOK_PAGE_URL = 'https://www.facebook.com/people/Philcad-Academician-Publishing/61556235612405/'

const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50/80 to-white pt-24 pb-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl sm:text-4xl lg:text-[2.5rem] font-semibold text-charcoal text-center mb-12 lg:mb-16"
        >
          How would you like to contact us?
        </motion.h1>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Left column: Business details card */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/80 border border-gray-100 p-6 sm:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-navy/10 flex items-center justify-center">
                  <Building2 className="text-navy" size={22} />
                </div>
                <h2 className="font-serif text-xl font-semibold text-charcoal">
                  PHIL-CAD Academician Publishing
                </h2>
              </div>
              <p className="text-sm font-medium text-charcoal/70 uppercase tracking-wider mb-4">
                Full business details
              </p>
              <ul className="space-y-4 text-charcoal/90">
                <motion.li variants={item} className="flex gap-3">
                  <MapPin className="text-navy shrink-0 mt-0.5" size={18} />
                  <span className="text-sm leading-relaxed">{ADDRESS}</span>
                </motion.li>
                <motion.li variants={item} className="flex gap-3">
                  <Phone className="text-navy shrink-0 mt-0.5" size={18} />
                  <a href={`tel:${PHONE.replace(/-/g, '')}`} className="text-sm hover:text-navy transition-colors">
                    {PHONE}
                  </a>
                </motion.li>
                <motion.li variants={item} className="flex gap-3">
                  <Mail className="text-navy shrink-0 mt-0.5" size={18} />
                  <a href={`mailto:${EMAIL}`} className="text-sm hover:text-navy transition-colors break-all">
                    {EMAIL}
                  </a>
                </motion.li>
                <motion.li variants={item} className="flex gap-3">
                  <FileCheck className="text-navy shrink-0 mt-0.5" size={18} />
                  <span className="text-sm">Business Name No. {BUSINESS_NO}</span>
                </motion.li>
                <motion.li variants={item}>
                  <span className="inline-block text-xs font-semibold text-navy bg-navy/10 px-3 py-1.5 rounded-full">
                    DTI & BIR Registered
                  </span>
                </motion.li>
              </ul>
            </div>
          </motion.div>

          {/* Right column: Message us + The PHIL-CAD card */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-3 space-y-6"
          >
            {/* Message us - Facebook */}
            <motion.div
              variants={item}
              className="bg-white rounded-2xl shadow-lg shadow-gray-200/80 border border-gray-100 p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#1877F2]/10 flex items-center justify-center">
                  <MessageCircle className="text-[#1877F2]" size={22} />
                </div>
                <h3 className="font-serif text-lg font-semibold text-charcoal">
                  Message us.
                </h3>
              </div>
              <p className="text-charcoal/90 text-sm mb-4">
                Reach us on Facebook. We'll get back to you as soon as we can.
              </p>
              <a
                href={FACEBOOK_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1877F2] text-white text-sm font-medium px-6 py-3 hover:bg-[#166FE5] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
                Open Facebook Page
              </a>
            </motion.div>

            {/* The PHIL-CAD Philippine Academician */}
            <motion.div
              variants={item}
              className="bg-white rounded-2xl shadow-lg shadow-gray-200/80 border border-gray-100 p-6 sm:p-8"
            >
              <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">
                The PHIL-CAD Philippine Academician
              </h3>
              <p className="text-charcoal/80 text-sm mb-3">{ADDRESS}</p>
              <p className="text-sm text-charcoal/90">
                Contact Number: <a href={`tel:${PHONE.replace(/-/g, '')}`} className="text-navy hover:underline">{PHONE}</a>
                <br />
                Email: <a href={`mailto:${EMAIL}`} className="text-navy hover:underline break-all">{EMAIL}</a>
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Map section - pinned to address */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-12 lg:mt-16"
        >
          <h2 className="font-serif text-xl sm:text-2xl font-semibold text-charcoal mb-4">
            Find us
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100">
            <iframe
              title="PHIL-CAD location map"
              src={MAP_EMBED_URL}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
          <p className="mt-3 text-sm text-charcoal/70">
            {ADDRESS}
          </p>
        </motion.section>
      </div>
    </div>
  )
}
