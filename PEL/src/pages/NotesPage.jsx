import { useState, useEffect, Suspense } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { NOTES } from '../notes/index.js'

export default function NotesPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [sb, setSb] = useState(true)

  const active = NOTES.find(n => n.slug === slug) || NOTES[0]

  useEffect(() => {
    if (!slug) navigate(`/notes/${NOTES[0].slug}`, { replace: true })
  }, [slug])

  return (
    <div style={{ display:'flex', height:'100%', overflow:'hidden' }}>
      {/* Sidebar */}
      <div style={{
        width: sb ? 240 : 0, minWidth: sb ? 240 : 0,
        background:'var(--bg-secondary)', borderRight:'1px solid var(--border)',
        display:'flex', flexDirection:'column',
        transition:'all .25s ease', overflow:'hidden',
      }}>
        <div style={{ padding:'16px 14px 10px', borderBottom:'1px solid var(--border)' }}>
          <div style={{ fontSize:11, fontWeight:700, color:'var(--accent)', letterSpacing:'0.5px', textTransform:'uppercase', fontFamily:'var(--font-mono)' }}>
            Argomenti
          </div>
        </div>
        <div style={{ flex:1, overflowY:'auto', padding:6 }}>
          {NOTES.map(note => {
            const isActive = active.slug === note.slug
            return (
              <button
                key={note.slug}
                onClick={() => navigate(`/notes/${note.slug}`)}
                style={{
                  width:'100%', textAlign:'left',
                  padding:'10px 12px', marginBottom:2, borderRadius:6,
                  border: isActive ? '1px solid rgba(255,161,22,0.2)' : '1px solid transparent',
                  background: isActive ? 'var(--bg-hover)' : 'transparent',
                  cursor:'pointer', fontFamily:'var(--font-display)',
                  color: isActive ? '#fff' : 'var(--text-secondary)',
                  display:'flex', alignItems:'center', gap:10,
                  transition:'all .15s',
                  fontSize:13, fontWeight: isActive ? 600 : 400,
                }}
              >
                <span style={{ fontSize:16 }}>{note.icon}</span>
                {note.title}
              </button>
            )
          })}
        </div>
        <div style={{ padding:'10px 14px', borderTop:'1px solid var(--border)', fontSize:9, color:'var(--text-dim)', fontFamily:'var(--font-mono)' }}>
          {NOTES.length} argomenti
        </div>
      </div>

      {/* Content */}
      <div style={{ flex:1, display:'flex', flexDirection:'column', overflow:'hidden' }}>
        <div style={{
          padding:'8px 16px', borderBottom:'1px solid var(--border)',
          display:'flex', alignItems:'center', gap:10,
          background:'var(--bg-secondary)',
        }}>
          <button
            onClick={() => setSb(!sb)}
            style={{ background:'none', border:'none', color:'var(--text-muted)', cursor:'pointer', fontSize:14, padding:'2px 5px' }}
          >
            {sb ? '◀' : '▶'}
          </button>
          <span style={{ fontSize:15 }}>{active.icon}</span>
          <span style={{ fontSize:13, fontWeight:700, fontFamily:'var(--font-display)' }}>{active.title}</span>
        </div>

        <div style={{ flex:1, overflowY:'auto', padding:'24px 32px 60px', maxWidth:800 }}>
          {active.component ? (
            <Suspense fallback={<div style={{ color: 'var(--text-muted)', fontSize: 13, padding: '24px 0' }}>Caricamento…</div>}>
              <active.component />
            </Suspense>
          ) : (
            <div className="md-content">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={vscDarkPlus}
                        language={match[1]}
                        PreTag="div"
                        customStyle={{
                          margin:'0 0 16px 0', borderRadius:8,
                          border:'1px solid var(--border)',
                          fontSize:12, lineHeight:1.7,
                        }}
                        {...props}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={className} {...props}>{children}</code>
                    )
                  }
                }}
              >
                {active.md}
              </ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}