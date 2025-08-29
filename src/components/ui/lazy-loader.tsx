import { Suspense, lazy } from 'react';

// Loading component
export function ComponentLoader() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-colombia-blue"></div>
    </div>
  );
}

// Lazy load heavy components
export const LazyDashboard = lazy(() => import('@/app/dashboard/page'));
export const LazyAuthLogin = lazy(() => import('@/app/auth/login/page'));
export const LazyAuthRegister = lazy(() => import('@/app/auth/register/page'));

// Higher-order component for lazy loading
export function withLazyLoading<T extends object>(
  Component: React.ComponentType<T>,
  FallbackComponent: React.ComponentType = ComponentLoader
) {
  return function LazyComponent(props: T) {
    return (
      <Suspense fallback={<FallbackComponent />}>
        <Component {...props} />
      </Suspense>
    );
  };
}

// Image optimization helper
interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function OptimizedImage({ src, alt, className, priority = false }: OptimizedImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}