import { forwardRef } from 'react'

const Philosophy = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="section bg-white">
      <div className="container-custom">
        <h2 className="section-title">Our Approach</h2>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-lead">
            We believe great products come from deep focus, not hype.
            <br />
            No personalities. No roadshows. Just shipped code and happy users.
          </p>
          <p className="text-lead">
            We're a small collective of builders who've shipped at scale — from
            DeFi protocols to consumer apps. We move fast, but we don't break
            things.
          </p>
        </div>
      </div>
    </section>
  )
})

Philosophy.displayName = 'Philosophy'

export default Philosophy
