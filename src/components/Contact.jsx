export default function Contact({ t }) {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-4 py-16">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">{t.contact.title}</h2>
            <p className="text-slate-300 mt-2">{t.contact.subtitle}</p>
          </div>
          <div className="space-y-2 text-slate-200">
            <a className="block hover:underline" href="mailto:matej0boska@gmail.com">matej0boska@gmail.com</a>
            <a className="block hover:underline" href="tel:+420725111597">+420 725 111 597</a>
          </div>
        </div>
      </div>
    </section>
  )
}
