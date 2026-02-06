import { motion } from 'framer-motion'
import editorInChiefImage from '../../assets/images/editor-in-chief.png'
import associateEditorImage from '../../assets/images/associate-editor.png'
import reviewer1 from '../../assets/images/reviewer-1.webp'
import reviewer2 from '../../assets/images/reviewer-2.webp'
import reviewer3 from '../../assets/images/reviewer-3.webp'
import reviewer4 from '../../assets/images/reviewer-4.webp'
import reviewer5 from '../../assets/images/reviewer-5.webp'
import reviewer6 from '../../assets/images/reviewer-6.webp'
import reviewer7 from '../../assets/images/reviewer-7.webp'
import reviewer8 from '../../assets/images/reviewer-8.webp'
import reviewer9 from '../../assets/images/reviewer-9.webp'
import reviewer10 from '../../assets/images/reviewer-10.webp'
import reviewer11 from '../../assets/images/reviewer-11.webp'
import reviewer12 from '../../assets/images/reviewer-12.webp'
import reviewer13 from '../../assets/images/reviewer-13.webp'
import reviewer14 from '../../assets/images/reviewer-14.webp'
import reviewer15 from '../../assets/images/reviewer-15.webp'
import reviewer16 from '../../assets/images/reviewer-16.webp'
import reviewer17 from '../../assets/images/reviewer-17.webp'
import consultant1 from '../../assets/images/consultant-1.webp'
import consultant2 from '../../assets/images/consultant-2.webp'
import consultant3 from '../../assets/images/consultant-3.webp'
import consultant4 from '../../assets/images/consultant-4.webp'
import consultant5 from '../../assets/images/consultant-5.webp'
import consultant6 from '../../assets/images/consultant-6.webp'
import consultant7 from '../../assets/images/consultant-7.webp'
import consultant8 from '../../assets/images/consultant-8.webp'
import consultant9 from '../../assets/images/consultant-9.webp'
import consultant10 from '../../assets/images/consultant-10.webp'
import consultant11 from '../../assets/images/consultant-11.webp'
import consultant12 from '../../assets/images/consultant-12.webp'
import consultant13 from '../../assets/images/consultant-13.webp'
import consultant14 from '../../assets/images/consultant-14.webp'
import consultant15 from '../../assets/images/consultant-15.webp'
import consultant16 from '../../assets/images/consultant-16.webp'
import siteCoordinator1 from '../../assets/images/site-coordinator-1.webp'
import siteCoordinator2 from '../../assets/images/site-coordinator-2.webp'
import siteCoordinator3 from '../../assets/images/site-coordinator-3.webp'
import siteCoordinator4 from '../../assets/images/site-coordinator-4.webp'
import siteCoordinator5 from '../../assets/images/site-coordinator-5.webp'
import siteCoordinator6 from '../../assets/images/site-coordinator-6.webp'
import siteCoordinator7 from '../../assets/images/site-coordinator-7.webp'
import siteCoordinator8 from '../../assets/images/site-coordinator-8.webp'
import siteCoordinator9 from '../../assets/images/site-coordinator-9.webp'
import siteCoordinator10 from '../../assets/images/site-coordinator-10.webp'
import siteCoordinator11 from '../../assets/images/site-coordinator-11.webp'
import siteCoordinator12 from '../../assets/images/site-coordinator-12.webp'
import siteCoordinator13 from '../../assets/images/site-coordinator-13.webp'
import siteCoordinator14 from '../../assets/images/site-coordinator-14.webp'
import siteCoordinator15 from '../../assets/images/site-coordinator-15.webp'
import publishingStaff1 from '../../assets/images/publishing-staff-1.webp'
import publishingStaff2 from '../../assets/images/publishing-staff-2.webp'
import publishingStaff3 from '../../assets/images/publishing-staff-3.webp'
import publishingStaff4 from '../../assets/images/publishing-staff-4.webp'
import publishingStaff5 from '../../assets/images/publishing-staff-5.webp'

const editorInChief = {
  id: 1,
  name: 'Dr. Clara Vanessa C. De Castro',
  role: 'Editor-In-Chief',
  image: editorInChiefImage,
}

const associateEditor = {
  id: 2,
  name: 'Dr. Markrinello M. Sarical',
  role: 'Associate Editor',
  image: associateEditorImage,
}

