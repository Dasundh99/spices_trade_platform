import { useState } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import { useLocation, useNavigate } from 'react-router-dom';

const menuSlide = {
  initial: { x: "100%" },
  enter: { x: "0%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: { x: "100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
}

const navItems = [
  {
    title: "Home",
    href: "/#hero",
    isHash: true
  },
  {
    title: "Exports",
    href: "/#exports",
    isHash: true
  },
  {
    title: "Clients",
    href: "/#clients",
    isHash: true
  },
  {
    title: "About",
    href: "/about",
    isHash: false
  },
  {
    title: "Contact",
    href: "/contact",
    isHash: false
  }
]

export default function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedIndicator, setSelectedIndicator] = useState(location.pathname);

  const handleNavigation = (href: string, isHash: boolean, title: string) => {
    if (isHash) {
      return <HashLink to={href} smooth={true} className={styles.link}>{title}</HashLink>
    } else {
      return <div onClick={() => navigate(href)} className={styles.link}>{title}</div>
    }
  }

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div 
          onMouseLeave={() => setSelectedIndicator(location.pathname)} 
          className={styles.nav}
        >
          {navItems.map((item, index) => (
            <div 
              key={index} 
              className={styles.linkWrapper}
              onMouseEnter={() => setSelectedIndicator(item.href)}
            >
              {handleNavigation(item.href, item.isHash, item.title)}
              <div 
                className={styles.indicator} 
                style={{ opacity: selectedIndicator === item.href ? 1 : 0 }}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}