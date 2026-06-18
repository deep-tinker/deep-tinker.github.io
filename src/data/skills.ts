export interface SkillCategory {
  name: string
  items: string[]
}

export const categories: SkillCategory[] = [
  { name: 'Languages', items: ['Python', 'C', 'C++', 'Java', 'JavaScript (ES6+)', 'Rust (Familiar)'] },
  { name: 'Web & Frameworks', items: ['Django', 'DRF', 'Flask', 'Vert.x', 'React JS', 'Vanilla JS'] },
  { name: 'Infrastructure', items: ['AWS', 'Docker', 'Apache Kafka', 'Git', 'CI/CD', 'Datadog'] },
  { name: 'Databases', items: ['PostgreSQL', 'MySQL', 'Aerospike'] },
  { name: 'Interests', items: ['Full Stack Dev', 'DSA', 'Machine Learning', 'AI & Math'] },
]
