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
    const [isInHomeSection, setIsInHomeSection] = useState(true);
    const headerRef = useRef(null);
    const location = useLocation();

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
                setIsInHomeSection(false);
                if (st > lastScrollTop) {
                    gsap.to(headerRef.current, { y: -100, duration: 0.3 });
                } else {
                    gsap.to(headerRef.current, { y: 0, duration: 0.3 });
                }
            } else {
                setScrolled(false);
                setIsInHomeSection(location.pathname === '/' && st <= 100);
                gsap.to(headerRef.current, { y: 0, duration: 0.3 });
            }
            lastScrollTop = st <= 0 ? 0 : st;
        };

        window.addEventListener('scroll', handleScroll);

        setIsInHomeSection(location.pathname === '/' && (window.scrollY || document.documentElement.scrollTop) <= 100);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location.pathname]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const menuVariants = {
        initial: { x: '100%' },
        animate: { x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
        exit: { x: '100%', transition: { duration: 0.3, ease: 'easeIn' } },
    };

    const getHeaderStyles = () => {
        if (isInHomeSection && !scrolled) {
            return {
                background: 'transparent',
                textColor: 'text-white'
            };
        }
        return {
            background: 'bg-white',
            textColor: 'text-black'
        };
    };

    const headerStyles = getHeaderStyles();

    return (
        <header
            ref={headerRef}
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${headerStyles.background}`}
        >
            {/* Reduced padding from py-3 to py-2 */}
            <div className="container mx-auto px-4 xl:px-20 py-2 flex justify-between items-center">
                {/* Reduced text size from xl to md, sm:text-sm to sm:text-xs, md:text-xl to md:text-base */}
                <div className={`${headerStyles.textColor} text-md sm:text-md md:text-base`}>
                    <HashLink smooth to="/#hero" className="flex flex-col md:block">
                        GS GREEN PVT LTD
                    </HashLink>
                </div>

                {/* Desktop Navigation - reduced text size from md:text-2xl to md:text-lg */}
                <nav className="hidden md:flex items-center space-x-8 md:text-lg">
                    <Magnetic>
                        <div className="group flex flex-col relative z-[1] p-[15px] cursor-pointer">
                            <HashLink smooth to="/#home" className={headerStyles.textColor}>
                                Home
                            </HashLink>
                            <div className={`absolute w-2.5 h-2.5 top-[55px] left-1/2 rounded-full transform scale-0 -translate-x-1/2 transition-transform duration-200 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-100 ${isInHomeSection && !scrolled ? 'bg-white' : 'bg-black'}`}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className="group flex flex-col relative z-[1] p-[15px] cursor-pointer">
                            <HashLink smooth to="/#exports" className={headerStyles.textColor}>
                                Exports
                            </HashLink>
                            <div className={`absolute w-2.5 h-2.5 top-[55px] left-1/2 rounded-full transform scale-0 -translate-x-1/2 transition-transform duration-200 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-100 ${isInHomeSection && !scrolled ? 'bg-white' : 'bg-black'}`}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className="group flex flex-col relative z-[1] p-[15px] cursor-pointer">
                            <HashLink smooth to="/#clients" className={headerStyles.textColor}>
                                Clients
                            </HashLink>
                            <div className={`absolute w-2.5 h-2.5 top-[55px] left-1/2 rounded-full transform scale-0 -translate-x-1/2 transition-transform duration-200 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-100 ${isInHomeSection && !scrolled ? 'bg-white' : 'bg-black'}`}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className="group flex flex-col relative z-[1] p-[15px] cursor-pointer">
                            <HashLink smooth to="/about" className={headerStyles.textColor}>
                                About
                            </HashLink>
                            <div className={`absolute w-2.5 h-2.5 top-[55px] left-1/2 rounded-full transform scale-0 -translate-x-1/2 transition-transform duration-200 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-100 ${isInHomeSection && !scrolled ? 'bg-white' : 'bg-black'}`}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className="group flex flex-col relative z-[1] p-[15px] cursor-pointer">
                            <HashLink smooth to="/contact" className={headerStyles.textColor}>
                                Contact
                            </HashLink>
                            <div className={`absolute w-2.5 h-2.5 top-[55px] left-1/2 rounded-full transform scale-0 -translate-x-1/2 transition-transform duration-200 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-100 ${isInHomeSection && !scrolled ? 'bg-white' : 'bg-black'}`}></div>
                        </div>
                    </Magnetic>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden ${headerStyles.textColor} focus:outline-none`}
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

            {/* Mobile Menu - reduced text size from text-4xl to text-2xl for main items and text-base to text-sm for submenu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed min-h-[100vh] w-full top-0 right-0 bottom-0 bg-white z-40 md:hidden overflow-y-auto"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={menuVariants}
                    >
                        <div className="flex justify-end p-4">
                            <button
                                className="text-black focus:outline-none bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
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
                        <div className="text-gray-600 border-b mx-20 border-gray-600 uppercase text-[11px] mb-[15px]">
                            <p>Navigation</p>
                        </div>
                        <div className="px-20 py-4 space-y-4">
                            <HashLink
                                smooth
                                to="/#hero"
                                className="block text-black py-2 text-2xl"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </HashLink>

                            <div className="relative py-2">
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const submenu = e.currentTarget.nextElementSibling;
                                        if (submenu) submenu.classList.toggle('hidden');
                                    }}
                                    className="flex items-center justify-between w-full text-black text-2xl mb-2"
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
                                        className="block text-black py-2 text-sm hover:text-gray-700"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Tropical Fruits
                                    </HashLink>
                                    <HashLink
                                        smooth
                                        to="/vegetables"
                                        className="block text-black py-2 text-sm hover:text-gray-700"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Tropical Vegetables
                                    </HashLink>
                                    <HashLink
                                        smooth
                                        to="/spices"
                                        className="block text-black py-2 text-sm hover:text-gray-700"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Spices and Oils
                                    </HashLink>
                                    <HashLink
                                        smooth
                                        to="/tea"
                                        className="block text-black py-2 text-sm hover:text-gray-700"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Tea
                                    </HashLink>
                                </div>
                            </div>

                            <HashLink
                                smooth
                                to="/#clients"
                                className="block text-black py-2 text-2xl hover:text-gray-700"
                                onClick={() => setIsOpen(false)}
                            >
                                Clients
                            </HashLink>
                            <HashLink
                                smooth
                                to="/about"
                                className="block text-black py-2 text-2xl hover:text-gray-700"
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </HashLink>
                            <HashLink
                                smooth
                                to="/contact"
                                className="block text-black py-2 text-2xl hover:text-gray-700"
                                onClick={() => setIsOpen(false)}
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