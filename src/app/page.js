import Contact from '@/Components/Contact'
import Features from '@/Components/Features'
import Hero from '@/Components/Hero'
import Services from '@/Components/Services'
import AnimationEffect from './Animation'


export default function Home() {
  return (
    <main>
      <AnimationEffect delay={0.3}>
        <Hero />
      </AnimationEffect>
      <AnimationEffect delay={0.3}>
        <Features />
      </AnimationEffect>
      <AnimationEffect delay={0.3}>
        <Services />
      </AnimationEffect>
      <AnimationEffect delay={0.3}>
        <Contact />
      </AnimationEffect>
    </main>
  )
}
