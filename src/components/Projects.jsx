import React from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const projects = [
  {
    title: 'Rushline',
    desc: 'Real-time cricket prediction platform with live match feeds, sub-second data pipelines, and 15K RPM capacity.',
    tech: ['Java', 'Vert.x', 'Kafka', 'AWS', 'Aerospike'],
    metrics: '15K RPM · 99.9% Uptime',
    org: 'Dream11'
  },
  {
    title: 'Stats Chatbot',
    desc: 'LLM-powered cricket statistics assistant using in-house ML models for natural language queries on match data.',
    tech: ['Java', 'ML', 'LLM', 'MySQL'],
    metrics: 'AI-Powered · Real-time',
    org: 'Dream11'
  },
  {
    title: 'System Controller',
    desc: 'C++ application for managing hardware peripherals via UART, I2C, SPI with terminal and WebSocket interfaces.',
    tech: ['C++', 'C', 'WebSocket', 'Linux'],
    metrics: '95% OTA Time Reduction',
    org: 'Astrome'
  },
  {
    title: 'EMS Server',
    desc: 'Python microservices backend with Pub-Sub architecture, achieving 60x query performance improvement through indexing.',
    tech: ['Python', 'Django', 'PostgreSQL', 'WebSocket'],
    metrics: '60x Query Speed',
    org: 'Astrome'
  },
  {
    title: 'Rainfall Analysis',
    desc: 'ML-based spatio-temporal trend analysis of rainfall patterns using advanced statistical methods.',
    tech: ['Python', 'ML', 'Data Analysis', 'NumPy'],
    metrics: 'Final Year Project',
    org: 'IIT Guwahati'
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <AnimatedSection>
        <h2 className="section-title"><span>Projects</span></h2>
      </AnimatedSection>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
        {projects.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.1}>
            <motion.div whileHover={{ y: -6, borderColor: 'rgba(0,212,255,.4)' }} style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12,
              padding: 28, height: '100%', display: 'flex', flexDirection: 'column',
              transition: 'border-color .3s', cursor: 'default'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ color: 'var(--cyan)', fontFamily: 'var(--font-mono)', fontSize: '.8rem' }}>{p.org}</span>
                <span style={{ fontSize: '1.2rem' }}>📂</span>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 8 }}>{p.title}</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '.9rem', lineHeight: 1.6, flex: 1, marginBottom: 16 }}>{p.desc}</p>
              <p style={{ color: 'var(--green)', fontSize: '.8rem', fontFamily: 'var(--font-mono)', marginBottom: 12 }}>{p.metrics}</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {p.tech.map(t => (
                  <span key={t} style={{
                    padding: '3px 10px', borderRadius: 4, background: 'rgba(0,212,255,.08)',
                    fontSize: '.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)'
                  }}>{t}</span>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
