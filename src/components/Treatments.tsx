import { treatmentGroups } from '../data'

export function Treatments() {
  return (
    <section id="arak" className="bg-sand/50 px-6 py-24 md:px-10 lg:px-14 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-center text-[11px] tracking-[0.28em] text-muted uppercase">
          Árlista
        </p>
        <h2 className="mb-16 text-center font-serif text-4xl tracking-wide md:text-5xl">
          Fodrász és pedikűr
        </h2>

        <div className="grid gap-16">
          {treatmentGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-2 text-[11px] tracking-[0.28em] text-muted uppercase">
                {group.title}
              </h3>
              <ul className="divide-y divide-line border-y border-line">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 py-7 md:grid-cols-[1.4fr_1fr_auto]"
                  >
                    <h4 className="text-[15px] font-medium tracking-[0.08em] uppercase">
                      {item.name}
                    </h4>
                    <p className="col-span-2 text-sm text-muted md:col-span-1 md:text-right">
                      {item.note}
                      <span className="mx-2 text-stone">·</span>
                      {item.duration}
                    </p>
                    <p className="text-[15px] tracking-wide">{item.price}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
