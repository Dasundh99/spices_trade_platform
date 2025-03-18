"use client";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Lenis from '@studio-freight/lenis'
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
import Tea from './pages/Tea';
import ProductDetails from './pages/ProductDetails';
import Header from './components/common/Header';

// Preloader component
const Preloader = () => {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({width: 0, height:0});

    const words = ["GSGreen Lanka (Pvt) Ltd"];
    const opacity = {
        initial: { opacity: 0 },
        enter: { opacity: 1, transition: { duration: 1 } }
    };
    const slideUp = {
        initial: { y: 0 },
        exit: { y: "-100vh", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }
    };

    useEffect(() => {
        setDimension({width: window.innerWidth, height: window.innerHeight});
    }, []);

    useEffect(() => {
        if(index === words.length - 1) return;
        setTimeout(() => {
            setIndex(index + 1);
        }, index === 0 ? 1000 : 150);
    }, [index]);

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height} L0 0`;
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height} L0 0`;

    const curve = {
        initial: {
            d: initialPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
        },
        exit: {
            d: targetPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3}
        }
    };

    return (
        <motion.div 
            variants={slideUp} 
            initial="initial" 
            exit="exit" 
            className='w-full h-screen bg-[#141516] flex justify-center items-center fixed z-50'
        >
            {dimension.width > 0 && 
            <>
                <motion.p 
                    className='flex text-white text-[42px] items-center absolute z-10' 
                    variants={opacity} 
                    initial="initial" 
                    animate="enter"
                >
                    <span className='block w-2.5 h-2.5 bg-white rounded-full mr-2.5'></span>
                    {words[index]}
                </motion.p>
                <svg className='absolute top-0 w-full h-[calc(100%+300px)]' viewBox={`0 0 ${dimension.width} ${dimension.height + 300}`}>
                    <motion.path 
                        className="fill-[#141516]" 
                        variants={curve} 
                        initial="initial" 
                        exit="exit" 
                    />
                </svg>
            </>
            }
        </motion.div>
    );
};

function App() {
    const [isLoading, setIsLoading] = useState(true);

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

        // Set loading to false after preloader animation completes
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Adjust timing based on your preloader duration (total animation time)

        return () => {
            lenis.destroy();
            clearTimeout(timer);
        };
    }, []);

    return (
        <BrowserRouter>
            <AnimatePresence>
                {isLoading && <Preloader />}
            </AnimatePresence>
            {!isLoading && (
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
                        <Route path='/tea' element={<Tea />} />
                        <Route path='/coconut' element={<Coconut/>}/>
                        <Route path="/fruit/:name" Component={ProductDetails} />
                        <Route path="/vegetable/:name" Component={ProductDetails} />
                        <Route path="/spices/:name" Component={ProductDetails} />
                        <Route path="/tea/:name" Component={ProductDetails} />
                        <Route path="/coconut/:name" Component={ProductDetails} />
                    </Routes>
                    <Footer />
                </>
            )}
        </BrowserRouter>
    );
}

export default App;