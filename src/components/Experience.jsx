import React from 'react'
import AnimatedSection from './AnimatedSection'

const jobs = [
  {
    company: 'Dream11',
    role: 'SDE-2 · Founding Engineer',
    location: 'Mumbai',
    period: 'Dec 2024 — Present',
    projects: 'Rushline, Stats Chatbot',
    metrics: ['15K RPM', '99.9% Uptime', '45% Latency ↓', 'Sub-sec Pipeline'],
    tech: ['Java', 'Vert.x', 'RxJava', 'Kafka', 'AWS', 'MySQL', 'Aerospike', 'Datadog'],
    details: [
      'Founding Engineer of Rushline app — managed full SDLC from architecture to deployment',
      'Built real-time Kafka pipeline for live cricket feeds with sub-second latency',
      'Developed Stats Chatbot powered by in-house LLM + ML models',
      'Implemented Aerospike caching layer: RDS CPU 70%→40%, P95 latency improved 45%',
    ]
  },
  {
    company: 'Astrome Technologies',
    role: 'SDE-1',
    location: 'Bangalore',
    period: 'Nov 2022 — Dec 2024',
    projects: 'System Controller, EMS Server, HW Automation',
    metrics: ['95% OTA Time ↓', '60x Query Speed', '80% Usability ↑', '75% Manual Work ↓'],
    tech: ['C++', 'C', 'Python', 'Django', 'PostgreSQL', 'JavaScript', 'WebSocket'],
    details: [
      'Built C++ application managing hardware peripherals (UART, I2C, SPI) with terminal + WebSocket interfaces',
      'Master-Slave PTY management with Linux system libraries',
      'OTA update feature: 95% time reduction, 80% fewer errors',
      'Microservices backend with Pub-Sub patterns, 60x query improvement via indexing',
      'Django REST full-stack app for hardware validation workflows',
      'Automated Ordering System (internship): Flask app for vendor API integration',
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience">
      <AnimatedSection>
        <h2 className="section-title"><span>Experience</span></h2>
      </AnimatedSection>
      <div style={{ position: 'relative', paddingLeft: 32 }}>
        {/* Timeline line */}
        <div style={{
          position: 'absolute', left: 7, top: 0, bottom: 0, width: 2,
          background: 'linear-gradient(to bottom, var(--cyan), var(--green), transparent)'
        }} />
        {jobs.map((job, i) => (
          <AnimatedSection key={i} delay={i * 0.15} style={{ marginBottom: 48, position: 'relative' }}>
            {/* Dot */}
            <div style={{
              position: 'absolute', left: -32, top: 6, width: 16, height: 16,
              borderRadius: '50%', background: 'var(--bg)', border: '3px solid var(--cyan)',
              boxShadow: '0 0 12px rgba(0,212,255,.4)'
            }} />
            <div style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12,
              padding: 28, transition: 'border-color .3s'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>{job.company}</h3>
                  <p style={{ color: 'var(--cyan)', fontSize: '.9rem' }}>{job.role}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ color: 'var(--text-dim)', fontSize: '.85rem' }}>{job.location}</p>
                  <p style={{ color: 'var(--text-dim)', fontSize: '.85rem', fontFamily: 'var(--font-mono)' }}>{job.period}</p>
                </div>
              </div>

              <p style={{ color: 'var(--text-dim)', fontSize: '.85rem', marginBottom: 16, fontFamily: 'var(--font-mono)' }}>
                Projects: {job.projects}
              </p>

              {/* Metrics */}
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 16 }}>
                {job.metrics.map(m => (
                  <span key={m} style={{
                    padding: '4px 12px', borderRadius: 6, background: 'rgba(0,255,136,.08)',
                    border: '1px solid rgba(0,255,136,.2)', fontSize: '.8rem', color: 'var(--green)',
                    fontFamily: 'var(--font-mono)'
                  }}>{m}</span>
                ))}
              </div>

              {/* Details */}
              <ul style={{ paddingLeft: 18, marginBottom: 16 }}>
                {job.details.map((d, j) => (
                  <li key={j} style={{ color: 'var(--text-dim)', fontSize: '.9rem', marginBottom: 6, lineHeight: 1.6 }}>{d}</li>
                ))}
              </ul>

              {/* Tech */}
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {job.tech.map(t => (
                  <span key={t} style={{
                    padding: '3px 10px', borderRadius: 4, background: 'rgba(0,212,255,.08)',
                    fontSize: '.75rem', color: 'var(--cyan)', fontFamily: 'var(--font-mono)'
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
