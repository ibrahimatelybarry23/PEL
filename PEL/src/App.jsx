import { useState } from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import NotesPage from './pages/NotesPage'
import TrainerPage from './pages/TrainerPage'

const NAV_ITEMS = [
  { to: '/notes',   label: 'Appunti', icon: '📖' },
  { to: '/trainer', label: 'Trainer', icon: '⚡' },
]

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div style={{ display:'flex', height:'100vh', width:'100vw', overflow:'hidden', background:'var(--bg-primary)' }}>
      {/* Top nav bar */}
      <div style={{
        position:'fixed', top:0, left:0, right:0, height:48, zIndex:100,
        background:'var(--bg-secondary)', borderBottom:'1px solid var(--border)',
        display:'flex', alignItems:'center', padding:'0 16px', gap:12,
      }}>
        <div style={{
          display:'flex', alignItems:'center', gap:8,
        }}>
          <div style={{
            width:28, height:28, borderRadius:6,
            background:'linear-gradient(135deg, #ffa116, #ff6b00)',
            display:'flex', alignItems:'center', justifyContent:'center',
            fontSize:13, fontWeight:900, color:'#000',
            fontFamily:'var(--font-mono)',
          }}>C+</div>
          <span style={{
            fontSize:15, fontWeight:700, color:'#fff',
            fontFamily:'var(--font-display)',
            letterSpacing:'-0.3px',
          }}>C++ Practice</span>
        </div>

        <div style={{ display:'flex', gap:2, marginLeft:24 }}>
          {NAV_ITEMS.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              style={({ isActive }) => ({
                display:'flex', alignItems:'center', gap:6,
                padding:'6px 14px', borderRadius:6,
                fontSize:12, fontWeight:600,
                fontFamily:'var(--font-display)',
                textDecoration:'none',
                transition:'all .2s',
                background: isActive ? 'var(--accent-dim)' : 'transparent',
                color: isActive ? 'var(--accent)' : 'var(--text-muted)',
                border: isActive ? '1px solid rgba(255,161,22,0.2)' : '1px solid transparent',
              })}
            >
              <span style={{ fontSize:14 }}>{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div style={{ flex:1 }} />
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize:10, color:'var(--text-dim)', textDecoration:'none', fontFamily:'var(--font-mono)' }}
        >
          GitHub ↗
        </a>
      </div>

      {/* Content below nav */}
      <div style={{ flex:1, marginTop:48, overflow:'hidden' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/notes" replace />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/notes/:slug" element={<NotesPage />} />
          <Route path="/trainer" element={<TrainerPage />} />
        </Routes>
      </div>
    </div>
  )
}
