import Navbar from './components/layout/NavBar'
import Hero from './pages/Home'
import About from './pages/About'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  );
}


export default App
