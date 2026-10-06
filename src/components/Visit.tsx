import { bookingOptions } from '../data'
import { useState, type FormEvent } from 'react'

export function Visit() {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section id="latogatas" className="grid lg:grid-cols-2">
      <div className="flex flex-col justify-center px-8 py-20 md:px-16 lg:px-20">
        <p className="mb-4 text-[11px] tracking-[0.28em] text-muted uppercase">Látogatás</p>
        <h2 className="font-serif text-4xl tracking-wide md:text-5xl">A szalon</h2>
        <p className="mt-8 max-w-sm text-sm leading-[1.85] text-muted">
          Budapest külvárosa. Fodrász és pedikűr — egy csendes térben.
        </p>

        <div className="mt-12 space-y-8 text-sm">
          <div>
            <p className="text-[11px] tracking-[0.2em] text-muted uppercase">Cím</p>
            <p className="mt-2 leading-relaxed">
              Csíkszereda utca 2.
              <br />
              1182 Budapest
            </p>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.2em] text-muted uppercase">Nyitvatartás</p>
            <p className="mt-2 leading-relaxed">
              Hétfő–péntek · 10:00–19:00
              <br />
              Szombat · 10:00–16:00
              <br />
              Vasárnap · zárva
            </p>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.2em] text-muted uppercase">Kapcsolat</p>
            <p className="mt-2 leading-relaxed">
              <a href="mailto:hello@rora.salon" className="underline-offset-4 hover:underline">
                rora@rora.hu
              </a>
              <br />
              +36 30 --- ----
            </p>
          </div>
        </div>
      </div>

      <div id="idopont" className="bg-sand/70 px-8 py-20 md:px-16 lg:px-20">
        <p className="mb-4 text-[11px] tracking-[0.28em] text-muted uppercase">Foglalás</p>
        <h2 className="font-serif text-4xl tracking-wide">Időpont</h2>

        {sent ? (
          <p className="mt-10 max-w-sm text-sm leading-relaxed">
            Köszönjük. Visszaigazolást küldünk 24 órán belül.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="mt-10 grid gap-5">
            <label className="grid gap-2 text-[11px] tracking-[0.18em] uppercase">
              Név
              <input
                required
                name="name"
                className="border-0 border-b border-line bg-transparent py-2 text-sm tracking-normal normal-case outline-none focus:border-ink"
              />
            </label>
            <label className="grid gap-2 text-[11px] tracking-[0.18em] uppercase">
              Email
              <input
                required
                type="email"
                name="email"
                className="border-0 border-b border-line bg-transparent py-2 text-sm tracking-normal normal-case outline-none focus:border-ink"
              />
            </label>
            <label className="grid gap-2 text-[11px] tracking-[0.18em] uppercase">
              Telefon
              <input
                required
                type="tel"
                name="phone"
                className="border-0 border-b border-line bg-transparent py-2 text-sm tracking-normal normal-case outline-none focus:border-ink"
              />
            </label>
            <label className="grid gap-2 text-[11px] tracking-[0.18em] uppercase">
              Szolgáltatás
              <select
                required
                name="service"
                defaultValue=""
                className="border-0 border-b border-line bg-transparent py-2 text-sm tracking-normal normal-case outline-none focus:border-ink"
              >
                <option value="" disabled>
                  Válassz
                </option>
                {bookingOptions.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-[11px] tracking-[0.18em] uppercase">
              Preferált nap
              <input
                required
                type="date"
                name="date"
                className="border-0 border-b border-line bg-transparent py-2 text-sm tracking-normal normal-case outline-none focus:border-ink"
              />
            </label>
            <button
              type="submit"
              className="mt-4 self-start border border-ink bg-ink px-8 py-3 text-[11px] tracking-[0.24em] text-cream uppercase transition hover:bg-transparent hover:text-ink"
            >
              Kérem az időpontot
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
