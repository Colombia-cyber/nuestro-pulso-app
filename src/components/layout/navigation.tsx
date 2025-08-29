'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Heart } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-colombia-red" />
              <span className="text-xl font-bold text-gray-900">
                Nuestro Pulso
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#inicio" className="text-gray-700 hover:text-colombia-blue">
              Inicio
            </Link>
            <Link href="#caracteristicas" className="text-gray-700 hover:text-colombia-blue">
              Características
            </Link>
            <Link href="#nosotros" className="text-gray-700 hover:text-colombia-blue">
              Nosotros
            </Link>
            <Link href="#contacto" className="text-gray-700 hover:text-colombia-blue">
              Contacto
            </Link>
            <Link href="/auth/login">
              <Button variant="outline">Iniciar Sesión</Button>
            </Link>
            <Link href="/auth/register">
              <Button variant="colombia">Registrarse</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="#inicio"
                className="block px-3 py-2 text-gray-700 hover:text-colombia-blue"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="#caracteristicas"
                className="block px-3 py-2 text-gray-700 hover:text-colombia-blue"
                onClick={() => setIsOpen(false)}
              >
                Características
              </Link>
              <Link
                href="#nosotros"
                className="block px-3 py-2 text-gray-700 hover:text-colombia-blue"
                onClick={() => setIsOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                href="#contacto"
                className="block px-3 py-2 text-gray-700 hover:text-colombia-blue"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
              <div className="flex flex-col space-y-2 px-3 py-2">
                <Link href="/auth/login">
                  <Button variant="outline" className="w-full">
                    Iniciar Sesión
                  </Button>
                </Link>
                <Link href="/auth/register">
                  <Button variant="colombia" className="w-full">
                    Registrarse
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}