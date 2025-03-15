import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { HashLink } from 'react-router-hash-link';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { useLocation } from 'react-router-dom';
import Magnetic from '../Magnetic';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const headerRef = useRef(null);
    const location = useLocation();

    // Handle scroll behavior
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        let lastScrollTop = 0;

        const handleScroll = () => {
            const st = window.scrollY || document.documentElement.scrollTop;
            if (st > 100) {
                setScrolled(true);
                if (st > lastScrollTop) {
                    // Scrolling down - hide header
                    gsap.to(headerRef.current, { y: -100, duration: 0.3 });
                } else {
                    // Scrolling up - show header
                    gsap.to(headerRef.current, { y: 0, duration: 0.3 });
                }
            } else {
                setScrolled(false);
                gsap.to(headerRef.current, { y: 0, duration: 0.3 });
            }
            lastScrollTop = st <= 0 ? 0 : st;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Handle body overflow when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = ''; // Ensure cleanup on unmount
        };
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
        console.log('Menu toggled, isOpen:', !isOpen); // Debug log
    };

    // Simplified menu variants
    const menuVariants = {
        initial: { x: '100%' },
        animate: { x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
        exit: { x: '100%', transition: { duration: 0.3, ease: 'easeIn' } },
    };

    // Determine the background color based on location
    const getBackgroundColorClass = () => {
        if (scrolled) {
            return 'bg-[rgb(41,41,41)]';
        }

        switch (location.pathname) {
            case '/about':
            case '/fruits':
            case '/vegetables':
            case '/spices':
            case '/tea':
            case '/contact':
                return 'bg-[rgb(41,41,41)]';
            default:
                return 'bg-transparent';
        }
    };

    return (
        <header
            ref={headerRef}
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${getBackgroundColorClass()}`}
        >
            <div className="container mx-auto px-4 xl:px-30 py-3 flex justify-between items-center">
                {/* Company Logo/Name */}
                <div className="text-white font-bold text-xl sm:text-sm md:text-xl">
                    <HashLink smooth to="/#hero" className="flex flex-col md:block">
                        GS GREEN PVT LTD
                    </HashLink>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8 md:text-2xl font-bold">
                    <Magnetic>
                        <div className="group flex flex-col relative z-[1] p-[15px] cursor-pointer">
                            <HashLink smooth to="/#hero" className="text-white">
                                Home
                            </HashLink>
                            <div className="absolute w-2.5 h-2.5 top-[55px] left-1/2 bg-white rounded-full transform scale-0 -translate-x-1/2 transition-transform duration-200 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-100"></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className="group flex flex-col relative z-[1] p-[15px] cursor-pointer">
                            <HashLink smooth to="/#exports" className="text-white">
                                Exports
                            </HashLink>
                            <div className="absolute w-2.5 h-2.5 top-[55px] left-1/2 bg-white rounded-full transform scale-0 -translate-x-1/2 transition-transform duration-200 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-100"></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className="group flex flex-col relative z-[1] p-[15px] cursor-pointer">
                            <HashLink smooth to="/#clients" className="text-white">
                                Clients
                            </HashLink>
                            <div className="absolute w-2.5 h-2.5 top-[55px] left-1/2 bg-white rounded-full transform scale-0 -translate-x-1/2 transition-transform duration-200 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-100"></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className="group flex flex-col relative z-[1] p-[15px] cursor-pointer">
                            <HashLink smooth to="/about" className="text-white">
                                About
                            </HashLink>
                            <div className="absolute w-2.5 h-2.5 top-[55px] left-1/2 bg-white rounded-full transform scale-0 -translate-x-1/2 transition-transform duration-200 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-100"></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className="group flex flex-col relative z-[1] p-[15px] cursor-pointer">
                            <HashLink smooth to="/contact" className="text-white">
                                Contact
                            </HashLink>
                            <div className="absolute w-2.5 h-2.5 top-[55px] left-1/2 bg-white rounded-full transform scale-0 -translate-x-1/2 transition-transform duration-200 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-100"></div>
                        </div>
                    </Magnetic>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed min-h-[100vh] w-full top-0 right-0 bottom-0 bg-[rgb(41,41,41)] z-40 md:hidden overflow-y-auto"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={menuVariants}
                    >
                        <div className="flex justify-end p-4">
                            <button
                                className="text-white focus:outline-none bg-[rgb(51,51,51)] p-2 rounded-full hover:bg-[rgb(61,61,61)] transition-colors"
                                onClick={toggleMenu}
                                aria-label="Close menu"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="text-[rgb(153,153,153)] border-b mx-20 border-[rgb(153,153,153)] uppercase text-[11px] mb-[15px]">
                            <p>Navigation</p>
                        </div>
                        <div className="px-20 py-4 space-y-4">
                            <HashLink
                                smooth
                                to="/#hero"
                                className="block text-white py-2 font-bold text-4xl"
                                onClick={() => {
                                    setIsOpen(false);
                                    console.log('Navigated to Home, closing menu');
                                }}
                            >
                                Home
                            </HashLink>

                            {/* Mobile Export Submenu */}
                            <div className="relative py-2">
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const submenu = e.currentTarget.nextElementSibling;
                                        if (submenu) {
                                            submenu.classList.toggle('hidden');
                                        }
                                    }}
                                    className="flex items-center justify-between w-full text-white text-4xl font-bold mb-2"
                                >
                                    Export
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 ml-1 transition-transform duration-200"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={6} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className="hidden pl-4 transition-all duration-300">
                                    <HashLink
                                        smooth
                                        to="/fruits"
                                        className="block text-white py-2 text-base hover:text-green-300"
                                        onClick={() => {
                                            setIsOpen(false);
                                            console.log('Navigated to Tropical Fruits, closing menu');
                                        }}
                                    >
                                        Tropical Fruits
                                    </HashLink>
                                    <HashLink
                                        smooth
                                        to="/vegetables"
                                        className="block text-white py-2 text-base hover:text-green-300"
                                        onClick={() => {
                                            setIsOpen(false);
                                            console.log('Navigated to Tropical Vegetables, closing menu');
                                        }}
                                    >
                                        Tropical Vegetables
                                    </HashLink>
                                    <HashLink
                                        smooth
                                        to="/spices"
                                        className="block text-white py-2 text-base hover:text-green-300"
                                        onClick={() => {
                                            setIsOpen(false);
                                            console.log('Navigated to Spices and Oils, closing menu');
                                        }}
                                    >
                                        Spices and Oils
                                    </HashLink>
                                    <HashLink
                                        smooth
                                        to="/tea"
                                        className="block text-white py-2 text-base hover:text-green-300"
                                        onClick={() => {
                                            setIsOpen(false);
                                            console.log('Navigated to Tea, closing menu');
                                        }}
                                    >
                                        Tea
                                    </HashLink>
                                </div>
                            </div>

                            <HashLink
                                smooth
                                to="/#clients"
                                className="block text-white py-2 text-4xl font-bold hover:text-green-300"
                                onClick={() => {
                                    setIsOpen(false);
                                    console.log('Navigated to Clients, closing menu');
                                }}
                            >
                                Clients
                            </HashLink>
                            <HashLink
                                smooth
                                to="/about"
                                className="block text-white py-2 text-4xl font-bold hover:text-green-300"
                                onClick={() => {
                                    setIsOpen(false);
                                    console.log('Navigated to About, closing menu');
                                }}
                            >
                                About
                            </HashLink>
                            <HashLink
                                smooth
                                to="/contact"
                                className="block text-white py-2 text-4xl font-bold hover:text-green-300"
                                onClick={() => {
                                    setIsOpen(false);
                                    console.log('Navigated to Contact, closing menu');
                                }}
                            >
                                Contact
                            </HashLink>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;