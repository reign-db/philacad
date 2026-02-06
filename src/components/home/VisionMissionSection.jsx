import { motion } from 'framer-motion'
import { Heart, Sparkles, HandHelping } from 'lucide-react'

const coreValues = [
  { name: 'Passion', icon: Heart },
  { name: 'Produces', icon: Sparkles },
  { name: 'Services', icon: HandHelping },
]

export default function VisionMissionSection() {
  return (
    <section className="py-16 sm:py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans text-3xl lg:text-5xl font-bold text-white leading-tight text-center mb-12 uppercase"
        >
          Vision, Mission & Core Values
        </motion.h2>

        <div className="space-y-12">
          {/* Vision */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md border border-gray-200 p-6 sm:p-8"
          >
            <h3 className="font-sans text-xl font-bold text-gray-900 mb-3 uppercase">Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              Our vision is to cultivate a thriving community of intellectual exchange and in-depth creativity where individuals are empowered to share their insights, knowledge, and perspectives to advance academic discourse and societal progress through publications.
            </p>
          </motion.article>

          {/* Mission */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="bg-white rounded-xl shadow-md border border-gray-200 p-6 sm:p-8"
          >
            <h3 className="font-sans text-xl font-bold text-gray-900 mb-3 uppercase">Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to serve as a dynamic platform that promotes and undertakes the diverse creative and scholarly outputs of Professionals across various fields.
            </p>
          </motion.article>

          {/* Core Values */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl shadow-md border border-gray-200 p-6 sm:p-8"
          >
            <h3 className="font-sans text-xl font-bold text-gray-900 mb-6 uppercase">Core Values</h3>
            <ul className="space-y-4">
              {coreValues.map(({ name, icon: Icon }, i) => (
                <li
                  key={name}
                  className="flex items-center gap-4 text-gray-800"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-navy text-gold flex items-center justify-center">
                    <Icon className="w-5 h-5" strokeWidth={2} />
                  </span>
                  <span className="font-medium text-lg">{name}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
