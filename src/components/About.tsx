export function About() {
  return (
    <section id="rolunk" className="grid lg:grid-cols-2">
      <div className="relative min-h-[520px] overflow-hidden bg-sand lg:min-h-[760px]">
        <img
          src={`${import.meta.env.BASE_URL}images/about.jpg`}
          alt="A RORA szalon"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center bg-cream px-8 py-20 md:px-16 lg:px-20">
        <p className="mb-4 text-[11px] tracking-[0.28em] text-muted uppercase">A szalon</p>
        <h2 className="font-serif text-4xl leading-tight tracking-wide md:text-5xl">
          Fodrász.
          <br />
          Pedikűr.
        </h2>
        <p className="mt-8 max-w-md text-sm leading-[1.85] text-muted">
          A RORA Budapesten két dologra figyel: a hajra és a lábra. Nincs masszázs,
          nincs arckezelés, nincs extra menü — csak tiszta vágás, festés és pedikűr.
        </p>
        <p className="mt-5 max-w-md text-sm leading-[1.85] text-muted">
          Letisztult tér, lassú ritmus, precíz kezek. A forma a tiéd, a felesleg kint marad.
        </p>
      </div>
    </section>
  )
}
