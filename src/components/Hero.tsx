export function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] overflow-hidden">
      <img
        src={`${import.meta.env.BASE_URL}images/hero.jpg`}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/20 to-ink/35" />
      <div className="relative flex h-full flex-col items-center justify-end px-6 pb-16 text-center text-white md:pb-20">
        <p className="mb-5 text-[11px] font-medium tracking-[0.38em] uppercase">
          Budapest · Fodrász és pedikűr
        </p>
        <h1 className="font-serif text-6xl font-normal tracking-[0.08em] md:text-8xl">
          RORA
        </h1>
        <p className="mt-6 max-w-md text-sm font-light leading-relaxed tracking-[0.08em] text-white/85">
          A forma, letisztultan.
        </p>
        <a
          href="#szolgaltatasok"
          className="mt-10 border border-white/80 px-8 py-3 text-[11px] font-medium tracking-[0.24em] uppercase transition hover:bg-white hover:text-ink"
        >
          Fedezd fel
        </a>
      </div>
    </section>
  )
}
