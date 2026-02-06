import { motion } from 'framer-motion'
import aboutImage from '../../assets/images/about-image.png'

export default function AboutSection() {
  return (
    <section id="about-publishing" className="bg-[#F8F8F8] py-12 lg:py-16 px-6 sm:px-8 lg:px-12 scroll-mt-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row min-h-[480px] lg:min-h-[560px]">
        {/* Left column - Image */}
        <div className="lg:w-1/2 relative min-h-[320px] lg:min-h-0">
          <img
            src={aboutImage}
            alt="The PHIL-CAD Magazine - Philippine Academician"
            className="w-full h-full min-h-[320px] lg:min-h-[560px] object-cover object-center"
          />
        </div>

        {/* Right column - Content */}
        <div className="lg:w-1/2 flex flex-col justify-center p-10 sm:p-12 lg:p-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-3xl lg:text-5xl font-bold text-gray-900 leading-tight"
          >
            ABOUT THE
            <br />
            PUBLISHING
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-lg leading-relaxed text-gray-700 mt-8 space-y-6"
          >
            <p>
              The history of The Philippine Academician (PHIL-CAD) traces its roots to the year 2023 when a group of passionate academic writers, and professionals came together with a shared vision of creating a platform to promote and celebrate scholarly and creative endeavors across the Philippines. Recognizing the need for a space where professionals from diverse backgrounds could share their expertise and insights; the idea for PHIL-CAD was born and owned by Dr. Minsoware S. Bacolod.
            </p>
            <p>
              The PHIL-CAD is a dynamic publisher at the forefront of educational discourse, established on the month of January, 2024. Dedicated to the field of education, The PHIL-CAD Magazine serves as a vital platform for educators, professionals, and anyone who are passionate about writing and publication of creative works.
            </p>
            <p>
              With a commitment to excellence, The PHIL-CAD Magazine features thought-provoking articles, insightful analyses, and innovative practices that help shape the landscape of education in the Philippines and across the world. From discussions on pedagogical methodologies to explorations of emerging trends, each issue offers a comprehensive exploration of diverse topics relevant to education.
            </p>
            <p>
              Driven by a vision of fostering collaboration and knowledge-sharing, The PHIL-CAD Magazine invites contributions from educators and professional experts both locally and internationally. Whether it's sharing best practices, advocating for educational reform, or celebrating the achievements of educators, and provides a space for voices to be heard and ideas to be exchanged. As an authoritative resource in the field, The PHIL-CAD continues to inspire, inform, and empower educators worldwide. Join us! on this journey of discovery and transformation in the pursuit of educational excellence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
