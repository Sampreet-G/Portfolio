import React, { useState } from 'react'
import { useReveal } from './useReveal.js'
import styles from './Contact.module.css'

export default function Contact() {
  const { ref } = useReveal()
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('ghosh.sampreet@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className={styles.section} ref={ref}>
      <div className={styles.inner}>
        <div className={styles.label}>
          <span className={styles.labelNum}>06.</span>
          <span>Contact</span>
          <div className={styles.labelLine} />
        </div>

        <div className={styles.grid}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              Let's build something<br />
              <span className={styles.accent}>together</span>
            </h2>
            <p className={styles.body}>
              I'm actively looking for internship opportunities in full-stack development
              and AI/ML engineering. Whether you have a project, a role, or just want to
              talk tech — my inbox is always open.
            </p>
            <p className={styles.body}>
              I typically reply within 24 hours.
            </p>

            <div className={styles.links}>
              <a href="https://github.com/Sampreet-G" target="_blank" rel="noreferrer" className={styles.linkItem}>
                <span className={styles.linkIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                </span>
                <div>
                  <div className={styles.linkTitle}>GitHub</div>
                  <div className={styles.linkSub}>github.com/Sampreet-G</div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/sampreetghosh/" target="_blank" rel="noreferrer" className={styles.linkItem}>
                <span className={styles.linkIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </span>
                <div>
                  <div className={styles.linkTitle}>LinkedIn</div>
                  <div className={styles.linkSub}>in/sampreetghosh</div>
                </div>
              </a>

              <a href="https://www.leetcode.com/sampreetghosh" target="_blank" rel="noreferrer" className={styles.linkItem}>
                <span className={styles.linkIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                  </svg>
                </span>
                <div>
                  <div className={styles.linkTitle}>LeetCode</div>
                  <div className={styles.linkSub}>230+ problems solved</div>
                </div>
              </a>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.emailCard}>
              <div className={styles.emailLabel}>Shoot me an email</div>
              <div className={styles.emailAddress}>ghosh.sampreet@gmail.com</div>
              <div className={styles.emailActions}>
                <button className={styles.copyBtn} onClick={copyEmail}>
                  {copied ? (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                      </svg>
                      Copy Email
                    </>
                  )}
                </button>
                <a href="mailto:ghosh.sampreet@gmail.com" className={styles.mailBtn}>
                  Open Mail ↗
                </a>
              </div>
            </div>

            <div className={styles.terminalCard}>
              <div className={styles.termHeader}>
                <span className={styles.termDot} style={{background:'#FF5F56'}}/>
                <span className={styles.termDot} style={{background:'#FFBD2E'}}/>
                <span className={styles.termDot} style={{background:'#27C93F'}}/>
                <span className={styles.termTitle}>terminal</span>
              </div>
              <div className={styles.termBody}>
                <div className={styles.termLine}>
                  <span className={styles.termPrompt}>$</span>
                  <span className={styles.termCmd}> ping sampreet</span>
                </div>
                <div className={styles.termOutput}>PING sampreet (ghosh.sampreet@gmail.com)</div>
                <div className={styles.termOutput} style={{color:'var(--green)'}}>64 bytes from sampreet: reply in &lt;24h</div>
                <div className={styles.termOutput} style={{color:'var(--text3)'}}>status: open_to_opportunities=true</div>
                <div className={styles.termLine} style={{marginTop:'8px'}}>
                  <span className={styles.termPrompt}>$</span>
                  <span className={styles.termCursor}>█</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}