import { useState, useEffect } from 'react'
import './index.css'
import Sidebar from './components/Sidebar'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'

export type PageType = 'home' | 'about' | 'products' | 'contact'

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const navigate = (page: PageType) => {
    setCurrentPage(page)
    if (isMobile) setSidebarOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage onNavigate={navigate} />
      case 'about': return <AboutPage onNavigate={navigate} />
      case 'products': return <ProductsPage onNavigate={navigate} />
      case 'contact': return <ContactPage onNavigate={navigate} />
      default: return <HomePage onNavigate={navigate} />
    }
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Mobile overlay */}
      {isMobile && sidebarOpen && (
        <div
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
            zIndex: 99
          }}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar
        currentPage={currentPage}
        onNavigate={navigate}
        isOpen={sidebarOpen || !isMobile}
        isMobile={isMobile}
      />

      {/* Mobile top bar */}
      {isMobile && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          height: '60px', background: '#0f4c81', zIndex: 98,
          display: 'flex', alignItems: 'center', padding: '0 16px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
        }}>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer', marginRight: '12px' }}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
          <span style={{ color: 'white', fontWeight: 600, fontSize: '16px' }}>辰月数据科技</span>
        </div>
      )}

      {/* Main content */}
      <div className="main-content" style={{ flex: 1, paddingTop: isMobile ? '60px' : 0 }}>
        {renderPage()}
      </div>
    </div>
  )
}

export default App
