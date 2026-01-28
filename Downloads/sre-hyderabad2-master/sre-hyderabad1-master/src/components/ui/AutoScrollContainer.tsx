import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AutoScrollContainerProps {
  children: React.ReactNode;
  scrollSpeed?: number; // pixels per second
  containerHeight?: string; // height of the container
}

export const AutoScrollContainer = ({
  children,
  scrollSpeed = 50,
  containerHeight = 'max-h-[400px] sm:max-h-[500px] md:max-h-[600px]',
}: AutoScrollContainerProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Pause scrolling when viewport is small
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const shouldScroll = !isHovered && !isTouched && !isMobile;

  useEffect(() => {
    if (!shouldScroll) return; // Pause scrolling on hover/touch

    const container = containerRef.current;
    if (!container) return;

    const scroll = () => {
      setScrollPosition((prev) => {
        const newPosition = prev + scrollSpeed / 60; // Divide by 60 for 60fps
        const contentHeight = contentRef.current?.scrollHeight || 0;
        const containerHeight = container.clientHeight;

        // Reset to top if scrolled past content
        if (newPosition > contentHeight - containerHeight) {
          return 0;
        }
        return newPosition;
      });
    };

    const interval = setInterval(scroll, 1000 / 60); // 60fps

    return () => clearInterval(interval);
  }, [shouldScroll, scrollSpeed]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollTop = scrollPosition;
    }
  }, [scrollPosition]);

  const handleTouchStart = () => {
    setIsTouched(true);
  };

  const handleTouchEnd = () => {
    setIsTouched(false);
  };

  return (
    <div
      ref={containerRef}
      className={`${containerHeight} overflow-y-auto sm:overflow-hidden rounded-2xl relative group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Fade gradient overlay (top) */}
      <div className="absolute top-0 left-0 right-0 h-8 sm:h-12 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />

      {/* Fade gradient overlay (bottom) */}
      <div className="absolute bottom-0 left-0 right-0 h-8 sm:h-12 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

      {/* Scroll indicator on hover - hidden on mobile */}
      {isHovered && !isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 text-muted-foreground text-xs font-semibold hidden sm:block"
        >
          <div className="animate-bounce">↑↓</div>
        </motion.div>
      )}

      {/* Content */}
      <div ref={contentRef} className="space-y-3 sm:space-y-4 p-1">
        {children}
      </div>
    </div>
  );
};
