import Features from '@/Components/Features'
import Hero from '@/Components/Hero'
import Services from '@/Components/Services'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Services />
    </main>
  )
}
