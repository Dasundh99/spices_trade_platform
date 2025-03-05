import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react';
import 'lenis/dist/lenis.css'

import Hero from './pages/Home';
import About from './pages/About';
import Exports from './pages/Exports';
import Clients from './pages/OurClients';
import ContactUs from './pages/ContactUs';
import Footer from './components/layout/Footer';
import Header from './components/common/Header';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.0, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      orientation: 'vertical', 
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={
          <main>
            <Hero />
            <About />
            <Exports />
            <Clients />
            <ContactUs />
          </main>
        } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
