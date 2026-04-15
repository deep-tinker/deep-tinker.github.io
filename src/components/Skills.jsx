import React from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const categories = [
  { name: 'Languages', items: ['Python', 'C', 'C++', 'Java', 'JavaScript (ES6+)', 'Rust (Familiar)'] },
  { name: 'Web & Frameworks', items: ['Django', 'DRF', 'Flask', 'Vert.x', 'React JS', 'Vanilla JS'] },
  { name: 'Infrastructure', items: ['AWS', 'Docker', 'Apache Kafka', 'Git', 'CI/CD', 'Datadog'] },
  { name: 'Databases', items: ['PostgreSQL', 'MySQL', 'Aerospike'] },
  { name: 'Interests', items: ['Full Stack Dev', 'DSA', 'Machine Learning', 'AI & Math'] },
]

export default function Skills() {
  return (
    <section id="skills">
      <AnimatedSection>
        <h2 className="section-title"><span>Skills</span></h2>
      </AnimatedSection>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
        {categories.map((cat, i) => (
          <AnimatedSection key={cat.name} delay={i * 0.1}>
            <div style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: 24,
              transition: 'border-color .3s, transform .3s'
            }}>
              <h3 style={{ color: 'var(--cyan)', fontFamily: 'var(--font-mono)', fontSize: '.9rem', marginBottom: 16 }}>
                {'// '}{cat.name}
              </h3>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {cat.items.map(item => (
                  <motion.span key={item} whileHover={{ scale: 1.05, y: -2 }} style={{
                    padding: '6px 14px', borderRadius: 6, background: 'rgba(0,212,255,.06)',
                    border: '1px solid var(--border)', fontSize: '.85rem', color: 'var(--text-dim)',
                    cursor: 'default', transition: 'border-color .2s'
                  }}>{item}</motion.span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
