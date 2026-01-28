import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const quotes = [
  {
    text: "Reliability is not about perfection, it's about learning from failures.",
    author: "SRE Philosophy"
  },
  {
    text: "Practice reliability. Share failures. Build careers.",
    author: "SRE @ Hyderabad"
  },
  {
    text: "The best way to learn SRE is by doing it with others.",
    author: "Community Wisdom"
  },
  {
    text: "Every incident is a learning opportunity.",
    author: "Post-Mortem Culture"
  },
  {
    text: "Reliability is a team sport, not a solo endeavor.",
    author: "SRE @ Hyderabad"
  },
  {
    text: "Building reliable systems requires reliable people.",
    author: "Community First"
  },
  {
    text: "The best SREs learn from production, not just theory.",
    author: "Real-World Experience"
  },
  {
    text: "Together we build, together we learn, together we grow.",
    author: "SRE @ Hyderabad"
  },
  {
    text: "Reliability engineering is about making the right trade-offs.",
    author: "SRE Principles"
  },
  {
    text: "A community that shares knowledge grows stronger.",
    author: "Knowledge Sharing"
  }
];

interface PageLoaderProps {
  isLoading: boolean;
}

export function PageLoader({ isLoading }: PageLoaderProps) {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    if (isLoading) {
      // Change quote every 2 seconds while loading
      const interval = setInterval(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  const quote = quotes[currentQuote];

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background/95 backdrop-blur-md"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10" />
            <div className="absolute inset-0 grid-pattern opacity-10" />
            
            {/* Floating Particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-primary/30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
            {/* Loading Spinner */}
            <motion.div
              className="mb-8 flex justify-center"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: 'spring',
                stiffness: 200,
                damping: 15,
                delay: 0.2
              }}
            >
              <div className="relative">
                {/* Outer Ring */}
                <motion.div
                  className="w-20 h-20 border-4 border-primary/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                />
                {/* Middle Ring */}
                <motion.div
                  className="absolute top-0 left-0 w-20 h-20 border-4 border-transparent border-t-primary rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                />
                {/* Inner Ring */}
                <motion.div
                  className="absolute top-2 left-2 w-16 h-16 border-4 border-transparent border-b-accent rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                />
                {/* Center Dot */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
              </div>
            </motion.div>

            {/* Quote */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex justify-center mb-4"
                >
                  <Quote className="w-8 h-8 text-primary/60" />
                </motion.div>
                
                <motion.p
                  className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  "{quote.text}"
                </motion.p>
                
                <motion.p
                  className="text-sm sm:text-base text-muted-foreground font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  — {quote.author}
                </motion.p>
              </motion.div>
            </AnimatePresence>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-10 -left-10 w-20 h-20 bg-primary/5 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            <motion.div
              className="absolute -bottom-10 -right-10 w-24 h-24 bg-accent/5 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

