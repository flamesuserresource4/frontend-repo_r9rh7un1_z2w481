export default function Timeline({ t }) {
  const items = t.about.timeline
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">{t.nav.about}</h2>
      <div className="mt-10 relative">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-slate-800" />
        <ul className="space-y-12">
          {items.map((item, idx) => (
            <li key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* Left */}
              <div className={`md:pr-10 ${idx % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                {idx % 2 === 0 && (
                  <div className="md:text-right">
                    <p className="text-xs uppercase tracking-wider text-slate-400">{item.period}</p>
                    <h3 className="text-lg font-medium text-white mt-1">{item.title}</h3>
                    <p className="text-slate-300 mt-2 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                )}
              </div>
              {/* Right */}
              <div className={`md:pl-10 ${idx % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                {idx % 2 === 1 && (
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-400">{item.period}</p>
                    <h3 className="text-lg font-medium text-white mt-1">{item.title}</h3>
                    <p className="text-slate-300 mt-2 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
