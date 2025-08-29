// Error tracking and monitoring utilities

interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
  errorBoundary?: string;
  userId?: string;
  url?: string;
  userAgent?: string;
  timestamp: number;
}

class ErrorTracker {
  private isProduction = process.env.NODE_ENV === 'production';
  
  // Initialize error tracking
  init() {
    if (typeof window !== 'undefined') {
      // Global error handler
      window.addEventListener('error', this.handleGlobalError.bind(this));
      window.addEventListener('unhandledrejection', this.handleUnhandledRejection.bind(this));
    }
  }

  // Handle global JavaScript errors
  private handleGlobalError(event: ErrorEvent) {
    this.captureError({
      message: event.message,
      stack: event.error?.stack,
      url: event.filename,
      timestamp: Date.now(),
    });
  }

  // Handle unhandled promise rejections
  private handleUnhandledRejection(event: PromiseRejectionEvent) {
    this.captureError({
      message: `Unhandled Promise Rejection: ${event.reason}`,
      stack: event.reason?.stack,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      timestamp: Date.now(),
    });
  }

  // Capture and report errors
  captureError(errorInfo: Partial<ErrorInfo>) {
    const error: ErrorInfo = {
      message: errorInfo.message || 'Unknown error',
      stack: errorInfo.stack,
      componentStack: errorInfo.componentStack,
      errorBoundary: errorInfo.errorBoundary,
      userId: this.getCurrentUserId(),
      url: typeof window !== 'undefined' ? window.location.href : errorInfo.url,
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : undefined,
      timestamp: errorInfo.timestamp || Date.now(),
    };

    // Log to console in development
    if (!this.isProduction) {
      console.error('Error captured:', error);
    }

    // Send to error tracking service in production
    if (this.isProduction) {
      this.sendToErrorService(error);
    }
  }

  // Get current user ID from auth context
  private getCurrentUserId(): string | undefined {
    try {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('auth-token');
        if (token) {
          // Decode JWT to get user ID (in a real app, use a proper JWT library)
          const payload = JSON.parse(atob(token.split('.')[1]));
          return payload.userId;
        }
      }
    } catch (e) {
      // Ignore errors when getting user ID
    }
    return undefined;
  }

  // Send error to tracking service
  private async sendToErrorService(error: ErrorInfo) {
    try {
      // Example: Send to Sentry, LogRocket, or custom service
      await fetch('/api/errors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(error),
      });
    } catch (e) {
      // Silently fail - don't create error loops
      console.warn('Failed to send error to tracking service');
    }
  }

  // Manual error reporting
  reportError(error: Error, context?: string) {
    this.captureError({
      message: error.message,
      stack: error.stack,
      componentStack: context,
      timestamp: Date.now(),
    });
  }

  // Performance monitoring
  reportPerformanceIssue(metric: string, value: number, threshold: number) {
    if (value > threshold) {
      this.captureError({
        message: `Performance issue: ${metric} exceeded threshold`,
        stack: `Value: ${value}, Threshold: ${threshold}`,
        timestamp: Date.now(),
      });
    }
  }
}

// Singleton instance
export const errorTracker = new ErrorTracker();

// Initialize error tracking
if (typeof window !== 'undefined') {
  errorTracker.init();
}