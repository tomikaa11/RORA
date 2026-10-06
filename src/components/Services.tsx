import { services } from '../data'

export function Services() {
  return (
    <section id="szolgaltatasok" className="px-6 py-24 md:px-10 lg:px-14 lg:py-32">
      <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="mb-3 text-[11px] tracking-[0.28em] text-muted uppercase">
            Két szolgáltatás
          </p>
          <h2 className="font-serif text-4xl tracking-wide md:text-5xl">Fodrász és pedikűr</h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          Ennyi. Pontos vágás, tiszta forma, ápolt láb — felesleg nélkül.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <a key={service.title} href="#arak" className="group block">
            <div className="relative aspect-[4/5] overflow-hidden bg-sand md:aspect-[3/4]">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-ink/10 transition group-hover:bg-ink/5" />
            </div>
            <div className="pt-5">
              <h3 className="text-[13px] font-medium tracking-[0.18em] uppercase">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
