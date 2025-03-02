import Navbar from './components/layout/NavBar'
import Hero from './pages/Home'
import About from './pages/About'
import Exports from './pages/Exports'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Exports/>
      </main>
      <Footer />
    </div>
  );
}


export default App
