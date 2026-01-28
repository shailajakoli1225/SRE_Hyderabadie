import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  value: number | string;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}

export function Counter({ 
  value, 
  duration = 2, 
  suffix, 
  prefix = '',
  decimals = 0,
  className = '' 
}: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimatedRef.current) return;

    // Extract numeric value
    let numValue: number;
    if (typeof value === 'string') {
      if (value.includes('%')) {
        numValue = parseFloat(value.replace('%', ''));
      } else if (value.includes('+')) {
        numValue = parseFloat(value.replace('+', ''));
      } else {
        numValue = parseFloat(value.replace(/[^0-9.]/g, ''));
      }
    } else {
      numValue = value;
    }

    if (isNaN(numValue) || numValue <= 0) {
      setCount(0);
      hasAnimatedRef.current = true;
      return;
    }

    // Check if element is already visible
    const checkVisibility = () => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      return isVisible;
    };

    // Start animation function
    const startAnimation = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;
      
      let start = 0;
      const startTime = Date.now();
      const endTime = startTime + duration * 1000;

      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / (duration * 1000), 1);
        
        // Use easing function for smooth animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentValue = start + (numValue - start) * easeOutCubic;
        
        setCount(currentValue);

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          setCount(numValue);
        }
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Check if already visible on mount
    if (checkVisibility()) {
      // Small delay to ensure component is fully mounted
      setTimeout(() => {
        startAnimation();
      }, 100);
    } else {
      // Use IntersectionObserver to detect when element comes into view
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimatedRef.current) {
              startAnimation();
              observer.disconnect();
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        }
      );

      observer.observe(element);

      return () => {
        observer.disconnect();
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [value, duration]);

  const formatValue = () => {
    if (decimals > 0) {
      return `${count.toFixed(decimals)}`;
    }
    return `${Math.round(count)}`;
  };

  // Get suffix from value if not provided
  const getSuffix = () => {
    if (suffix !== undefined) return suffix;
    if (typeof value === 'string') {
      if (value.includes('%')) return '%';
      if (value.includes('+')) return '+';
    }
    return '';
  };

  return (
    <span ref={ref} className={className}>
      {prefix}{formatValue()}{getSuffix()}
    </span>
  );
}

