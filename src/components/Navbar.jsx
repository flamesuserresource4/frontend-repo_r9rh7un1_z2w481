import { useMemo } from 'react'
import { Mail, Phone, Globe } from 'lucide-react'

export default function Navbar({ lang, setLang, t }) {
  const navItems = useMemo(
    () => [
      { key: 'home', label: t.nav.home, href: '#home' },
      { key: 'about', label: t.nav.about, href: '#about' },
      { key: 'projects', label: t.nav.projects, href: '#projects' },
      { key: 'services', label: t.nav.services, href: '#services' },
      { key: 'process', label: t.nav.process, href: '#process' },
      { key: 'contact', label: t.nav.contact, href: '#contact' },
    ],
    [t]
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-3">
        <a href="#home" className="font-semibold tracking-tight text-white text-sm sm:text-base">Matěj Boška</a>

        <nav className="hidden md:flex items-center gap-6 text-slate-200">
          {navItems.map((item) => (
            <a key={item.key} href={item.href} className="text-sm hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="mailto:matej0boska@gmail.com" className="hidden sm:flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors">
            <Mail size={16} />
            <span>matej0boska@gmail.com</span>
          </a>
          <a href="tel:+420725111597" className="hidden lg:flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors">
            <Phone size={16} />
            <span>+420 725 111 597</span>
          </a>

          <div className="h-5 w-px bg-slate-800 hidden sm:block" />

          <div className="flex items-center gap-1 rounded-md border border-slate-800 bg-slate-900/60 px-1 py-1">
            <Globe size={16} className="text-slate-400" />
            <button
              onClick={() => setLang('cz')}
              className={`px-2 py-0.5 text-xs rounded ${lang === 'cz' ? 'bg-slate-800 text-white' : 'text-slate-300 hover:text-white'}`}
              aria-pressed={lang === 'cz'}
            >
              CZ
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-0.5 text-xs rounded ${lang === 'en' ? 'bg-slate-800 text-white' : 'text-slate-300 hover:text-white'}`}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between overflow-x-auto no-scrollbar">
          {navItems.map((item) => (
            <a key={item.key} href={item.href} className="text-sm text-slate-300 hover:text-white whitespace-nowrap px-2 py-1">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
