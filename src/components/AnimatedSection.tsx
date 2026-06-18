import React from 'react'
import { motion } from 'framer-motion'

interface AnimatedSectionProps {
  children: React.ReactNode
  delay?: number
  style?: React.CSSProperties
  className?: string
}

export default function AnimatedSection({ children, delay = 0, style, className }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  )
}
