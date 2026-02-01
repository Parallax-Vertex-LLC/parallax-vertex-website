import { useState, useEffect } from 'react'
import fullLogo from './assets/parallax-vertex-llc.svg' // Using full logo for header
import './index.css'

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: (event.clientY / window.innerHeight) * 2 - 1,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl mix-blend-screen animate-pulse transition-transform duration-100 ease-out"
          style={{ transform: `translate(${mousePos.x * -40}px, ${mousePos.y * -40}px)` }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl mix-blend-screen animate-pulse delay-1000 transition-transform duration-100 ease-out"
          style={{ transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)` }}
        ></div>
      </div>

      <main
        className="max-w-4xl w-full flex flex-col items-center space-y-12 z-10 transition-transform duration-100 ease-out"
        style={{ transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)` }}
      >

        {/* Header / Logo */}
        <div className="animate-fade-in-down">
          <img src={fullLogo} alt="Parallax Vertex LLC" className="h-24 md:h-32 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
        </div>

        {/* Hero Text */}
        <div className="text-center space-y-4 max-w-2xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Building software because <br /><span className="text-gradient">I enjoy it</span>.
          </h1>
          <p className="text-slate-400 text-lg md:text-xl">
            Crafting premium digital experiences & robust applications.
          </p>
        </div>

        {/* Clients Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <a href="https://wanderlustarchers.com" target="_blank" rel="noopener noreferrer" className="glass-card group flex flex-col items-center text-center space-y-3 cursor-pointer">
            <div className="p-3 rounded-full bg-pink-500/20 text-pink-400 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white group-hover:text-pink-300 transition-colors">Wanderlust Archers</h2>
            <p className="text-sm text-slate-400">Premium Archery Experiences</p>
          </a>

          <a href="https://precisiontargettracker.com" target="_blank" rel="noopener noreferrer" className="glass-card group flex flex-col items-center text-center space-y-3 cursor-pointer">
            <div className="p-3 rounded-full bg-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">Precision Target Tracker</h2>
            <p className="text-sm text-slate-400">Advanced Archery Analytics</p>
          </a>

          <a href="https://pulseintervaltimer.com" target="_blank" rel="noopener noreferrer" className="glass-card group flex flex-col items-center text-center space-y-3 cursor-pointer">
            <div className="p-3 rounded-full bg-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white group-hover:text-emerald-300 transition-colors">Pulse Interval Timer</h2>
            <p className="text-sm text-slate-400">Customizable Workout Timers</p>
          </a>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 mb-2">Business Inquiries</p>
          <a href="mailto:tim@parallaxvertex.com" className="text-lg font-medium text-slate-300 hover:text-white hover:underline decoration-cyan-500 underline-offset-4 transition-all">
            tim@parallaxvertex.com
          </a>
        </div>

      </main>

      <footer className="absolute bottom-4 text-xs text-slate-600">
        &copy; {new Date().getFullYear()} Parallax Vertex LLC. All rights reserved.
      </footer>
    </div>
  )
}

export default App
