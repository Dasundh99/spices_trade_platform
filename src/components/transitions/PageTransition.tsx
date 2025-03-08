import { motion } from "framer-motion";

const PageTransitionEffect = () => {
  return (
    <>
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{
          scaleY: 0,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        }}
        exit={{
          scaleY: 1,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        }}
      />
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{
          scaleY: 0,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        }}
        exit={{ scaleY: 0 }}
      />
    </>
  );
};

export default PageTransitionEffect;