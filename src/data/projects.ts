export interface Project {
  slug: string
  title: string
  subtitle?: string
  year: string
  role: string
  description: string
  tech: string[]
  features: string[]
  src: string
  color: string
  url?: string
}

export const projects: Project[] = [
  {
    slug: 'brawijaya-smarttest',
    title: 'BRAWIJAYA SMARTTEST',
    subtitle: 'Online Tryout LMS',
    year: '2026',
    role: 'Freelance Web Developer · Ingsun',
    description:
      'A comprehensive online tryout platform built as UTBK preparation. It delivers an interactive exam interface integrated with auto-grading, learning evaluation analytics, and automatic ranking based on dynamic question-weight calculation and passing-grade thresholds.',
    tech: ['Next.js', 'Express.js', 'PostgreSQL'],
    features: [
      'Interactive exam simulation',
      'Auto-grading engine',
      'Dynamic weighted scoring',
      'Passing-grade thresholds',
      'Automatic leaderboard & ranking',
      'Learning evaluation analytics'
    ],
    src: 'smart-test.png',
    color: '#ebebeb'
  },
  {
    slug: 'bmu-portal',
    title: 'BMU PORTAL',
    subtitle: 'Semi-ERP & Centralized SSO',
    year: '2025',
    role: 'Asisten Supervisor · PT Brawijaya Multi Usaha',
    description:
      'A Semi-ERP ecosystem built on a centralized SSO login that integrates the company’s internal systems with external vendors — Talenta (HRIS) and Accurate (Accounting) — through API integration, keeping data synchronized across departments in real time.',
    tech: ['Next.js', 'Express.js'],
    features: [
      'Centralized SSO login',
      'Multi-language CMS',
      'Procurement module',
      'Customer Feedback module',
      'Legal Document module',
      'Talenta & Accurate API integration',
      'Real-time cross-department sync'
    ],
    src: 'bmu-portal.png',
    color: '#ebebeb'
  },
  {
    slug: 'lph-ub',
    title: 'LPH UB',
    subtitle: 'Company Profile & CMS',
    year: '2024',
    role: 'Freelance Web Developer · Ingsun',
    description:
      'A company-profile website and custom Content Management System for LPH UB (the Halal Inspection Agency of Universitas Brawijaya), built SEO-friendly so the institution stays visible on search engines.',
    tech: ['Laravel', 'Inertia.js', 'Tailwind CSS'],
    features: ['Company profile portal', 'Custom CMS', 'SEO optimization', 'Content publishing workflow'],
    src: 'lphub.png',
    color: '#ebebeb',
    url: 'https://lphub.ub.ac.id/'
  },
  {
    slug: 'sim-lph',
    title: 'SIM LPH',
    subtitle: 'Sistem Informasi Manajemen LPH',
    year: '2025',
    role: 'Freelance Web Developer · Ingsun',
    description:
      'An end-to-end internal management system for the agency’s operations. It covers automatic cost calculation (BPJPH Standard), administrative document automation, and a process-tracking flow that ties calculation, billing, and audit together in one centralized dashboard.',
    tech: ['Next.js', 'Express.js', 'MySQL'],
    features: [
      'Automatic cost calculation (BPJPH Standard)',
      'Administrative document automation',
      'Billing management',
      'Audit process tracking',
      'Centralized operations dashboard'
    ],
    src: 'sim-lphub.png',
    color: '#ebebeb'
  },
  {
    slug: 'my-bk',
    title: 'MY-BK',
    subtitle: 'Guidance & Counseling Web App',
    year: '2024',
    role: 'Freelance Web Developer · Ingsun',
    description:
      'A Guidance & Counseling (BK) web app for junior high school (MTsN 3 Jombang) that digitizes centralized student-data management and report exporting, generating PDF documents through Puppeteer.',
    tech: ['Express.js', 'Next.js', 'Puppeteer'],
    features: ['Centralized student data', 'Counseling records', 'PDF report export', 'Role-based access'],
    src: 'mybk.png',
    color: '#ebebeb',
    url: 'https://mybk.my.id'
  }
]