const reviewers = [
  { id: 1, name: 'Dr. Francia Formalejo Murao', role: 'PHIL-CAD Reviewer', image: reviewer1 },
  { id: 2, name: 'Dr. Ricky S. De Leon, LPT, MAED, PDSML (c)', role: 'PHIL-CAD Reviewer', image: reviewer2 },
  { id: 3, name: 'Sheela Anne C. Maraan, LPT, MAED, PhD (c)', role: 'PHIL-CAD Reviewer', image: reviewer3 },
  { id: 4, name: 'Dindo R. Aseron, LPT, MAED, PhD (c)', role: 'PHIL-CAD Reviewer', image: reviewer4 },
  { id: 5, name: 'May Acob-Marcelo, LPT, MAED, PhD (c)', role: 'PHIL-CAD Reviewer', image: reviewer5 },
  { id: 6, name: 'Norvin M. Palma, LPT, REB, CPME, MBA', role: 'PHIL-CAD Reviewer', image: reviewer6 },
  { id: 7, name: 'Mark Anthony H. Tampol, LPT, MAED (c)', role: 'PHIL-CAD Reviewer', image: reviewer7 },
  { id: 8, name: 'Amein A. Umpa', role: 'PHIL-CAD Reviewer', image: reviewer8 },
  { id: 9, name: 'Dr. Zenaida D. Calumpang', role: 'PHIL-CAD Reviewer', image: reviewer9 },
  { id: 10, name: 'Rubie Anne M. Barnedo, LPT', role: 'PHIL-CAD Reviewer', image: reviewer10 },
  { id: 11, name: 'Prof. Adrian Eusyle V. Gutoman', role: 'PHIL-CAD Reviewer', image: reviewer11 },
  { id: 12, name: 'Prof. Glen B. Millar, CSR, MAED', role: 'PHIL-CAD Reviewer', image: reviewer12 },
  { id: 13, name: 'Bryan Jay P. Ortazo, LPT', role: 'PHIL-CAD Reviewer', image: reviewer13 },
  { id: 14, name: 'Dr. Resty Samosa', role: 'PHIL-CAD Reviewer', image: reviewer14 },
  { id: 15, name: 'Rizzalyn Vargas-Tamura, LPT', role: 'PHIL-CAD Reviewer', image: reviewer15 },
  { id: 16, name: 'Prof. Najera R. Umpar, LPT, MAED, EdD (Candidate)', role: 'PHIL-CAD Reviewer', image: reviewer16 },
  { id: 17, name: 'Kharll Lewis Quizon, RPm, CHRA', role: 'PHIL-CAD Reviewer', image: reviewer17 },
]

const consultants = [
  { id: 1, image: consultant1 },
  { id: 2, image: consultant2 },
  { id: 3, image: consultant3 },
  { id: 4, image: consultant4 },
  { id: 5, image: consultant5 },
  { id: 6, image: consultant6 },
  { id: 7, image: consultant7 },
  { id: 8, image: consultant8 },
  { id: 9, image: consultant9 },
  { id: 10, image: consultant10 },
  { id: 11, image: consultant11 },
  { id: 12, image: consultant12 },
  { id: 13, image: consultant13 },
  { id: 14, image: consultant14 },
  { id: 15, image: consultant15 },
  { id: 16, image: consultant16 },
]

const siteCoordinators = [
  { id: 1, image: siteCoordinator1 },
  { id: 2, image: siteCoordinator2 },
  { id: 3, image: siteCoordinator3 },
  { id: 4, image: siteCoordinator4 },
  { id: 5, image: siteCoordinator5 },
  { id: 6, image: siteCoordinator6 },
  { id: 7, image: siteCoordinator7 },
  { id: 8, image: siteCoordinator8 },
  { id: 9, image: siteCoordinator9 },
  { id: 10, image: siteCoordinator10 },
  { id: 11, image: siteCoordinator11 },
  { id: 12, image: siteCoordinator12 },
  { id: 13, image: siteCoordinator13 },
  { id: 14, image: siteCoordinator14 },
  { id: 15, image: siteCoordinator15 },
]

const publishingStaffs = [
  { id: 1, image: publishingStaff1 },
  { id: 2, image: publishingStaff2 },
  { id: 3, image: publishingStaff3 },
  { id: 4, image: publishingStaff4 },
  { id: 5, image: publishingStaff5 },
]

function EditorCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="flex flex-col items-center text-center"
    >
      <img
        src={member.image}
        alt={`${member.name} - ${member.role}`}
        className="w-full h-auto object-contain"
      />
      <h3 className="font-sans font-bold text-navy mt-3">{member.name}</h3>
      <p className="text-gold-dark text-sm font-medium mt-1">{member.role}</p>
    </motion.div>
  )
}

