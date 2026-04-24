import React from 'react'
import { useReveal } from './useReveal.js'
import styles from './Experience.module.css'

const experience = [
  {
    role: 'Open Source Contributor',
    org: 'GirlScript Summer of Code Extended',
    period: 'Oct 2024 – Nov 2024',
    type: 'Part-time · Remote',
    color: '#D2A8FF',
    points: [
      'Contributed to open source repositories, collaborating with distributed teams across 3+ projects',
      'Submitted and merged pull requests covering bug fixes, UI enhancements, and documentation improvements',
      'Worked asynchronously with maintainers, improving collaborative development skills in a production-like environment',
    ]
  },
  {
    role: 'Open Source Contributor',
    org: 'Hacktoberfest 2024',
    period: 'Oct 2024',
    type: 'Remote',
    color: '#FFA657',
    points: [
      'Completed Hacktoberfest 2024 with 4+ accepted pull requests to open source GitHub repositories',
      'Contributed to JavaScript/React and Python repositories with feature additions and bug fixes',
      'Practiced atomic, well-described commits and navigating unfamiliar production codebases',
    ]
  },
  {
    role: 'UI/UX Designer & Frontend Developer',
    org: 'Smart India Hackathon 2024',
    period: 'Sep 2024',
    type: 'Hackathon',
    color: '#79C0FF',
    points: [
      'Competed in Smart India Hackathon, building Aspire-Sync — a career advisor for students',
      'Designed interactive dashboards and wireframes in Figma, then implemented them in React + CSS',
      'Delivered a functional, deployed product under hackathon time constraints',
    ]
  }
]

export default function Experience() {
  const { ref } = useReveal()

  return (
    <section id="experience" className={styles.section} ref={ref}>
      <div className={styles.inner}>
        <div className={styles.label}>
          <span className={styles.labelNum}>04.</span>
          <span>Experience</span>
          <div className={styles.labelLine}/>
        </div>
        <h2 className={styles.heading}>Where I've contributed</h2>

        <div className={styles.timeline}>
          {experience.map((e, i) => (
            <div key={i} className={styles.item} style={{'--ecolor': e.color, animationDelay:`${i*0.12}s`}}>
              <div className={styles.timelineLine}>
                <div className={styles.dot} style={{background: e.color}}/>
                {i < experience.length - 1 && <div className={styles.line}/>}
              </div>
              <div className={styles.content}>
                <div className={styles.contentHeader}>
                  <div>
                    <h3 className={styles.role}>{e.role}</h3>
                    <div className={styles.org} style={{color: e.color}}>{e.org}</div>
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.period}>{e.period}</span>
                    <span className={styles.type}>{e.type}</span>
                  </div>
                </div>
                <ul className={styles.points}>
                  {e.points.map((p, j) => (
                    <li key={j} className={styles.point}>
                      <span className={styles.bullet} style={{color: e.color}}>▹</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}