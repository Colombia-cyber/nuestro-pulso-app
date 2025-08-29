import { z } from 'zod';
import { NextRequest, NextResponse } from 'next/server';

// Common validation schemas
export const emailSchema = z.string().email('Email inválido').max(100);
export const passwordSchema = z.string().min(6, 'Contraseña debe tener al menos 6 caracteres').max(100);
export const nameSchema = z.string().min(2, 'Nombre debe tener al menos 2 caracteres').max(50);

// Auth schemas
export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const registerSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  name: nameSchema,
});

// Sanitization functions
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>'"]/g, '') // Remove potentially dangerous characters
    .slice(0, 1000); // Limit length
}

export function sanitizeEmail(email: string): string {
  return email.toLowerCase().trim();
}

// Validation middleware helper
export function validateRequest<T>(schema: z.ZodSchema<T>) {
  return async (request: NextRequest): Promise<{ success: true; data: T } | { success: false; error: string }> => {
    try {
      const body = await request.json();
      const data = schema.parse(body);
      return { success: true, data };
    } catch (error) {
      if (error instanceof z.ZodError) {
        const messages = error.errors.map(err => `${err.path.join('.')}: ${err.message}`);
        return { success: false, error: messages.join(', ') };
      }
      return { success: false, error: 'Invalid request format' };
    }
  };
}

// Rate limiting helper
export function createRateLimitResponse(retryAfter: number = 900) {
  return NextResponse.json(
    {
      error: 'Too Many Requests',
      message: 'Demasiadas solicitudes. Por favor, intenta más tarde.',
      retryAfter,
    },
    {
      status: 429,
      headers: {
        'Retry-After': retryAfter.toString(),
      },
    }
  );
}

// Error response helper
export function createErrorResponse(message: string, status: number = 400) {
  return NextResponse.json(
    { error: message },
    { status }
  );
}

// Success response helper
export function createSuccessResponse(data: any, status: number = 200) {
  return NextResponse.json(data, { status });
}