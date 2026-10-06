import { gallery } from '../data'

export function Gallery() {
  return (
    <section className="px-2 py-2 md:px-3">
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
        {gallery.map((src) => (
          <div key={src} className="relative aspect-[4/5] overflow-hidden bg-sand">
            <img src={src} alt="" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}
