import { About } from './components/About'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Treatments } from './components/Treatments'
import { Quote } from './components/Quote'
import { Visit } from './components/Visit'

function App() {
  return (
    <div className="bg-cream text-ink">
      <Header />
      <main>
        <Hero />
        <Services />
        <Quote />
        <About />
        <Treatments />
        <Gallery />
        <Visit />
      </main>
      <Footer />
    </div>
  )
}

export default App
