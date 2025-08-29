import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  MapIcon, 
  ChartBarIcon, 
  ChatBubbleBottomCenterTextIcon,
  TrophyIcon,
  VideoCameraIcon,
  EyeIcon,
  AcademicCapIcon,
  CpuChipIcon,
  Bars3Icon,
  XMarkIcon,
  BellIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Inicio', href: '/', icon: null },
    { name: 'Mapa de Colombia', href: '/map', icon: MapIcon },
    { name: 'Dashboard', href: '/dashboard', icon: ChartBarIcon },
    { name: 'Encuestas y Votaciones', href: '/polls', icon: ChatBubbleBottomCenterTextIcon },
    { name: 'Logros Cívicos', href: '/achievements', icon: TrophyIcon },
    { name: 'Transmisiones en Vivo', href: '/streaming', icon: VideoCameraIcon },
    { name: 'Transparencia Gubernamental', href: '/transparency', icon: EyeIcon },
    { name: 'Educación Cívica', href: '/education', icon: AcademicCapIcon },
    { name: 'Asistente IA Adriana', href: '/ai-assistant', icon: CpuChipIcon },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b-4 border-colombia-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-colombia-yellow via-colombia-blue to-colombia-red rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">NP</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-colombia-blue">Nuestro Pulso</h1>
                <p className="text-xs text-gray-600">Plataforma Cívica de Colombia</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.slice(0, 5).map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors focus-ring ${
                    isActive(item.href)
                      ? 'bg-colombia-blue text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  aria-label={item.name}
                >
                  <div className="flex items-center space-x-1">
                    {Icon && <Icon className="w-4 h-4" />}
                    <span className="hidden xl:block">{item.name}</span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button 
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-full focus-ring"
              aria-label="Notificaciones"
            >
              <BellIcon className="w-6 h-6" />
              <span className="sr-only">Notificaciones</span>
            </button>
            
            <button 
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-full focus-ring"
              aria-label="Perfil de usuario"
            >
              <UserCircleIcon className="w-6 h-6" />
              <span className="sr-only">Perfil</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md focus-ring"
              aria-label="Menú de navegación"
            >
              {isOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors focus-ring ${
                    isActive(item.href)
                      ? 'bg-colombia-blue text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {Icon && <Icon className="w-5 h-5" />}
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
          
          {/* Quick Actions in Mobile */}
          <div className="border-t border-gray-200 px-4 py-3">
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-600">
                <span className="font-medium">Participación Activa</span>
                <div className="flex space-x-4 mt-1">
                  <span className="text-xs">45 debates</span>
                  <span className="text-xs">23 encuestas</span>
                </div>
              </div>
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-800 text-xs font-bold">85</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}