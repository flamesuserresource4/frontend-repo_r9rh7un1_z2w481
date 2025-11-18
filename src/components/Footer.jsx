export default function Footer({ t, lang, setLang }) {
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-300">
        <div className="text-center sm:text-left">
          <div className="text-white font-medium">Matěj Boška</div>
          <div className="text-sm">Web builder</div>
        </div>
        <div className="flex items-center gap-4">
          <a href="#contact" className="text-sm hover:text-white">{t.nav.contact}</a>
          <div className="flex items-center gap-2 border border-slate-800 rounded-md px-2 py-1">
            <button onClick={() => setLang('cz')} className={`text-xs ${lang === 'cz' ? 'text-white' : 'text-slate-400 hover:text-white'}`}>CZ</button>
            <span className="h-3 w-px bg-slate-700" />
            <button onClick={() => setLang('en')} className={`text-xs ${lang === 'en' ? 'text-white' : 'text-slate-400 hover:text-white'}`}>EN</button>
          </div>
          <span className="text-sm text-slate-500">{new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}
