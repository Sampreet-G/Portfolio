import React from 'react'
import { useReveal } from './useReveal.js'
import styles from './Certifications.module.css'

const certs = [
  { title: 'Supervised Machine Learning: Regression & Classification', issuer: 'DeepLearning.AI · Coursera', icon: '🧠', color: '#D2A8FF', link: 'https://coursera.org/verify/XDWOVOYWNHLC' },
  { title: 'Developing Front-End Apps with React', issuer: 'IBM', icon: '⚛️', color: '#79C0FF', link: null },
  { title: 'Cyber Suraksha Course (40 hours)', issuer: 'Tata Strive & Microsoft', icon: '🔐', color: '#7EE8A2', link: null },
  { title: 'Web Designing: HTML, CSS, Bootstrap', issuer: 'Netaji Subhash Engineering College', icon: '🎨', color: '#FFA657', link: 'https://certificates.asd.org.in/generate/62069' },
  { title: 'Web5 Fundamentals Course', issuer: 'Udemy', icon: '🌐', color: '#E3B341', link: null },
  { title: 'Smart India Hackathon Participation', issuer: 'Ministry of Education, India', icon: '🏆', color: '#FF7B72', link: null },
]

export default function Certifications() {
  const { ref } = useReveal()

  return (
    <section id="certifications" className={styles.section} ref={ref}>
      <div className={styles.inner}>
        <div className={styles.label}>
          <span className={styles.labelNum}>05.</span>
          <span>Certifications</span>
          <div className={styles.labelLine}/>
        </div>
        <h2 className={styles.heading}>Credentials & Achievements</h2>

        <div className={styles.grid}>
          {certs.map((c, i) => (
            <div key={i} className={styles.card} style={{'--cc': c.color, animationDelay:`${i*0.08}s`}}>
              <div className={styles.iconRow}>
                <span className={styles.icon}>{c.icon}</span>
                {c.link && (
                  <a href={c.link} target="_blank" rel="noreferrer" className={styles.verifyLink}>
                    Verify ↗
                  </a>
                )}
              </div>
              <div className={styles.certTitle}>{c.title}</div>
              <div className={styles.certIssuer} style={{color: c.color}}>{c.issuer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}