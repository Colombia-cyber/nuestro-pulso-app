import Link from 'next/link';
import { Heart, Github, Twitter, Instagram, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-colombia-red" />
              <span className="text-xl font-bold">Nuestro Pulso</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Plataforma digital para la participación ciudadana en Colombia. 
              Conectamos ciudadanos con su gobierno para construir un futuro mejor.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-colombia-yellow">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-colombia-yellow">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-colombia-yellow">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-colombia-yellow">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#inicio" className="text-gray-300 hover:text-white">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#caracteristicas" className="text-gray-300 hover:text-white">
                  Características
                </Link>
              </li>
              <li>
                <Link href="#nosotros" className="text-gray-300 hover:text-white">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-gray-300 hover:text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white">
                  Términos
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-300 hover:text-white">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="text-gray-300 hover:text-white">
                  Accesibilidad
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Nuestro Pulso. Todos los derechos reservados.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Hecho con ❤️ para Colombia
          </p>
        </div>
      </div>
    </footer>
  );
}