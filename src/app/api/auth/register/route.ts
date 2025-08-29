import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { registerSchema, validateRequest, sanitizeEmail, sanitizeInput, createErrorResponse, createSuccessResponse } from '@/lib/validation';

// In a real app, this would be stored in a database
const users: Array<{
  id: string;
  email: string;
  password: string;
  name: string;
  role: 'user' | 'admin' | 'moderator';
}> = [];

export async function POST(request: NextRequest) {
  try {
    // Validate input
    const validation = await validateRequest(registerSchema)(request);
    if (!validation.success) {
      return createErrorResponse(validation.error, 400);
    }

    const { email, password, name } = validation.data;
    const sanitizedEmail = sanitizeEmail(email);
    const sanitizedName = sanitizeInput(name);

    // Check if user already exists
    if (users.find((u) => u.email === sanitizedEmail)) {
      return createErrorResponse('El usuario ya existe', 409);
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12); // Increased salt rounds for security

    // Create user
    const newUser = {
      id: Date.now().toString(),
      email: sanitizedEmail,
      password: hashedPassword,
      name: sanitizedName,
      role: 'user' as const,
    };

    users.push(newUser);

    // Generate JWT
    const token = jwt.sign(
      { userId: newUser.id, email: newUser.email, role: newUser.role },
      process.env.JWT_SECRET || 'fallback-secret',
      { expiresIn: '24h' }
    );

    // Return user data (without password) and token
    const { password: _, ...userWithoutPassword } = newUser;
    
    return createSuccessResponse({
      user: userWithoutPassword,
      token,
    }, 201);
  } catch (error) {
    console.error('Registration error:', error);
    return createErrorResponse('Error interno del servidor', 500);
  }
}