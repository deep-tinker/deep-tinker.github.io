import React from 'react'
import AnimatedSection from './AnimatedSection'

const interests = ['Full Stack Development', 'DSA', 'Machine Learning', 'AI & Mathematics']
const funFacts = [
  '🏆 District level chess champion',
  '⚽ Led hostel football team to Gold Medal at Spardha',
  '🎓 Civil Engineering → Software Engineering pivot'
]

export default function About() {
  return (
    <section id="about">
      <AnimatedSection>
        <h2 className="section-title"><span>About Me</span></h2>
      </AnimatedSection>
      <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
        <AnimatedSection style={{ flex: 1, minWidth: 300 }}>
          <p style={{ color: 'var(--text-dim)', lineHeight: 1.8, marginBottom: 24 }}>
            I started my journey at <strong style={{ color: 'var(--text)' }}>IIT Guwahati</strong> studying Civil Engineering, 
            but my passion for building things with code led me to pivot into Software Engineering. Today, I work as an 
            <strong style={{ color: 'var(--text)' }}> SDE-2 at Dream11</strong>, where I build high-performance systems handling 
            15K+ requests per minute with 99.9% reliability.
          </p>
          <p style={{ color: 'var(--text-dim)', lineHeight: 1.8, marginBottom: 24 }}>
            From writing C++ hardware controllers with UART/I2C/SPI interfaces to building real-time Kafka pipelines 
            for live cricket data — I thrive at the intersection of systems programming and scalable web services.
          </p>

          <div style={{ marginBottom: 24 }}>
            <h3 style={{ color: 'var(--cyan)', fontSize: '.9rem', fontFamily: 'var(--font-mono)', marginBottom: 12 }}>// interests</h3>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {interests.map(i => (
                <span key={i} style={{
                  padding: '6px 14px', borderRadius: 6, background: 'rgba(0,212,255,.08)',
                  border: '1px solid rgba(0,212,255,.2)', fontSize: '.85rem', color: 'var(--text-dim)'
                }}>{i}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ color: 'var(--cyan)', fontSize: '.9rem', fontFamily: 'var(--font-mono)', marginBottom: 12 }}>// languages</h3>
            <p style={{ color: 'var(--text-dim)', fontSize: '.9rem' }}>English (Proficient) · Hindi (Native)</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} style={{ flex: 1, minWidth: 300 }}>
          <div style={{
            background: '#0d0d14', border: '1px solid var(--border)', borderRadius: 12,
            fontFamily: 'var(--font-mono)', fontSize: '.85rem', overflow: 'hidden'
          }}>
            <div style={{ padding: '10px 16px', background: '#15151f', borderBottom: '1px solid var(--border)', color: 'var(--text-dim)', fontSize: '.75rem' }}>about.json</div>
            <pre style={{ padding: 20, color: 'var(--text-dim)', lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>{`{
  "name": "Pragati Ranjan",
  "location": "Mumbai, India",
  "education": {
    "degree": "B.Tech Civil Engineering",
    "university": "IIT Guwahati",
    "year": 2021
  },
  "current_role": "SDE-2 @ Dream11",
  "open_to": "Exciting opportunities"
}`}</pre>
          </div>

          <div style={{ marginTop: 24 }}>
            <h3 style={{ color: 'var(--cyan)', fontSize: '.9rem', fontFamily: 'var(--font-mono)', marginBottom: 12 }}>// fun_facts</h3>
            {funFacts.map(f => (
              <p key={f} style={{ color: 'var(--text-dim)', fontSize: '.9rem', marginBottom: 8 }}>{f}</p>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
