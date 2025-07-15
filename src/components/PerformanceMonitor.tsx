'use client';

import { useEffect, useRef } from 'react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
}

const PerformanceMonitor = () => {
  const metricsRef = useRef<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
  });

  useEffect(() => {
    // Only run in production and if PerformanceObserver is available
    if (typeof window === 'undefined' || process.env.NODE_ENV !== 'production') {
      return;
    }

    // Delay performance monitoring to avoid blocking initial render
    const timer = setTimeout(() => {
      initializePerformanceMonitoring();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const initializePerformanceMonitoring = () => {

    // Measure First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find((entry) => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        metricsRef.current.fcp = fcpEntry.startTime;
        console.log('FCP:', fcpEntry.startTime);
      }
    });

    // Measure Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        metricsRef.current.lcp = lastEntry.startTime;
        console.log('LCP:', lastEntry.startTime);
      }
    });

    // Measure First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (entry.processingStart && entry.startTime) {
          metricsRef.current.fid = entry.processingStart - entry.startTime;
          console.log('FID:', entry.processingStart - entry.startTime);
        }
      });
    });

    // Measure Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          metricsRef.current.cls = clsValue;
          console.log('CLS:', clsValue);
        }
      });
    });

    // Measure Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      metricsRef.current.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      console.log('TTFB:', navigationEntry.responseStart - navigationEntry.requestStart);
    }

    try {
      fcpObserver.observe({ entryTypes: ['paint'] });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      fidObserver.observe({ entryTypes: ['first-input'] });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.warn('PerformanceObserver not supported:', error);
    }

    // Send metrics to analytics after page load
    const sendMetrics = () => {
      const metrics = metricsRef.current;
      
      // Send to Google Analytics if available
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'performance_metrics', {
          event_category: 'Performance',
          event_label: 'Core Web Vitals',
          value: Math.round(metrics.lcp),
          custom_map: {
            fcp: metrics.fcp,
            lcp: metrics.lcp,
            fid: metrics.fid,
            cls: metrics.cls,
            ttfb: metrics.ttfb,
          },
        });
      }

      // Log to console for development
      console.group('Performance Metrics');
      console.log('FCP:', metrics.fcp, 'ms');
      console.log('LCP:', metrics.lcp, 'ms');
      console.log('FID:', metrics.fid, 'ms');
      console.log('CLS:', metrics.cls);
      console.log('TTFB:', metrics.ttfb, 'ms');
      console.groupEnd();
    };

    // Send metrics after a delay to ensure all measurements are complete
    const timeoutId = setTimeout(sendMetrics, 5000);

    return () => {
      clearTimeout(timeoutId);
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  };

  // Component doesn't render anything
  return null;
};

export default PerformanceMonitor; 