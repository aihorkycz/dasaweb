import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Hours from '@/components/Hours'
import Pricing from '@/components/Pricing'
import Equipment from '@/components/Equipment'
import Dula from '@/components/Dula'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Hours />
      <Pricing />
      <Equipment />
      <Dula />
      <Contact />
      <Footer />
    </main>
  )
}


