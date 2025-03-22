"use client";

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
import TropicalFruits from './pages/TropicalFruits';
import TropicalVegetables from './pages/TropicalVegetables';
import Spices from './pages/Spices';
import Coconut from './pages/Coconut';
import ProductDetails from './pages/ProductDetails';
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
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <BrowserRouter>
            <>
                <Header />
                <Routes>
                    <Route path='/' element={
                        <main>
                            <Hero />
                            <Exports />
                            <Clients />
                        </main>
                    } />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<ContactUs />} />
                    <Route path='/fruits' element={<TropicalFruits />} />
                    <Route path='/vegetables' element={<TropicalVegetables />} />
                    <Route path='/spices' element={<Spices />} />
                    <Route path='/coconut' element={<Coconut/>}/>
                    <Route path="/fruit/:name" Component={ProductDetails} />
                    <Route path="/vegetable/:name" Component={ProductDetails} />
                    <Route path="/spices/:name" Component={ProductDetails} />
                    {/* <Route path="/tea/:name" Component={ProductDetails} /> */}
                    <Route path="/coconut/:name" Component={ProductDetails} />
                </Routes>
                <Footer />
            </>
        </BrowserRouter>
    );
}

export default App;