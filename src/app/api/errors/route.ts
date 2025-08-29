import { NextRequest, NextResponse } from 'next/server';
import { createErrorResponse, createSuccessResponse } from '@/lib/validation';

interface ErrorReport {
  message: string;
  stack?: string;
  componentStack?: string;
  errorBoundary?: string;
  userId?: string;
  url?: string;
  userAgent?: string;
  timestamp: number;
}

export async function POST(request: NextRequest) {
  try {
    const errorReport: ErrorReport = await request.json();
    
    // Validate error report
    if (!errorReport.message) {
      return createErrorResponse('Error message is required', 400);
    }

    // Log error to console (in production, send to external service)
    console.error('Client Error Report:', {
      ...errorReport,
      ip: request.ip || 'unknown',
      timestamp: new Date(errorReport.timestamp).toISOString(),
    });

    // In production, you would send this to:
    // - Sentry
    // - LogRocket
    // - DataDog
    // - Custom logging service
    
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to external error tracking service
      // await sendToSentry(errorReport);
      // await sendToCustomLogger(errorReport);
    }

    return createSuccessResponse({ 
      message: 'Error report received',
      id: Date.now().toString() 
    });
  } catch (error) {
    console.error('Failed to process error report:', error);
    return createErrorResponse('Failed to process error report', 500);
  }
}

// Optional: Get error statistics
export async function GET(request: NextRequest) {
  // In a real app, you would query your error database
  const stats = {
    totalErrors: 0,
    recentErrors: 0,
    topErrors: [],
    timestamp: new Date().toISOString(),
  };

  return createSuccessResponse(stats);
}