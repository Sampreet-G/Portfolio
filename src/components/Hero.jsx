import React, { useEffect, useRef, useState } from 'react'
import styles from './Hero.module.css'

const roles = [
  'Full Stack Developer',
  'ML Engineer',
  'React Developer',
  'Open Source Contributor',
  'Problem Solver'
]

function useTypewriter(words, speed=90, pause=1800) {
  const [display, setDisplay] = useState('')
  const [wIdx, setWIdx] = useState(0)
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    let timer
    const word = words[wIdx]
    if (typing) {
      if (display.length < word.length) {
        timer = setTimeout(() => setDisplay(word.slice(0, display.length+1)), speed)
      } else {
        timer = setTimeout(() => setTyping(false), pause)
      }
    } else {
      if (display.length > 0) {
        timer = setTimeout(() => setDisplay(display.slice(0,-1)), speed/2)
      } else {
        setWIdx((wIdx+1) % words.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timer)
  }, [display, typing, wIdx])

  return display
}

export default function Hero() {
  const typed = useTypewriter(roles)
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles = Array.from({length: 60}, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.1
    }))

    let raf
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2)
        ctx.fillStyle = `rgba(126,232,162,${p.alpha})`
        ctx.fill()
      })
      for (let i=0; i<particles.length; i++) {
        for (let j=i+1; j<particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx*dx+dy*dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(126,232,162,${0.08*(1-dist/100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section className={styles.hero} id="hero">
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.gridBg}/>
      <div className={styles.orb1}/>
      <div className={styles.orb2}/>

      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.greeting}>
            <span className={styles.greetMono}>{'> '}</span>
            Hello, World!
          </div>

          <h1 className={styles.name}>
            Sampreet<br/>
            <span className={styles.nameAccent}>Ghosh</span>
          </h1>

          <div className={styles.roleRow}>
            <span className={styles.roleMono}>$ </span>
            <span className={styles.roleTyped}>{typed}</span>
            <span className={styles.cursor}>|</span>
          </div>

          <p className={styles.tagline}>
            B.Tech CSE @ NSEC '27 · Building full-stack apps and AI tools that solve real problems.
            230+ DSA problems on LeetCode. Open to internships.
          </p>

          <div className={styles.cta}>
            <button className={styles.btnPrimary}
              onClick={() => document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}>
              See My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button className={styles.btnSecondary}
              onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>
              Get In Touch
            </button>
          </div>

          <div className={styles.socials}>
            <a href="https://github.com/Sampreet-G" target="_blank" rel="noreferrer" className={styles.socialLink}>
              <GithubIcon/> GitHub
            </a>
            <a href="https://www.linkedin.com/in/sampreetghosh/" target="_blank" rel="noreferrer" className={styles.socialLink}>
              <LinkedinIcon/> LinkedIn
            </a>
            <a href="mailto:ghosh.sampreet@gmail.com" className={styles.socialLink}>
              <MailIcon/> Email
            </a>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.codeCard}>
            <div className={styles.codeHeader}>
              <span className={styles.dot} style={{background:'#FF5F56'}}/>
              <span className={styles.dot} style={{background:'#FFBD2E'}}/>
              <span className={styles.dot} style={{background:'#27C93F'}}/>
              <span className={styles.fileName}>sampreet.json</span>
            </div>
            <pre className={styles.codeBody}>{`{
  `}<span className={styles.cKey}>"name"</span>{`: `}<span className={styles.cStr}>"Sampreet Ghosh"</span>{`,
  `}<span className={styles.cKey}>"role"</span>{`: `}<span className={styles.cStr}>"Full Stack + ML Dev"</span>{`,
  `}<span className={styles.cKey}>"stack"</span>{`: [
    `}<span className={styles.cStr}>"React"</span>{`, `}<span className={styles.cStr}>"Node.js"</span>{`,
    `}<span className={styles.cStr}>"Python"</span>{`, `}<span className={styles.cStr}>"FastAPI"</span>{`,
    `}<span className={styles.cStr}>"MongoDB"</span>
{`  ],`}
{`  `}<span className={styles.cKey}>"dsa"</span>{`: `}<span className={styles.cNum}>"230+ LeetCode"</span>{`,
  `}<span className={styles.cKey}>"openSource"</span>{`: `}<span className={styles.cBool}>true</span>{`,
  `}<span className={styles.cKey}>"location"</span>{`: `}<span className={styles.cStr}>"Kolkata, IN"</span>{`,
  `}<span className={styles.cKey}>"available"</span>{`: `}<span className={styles.cBool}>true</span>
{`}`}</pre>
          </div>

          <div className={styles.statsRow}>
            {[
              {num:'230+', label:'DSA Solved'},
              {num:'3', label:'Live Projects'},
              {num:'2', label:'OSS Contributions'},
              {num:'5', label:'Certifications'},
            ].map(s => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span className={styles.scrollText}>scroll</span>
        <div className={styles.scrollLine}/>
      </div>
    </section>
  )
}

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
)
const LinkedinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)
const MailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)