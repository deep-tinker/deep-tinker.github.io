import React from 'react'

export default function Footer() {
  return (
    <footer style={{
      textAlign: 'center', padding: '40px 24px', borderTop: '1px solid var(--border)',
      maxWidth: 1200, margin: '0 auto'
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 16 }}>
        <a href="mailto:pragatiranjan25@gmail.com" style={{ color: 'var(--text-dim)', fontSize: '.9rem' }}>Email</a>
        <a href="https://linkedin.com/in/pragati-ranjan" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dim)', fontSize: '.9rem' }}>LinkedIn</a>
        <a href="https://leetcode.com/pragati-ranjan" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dim)', fontSize: '.9rem' }}>LeetCode</a>
      </div>
      <p style={{ color: 'var(--text-dim)', fontSize: '.85rem' }}>
        Built with ⚡ by <span style={{ color: 'var(--cyan)' }}>Pragati Ranjan</span>
      </p>
    </footer>
  )
}
