import { useCallback, useMemo } from 'react';

// Intersection Observer hook for lazy loading
export const useIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
) => {
  return useCallback((node: Element | null) => {
    if (node !== null) {
      const observer = new IntersectionObserver(callback, {
        rootMargin: '50px',
        threshold: 0.1,
        ...options,
      });
      observer.observe(node);
      return () => observer.disconnect();
    }
  }, [callback, options]);
};

// Debounce hook for performance optimization
export const useDebounce = <T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): T => {
  return useCallback(
    (...args: Parameters<T>) => {
      const timeoutId = setTimeout(() => callback(...args), delay);
      return () => clearTimeout(timeoutId);
    },
    [callback, delay]
  ) as T;
};

// Memoized animation variants
export const animationVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  },
  slideUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  },
};

// Viewport options for animations
export const viewportOptions = {
  once: true,
  margin: '-100px',
  amount: 0.3,
};

// Performance optimized image loading
export const imageLoadingStrategy = {
  priority: true,
  loading: 'lazy' as const,
  sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
};

// Memory efficient data processing
export const useProcessedData = <T>(
  data: T[],
  processor: (item: T) => any
) => {
  return useMemo(() => data.map(processor), [data, processor]);
};

// Optimized event handlers
export const createOptimizedHandler = <T extends Event>(
  handler: (event: T) => void,
  options: { debounce?: number; throttle?: number } = {}
) => {
  let timeoutId: NodeJS.Timeout;
  let lastCall = 0;

  return (event: T) => {
    const now = Date.now();

    if (options.debounce) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => handler(event), options.debounce);
    } else if (options.throttle && now - lastCall >= options.throttle) {
      handler(event);
      lastCall = now;
    } else if (!options.throttle) {
      handler(event);
    }
  };
};

// CSS-in-JS optimization
export const optimizedStyles = {
  gradient: {
    background: 'linear-gradient(90deg, rgb(0, 39, 122) 0%, #60A5FA 50%, #FFD600 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  shadow: {
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  transition: {
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
}; 