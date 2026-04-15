import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const terminalLines = [
  '❯ whoami',
  'name: Pragati Ranjan',
  'role: SDE-2 @ Dream11',
  'edu: IIT Guwahati \'21',
  'stack: Python, C++, Java, React',
  'status: ● building cool stuff',
  '❯ '
]

const stats = [
  { label: 'Years Experience', value: '3.5+' },
  { label: 'RPM at Scale', value: '22M' },
  { label: 'System Reliability', value: '99.9%' },
  { label: 'Education', value: "IIT Guwahati '21" },
]

function TerminalWidget() {
  const [displayedLines, setDisplayedLines] = useState([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)

  useEffect(() => {
    if (currentLine >= terminalLines.length) return
    const line = terminalLines[currentLine]
    if (currentChar < line.length) {
      const t = setTimeout(() => setCurrentChar(c => c + 1), line.startsWith('❯') ? 60 : 25)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        setDisplayedLines(prev => [...prev, line])
        setCurrentLine(l => l + 1)
        setCurrentChar(0)
      }, line.startsWith('❯') ? 400 : 100)
      return () => clearTimeout(t)
    }
  }, [currentLine, currentChar])

  return (
    <div style={{
      background: '#0d0d14', border: '1px solid var(--border)', borderRadius: 12,
      fontFamily: 'var(--font-mono)', fontSize: '.85rem', overflow: 'hidden',
      width: '100%', maxWidth: 420
    }}>
      <div style={{ padding: '10px 16px', background: '#15151f', display: 'flex', gap: 8, borderBottom: '1px solid var(--border)' }}>
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
        <span style={{ marginLeft: 'auto', color: 'var(--text-dim)', fontSize: '.75rem' }}>~/.terminal</span>
      </div>
      <div style={{ padding: 20, lineHeight: 1.8, minHeight: 220 }}>
        {displayedLines.map((line, i) => (
          <div key={i} style={{ color: line.startsWith('❯') ? 'var(--cyan)' : line.includes('●') ? 'var(--green)' : 'var(--text-dim)' }}>{line}</div>
        ))}
        {currentLine < terminalLines.length && (
          <div style={{ color: terminalLines[currentLine].startsWith('❯') ? 'var(--cyan)' : 'var(--text-dim)' }}>
            {terminalLines[currentLine].slice(0, currentChar)}
            <span style={{ animation: 'blink 1s step-end infinite', borderRight: '2px solid var(--cyan)' }}>&nbsp;</span>
          </div>
        )}
        {currentLine >= terminalLines.length && (
          <span style={{ animation: 'blink 1s step-end infinite', borderRight: '2px solid var(--cyan)' }}>&nbsp;</span>
        )}
      </div>
      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 100 }}>
      <div style={{ display: 'flex', gap: 60, alignItems: 'center', flexWrap: 'wrap' }}>
        <motion.div style={{ flex: 1, minWidth: 300 }} initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .6 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px',
            border: '1px solid rgba(0,212,255,.3)', borderRadius: 50, marginBottom: 24, fontSize: '.85rem'
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--green)', boxShadow: '0 0 8px var(--green)' }} />
            <span style={{ color: 'var(--text-dim)' }}>Available for opportunities</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: 20 }}>
            Hi, I'm{' '}
            <span style={{ background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Pragati Ranjan
            </span>
          </h1>

          <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem', maxWidth: 540, marginBottom: 32, lineHeight: 1.7 }}>
            Software Engineer building high-performance systems at Dream11. From real-time cricket pipelines to hardware controllers — I ship code that scales.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} style={{
              background: 'var(--gradient)', border: 'none', borderRadius: 10, padding: '12px 28px',
              color: '#0a0a0f', fontWeight: 600, fontSize: '1rem', cursor: 'pointer'
            }}>View My Work →</button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} style={{
              background: 'transparent', border: '1px solid var(--border)', borderRadius: 10,
              padding: '12px 28px', color: 'var(--text)', fontSize: '1rem', cursor: 'pointer'
            }}>Get In Touch</button>
          </div>
        </motion.div>

        <motion.div style={{ flex: 0 }} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .6, delay: .2 }}>
          <TerminalWidget />
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: .5 }}
        style={{ display: 'flex', gap: 40, flexWrap: 'wrap', marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--border)' }}>
        {stats.map(s => (
          <div key={s.label}>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.value}</div>
            <div style={{ color: 'var(--text-dim)', fontSize: '.85rem' }}>{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
