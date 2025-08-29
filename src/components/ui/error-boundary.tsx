'use client';

import React from 'react';
import { errorTracker } from '@/lib/errorTracking';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; reset: () => void }>;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    errorTracker.captureError({
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack || undefined,
      errorBoundary: this.constructor.name,
      timestamp: Date.now(),
    });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return <FallbackComponent error={this.state.error} reset={this.handleReset} />;
    }

    return this.props.children;
  }
}

// Default error fallback component
function DefaultErrorFallback({ error, reset }: { error?: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center mb-4">
          <div className="flex-shrink-0">
            <svg className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-medium text-gray-900">
              Algo salió mal
            </h3>
          </div>
        </div>
        <div className="mb-4">
          <p className="text-sm text-gray-500">
            Ocurrió un error inesperado. Nuestro equipo ha sido notificado.
          </p>
          {error && process.env.NODE_ENV === 'development' && (
            <details className="mt-2">
              <summary className="text-xs text-gray-400 cursor-pointer">
                Detalles técnicos
              </summary>
              <pre className="text-xs text-gray-400 mt-1 whitespace-pre-wrap">
                {error.message}
              </pre>
            </details>
          )}
        </div>
        <div className="flex space-x-3">
          <button
            onClick={reset}
            className="flex-1 bg-colombia-blue text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Intentar de nuevo
          </button>
          <button
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.location.href = '/';
              }
            }}
            className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Ir al inicio
          </button>
        </div>
      </div>
    </div>
  );
}