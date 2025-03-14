import { useState } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

const menuSlide = {
  initial: { x: "100%" },
  enter: { x: "0%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: { x: "100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
}

const navItems = [
  {
    title: "Home",
    sectionId: "home",
    isHash: true
  },
  {
    title: "Exports",
    sectionId: "exports",
    isHash: true
  },
  {
    title: "Clients",
    sectionId: "clients",
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
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  const scrollToSection = (sectionId: string) => {
    if (pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleNavigation = (item: { title: string; sectionId: string; isHash: boolean; href?: undefined; } | { title: string; href: string; isHash: boolean; sectionId?: undefined; }) => {
    if (item.isHash) {
      return (
        <div 
          onClick={() => item.sectionId && scrollToSection(item.sectionId)} 
          className={`${styles.link} cursor-pointer`}
        >
          {item.title}
        </div>
      );
    } else {
      return (
        <div 
          onClick={() => item.href && navigate(item.href)} 
          className={`${styles.link} cursor-pointer`}
        >
          {item.title}
        </div>
      );
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
          onMouseLeave={() => setSelectedIndicator(pathname)} 
          className={styles.nav}
        >
          {navItems.map((item, index) => (
            <div 
              key={index} 
              className={styles.linkWrapper}
              onMouseEnter={() => setSelectedIndicator(item.isHash ? `/#${item.sectionId}` : (item.href || pathname))}
            >
              {handleNavigation(item)}
              <div 
                className={styles.indicator} 
                style={{ opacity: selectedIndicator === (item.isHash ? `/#${item.sectionId}` : item.href) ? 1 : 0 }}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}