import Navbar from './components/layout/NavBar'
import Hero from './pages/Home'
import About from './pages/About'

function App() {

  return (
    <>
      <div className="font-sans">
        <Navbar />
        <Hero />
        <About />
      </div>
    </>
  )
}

export default App
