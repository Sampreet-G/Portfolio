import React from 'react'
import { useReveal } from './useReveal.js'
import styles from './About.module.css'

export default function About() {
  const { ref } = useReveal()

  return (
    <section id="about" className={styles.section} ref={ref}>
      <div className={styles.inner}>
        <div className={styles.label}>
          <span className={styles.labelNum}>01.</span>
          <span>About Me</span>
          <div className={styles.labelLine}/>
        </div>

        <div className={styles.grid}>
          <div className={styles.textBlock}>
            <h2 className={styles.heading}>
              Turning ideas into<br/>
              <span className={styles.accent}>shipped products</span>
            </h2>

            <p className={styles.body}>
              I'm a Computer Science undergrad at <strong>Netaji Subhash Engineering College, Kolkata</strong> (Class of 2027),
              with a deep obsession for building things that work — from pixel-perfect frontends to ML models deployed in production.
            </p>
            <p className={styles.body}>
              I started coding seriously in Year 1 and haven't stopped since. My sweet spot is the intersection of
              <span className={styles.highlight}> full-stack web development</span> and
              <span className={styles.highlight}> AI/ML</span> — I love building apps where both worlds collide.
            </p>
            <p className={styles.body}>
              Outside of code, I've contributed to open source during GirlScript Summer of Code and Hacktoberfest 2024,
              and competed in Smart India Hackathon as a frontend developer and UI/UX designer.
            </p>

            <div className={styles.edu}>
              <div className={styles.eduItem}>
                <div className={styles.eduDot}/>
                <div>
                  <div className={styles.eduTitle}>B.Tech in CSE — NSEC, Kolkata</div>
                  <div className={styles.eduSub}>2023 – 2027</div>
                </div>
              </div>
              <div className={styles.eduItem}>
                <div className={styles.eduDot}/>
                <div>
                  <div className={styles.eduTitle}>Higher Secondary — DPS Ruby Park</div>
                  <div className={styles.eduSub}>2023 · 86.88%</div>
                </div>
              </div>
              <div className={styles.eduItem}>
                <div className={styles.eduDot}/>
                <div>
                  <div className={styles.eduTitle}>Matriculation — Don Bosco, Siliguri</div>
                  <div className={styles.eduSub}>2021 · 94.40%</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.imageBlock}>
            <div className={styles.cardOuter}>
              <div className={styles.cardInner}>
                <div className={styles.avatar}>
                  <span>SG</span>
                </div>
                <div className={styles.cardInfo}>
                  <div className={styles.cardName}>Sampreet Ghosh</div>
                  <div className={styles.cardRole}>Full Stack · ML · OSS</div>
                  <div className={styles.cardLocation}>📍 Kolkata, India</div>
                  <div className={styles.cardTags}>
                    {['React','Node.js','Python','FastAPI','MongoDB','ML'].map(t => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.statusBadge}>
                  <span className={styles.statusDot}/>
                  Available for internships
                </div>
              </div>
              <div className={styles.cardBg}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}