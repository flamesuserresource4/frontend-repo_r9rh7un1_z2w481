export default function Process({ t }) {
  return (
    <section id="process" data-reveal className="relative mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">{t.nav.process}</h2>
      <ol className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {t.process.steps.map((step, idx) => (
          <li key={idx} className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 text-slate-200">
            <span className="text-sm text-slate-400">{String(idx + 1).padStart(2, '0')}</span>
            <div className="mt-1 text-base">{step}</div>
          </li>
        ))}
      </ol>
    </section>
  )
}
