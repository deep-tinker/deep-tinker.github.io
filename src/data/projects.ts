export interface Project {
  title: string
  desc: string
  tech: string[]
  metrics: string
  org: string
  /** Optional external link to a demo or repo */
  link?: string
}

export const projects: Project[] = [
  {
    title: 'Rushline',
    desc: 'Real-time cricket prediction platform with live match feeds, sub-second data pipelines, and 15K RPM capacity.',
    tech: ['Java', 'Vert.x', 'Kafka', 'AWS', 'Aerospike'],
    metrics: '15K RPM · 99.9% Uptime',
    org: 'Dream11',
  },
  {
    title: 'Stats Chatbot',
    desc: 'LLM-powered cricket statistics assistant using in-house ML models for natural language queries on match data.',
    tech: ['Java', 'ML', 'LLM', 'MySQL'],
    metrics: 'AI-Powered · Real-time',
    org: 'Dream11',
  },
  {
    title: 'System Controller',
    desc: 'C++ application for managing hardware peripherals via UART, I2C, SPI with terminal and WebSocket interfaces.',
    tech: ['C++', 'C', 'WebSocket', 'Linux'],
    metrics: '95% OTA Time Reduction',
    org: 'Astrome',
  },
  {
    title: 'EMS Server',
    desc: 'Python microservices backend with Pub-Sub architecture, achieving 60x query performance improvement through indexing.',
    tech: ['Python', 'Django', 'PostgreSQL', 'WebSocket'],
    metrics: '60x Query Speed',
    org: 'Astrome',
  },
  {
    title: 'Rainfall Analysis',
    desc: 'ML-based spatio-temporal trend analysis of rainfall patterns using advanced statistical methods.',
    tech: ['Python', 'ML', 'Data Analysis', 'NumPy'],
    metrics: 'Final Year Project',
    org: 'IIT Guwahati',
  },
]
