import { useEffect, useState } from 'react'
import { nav } from '../data'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-cream/95 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="relative flex items-center justify-between px-6 py-4 md:px-10 lg:px-14">
        <nav className="hidden flex-1 gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-[11px] font-medium tracking-[0.22em] uppercase transition-opacity hover:opacity-60 ${
                scrolled ? 'text-ink' : 'text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#top"
          className={`absolute left-1/2 -translate-x-1/2 font-serif text-[28px] leading-none tracking-[0.35em] ${
            scrolled || open ? 'text-ink' : 'text-white'
          }`}
        >
          RORA
        </a>

        <div className="hidden flex-1 justify-end lg:flex">
          <a
            href="#idopont"
            className={`border px-5 py-2 text-[11px] font-medium tracking-[0.22em] uppercase transition-colors ${
              scrolled
                ? 'border-ink text-ink hover:bg-ink hover:text-cream'
                : 'border-white/80 text-white hover:bg-white hover:text-ink'
            }`}
          >
            Időpont
          </a>
        </div>

        <button
          type="button"
          className={`relative z-50 ml-auto flex h-10 w-10 items-center justify-center lg:hidden ${
            scrolled || open ? 'text-ink' : 'text-white'
          }`}
          aria-label={open ? 'Menü bezárása' : 'Menü megnyitása'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menü</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-current transition ${open ? 'translate-y-[4px] rotate-45' : ''}`}
            />
            <span
              className={`h-px w-full bg-current transition ${open ? '-translate-y-[4px] -rotate-45' : ''}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col bg-cream px-8 pt-28 lg:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-5 font-serif text-4xl tracking-wide text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#idopont"
            onClick={() => setOpen(false)}
            className="mt-10 self-start border border-ink px-6 py-3 text-[11px] tracking-[0.22em] uppercase"
          >
            Időpont foglalása
          </a>
        </div>
      )}
    </header>
  )
}
