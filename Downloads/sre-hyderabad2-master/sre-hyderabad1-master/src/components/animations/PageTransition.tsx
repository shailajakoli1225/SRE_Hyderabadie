import { motion } from 'framer-motion';
import { ReactNode, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PageLoader } from './PageLoader';

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loader when route changes
    setIsLoading(true);

    // Minimum display time for smooth experience (1.2 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <PageLoader isLoading={isLoading} />
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate={isLoading ? "initial" : "animate"}
        exit="exit"
        style={{ 
          opacity: isLoading ? 0 : 1,
          pointerEvents: isLoading ? 'none' : 'auto',
          visibility: isLoading ? 'hidden' : 'visible'
        }}
      >
        {children}
      </motion.div>
    </>
  );
}

