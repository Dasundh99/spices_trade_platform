import { useState } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';

import { menuSlide } from '../animation';

import Curve from './Curve';
import Footer from './Footer';
import Link from './Link';
import { useLocation } from 'react-router-dom';

const navItems = [
  {
    title: "Home",
    href: "/#",
  },
  {
    title: "About",
    href: "/#about",
  },
  {
    title: "Exports",
    href: "/#exports",
  },
  {
    title: "Clients",
    href: "/#clients",
  },
  {
    title: "Contact",
    href: "/#contact",
  },
]

export default function index() {

  const location = useLocation();
  const [selectedIndicator, setSelectedIndicator] = useState(location.pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div onMouseLeave={() => { setSelectedIndicator(location.pathname) }} className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {
            navItems.map((data, index) => {
              return <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}>
              </Link>
            })
          }
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  )
}