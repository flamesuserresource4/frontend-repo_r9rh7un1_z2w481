export default function Services({ t }) {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">{t.nav.services}</h2>
      <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {t.services.items.map((s, idx) => (
          <li key={idx} className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 text-slate-200">
            <span className="text-base">{s}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
