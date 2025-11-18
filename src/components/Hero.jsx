import Spline from '@splinetool/react-spline'

export default function Hero({ t }) {
  return (
    <section id="home" className="relative pt-28 sm:pt-32 md:pt-36">
      <div className="absolute inset-0">
        <div className="h-[520px] sm:h-[560px] md:h-[640px] lg:h-[700px]">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/60 to-slate-950"></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="max-w-2xl py-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
            {t.hero.title}
          </h1>
          <p className="mt-5 text-slate-300 text-base sm:text-lg leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-500 transition-colors">
              {t.hero.ctaPrimary}
            </a>
            <a href="#projects" className="inline-flex items-center justify-center rounded-md border border-slate-800 text-slate-100 px-4 py-2 text-sm font-medium hover:bg-slate-800/60 transition-colors">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
