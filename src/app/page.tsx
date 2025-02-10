import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Stats from '../components/Stats'

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <Hero />
        <Stats />
        <Features />
      </main>
    </>
  )
}
