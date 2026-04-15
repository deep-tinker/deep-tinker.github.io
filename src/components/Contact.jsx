import React, { useState } from 'react'
import AnimatedSection from './AnimatedSection'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const inputStyle = {
    width: '100%', padding: '12px 16px', background: '#0d0d14', border: '1px solid var(--border)',
    borderRadius: 8, color: 'var(--text)', fontFamily: 'var(--font-body)', fontSize: '.95rem',
    outline: 'none', transition: 'border-color .3s'
  }

  return (
    <section id="contact">
      <AnimatedSection>
        <h2 className="section-title"><span>Let's Build Something Together</span></h2>
      </AnimatedSection>
      <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
        <AnimatedSection style={{ flex: 1, minWidth: 280 }}>
          <p style={{ color: 'var(--text-dim)', lineHeight: 1.8, marginBottom: 32 }}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <a href="mailto:pragatiranjan25@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--text-dim)', fontSize: '.95rem' }}>
              <span style={{ color: 'var(--cyan)' }}>✉</span> pragatiranjan25@gmail.com
            </a>
            <a href="tel:+919113363402" style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--text-dim)', fontSize: '.95rem' }}>
              <span style={{ color: 'var(--cyan)' }}>📞</span> +91 91133-63402
            </a>
            <a href="https://linkedin.com/in/pragati-ranjan" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--text-dim)', fontSize: '.95rem' }}>
              <span style={{ color: 'var(--cyan)' }}>in</span> LinkedIn
            </a>
            <a href="https://leetcode.com/pragati-ranjan" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--text-dim)', fontSize: '.95rem' }}>
              <span style={{ color: 'var(--cyan)' }}>{'</>'}</span> LeetCode
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} style={{ flex: 1, minWidth: 280 }}>
          <form onSubmit={e => { e.preventDefault(); alert('Message sent! (Demo)') }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <input placeholder="Your Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={inputStyle} onFocus={e => e.target.style.borderColor = 'var(--cyan)'} onBlur={e => e.target.style.borderColor = 'var(--border)'} />
            <input placeholder="Your Email" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={inputStyle} onFocus={e => e.target.style.borderColor = 'var(--cyan)'} onBlur={e => e.target.style.borderColor = 'var(--border)'} />
            <textarea placeholder="Your Message" rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ ...inputStyle, resize: 'vertical' }} onFocus={e => e.target.style.borderColor = 'var(--cyan)'} onBlur={e => e.target.style.borderColor = 'var(--border)'} />
            <button type="submit" style={{
              background: 'var(--gradient)', border: 'none', borderRadius: 10, padding: '12px 28px',
              color: '#0a0a0f', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', alignSelf: 'flex-start'
            }}>Send Message →</button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  )
}
