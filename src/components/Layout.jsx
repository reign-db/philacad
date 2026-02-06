import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  const { pathname } = useLocation()
  const isLandingPage = pathname === '/' || pathname === '/publication' || pathname === '/journal' || pathname === '/events'

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Landing page pattern animation: extends from top of viewport (behind nav) through hero */}
      {isLandingPage && (
        <div
          className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
          aria-hidden
          style={{ backgroundColor: '#f8f8f8', height: '100vh' }}
        >
          <div
            className="absolute w-full h-[60%] landing-gradient-band"
            style={{
              transform: 'rotate(-12deg) scale(2) translateY(-30%)'
            }}
          />
        </div>
      )}
      <Navbar />
      <main className="flex-1 pt-24 relative z-10 flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  )
}
