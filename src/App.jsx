import React, { useState } from 'react'

const App = () => {
  const [currentSection, setCurrentSection] = useState('home')
  const [language, setLanguage] = useState('es')

  const translations = {
    es: {
      title: 'Nuestro Pulso',
      subtitle: 'El Pulso de Colombia',
      nav: {
        home: 'Inicio',
        chat: 'Chat',
        debate: 'Debate',
        survey: 'Encuestas',
        news: 'Noticias',
        community: 'Comunidad',
        admin: 'Admin'
      },
      sections: {
        home: {
          title: 'Bienvenidos a Nuestro Pulso',
          description: 'Una plataforma para conectar con el pulso de Colombia. Mantente informado, participa en debates y forma parte de nuestra comunidad.',
          features: [
            'Participa en debates nacionales',
            'Mantente informado con las últimas noticias',
            'Conecta con tu comunidad',
            'Comparte tu opinión en encuestas'
          ]
        },
        chat: {
          title: 'Chat Comunitario',
          description: 'Conecta y conversa con colombianos de todo el país.',
          placeholder: 'Escribe tu mensaje aquí...'
        },
        debate: {
          title: 'Debates Nacionales',
          description: 'Participa en los debates más importantes de Colombia.',
          topics: [
            'Política Nacional',
            'Economía',
            'Educación',
            'Medio Ambiente'
          ]
        },
        survey: {
          title: 'Encuestas Públicas',
          description: 'Comparte tu opinión en temas importantes para el país.',
          current: '¿Cuál es la prioridad más importante para Colombia?'
        },
        news: {
          title: 'Noticias Nacionales',
          description: 'Mantente informado con las últimas noticias de Colombia.',
          headlines: [
            'Avances en infraestructura nacional',
            'Nuevas políticas educativas',
            'Desarrollo económico regional'
          ]
        },
        community: {
          title: 'Comunidad',
          description: 'Conecta con colombianos de tu región y de todo el país.',
          regions: ['Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena']
        },
        admin: {
          title: 'Panel de Administración',
          description: 'Gestión y moderación de la plataforma.',
          stats: {
            users: '15,423',
            posts: '3,892',
            debates: '156'
          }
        }
      }
    },
    en: {
      title: 'Our Pulse',
      subtitle: 'The Pulse of Colombia',
      nav: {
        home: 'Home',
        chat: 'Chat',
        debate: 'Debate',
        survey: 'Surveys',
        news: 'News',
        community: 'Community',
        admin: 'Admin'
      },
      sections: {
        home: {
          title: 'Welcome to Our Pulse',
          description: 'A platform to connect with the pulse of Colombia. Stay informed, participate in debates, and be part of our community.',
          features: [
            'Participate in national debates',
            'Stay informed with the latest news',
            'Connect with your community',
            'Share your opinion in surveys'
          ]
        },
        chat: {
          title: 'Community Chat',
          description: 'Connect and chat with Colombians from across the country.',
          placeholder: 'Type your message here...'
        },
        debate: {
          title: 'National Debates',
          description: 'Participate in Colombia\'s most important debates.',
          topics: [
            'National Politics',
            'Economy',
            'Education',
            'Environment'
          ]
        },
        survey: {
          title: 'Public Surveys',
          description: 'Share your opinion on important topics for the country.',
          current: 'What is the most important priority for Colombia?'
        },
        news: {
          title: 'National News',
          description: 'Stay informed with the latest news from Colombia.',
          headlines: [
            'Advances in national infrastructure',
            'New educational policies',
            'Regional economic development'
          ]
        },
        community: {
          title: 'Community',
          description: 'Connect with Colombians from your region and across the country.',
          regions: ['Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena']
        },
        admin: {
          title: 'Administration Panel',
          description: 'Platform management and moderation.',
          stats: {
            users: '15,423',
            posts: '3,892',
            debates: '156'
          }
        }
      }
    }
  }

  const t = translations[language]

  const NavBar = () => (
    <nav className="bg-white shadow-lg border-b-4 border-colombia-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-6 bg-gradient-to-b from-colombia-yellow via-colombia-blue to-colombia-red rounded"></div>
              <h1 className="text-xl font-bold text-gray-900">{t.title}</h1>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            {Object.entries(t.nav).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setCurrentSection(key)}
                className={`nav-link ${currentSection === key ? 'active' : ''}`}
              >
                {label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="flex items-center space-x-1 px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <span className="text-sm font-medium">
                {language === 'es' ? '🇺🇸 EN' : '🇨🇴 ES'}
              </span>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className="md:hidden pb-4">
          <div className="flex flex-wrap gap-2">
            {Object.entries(t.nav).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setCurrentSection(key)}
                className={`nav-link text-xs ${currentSection === key ? 'active' : ''}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )

  const HomeSection = () => (
    <div className="space-y-8">
      <div className="text-center py-12 bg-gradient-to-r from-colombia-yellow-light via-colombia-blue-light to-colombia-red-light rounded-xl">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">{t.sections.home.title}</h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">{t.sections.home.description}</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.sections.home.features.map((feature, index) => (
          <div key={index} className="section-card text-center">
            <div className="w-12 h-12 bg-colombia-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">✓</span>
            </div>
            <p className="text-gray-800">{feature}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-colombia-yellow to-colombia-blue rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">{t.subtitle}</h3>
        <p className="text-white/90 mb-6">Únete a la conversación nacional y forma parte del cambio.</p>
        <button className="bg-white text-colombia-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          {language === 'es' ? 'Comenzar Ahora' : 'Get Started'}
        </button>
      </div>
    </div>
  )

  const ChatSection = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.sections.chat.title}</h2>
        <p className="text-gray-600">{t.sections.chat.description}</p>
      </div>
      
      <div className="section-card">
        <div className="h-80 bg-gray-50 rounded-lg p-4 mb-4 overflow-y-auto">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-colombia-blue rounded-full flex items-center justify-center">
                <span className="text-white text-sm">JD</span>
              </div>
              <div className="bg-white rounded-lg p-3 shadow">
                <p className="text-sm">¡Hola a todos! ¿Cómo están?</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-colombia-red rounded-full flex items-center justify-center">
                <span className="text-white text-sm">MA</span>
              </div>
              <div className="bg-white rounded-lg p-3 shadow">
                <p className="text-sm">Todo bien por aquí en Medellín. ¿Y ustedes?</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder={t.sections.chat.placeholder}
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-colombia-blue"
          />
          <button className="btn-primary">
            {language === 'es' ? 'Enviar' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  )

  const DebateSection = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.sections.debate.title}</h2>
        <p className="text-gray-600">{t.sections.debate.description}</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {t.sections.debate.topics.map((topic, index) => (
          <div key={index} className="section-card hover:border-colombia-blue cursor-pointer">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{topic}</h3>
            <p className="text-gray-600 mb-4">Participa en el debate sobre este tema importante.</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">124 participantes</span>
              <button className="btn-primary text-sm">
                {language === 'es' ? 'Unirse' : 'Join'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const SurveySection = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.sections.survey.title}</h2>
        <p className="text-gray-600">{t.sections.survey.description}</p>
      </div>
      
      <div className="section-card max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.sections.survey.current}</h3>
        <div className="space-y-3">
          {['Educación', 'Salud', 'Economía', 'Seguridad'].map((option, index) => (
            <label key={index} className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50">
              <input type="radio" name="priority" className="text-colombia-blue" />
              <span>{option}</span>
            </label>
          ))}
        </div>
        <button className="btn-primary w-full mt-6">
          {language === 'es' ? 'Votar' : 'Vote'}
        </button>
      </div>
    </div>
  )

  const NewsSection = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.sections.news.title}</h2>
        <p className="text-gray-600">{t.sections.news.description}</p>
      </div>
      
      <div className="space-y-4">
        {t.sections.news.headlines.map((headline, index) => (
          <div key={index} className="section-card hover:border-colombia-blue cursor-pointer">
            <div className="flex items-start space-x-4">
              <div className="w-20 h-20 bg-gradient-to-br from-colombia-yellow to-colombia-blue rounded-lg flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{headline}</h3>
                <p className="text-gray-600 text-sm mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Hace 2 horas</span>
                  <button className="text-colombia-blue hover:text-colombia-blue-dark text-sm">
                    {language === 'es' ? 'Leer más' : 'Read more'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const CommunitySection = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.sections.community.title}</h2>
        <p className="text-gray-600">{t.sections.community.description}</p>
      </div>
      
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
        {t.sections.community.regions.map((region, index) => (
          <div key={index} className="section-card text-center hover:border-colombia-blue cursor-pointer">
            <div className="w-16 h-16 bg-gradient-to-br from-colombia-yellow to-colombia-red rounded-full mx-auto mb-3 flex items-center justify-center">
              <span className="text-white font-bold">{region[0]}</span>
            </div>
            <h3 className="font-semibold text-gray-900">{region}</h3>
            <p className="text-sm text-gray-500">1,234 miembros</p>
          </div>
        ))}
      </div>
    </div>
  )

  const AdminSection = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.sections.admin.title}</h2>
        <p className="text-gray-600">{t.sections.admin.description}</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="section-card text-center">
          <div className="text-3xl font-bold text-colombia-blue mb-2">{t.sections.admin.stats.users}</div>
          <div className="text-gray-600">{language === 'es' ? 'Usuarios Activos' : 'Active Users'}</div>
        </div>
        <div className="section-card text-center">
          <div className="text-3xl font-bold text-colombia-red mb-2">{t.sections.admin.stats.posts}</div>
          <div className="text-gray-600">{language === 'es' ? 'Publicaciones' : 'Posts'}</div>
        </div>
        <div className="section-card text-center">
          <div className="text-3xl font-bold text-colombia-yellow-dark mb-2">{t.sections.admin.stats.debates}</div>
          <div className="text-gray-600">{language === 'es' ? 'Debates Activos' : 'Active Debates'}</div>
        </div>
      </div>
      
      <div className="section-card">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          {language === 'es' ? 'Acciones Rápidas' : 'Quick Actions'}
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <button className="btn-primary">
            {language === 'es' ? 'Moderar Contenido' : 'Moderate Content'}
          </button>
          <button className="btn-secondary">
            {language === 'es' ? 'Ver Reportes' : 'View Reports'}
          </button>
          <button className="btn-primary">
            {language === 'es' ? 'Gestionar Usuarios' : 'Manage Users'}
          </button>
          <button className="btn-danger">
            {language === 'es' ? 'Sistema' : 'System'}
          </button>
        </div>
      </div>
    </div>
  )

  const renderSection = () => {
    switch (currentSection) {
      case 'home': return <HomeSection />
      case 'chat': return <ChatSection />
      case 'debate': return <DebateSection />
      case 'survey': return <SurveySection />
      case 'news': return <NewsSection />
      case 'community': return <CommunitySection />
      case 'admin': return <AdminSection />
      default: return <HomeSection />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderSection()}
      </main>
      
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-4 bg-gradient-to-b from-colombia-yellow via-colombia-blue to-colombia-red rounded"></div>
            <span className="font-bold">{t.title}</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Nuestro Pulso. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App