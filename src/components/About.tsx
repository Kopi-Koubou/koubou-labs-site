import { forwardRef } from 'react'

const About = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="section bg-white">
      <div className="container-custom">
        <h2 className="section-title">About Us</h2>
        <div className="max-w-2xl mx-auto space-y-6">
          <p className="text-lg font-heading font-semibold text-center text-primary">
            We're Koubou Labs — a studio, not a startup.
          </p>
          <p className="text-lead text-center">
            We don't raise rounds. We don't do press. We build products, learn from users, and iterate. Our work speaks for itself.
          </p>
          <p className="text-lead text-center">
            Based in Singapore. Building for the world.
          </p>
        </div>
      </div>
    </section>
  )
})

About.displayName = 'About'

export default About
