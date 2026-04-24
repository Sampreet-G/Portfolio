import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.logo}>
            <span className={styles.mono}>{'<'}</span>SG<span className={styles.mono}>{'/>'}</span>
          </span>
          <span className={styles.copy}>
            Designed & built by <span className={styles.name}>Sampreet Ghosh</span>
          </span>
        </div>
        <div className={styles.right}>
          <a href="https://github.com/Sampreet-G" target="_blank" rel="noreferrer" className={styles.link}>GitHub</a>
          <a href="https://www.linkedin.com/in/sampreetghosh/" target="_blank" rel="noreferrer" className={styles.link}>LinkedIn</a>
          <a href="mailto:ghosh.sampreet@gmail.com" className={styles.link}>Email</a>
        </div>
      </div>
      <div className={styles.bottom}>
        <span className={styles.bottomText}>Built with React · Deployed on Vercel</span>
      </div>
    </footer>
  )
}
