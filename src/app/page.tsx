import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { 
  ChatBubbleBottomCenterTextIcon,
  ChartBarIcon,
  UserGroupIcon,
  DocumentTextIcon,
  CalendarDaysIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Encuestas Cívicas',
    description: 'Participa en encuestas comunitarias y expresa tu opinión sobre temas importantes.',
    icon: ChartBarIcon,
    href: '/polls',
  },
  {
    name: 'Sistema de Retroalimentación',
    description: 'Envía comentarios y sugerencias directamente a las autoridades locales.',
    icon: ChatBubbleBottomCenterTextIcon,
    href: '/feedback',
  },
  {
    name: 'Foros Comunitarios',
    description: 'Únete a discusiones sobre temas cívicos con otros ciudadanos.',
    icon: UserGroupIcon,
    href: '/forums',
  },
  {
    name: 'Eventos Cívicos',
    description: 'Mantente informado sobre reuniones y eventos comunitarios.',
    icon: CalendarDaysIcon,
    href: '/events',
  },
  {
    name: 'Biblioteca de Recursos',
    description: 'Accede a materiales educativos sobre participación ciudadana.',
    icon: BookOpenIcon,
    href: '/resources',
  },
  {
    name: 'Mi Panel',
    description: 'Rastrea tu participación cívica y actividad en la plataforma.',
    icon: DocumentTextIcon,
    href: '/dashboard',
  },
]

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Nuestro Pulso</h1>
              <p className="text-primary-100">Plataforma de Participación Ciudadana</p>
            </div>
            <div className="hidden sm:flex space-x-4">
              <Link 
                href="/login" 
                className="text-white hover:text-primary-100 transition-colors"
              >
                Iniciar Sesión
              </Link>
              <Link 
                href="/register" 
                className="bg-white text-primary-500 px-4 py-2 rounded-md font-medium hover:bg-primary-50 transition-colors"
              >
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Tu voz importa en{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                Colombia
              </span>
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
              Conecta con tu comunidad, participa en decisiones importantes y haz que tu voz sea escuchada 
              en la democracia colombiana.
            </p>
            <div className="mt-10 flex justify-center space-x-4">
              <Link
                href="/register"
                className="civic-button text-lg px-8 py-3"
              >
                Comenzar Ahora
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center text-lg font-medium text-gray-900 hover:text-primary-600 transition-colors"
              >
                Conocer más
                <ChevronRightIcon className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900">
              Herramientas para la Participación Ciudadana
            </h3>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Nuestra plataforma te ofrece múltiples formas de participar activamente en tu comunidad.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Link
                key={feature.name}
                href={feature.href}
                className="civic-card group cursor-pointer"
              >
                <div className="flex items-center">
                  <feature.icon className="h-8 w-8 text-primary-500 group-hover:text-primary-600 transition-colors" />
                  <h4 className="ml-3 text-lg font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                    {feature.name}
                  </h4>
                </div>
                <p className="mt-3 text-gray-600">{feature.description}</p>
                <div className="mt-4 flex items-center text-primary-500 group-hover:text-primary-600 transition-colors">
                  <span className="text-sm font-medium">Explorar</span>
                  <ChevronRightIcon className="ml-1 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-500 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white">
            ¿Listo para hacer la diferencia?
          </h3>
          <p className="mt-4 text-xl text-primary-100">
            Únete a miles de colombianos que ya están participando activamente en su comunidad.
          </p>
          <div className="mt-8">
            <Link
              href="/register"
              className="inline-flex items-center rounded-md bg-white px-6 py-3 text-lg font-medium text-primary-500 shadow-sm hover:bg-primary-50 transition-colors"
            >
              Crear Cuenta Gratuita
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-lg font-semibold">Nuestro Pulso</h5>
              <p className="mt-2 text-gray-300">
                Fortaleciendo la democracia colombiana a través de la participación ciudadana.
              </p>
            </div>
            <div>
              <h6 className="font-medium">Plataforma</h6>
              <ul className="mt-2 space-y-1 text-gray-300">
                <li><Link href="/polls" className="hover:text-white transition-colors">Encuestas</Link></li>
                <li><Link href="/feedback" className="hover:text-white transition-colors">Retroalimentación</Link></li>
                <li><Link href="/forums" className="hover:text-white transition-colors">Foros</Link></li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium">Recursos</h6>
              <ul className="mt-2 space-y-1 text-gray-300">
                <li><Link href="/about" className="hover:text-white transition-colors">Acerca de</Link></li>
                <li><Link href="/help" className="hover:text-white transition-colors">Ayuda</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacidad</Link></li>
              </ul>
            </div>
            <div>
              <h6 className="font-medium">Contacto</h6>
              <p className="mt-2 text-gray-300">
                Para soporte técnico o consultas sobre la plataforma.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; 2024 Nuestro Pulso. Desarrollado para fortalecer la democracia en Colombia.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}