import { useEffect, useRef } from 'react';

// Performance monitoring hook
export function usePerformanceMonitor(componentName: string) {
  const startTime = useRef<number>(performance.now());

  useEffect(() => {
    const endTime = performance.now();
    const renderTime = endTime - startTime.current;

    // Log slow renders (> 16ms)
    if (renderTime > 16) {
      console.warn(`Slow render detected in ${componentName}: ${renderTime.toFixed(2)}ms`);
    }

    // Report to analytics (in production)
    if (process.env.NODE_ENV === 'production') {
      // Send to your analytics service
      // analytics.track('component_render_time', {
      //   component: componentName,
      //   duration: renderTime,
      //   timestamp: Date.now()
      // });
    }
  }, [componentName]);

  return (renderTime: number) => {
    console.log(`${componentName} rendered in ${renderTime.toFixed(2)}ms`);
  };
}

// Web Vitals monitoring
export function reportWebVitals(metric: any) {
  if (process.env.NODE_ENV === 'production') {
    // Log important metrics
    console.log(metric);
    
    // Send to analytics service
    // analytics.track('web_vital', {
    //   name: metric.name,
    //   value: metric.value,
    //   id: metric.id,
    //   label: metric.label
    // });
  }
}

// Memory usage monitoring
export function useMemoryMonitor() {
  useEffect(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const memoryInfo = {
        usedJSHeapSize: memory.usedJSHeapSize,
        totalJSHeapSize: memory.totalJSHeapSize,
        jsHeapSizeLimit: memory.jsHeapSizeLimit,
      };

      // Log memory warnings
      const usagePercent = (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100;
      if (usagePercent > 80) {
        console.warn('High memory usage detected:', usagePercent.toFixed(2) + '%');
      }

      console.log('Memory info:', memoryInfo);
    }
  }, []);
}

// Network status monitoring
export function useNetworkStatus() {
  useEffect(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      const networkInfo = {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt,
      };

      // Warn on slow connections
      if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
        console.warn('Slow network detected:', networkInfo);
      }

      console.log('Network info:', networkInfo);
    }
  }, []);
}