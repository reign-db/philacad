import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import PublicationPage from './pages/PublicationPage'
import JournalPage from './pages/JournalPage'
import EventsPage from './pages/EventsPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/publication" element={<PublicationPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  )
}

export default App
