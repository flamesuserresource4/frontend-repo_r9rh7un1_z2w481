export default function Projects({ t }) {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">{t.nav.projects}</h2>
      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        {t.projects.list.map((p, idx) => (
          <div key={idx} className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 hover:bg-slate-900/60 transition-colors">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-white">{p.name}</h3>
              <span className="text-xs text-slate-400">{p.status}</span>
            </div>
            <p className="text-slate-300 mt-2 text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
