import { motion } from 'framer-motion'
import { Eye, Target, Award, Heart, Sparkles, HandHelping } from 'lucide-react'

const coreValues = [
  { name: 'Passion', icon: Heart },
  { name: 'Produces', icon: Sparkles },
  { name: 'Services', icon: HandHelping },
]

const cards = [
  {
    title: 'VISION',
    content:
      'Our vision is to cultivate a thriving community of intellectual exchange and in-depth creativity where individuals are empowered to share their insights, knowledge, and perspectives to advance academic discourse and societal progress through publications.',
    icon: Eye,
  },
  {
    title: 'MISSION',
    content:
      'Our mission is to serve as a dynamic platform that promotes and undertakes the diverse creative and scholarly outputs of Professionals across various fields.',
    icon: Target,
  },
  {
    title: 'CORE VALUES',
    icon: Award,
    isCoreValues: true,
  },
]

export default function VisionMission() {
  return (
    <section className="py-16 sm:py-20 bg-[linear-gradient(135deg,#2d5a8a_0%,#1e3a5f_50%,#152a47_100%)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans text-3xl lg:text-5xl font-bold text-white leading-tight text-center mb-4 uppercase"
        >
          Vision, Mission & Core Values
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center text-sm sm:text-base max-w-xl mx-auto mb-12"
        >
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1"
            >
              {/* Unified accent bar + icon row */}
              <div className="flex items-center gap-4 p-6 sm:p-6 border-b border-gray-200 bg-white">
                <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-navy text-gold flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <card.icon className="w-6 h-6" strokeWidth={2} />
                </span>
                <h3 className="font-sans text-lg font-bold text-gray-900 tracking-tight uppercase">
                  {card.title}
                </h3>
              </div>

              <div className="p-6 sm:p-6 pt-4 flex flex-col min-h-[200px]">
                {card.isCoreValues ? (
                  <ul className="space-y-4">
                    {coreValues.map(({ name, icon: Icon }) => (
                      <li
                        key={name}
                        className="flex items-center gap-3 text-gray-800"
                      >
                        <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/20 text-navy flex items-center justify-center">
                          <Icon className="w-5 h-5" strokeWidth={2} />
                        </span>
                        <span className="font-semibold text-gray-800">{name}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {card.content}
                  </p>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
