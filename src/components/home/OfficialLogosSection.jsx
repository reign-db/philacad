import { motion } from 'framer-motion'
import logo1 from '../../assets/images/logo1.png'
import logo2 from '../../assets/images/logo2.png'
import logo3 from '../../assets/images/logo3.png'

const officialLogos = [
  { src: logo1, alt: 'The PHILCAD Philippine Academician Publisher' },
  { src: logo2, alt: 'PHILCAD Authors & Writers Circle Publisher' },
  { src: logo3, alt: 'The PHILCAD Philippine Academician Magazine' },
]

export default function OfficialLogosSection() {
  return (
    <section className="py-16 sm:py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans text-3xl lg:text-5xl font-bold text-gray-900 leading-tight text-center mb-12 uppercase"
        >
          Official Logos & Partners
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16"
        >
          {officialLogos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-60 w-auto sm:h-68 lg:h-76 object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
