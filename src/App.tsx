import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  return (
    <main className="font-sans">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:text-stone-900 focus:shadow-md"
      >
        Skip to content
      </a>
      <div id="main-content">
        <Hero />
        <Philosophy />
        <Portfolio />
        <About />
        <Contact />
      </div>
    </main>
  )
}