function ReviewerSlot({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03 }}
      className="flex flex-col items-center text-center"
    >
      {item?.image ? (
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-auto max-w-full object-contain min-h-[200px] sm:min-h-[260px] lg:min-h-[320px]"
        />
      ) : (
        <span className="text-gray-400 text-sm">Image</span>
      )}
      <p className="font-sans font-bold text-navy text-xs sm:text-sm leading-tight mt-3 sm:mt-4 whitespace-nowrap overflow-hidden text-ellipsis max-w-full" title={item.name}>{item.name}</p>
      <p className="text-gray-600 text-xs sm:text-sm font-medium mt-1">{item.role}</p>
    </motion.div>
  )
}

function ConsultantCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="flex flex-col items-center"
    >
      <div className="w-full flex items-center justify-center">
        {item?.image ? (
          <img
            src={item.image}
            alt={item.name || 'Consultant'}
            className="w-full h-auto object-contain"
          />
        ) : (
          <span className="text-gray-400 text-lg">Image</span>
        )}
      </div>
      {(item?.name || item?.role) && (
        <div className="mt-3 text-center">
          {item?.name && (
            <p className="font-sans font-bold text-navy text-xl sm:text-2xl leading-tight mb-1">
              {item.name}
            </p>
          )}
          {item?.role && (
            <p className="font-sans text-gold-dark font-medium text-base sm:text-lg">
              {item.role}
            </p>
          )}
        </div>
      )}
    </motion.div>
  )
}

function ImageSlot({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="rounded-xl overflow-hidden bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center min-h-[120px]"
    >
      {item?.image ? (
        <img
          src={item.image}
          alt=""
          className="w-full h-auto max-w-full object-contain"
        />
      ) : (
        <span className="text-gray-400 text-sm">Image</span>
      )}
    </motion.div>
  )
}

export default function EditorialBoardSection() {
  const consultantSlots = consultants.length > 0 ? consultants : [{ id: 'c1' }, { id: 'c2' }, { id: 'c3' }, { id: 'c4' }]
  const siteCoordinatorSlots = siteCoordinators.length > 0 ? siteCoordinators : [{ id: 'sc1' }, { id: 'sc2' }, { id: 'sc3' }, { id: 'sc4' }]
  const publishingStaffSlots = publishingStaffs.length > 0 ? publishingStaffs : [{ id: 'ps1' }, { id: 'ps2' }, { id: 'ps3' }, { id: 'ps4' }]

  return (
    <section className="py-16 sm:py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans text-3xl lg:text-5xl font-bold text-gray-900 leading-tight text-center mb-12 uppercase"
        >
          Editorial Board
        </motion.h2>

        {/* EIC and Associate Editor - next to each other */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          <EditorCard member={editorInChief} index={0} />
          <EditorCard member={associateEditor} index={1} />
        </div>
      </div>

      {/* Reviewers - edge-to-edge, same format as Consultants */}
      <div className="w-full px-2 sm:px-4 lg:px-6 py-12 sm:py-16 bg-gray-100">
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10 sm:mb-12 uppercase"
        >
          Reviewers
        </motion.h3>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {reviewers.map((item, i) => (
            <ReviewerSlot key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>

      {/* Consultants - edge-to-edge, 4 columns desktop, large rectangular portraits, no crop */}
      <div className="w-full px-2 sm:px-4 lg:px-6 py-12 sm:py-16 bg-gray-100">
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10 sm:mb-12 uppercase"
        >
          Consultants
        </motion.h3>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {consultantSlots.map((item, i) => (
            <ConsultantCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>

      {/* Site Coordinators - same as Consultants: full-width, 3 per row, no card */}
      <div className="w-full px-2 sm:px-4 lg:px-6 py-12 sm:py-16 bg-gray-100">
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10 sm:mb-12 uppercase"
        >
          Site Coordinators
        </motion.h3>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {siteCoordinatorSlots.map((item, i) => (
            <ConsultantCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>

      {/* Publishing Staffs - same as Consultants & Site Coordinators: full-width, 3 per row, no card */}
      <div className="w-full px-2 sm:px-4 lg:px-6 py-12 sm:py-16 bg-gray-100">
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10 sm:mb-12 uppercase"
        >
          Publishing Staffs
        </motion.h3>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {publishingStaffSlots.map((item, i) => (
            <ConsultantCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
