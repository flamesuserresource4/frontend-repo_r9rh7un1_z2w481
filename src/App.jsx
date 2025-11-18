import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Services from './components/Services'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

const dictionary = {
  cz: {
    nav: {
      home: 'Domů',
      about: 'O mně',
      projects: 'Projekty',
      services: 'Služby',
      process: 'Proces',
      contact: 'Kontakt',
    },
    hero: {
      title: 'Jsem Matěj Boška.',
      subtitle:
        'Stavím malé, funkční a moderní weby pro podnikatele a malé firmy. Dělám návrh, UX, UI i implementaci. Rychle, jednoduše a bez zbytečných řečí.',
      ctaPrimary: 'Domluvit web',
      ctaSecondary: 'Podívat se na projekty',
    },
    about: {
      timeline: [
        {
          period: '2024 – současnost',
          title: 'VŠE – Fakulta informatiky a statistiky',
          desc: 'Aplikovaná informatika (Bc.)',
        },
        {
          period: '2024 – současnost',
          title: 'Web builder na volné noze',
          desc: 'Tvorba webů, UX/UI, návrhy, redesigny, analýzy, struktura obsahu, implementace.',
        },
        {
          period: '2024 – 2025',
          title: 'Projekt veteranskoda.cz pro Marka Šmejckého',
          desc: 'Kompletní návrh, UX/UI, struktura, vývoj, optimalizace.',
        },
        {
          period: '2025 – současnost',
          title: 'Projekt pro Lukáše Kuklu (probíhá)',
          desc: 'Návrh webu, obsah, struktura, implementace.',
        },
        {
          period: '2020 – 2024',
          title: 'SPŠE Ječná – maturita',
          desc: 'IT zaměření, technické základy, programování, webové technologie.',
        },
        {
          period: 'Koníčky',
          title: 'Bodybuilding a gym',
          desc: 'Dlouhodobý cíl stát se IFBB Pro.',
        },
      ],
    },
    projects: {
      list: [
        {
          name: 'veteranskoda.cz – kompletní web',
          status: 'Hotovo',
          desc: 'Návrh, obsah, UX/UI, vývoj, testování.',
          href: 'https://veteranskoda.cz',
        },
        {
          name: 'sarecka.cz – kompletní web',
          status: 'Hotovo',
          desc: 'Návrh, vývoj, optimalizace a nasazení.',
          href: 'https://sarecka.cz',
        },
        {
          name: 'Lukáš Kukla – nový web (probíhá)',
          status: 'Probíhá',
          desc: 'Návrh, struktura, UI/UX, implementace.',
        },
      ],
    },
    services: {
      items: [
        'Kompletní web na míru',
        'UX/UI návrhy',
        'Redesign webu',
        'Informační architektura',
        'Základní copywriting',
        'Optimalizace pro Google Maps (lokální viditelnost)',
      ],
    },
    process: {
      steps: [
        'Krátký call',
        'Návrh struktury',
        'UX/UI design',
        'Implementace',
        'Testování',
        'Předání projektu',
      ],
    },
    contact: {
      title: 'Chceš nový web? Ozvi se.',
      subtitle: 'matej0boska@gmail.com',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      services: 'Services',
      process: 'Process',
      contact: 'Contact',
    },
    hero: {
      title: 'I’m Matěj Boška.',
      subtitle:
        'I build small, clean and functional websites for entrepreneurs and small businesses. I handle design, UX, UI and implementation. Fast and straightforward.',
      ctaPrimary: 'Book a website',
      ctaSecondary: 'View projects',
    },
    about: {
      timeline: [
        {
          period: '2024 – present',
          title: 'University of Economics in Prague – Faculty of Informatics and Statistics',
          desc: 'Applied Informatics (Bachelor)',
        },
        {
          period: '2024 – present',
          title: 'Freelance web builder',
          desc: 'Complete web creation, UX/UI design, redesigns, content structure, implementation.',
        },
        {
          period: '2024 – 2025',
          title: 'Veteranskoda.cz project for Marek Šmejcký',
          desc: 'Full design, UX/UI, structure, development.',
        },
        {
          period: '2025 – present',
          title: 'Project for Lukáš Kukla (ongoing)',
          desc: 'Draft, structure, design and implementation.',
        },
        {
          period: '2020 – 2024',
          title: 'SPŠE Ječná – Graduation',
          desc: 'IT specialization, programming, web foundations.',
        },
        {
          period: 'Hobbies',
          title: 'Bodybuilding and gym',
          desc: 'Long-term goal to become IFBB Pro.',
        },
      ],
    },
    projects: {
      list: [
        {
          name: 'veteranskoda.cz – full website',
          status: 'Completed',
          desc: 'Design, content, UX/UI, development.',
          href: 'https://veteranskoda.cz',
        },
        {
          name: 'sarecka.cz – full website',
          status: 'Completed',
          desc: 'Design, development, optimization and deployment.',
          href: 'https://sarecka.cz',
        },
        {
          name: 'Lukáš Kukla – new website (in progress)',
          status: 'In progress',
          desc: 'Structure, design, UX/UI, implementation.',
        },
      ],
    },
    services: {
      items: [
        'Complete custom websites',
        'UX/UI design',
        'Website redesign',
        'Information architecture',
        'Basic copywriting',
        'Local SEO for Google Maps',
      ],
    },
    process: {
      steps: [
        'Short call',
        'Structure proposal',
        'UX/UI design',
        'Implementation',
        'Testing',
        'Delivery',
      ],
    },
    contact: {
      title: 'Want a new website? Get in touch.',
      subtitle: 'matej0boska@gmail.com',
    },
  },
}

export default function App() {
  const [lang, setLang] = useState('cz')

  useEffect(() => {
    const saved = localStorage.getItem('lang')
    if (saved === 'cz' || saved === 'en') setLang(saved)
    else setLang('cz')
  }, [])

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  const t = useMemo(() => dictionary[lang], [lang])

  // account for fixed navbar offset when using anchor navigation
  useEffect(() => {
    const headerHeight = 72
    const ids = ['home','about','projects','services','process','contact']
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) el.style.scrollMarginTop = `${headerHeight}px`
    })
  }, [])

  // intersection observer for reveal-on-scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('in-view')
      })
    }, { threshold: 0.12 })

    const els = document.querySelectorAll('[data-reveal]')
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.06),transparent_40%)]" />
      <Navbar lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={{ hero: t.hero }} />
        <Timeline t={t} />
        <Projects t={t} />
        <Services t={t} />
        <Process t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} lang={lang} setLang={setLang} />
    </div>
  )
}
