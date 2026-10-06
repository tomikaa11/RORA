export function Footer() {
  return (
    <footer className="border-t border-line bg-cream px-6 py-16 md:px-10 lg:px-14">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="font-serif text-3xl tracking-[0.28em]">RORA</p>
          <p className="mt-3 text-sm text-muted">Beauty Salon.</p>
        </div>
        <p className="text-[11px] tracking-[0.16em] text-muted uppercase">
          Csíkszereda utca 2. · Budapest
        </p>
      </div>
      <div className="mt-16 text-[11px] tracking-[0.16em] text-muted uppercase">
        © {new Date().getFullYear()} RORA
      </div>
    </footer>
  )
}
