import type { PageType } from '../App'

interface SidebarProps {
  currentPage: PageType
  onNavigate: (page: PageType) => void
  isOpen: boolean
  isMobile: boolean
}

const navItems = [
  {
    id: 'home' as PageType,
    label: '首页',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9,22 9,12 15,12 15,22"/>
      </svg>
    )
  },
  {
    id: 'about' as PageType,
    label: '关于我们',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
      </svg>
    )
  },
  {
    id: 'products' as PageType,
    label: '产品服务',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="3" width="7" height="7" rx="1"/>
        <rect x="15" y="3" width="7" height="7" rx="1"/>
        <rect x="2" y="14" width="7" height="7" rx="1"/>
        <rect x="15" y="14" width="7" height="7" rx="1"/>
      </svg>
    )
  },
  {
    id: 'contact' as PageType,
    label: '联系我们',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.21 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92"/>
      </svg>
    )
  },
]

export default function Sidebar({ currentPage, onNavigate, isOpen, isMobile }: SidebarProps) {
  return (
    <div
      className={`sidebar ${isMobile && isOpen ? 'open' : ''}`}
      style={{
        position: 'fixed',
        left: 0, top: 0, bottom: 0,
        width: '240px',
        display: 'flex',
        flexDirection: 'column',
        transform: isMobile && !isOpen ? 'translateX(-100%)' : 'translateX(0)',
        transition: 'transform 0.3s ease',
        zIndex: 100,
      }}
    >
      {/* Logo area */}
      <div style={{
        padding: '32px 24px 24px',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}>
        <div style={{
          width: '48px', height: '48px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #00a8e8, #0f4c81)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: '12px',
          boxShadow: '0 4px 12px rgba(0,168,232,0.3)',
        }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="6" fill="white" fillOpacity="0.9"/>
            <circle cx="14" cy="14" r="10" stroke="white" strokeWidth="2" strokeOpacity="0.5"/>
            <path d="M8 8 L20 8 L14 4 Z" fill="white" fillOpacity="0.7"/>
          </svg>
        </div>
        <div style={{ color: 'white', fontWeight: 700, fontSize: '14px', lineHeight: 1.4 }}>
          上海辰月数据科技
        </div>
        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', marginTop: '4px' }}>
          CHENGYUE DATA TECH
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1, padding: '16px 12px', overflowY: 'auto' }}>
        <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', fontWeight: 600, letterSpacing: '1px', padding: '0 12px', marginBottom: '8px' }}>
          导航菜单
        </div>
        {navItems.map((item) => {
          const isActive = currentPage === item.id
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`nav-item ${isActive ? 'active' : ''}`}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
                marginBottom: '4px',
                background: isActive
                  ? 'rgba(255,255,255,0.15)'
                  : 'transparent',
                color: isActive ? 'white' : 'rgba(255,255,255,0.7)',
                fontWeight: isActive ? 600 : 400,
                fontSize: '14px',
                transition: 'all 0.25s ease',
                textAlign: 'left',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.color = 'white'
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                }
              }}
            >
              <span style={{ opacity: isActive ? 1 : 0.8 }}>{item.icon}</span>
              <span>{item.label}</span>
              {isActive && (
                <span style={{ marginLeft: 'auto' }}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </span>
              )}
            </button>
          )
        })}
      </nav>

      {/* Quick actions */}
      <div style={{ padding: '16px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <button
          onClick={() => onNavigate('products')}
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #00a8e8, #0088c7)',
            color: 'white',
            fontWeight: 600,
            fontSize: '13px',
            border: 'none',
            cursor: 'pointer',
            marginBottom: '8px',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          📦 查看技能包
        </button>
        <button
          onClick={() => onNavigate('contact')}
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '8px',
            background: 'rgba(255,255,255,0.08)',
            color: 'rgba(255,255,255,0.8)',
            fontWeight: 500,
            fontSize: '13px',
            border: '1px solid rgba(255,255,255,0.15)',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.15)'
            e.currentTarget.style.color = 'white'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
            e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
          }}
        >
          💬 免费咨询
        </button>
      </div>

      {/* Footer */}
      <div style={{ padding: '12px 16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px', textAlign: 'center' }}>
          © 2026 辰月数据科技
        </div>
      </div>
    </div>
  )
}
