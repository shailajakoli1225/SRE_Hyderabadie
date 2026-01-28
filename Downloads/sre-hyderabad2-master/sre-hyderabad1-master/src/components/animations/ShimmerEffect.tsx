import { motion } from 'framer-motion';

export function ShimmerEffect() {
  return (
    <motion.div
      className="absolute inset-0 -z-10"
      animate={{
        background: [
          'linear-gradient(90deg, transparent 0%, hsl(var(--primary) / 0.1) 50%, transparent 100%)',
          'linear-gradient(90deg, transparent 0%, hsl(var(--primary) / 0.1) 50%, transparent 100%)',
        ],
        backgroundPosition: ['200% 0', '-200% 0'],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'linear',
      }}
      style={{
        backgroundSize: '200% 100%',
      }}
    />
  );
}

