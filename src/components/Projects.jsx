import React, { useState } from 'react'
import { useReveal } from './useReveal.js'
import styles from './Projects.module.css'

const projects = [
  {
    id: 1,
    title: 'ResumeAI',
    subtitle: 'AI-Powered Resume Analyzer',
    description: 'A full-stack ML web app that analyzes uploaded resumes, predicts suitable job roles using NLP + Logistic Regression, and generates ATS scores. Features a futuristic glassmorphism UI.',
    stack: ['React','FastAPI','Python','TF-IDF','Scikit-learn','Tailwind CSS','Vercel','Render'],
    highlights: [
      'NLP with TF-IDF vectorization + Logistic Regression for job role prediction',
      'PDF parsing using pdfplumber with ATS score generation',
      'CORS-integrated FastAPI backend deployed on Render',
    ],
    live: 'https://ai-resume-analyzer-two-nu.vercel.app/',
    github: 'https://github.com/Sampreet-G/AI-Resume-Analyzer',
    color: '#7EE8A2',
    featured: true,
    tag: 'ML + Full Stack'
  },
  {
    id: 2,
    title: 'Aspire-Sync',
    subtitle: 'Personalized Career & Education Advisor',
    description: 'A personalized career advisor web app built for Smart India Hackathon, helping students in Jammu & Kashmir make informed decisions about courses, colleges, and career paths.',
    stack: ['React','CSS','Figma','Netlify'],
    highlights: [
      'Designed and built interactive user dashboards and wireframes in Figma',
      'Implemented React frontend with custom CSS for a student-first UX',
      'Competed at Smart India Hackathon (SIH) 2024',
    ],
    live: 'https://aspiresync.netlify.app/',
    github: 'https://github.com/Sampreet-G/Aspire-Sync',
    color: '#79C0FF',
    featured: true,
    tag: 'SIH Project'
  },
  {
    id: 3,
    title: 'Netflix Clone',
    subtitle: 'Full Stack Streaming Platform',
    description: 'A full-stack Netflix clone replicating core features including user authentication via Firebase, dynamic movie listings from TMDB API, and a custom video player for trailers.',
    stack: ['React','Firebase','Node.js','Express.js','Tailwind CSS','TMDB API'],
    highlights: [
      'Firebase authentication with user registration and login',
      'Real-time movie data via TMDB API integration',
      'Fully responsive with custom video player UI',
    ],
    live: null,
    github: 'https://github.com/Sampreet-G/Netflix-Clone_SampreetG',
    color: '#FF7B72',
    featured: false,
    tag: 'Full Stack'
  }
]

export default function Projects() {
  const { ref } = useReveal()

  return (
    <section id="projects" className={styles.section} ref={ref}>
      <div className={styles.inner}>
        <div className={styles.label}>
          <span className={styles.labelNum}>03.</span>
          <span>Projects</span>
          <div className={styles.labelLine}/>
        </div>
        <h2 className={styles.heading}>Things I've built</h2>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project: p, delay }) {
  return (
    <div
      className={`${styles.card} ${p.featured ? styles.featured : ''}`}
      style={{ '--pcolor': p.color, animationDelay: `${delay}s` }}
    >
      <div className={styles.cardTop}>
        <div className={styles.cardMeta}>
          <span className={styles.folderIcon}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth="1.5">
              <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
            </svg>
          </span>
          <div className={styles.cardLinks}>
            {p.github && (
              <a href={p.github} target="_blank" rel="noreferrer" className={styles.iconLink}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
            )}
            {p.live && (
              <a href={p.live} target="_blank" rel="noreferrer" className={styles.iconLink}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
              </a>
            )}
          </div>
        </div>

        <span className={styles.tag} style={{color: p.color, borderColor: p.color}}>{p.tag}</span>
        <h3 className={styles.title}>{p.title}</h3>
        <p className={styles.subtitle}>{p.subtitle}</p>
        <p className={styles.desc}>{p.description}</p>

        <ul className={styles.highlights}>
          {p.highlights.map((h,i) => (
            <li key={i} className={styles.highlight}>
              <span className={styles.bullet} style={{color:p.color}}>▹</span>
              {h}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.stack}>
        {p.stack.map(s => (
          <span key={s} className={styles.stackTag}>{s}</span>
        ))}
      </div>
    </div>
  )
}