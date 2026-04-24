import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = ['about','skills','projects','experience','certifications','contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [darkMode])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <button className={styles.logo} onClick={() => window.scrollTo({top:0,behavior:'smooth'})}>
          <span className={styles.logoMono}>{'<'}</span>
          SG
          <span className={styles.logoMono}>{'/>'}</span>
        </button>

        <ul className={styles.links}>
          {links.map((l, idx) => (
            <li key={l}>
              <button onClick={() => scrollTo(l)} className={styles.link}>
                <span className={styles.linkNum}>{'0' + (idx + 1) + '.'}</span>
                {l}
              </button>
            </li>
          ))}
          <li>
            <button
              className={styles.themeToggle}
              onClick={() => setDarkMode(!darkMode)}
              title="Toggle dark/light mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/your-resume-link"
              target="_blank"
              rel="noreferrer"
              className={styles.resumeBtn}
            >
              Resume ↗
            </a>
          </li>
        </ul>

        <button className={styles.hamburger} onClick={() => setOpen(!open)} aria-label="menu">
          <span className={open ? styles.barOpen1 : styles.bar}/>
          <span className={open ? styles.barOpen2 : styles.bar}/>
          <span className={open ? styles.barOpen3 : styles.bar}/>
        </button>
      </div>

      {open && (
        <div className={styles.mobileMenu}>
          {links.map((l, i) => (
            <button key={l} onClick={() => scrollTo(l)} className={styles.mobileLink}
              style={{animationDelay: `${i*0.07}s`}}>
              <span className={styles.linkNum}>{'0'+(i+1)+'.'}</span>{l}
            </button>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={styles.mobileThemeToggle}
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
          <a href="https://drive.google.com/file/d/your-resume-link" target="_blank"
            rel="noreferrer" className={styles.mobileResume}>Resume ↗</a>
        </div>
      )}
    </nav>
  )
}