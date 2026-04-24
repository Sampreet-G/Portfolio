import React from 'react'
import { useReveal } from './useReveal.js'
import styles from './Skills.module.css'

const skillGroups = [
  {
    title: 'Frontend',
    icon: '⬡',
    color: '#79C0FF',
    skills: ['React','Vite','HTML5','CSS3','JavaScript','Tailwind CSS','Bootstrap','Responsive Design','Figma']
  },
  {
    title: 'Backend',
    icon: '⬡',
    color: '#7EE8A2',
    skills: ['Node.js','Express.js','FastAPI','Flask','REST APIs','Python']
  },
  {
    title: 'AI / ML',
    icon: '⬡',
    color: '#D2A8FF',
    skills: ['Scikit-learn','NumPy','Pandas','TF-IDF','NLP Basics','Logistic Regression','Model Deployment']
  },
  {
    title: 'Database & Cloud',
    icon: '⬡',
    color: '#FFA657',
    skills: ['MongoDB','MySQL','Firebase','Vercel','Render','GitHub Pages']
  },
  {
    title: 'Tools & Practices',
    icon: '⬡',
    color: '#E3B341',
    skills: ['Git','GitHub','VS Code','Postman','Jupyter Notebook','Canva','Open Source']
  },
  {
    title: 'DSA & CS Fundamentals',
    icon: '⬡',
    color: '#FF7B72',
    skills: ['230+ LeetCode','Data Structures','Algorithms','Problem Solving','OOP']
  }
]

const languages = ['English (Fluent)', 'Bengali (Native)', 'Hindi (Fluent)']

export default function Skills() {
  const { ref } = useReveal()

  return (
    <section id="skills" className={styles.section} ref={ref}>
      <div className={styles.inner}>
        <div className={styles.label}>
          <span className={styles.labelNum}>02.</span>
          <span>Skills</span>
          <div className={styles.labelLine}/>
        </div>

        <h2 className={styles.heading}>What I work with</h2>

        <div className={styles.grid}>
          {skillGroups.map((g, i) => (
            <div
              key={g.title}
              className={styles.card}
              style={{ animationDelay: `${i * 0.08}s`, '--card-color': g.color }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon} style={{color: g.color}}>{g.icon}</span>
                <span className={styles.cardTitle}>{g.title}</span>
              </div>
              <div className={styles.tags}>
                {g.skills.map(s => (
                  <span key={s} className={styles.tag}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.langRow}>
          <span className={styles.langLabel}>Languages:</span>
          {languages.map(l => (
            <span key={l} className={styles.langTag}>{l}</span>
          ))}
        </div>
      </div>
    </section>
  )
}