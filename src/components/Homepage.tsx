
import { Link } from 'react-router-dom';
import { 
  MapIcon, 
  ChartBarIcon, 
  ChatBubbleBottomCenterTextIcon,
  TrophyIcon,
  VideoCameraIcon,
  EyeIcon,
  AcademicCapIcon,
  CpuChipIcon,
  ArrowRightIcon,
  UsersIcon,
  FireIcon,
  GlobeAmericasIcon
} from '@heroicons/react/24/outline';
import { civicActivities, colombianDepartments } from '../data/colombia';
import { ActivityType } from '../types';

export function Homepage() {
  const features = [
    {
      title: 'Mapa Interactivo de Colombia',
      description: 'Visualiza la actividad cívica en tiempo real en los 32 departamentos',
      icon: MapIcon,
      href: '/map',
      color: 'bg-blue-500',
      stats: '45 debates activos en Bogotá'
    },
    {
      title: 'Dashboard de Participación',
      description: 'Métricas personalizadas de tu compromiso cívico',
      icon: ChartBarIcon,
      href: '/dashboard',
      color: 'bg-green-500',
      stats: 'Puntuación cívica: 850'
    },
    {
      title: 'Encuestas y Votaciones',
      description: 'Participa en debates y encuestas gubernamentales',
      icon: ChatBubbleBottomCenterTextIcon,
      href: '/polls',
      color: 'bg-purple-500',
      stats: '23 encuestas activas'
    },
    {
      title: 'Sistema de Logros',
      description: 'Gana insignias por tu participación democrática',
      icon: TrophyIcon,
      href: '/achievements',
      color: 'bg-yellow-500',
      stats: '🥇 Campeón de la Democracia'
    },
    {
      title: 'Transmisiones en Vivo',
      description: 'Eventos gubernamentales y asambleas ciudadanas',
      icon: VideoCameraIcon,
      href: '/streaming',
      color: 'bg-red-500',
      stats: '3 transmisiones activas'
    },
    {
      title: 'Transparencia Gubernamental',
      description: 'Seguimiento de presupuestos y decisiones públicas',
      icon: EyeIcon,
      href: '/transparency',
      color: 'bg-indigo-500',
      stats: '$2.3B presupuesto rastreado'
    },
    {
      title: 'Educación Cívica',
      description: 'Aprende sobre la Constitución y procesos democráticos',
      icon: AcademicCapIcon,
      href: '/education',
      color: 'bg-pink-500',
      stats: '12 módulos disponibles'
    },
    {
      title: 'Asistente IA Adriana',
      description: 'Tu guía personalizada para el compromiso cívico',
      icon: CpuChipIcon,
      href: '/ai-assistant',
      color: 'bg-teal-500',
      stats: 'Disponible 24/7'
    },
  ];

  const recentActivities = civicActivities.slice(0, 3);
  const topDepartments = colombianDepartments.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Colombian Flag Gradient */}
      <section className="relative colombia-gradient py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              🇨🇴 Nuestro Pulso
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              La plataforma digital de democracia más avanzada de Colombia para el compromiso cívico
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/map"
                className="px-8 py-4 bg-white text-colombia-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg focus-ring"
              >
                Explorar Mapa de Colombia
              </Link>
              <Link
                to="/dashboard"
                className="px-8 py-4 bg-colombia-blue text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors shadow-lg focus-ring"
              >
                Mi Dashboard Cívico
              </Link>
            </div>
          </div>
          
          {/* Live Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-white">
              <div className="flex items-center justify-center mb-2">
                <UsersIcon className="w-8 h-8 mr-2" />
                <span className="text-3xl font-bold">2.1M</span>
              </div>
              <p className="text-white/90">Ciudadanos Activos</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-white">
              <div className="flex items-center justify-center mb-2">
                <FireIcon className="w-8 h-8 mr-2" />
                <span className="text-3xl font-bold">145</span>
              </div>
              <p className="text-white/90">Debates Activos</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-white">
              <div className="flex items-center justify-center mb-2">
                <GlobeAmericasIcon className="w-8 h-8 mr-2" />
                <span className="text-3xl font-bold">32</span>
              </div>
              <p className="text-white/90">Departamentos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Funcionalidades Avanzadas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Una plataforma completa para la participación democrática con tecnología de vanguardia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={index}
                  to={feature.href}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-colombia-blue focus-ring"
                >
                  <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-colombia-blue transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {feature.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                      {feature.stats}
                    </span>
                    <ArrowRightIcon className="w-4 h-4 text-gray-400 group-hover:text-colombia-blue group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Activities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Actividades Recientes
              </h2>
              <p className="text-gray-600">
                Únete a las conversaciones cívicas más importantes
              </p>
            </div>
            <Link
              to="/polls"
              className="px-6 py-3 bg-colombia-blue text-white rounded-lg hover:bg-blue-800 transition-colors focus-ring"
            >
              Ver Todas
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    activity.type === ActivityType.DEBATE ? 'bg-red-100 text-red-800' :
                    activity.type === ActivityType.SURVEY ? 'bg-blue-100 text-blue-800' :
                    activity.type === ActivityType.POLL ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {activity.type === ActivityType.DEBATE ? 'Debate' :
                     activity.type === ActivityType.SURVEY ? 'Encuesta' :
                     activity.type === ActivityType.POLL ? 'Votación' : 'Actividad'}
                  </span>
                  <span className="text-sm text-gray-500">{activity.municipality}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {activity.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {activity.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    {activity.participants.toLocaleString()} participantes
                  </span>
                  <Link
                    to="/polls"
                    className="text-colombia-blue hover:text-blue-800 font-medium text-sm focus-ring rounded"
                  >
                    Participar →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Departments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Departamentos Más Activos
            </h2>
            <p className="text-gray-600">
              Descubre dónde está sucediendo la mayor participación cívica
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topDepartments.map((dept) => (
              <Link
                key={dept.id}
                to="/map"
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-colombia-blue focus-ring"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{dept.name}</h3>
                  <div className="w-8 h-8 bg-gradient-to-r from-colombia-yellow to-colombia-blue rounded-full"></div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Debates:</span>
                    <span className="font-medium">{dept.activeDebates}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Encuestas:</span>
                    <span className="font-medium">{dept.activeSurveys}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Puntuación:</span>
                    <span className="font-medium text-green-600">{dept.civicScore}/10</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-colombia-blue">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¡Únete a la Revolución Cívica Digital!
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Sé parte del cambio democrático más grande de Colombia. Tu voz importa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/map"
              className="px-8 py-4 bg-colombia-yellow text-colombia-blue font-semibold rounded-lg hover:bg-yellow-400 transition-colors shadow-lg focus-ring"
            >
              Comenzar Ahora
            </Link>
            <Link
              to="/education"
              className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors shadow-lg focus-ring"
            >
              Aprender Más
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}