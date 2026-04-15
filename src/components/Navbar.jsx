import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = ['Home', 'About', 'Experience', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    else if (id === 'Home') window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '16px 32px',
      background: scrolled ? 'rgba(10,10,15,.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      transition: 'all .3s',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--cyan)', fontFamily: 'var(--font-mono)' }}>PR.</div>
      
      {/* Desktop links */}
      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="nav-desktop">
        {links.map(l => (
          <button key={l} onClick={() => scrollTo(l)} style={{
            background: 'none', border: 'none', color: 'var(--text-dim)', cursor: 'pointer',
            fontFamily: 'var(--font-body)', fontSize: '.9rem', transition: 'color .2s'
          }} onMouseEnter={e => e.target.style.color = 'var(--cyan)'} onMouseLeave={e => e.target.style.color = 'var(--text-dim)'}>{l}</button>
        ))}
        <button style={{
          background: 'rgba(0,212,255,.1)', border: '1px solid var(--border)', borderRadius: 8,
          color: 'var(--text-dim)', padding: '6px 14px', cursor: 'pointer', fontSize: '.8rem',
          fontFamily: 'var(--font-mono)'
        }}>⌘K Quick Nav</button>
      </div>

      {/* Hamburger */}
      <button onClick={() => setMenuOpen(!menuOpen)} style={{
        display: 'none', background: 'none', border: 'none', color: 'var(--text)', fontSize: '1.5rem', cursor: 'pointer'
      }} className="nav-hamburger">{menuOpen ? '✕' : '☰'}</button>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(10,10,15,.95)', backdropFilter: 'blur(12px)',
          padding: 24, display: 'flex', flexDirection: 'column', gap: 16,
          borderBottom: '1px solid var(--border)'
        }}>
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{
              background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer',
              fontFamily: 'var(--font-body)', fontSize: '1.1rem', textAlign: 'left'
            }}>{l}</button>
          ))}
        </motion.div>
      )}

      <style>{`
        @media(max-width:768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
