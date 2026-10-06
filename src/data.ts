export const nav = [
  { href: '#szolgaltatasok', label: 'Szolgáltatások' },
  { href: '#rolunk', label: 'Rólunk' },
  { href: '#arak', label: 'Árak' },
  { href: '#latogatas', label: 'Látogatás' },
]

export const services = [
  {
    title: 'Fodrász',
    description: 'Vágás, festés, forma. Tiszta vonalak, semmi felesleg.',
    image: '/images/hair.jpg',
  },
  {
    title: 'Pedikűr',
    description: 'Klasszikus és esztétikai pedikűr. Precíz, nyugodt, tartós.',
    image: '/images/pedi.jpg',
  },
]

export const treatmentGroups = [
  {
    title: 'Fodrász',
    items: [
      { name: 'Női vágás', duration: '45 perc', price: '8 900 Ft', note: 'Konzultáció, mosás, forma.' },
      { name: 'Férfi vágás', duration: '30 perc', price: '6 500 Ft', note: 'Tiszta, rövid, pontos.' },
      { name: 'Mosás + szárítás', duration: '40 perc', price: '7 900 Ft', note: 'Ápolás és forma.' },
      { name: 'Festés', duration: '90 perc', price: '16 900 Ft', note: 'Egyszín, tő, frissítés.' },
      { name: 'Melír', duration: '120 perc', price: '22 900 Ft', note: 'Fény, mélység, természetes átmenet.' },
    ],
  },
  {
    title: 'Pedikűr',
    items: [
      { name: 'Klasszikus pedikűr', duration: '50 perc', price: '8 900 Ft', note: 'Ápolás, forma, tisztítás.' },
      { name: 'Esztétikai pedikűr', duration: '70 perc', price: '12 900 Ft', note: 'Lakk vagy gél lakk.' },
      { name: 'Gél lakk', duration: '60 perc', price: '10 900 Ft', note: 'Tartós, letisztult szín.' },
      { name: 'Gyógy pedikűr', duration: '60 perc', price: '14 900 Ft', note: 'Bőrkérgesedés, körömápolás.' },
    ],
  },
]

export const bookingOptions = treatmentGroups.flatMap((group) =>
  group.items.map((item) => `${group.title} — ${item.name}`),
)

export const gallery = [
  '/images/g1.jpg',
  '/images/g3.jpg',
  '/images/g2.jpg',
  '/images/g4.jpg',
  '/images/hero.jpg',
  '/images/pedi.jpg',
]
