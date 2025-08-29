import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { loginSchema, validateRequest, sanitizeEmail, createErrorResponse, createSuccessResponse } from '@/lib/validation';

// In a real app, this would be stored in a database
const users = [
  {
    id: '1',
    email: 'admin@nuestropulso.co',
    password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
    name: 'Admin User',
    role: 'admin' as const,
  },
];

export async function POST(request: NextRequest) {
  try {
    // Validate input
    const validation = await validateRequest(loginSchema)(request);
    if (!validation.success) {
      return createErrorResponse(validation.error, 400);
    }

    const { email, password } = validation.data;
    const sanitizedEmail = sanitizeEmail(email);

    // Find user
    const user = users.find((u) => u.email === sanitizedEmail);
    if (!user) {
      return createErrorResponse('Credenciales inválidas', 401);
    }

    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return createErrorResponse('Credenciales inválidas', 401);
    }

    // Generate JWT
    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'fallback-secret',
      { expiresIn: '24h' }
    );

    // Return user data (without password) and token
    const { password: _, ...userWithoutPassword } = user;
    
    return createSuccessResponse({
      user: userWithoutPassword,
      token,
    });
  } catch (error) {
    console.error('Login error:', error);
    return createErrorResponse('Error interno del servidor', 500);
  }
}