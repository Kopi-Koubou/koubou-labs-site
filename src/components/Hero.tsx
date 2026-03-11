import { forwardRef } from 'react'

const Hero = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center py-24"
    >
      <div className="container-custom text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 animate-fade-in-up" style={{ letterSpacing: '-0.02em' }}>
          Koubou Labs
        </h1>
        <p className="text-lg md:text-xl text-lead mb-4 animate-fade-in-up-delayed">
          We build products people actually use.
        </p>
        <p className="text-base md:text-lg text-lead max-w-2xl mx-auto animate-fade-in-up-delayed" style={{ animationDelay: '0.2s' }}>
          A studio crafting thoughtful software at the intersection of design and technology.
        </p>
      </div>
    </section>
  )
})

Hero.displayName = 'Hero'

export default Hero
