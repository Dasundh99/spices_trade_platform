import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic';
import Nav from './nav';
import { HashLink } from 'react-router-hash-link';

export default function index() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = useLocation();
    const button = useRef(null);

    useEffect(() => {
        if (isActive) setIsActive(false)
    }, [pathname])

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => { gsap.to(button.current, { scale: 1, duration: 0.25, ease: "power1.out" }) },
                onEnterBack: () => { gsap.to(button.current, { scale: 0, duration: 0.25, ease: "power1.out", onComplete: () => setIsActive(false) }) }
            }
        })
    }, [])

    return (
        <>
            <div ref={header} className={styles.header}>
                <div className={styles.logo}>
                    <p className={styles.copyright}>©</p>
                    <div className={styles.name}>
                        <p className={styles.codeBy}>GSGreen</p>
                        {/* <p className={styles.dennis}>private</p> */}
                        <p className={styles.snellenberg}>Private LTD</p>
                    </div>
                </div>
                <div className={styles.nav}>
                    <Magnetic>
                        <div className={styles.el}>
                            <HashLink to='/#hero' smooth={true}>Home</HashLink>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el}>
                            <HashLink to='/#about' smooth={true}>About</HashLink>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el}>
                            <HashLink to='/#exports' smooth={true}>Exports</HashLink>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el}>
                            <HashLink to='/#clients' smooth={true}>Clients</HashLink>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el}>
                            <HashLink to='/#contact' smooth={true}>Contact</HashLink>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                </div>
            </div>
            <div ref={button} className={styles.headerButtonContainer}>
                <Rounded onClick={() => { setIsActive(!isActive) }} className={`${styles.button}`}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                </Rounded>
            </div>
            <AnimatePresence mode="wait">
                {isActive && <Nav />}
            </AnimatePresence>
        </>
    )
}
