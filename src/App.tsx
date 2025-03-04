import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/NavBar';
import Hero from './pages/Home';
import About from './pages/About';
import Exports from './pages/Exports';
import Clients from './pages/OurClients';
import ContactUs from './pages/ContactUs';
import Footer from './components/layout/Footer';
import Header from './components/common/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Navbar /> */}
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
    </BrowserRouter >
  );
}

export default App;
<main>
  <Hero />
  <About />
  <Exports />
  <Clients />
  <ContactUs />
</main>
