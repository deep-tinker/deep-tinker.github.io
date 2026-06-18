export interface Job {
  company: string
  role: string
  location: string
  period: string
  projects: string
  metrics: string[]
  tech: string[]
  details: string[]
}

export const jobs: Job[] = [
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
    ],
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
    ],
  },
]
