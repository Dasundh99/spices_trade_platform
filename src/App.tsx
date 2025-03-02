import Navbar from './components/layout/NavBar'
import Hero from './pages/Home'
import About from './pages/About'
import Exports from './pages/Exports'
import Clients from './pages/OurClients'
import ContactUs from './pages/ContactUs'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Exports/>
        <Clients />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}


export default App
