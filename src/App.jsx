import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'

// Language context
const LanguageContext = React.createContext()

// Translation data
const translations = {
  es: {
    title: 'Nuestro Pulso',
    subtitle: 'Plataforma de Participación Ciudadana Colombiana',
    nav: {
      home: '🏠 Inicio',
      chat: '💬 Chat',
      debates: '🗣️ Debates',
      surveys: '📊 Encuestas',
      news: '📰 Noticias',
      community: '👥 Comunidad',
      admin: '⚙️ Admin'
    },
    home: {
      welcome: 'Bienvenidos a Nuestro Pulso',
      description: 'La plataforma digital que fortalece la democracia colombiana a través de la participación ciudadana activa.',
      features: 'Características principales',
      participate: 'Participa en tu democracia',
      stats: {
        users: 'Ciudadanos Activos',
        debates: 'Debates en Curso',
        surveys: 'Encuestas Activas'
      }
    },
    chat: {
      title: 'Chat Comunitario',
      subtitle: 'Conecta con otros ciudadanos y participa en conversaciones constructivas',
      login: 'Iniciar Sesión',
      username: 'Nombre de usuario',
      password: 'Contraseña',
      enter: 'Ingresar',
      logout: 'Cerrar Sesión',
      typeMessage: 'Escribe tu mensaje...',
      send: 'Enviar'
    },
    language: 'Idioma'
  },
  en: {
    title: 'Our Pulse',
    subtitle: 'Colombian Civic Engagement Platform',
    nav: {
      home: '🏠 Home',
      chat: '💬 Chat',
      debates: '🗣️ Debates',
      surveys: '📊 Surveys',
      news: '📰 News',
      community: '👥 Community',
      admin: '⚙️ Admin'
    },
    home: {
      welcome: 'Welcome to Our Pulse',
      description: 'The digital platform that strengthens Colombian democracy through active citizen participation.',
      features: 'Key Features',
      participate: 'Participate in your democracy',
      stats: {
        users: 'Active Citizens',
        debates: 'Ongoing Debates',
        surveys: 'Active Surveys'
      }
    },
    chat: {
      title: 'Community Chat',
      subtitle: 'Connect with other citizens and participate in constructive conversations',
      login: 'Login',
      username: 'Username',
      password: 'Password',
      enter: 'Enter',
      logout: 'Logout',
      typeMessage: 'Type your message...',
      send: 'Send'
    },
    language: 'Language'
  }
}

// Navigation Component
const Navigation = () => {
  const { t, language, setLanguage } = React.useContext(LanguageContext)
  const location = useLocation()
  
  const navItems = [
    { path: '/', key: 'home' },
    { path: '/chat', key: 'chat' },
    { path: '/debates', key: 'debates' },
    { path: '/surveys', key: 'surveys' },
    { path: '/news', key: 'news' },
    { path: '/community', key: 'community' },
    { path: '/admin', key: 'admin' }
  ]
  
  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-yellow-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold text-blue-900">
              🇨🇴 {t.title}
            </Link>
            <div className="hidden md:flex space-x-4">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'bg-yellow-100 text-blue-900'
                      : 'text-gray-700 hover:bg-yellow-50'
                  }`}
                >
                  {t.nav[item.key]}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-white border border-gray-300 rounded-md px-3 py-1 text-sm"
            >
              <option value="es">🇨🇴 Español</option>
              <option value="en">🇺🇸 English</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Home Page Component
const HomePage = () => {
  const { t } = React.useContext(LanguageContext)
  
  const stats = [
    { number: '157K', label: t.home.stats.users },
    { number: '23', label: t.home.stats.debates },
    { number: '8', label: t.home.stats.surveys }
  ]
  
  const features = [
    {
      icon: '💬',
      title: 'Chat Comunitario',
      description: 'Conecta con ciudadanos de toda Colombia'
    },
    {
      icon: '🗣️',
      title: 'Debates Democráticos',
      description: 'Participa en debates sobre temas nacionales'
    },
    {
      icon: '📊',
      title: 'Encuestas Ciudadanas',
      description: 'Comparte tu opinión en encuestas oficiales'
    },
    {
      icon: '📰',
      title: 'Noticias Verificadas',
      description: 'Mantente informado con fuentes confiables'
    }
  ]
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="gradient-colombia py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t.home.welcome}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {t.home.description}
          </p>
          <Link
            to="/chat"
            className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            {t.home.participate}
          </Link>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-blue-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            {t.home.features}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card-colombia text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Chat Page Component
const ChatPage = () => {
  const { t } = React.useContext(LanguageContext)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [currentUser, setCurrentUser] = useState('')
  const [messages, setMessages] = useState([
    {
      user: 'María García',
      message: '¿Qué opinan sobre la nueva propuesta de transporte público en Bogotá?',
      time: '14:30',
      avatar: '👩‍💼'
    },
    {
      user: 'Carlos Rodríguez',
      message: 'Creo que es una excelente iniciativa para reducir la contaminación.',
      time: '14:32',
      avatar: '👨‍🏫'
    },
    {
      user: 'Ana Martínez',
      message: 'Necesitamos más información sobre los costos y el cronograma.',
      time: '14:35',
      avatar: '👩‍⚕️'
    }
  ])
  const [newMessage, setNewMessage] = useState('')
  
  const handleLogin = (e) => {
    e.preventDefault()
    if (username && password) {
      setCurrentUser(username)
      setIsLoggedIn(true)
    }
  }
  
  const handleSendMessage = (e) => {
    e.preventDefault()
    if (newMessage.trim()) {
      const now = new Date()
      setMessages([...messages, {
        user: currentUser,
        message: newMessage,
        time: now.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' }),
        avatar: '👤'
      }])
      setNewMessage('')
    }
  }
  
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-blue-50">
        <div className="card-colombia max-w-md w-full mx-4">
          <h2 className="text-2xl font-bold text-blue-900 text-center mb-6">
            {t.chat.title}
          </h2>
          <p className="text-gray-600 text-center mb-8">
            {t.chat.subtitle}
          </p>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.chat.username}
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.chat.password}
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>
            <button type="submit" className="w-full btn-colombia">
              {t.chat.enter}
            </button>
          </form>
        </div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="card-colombia">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-blue-900">{t.chat.title}</h2>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                👤 {currentUser}
              </span>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="btn-colombia-red text-sm"
              >
                {t.chat.logout}
              </button>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 h-96 overflow-y-auto mb-4">
            {messages.map((msg, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">{msg.avatar}</span>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-semibold text-blue-900">{msg.user}</span>
                      <span className="text-xs text-gray-500">{msg.time}</span>
                    </div>
                    <p className="text-gray-700">{msg.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSendMessage} className="flex space-x-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder={t.chat.typeMessage}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button type="submit" className="btn-colombia">
              {t.chat.send}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

// Debates Page Component
const DebatesPage = () => {
  const debates = [
    {
      id: 1,
      title: 'Reforma Tributaria 2024',
      description: 'Debate sobre las nuevas propuestas fiscales y su impacto en los ciudadanos colombianos.',
      status: 'Activo',
      participants: 156,
      category: 'Economía'
    },
    {
      id: 2,
      title: 'Transporte Público en Grandes Ciudades',
      description: 'Discusión sobre mejoras al sistema de transporte público en Bogotá, Medellín y Cali.',
      status: 'Activo',
      participants: 89,
      category: 'Infraestructura'
    },
    {
      id: 3,
      title: 'Implementación de Energías Renovables',
      description: 'Propuestas para acelerar la transición hacia energías limpias en Colombia.',
      status: 'Programado',
      participants: 234,
      category: 'Medio Ambiente'
    }
  ]
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-900 text-center mb-8">
          🗣️ Debates Democráticos
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {debates.map((debate) => (
            <div key={debate.id} className="card-colombia">
              <div className="flex justify-between items-start mb-4">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  debate.status === 'Activo' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {debate.status}
                </span>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {debate.category}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                {debate.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {debate.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  👥 {debate.participants} participantes
                </span>
                <button className="btn-colombia text-sm">
                  Participar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Surveys Page Component
const SurveysPage = () => {
  const surveys = [
    {
      id: 1,
      title: 'Calidad del Servicio de Salud Pública',
      description: 'Evalúa tu experiencia con el sistema de salud colombiano.',
      responses: 1247,
      deadline: '15 días restantes'
    },
    {
      id: 2,
      title: 'Prioridades de Inversión en Educación',
      description: 'Ayúdanos a definir dónde invertir los recursos educativos.',
      responses: 892,
      deadline: '8 días restantes'
    },
    {
      id: 3,
      title: 'Seguridad Ciudadana en tu Barrio',
      description: 'Comparte tu percepción sobre la seguridad en tu comunidad.',
      responses: 567,
      deadline: '22 días restantes'
    }
  ]
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-900 text-center mb-8">
          📊 Encuestas Ciudadanas
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {surveys.map((survey) => (
            <div key={survey.id} className="card-colombia">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                {survey.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {survey.description}
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">📝 {survey.responses} respuestas</span>
                  <span className="text-red-600">⏰ {survey.deadline}</span>
                </div>
              </div>
              <button className="w-full btn-colombia">
                Responder Encuesta
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// News Page Component
const NewsPage = () => {
  const news = [
    {
      id: 1,
      title: 'Nueva Reforma de Salud Aprobada en el Congreso',
      summary: 'El Congreso aprobó importantes cambios al sistema de salud que beneficiarán a millones de colombianos.',
      source: 'El Tiempo',
      time: 'Hace 2 horas',
      category: 'Política'
    },
    {
      id: 2,
      title: 'Inversión en Infraestructura Vial para Conectar Regiones',
      summary: 'El gobierno anuncia un plan de $5 billones para mejorar las carreteras del país.',
      source: 'Semana',
      time: 'Hace 4 horas',
      category: 'Economía'
    },
    {
      id: 3,
      title: 'Colombia Lidera Iniciativas Ambientales en América Latina',
      summary: 'El país presenta nuevas políticas para la protección de la biodiversidad.',
      source: 'El Espectador',
      time: 'Hace 6 horas',
      category: 'Medio Ambiente'
    }
  ]
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-900 text-center mb-8">
          📰 Noticias Verificadas
        </h1>
        <div className="space-y-6">
          {news.map((article) => (
            <div key={article.id} className="card-colombia">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {article.category}
                </span>
                <div className="text-xs text-gray-500">
                  📰 {article.source} • {article.time}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {article.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {article.summary}
              </p>
              <div className="flex space-x-2">
                <button className="btn-colombia text-sm">
                  Leer Más
                </button>
                <button className="btn-colombia-blue text-sm">
                  💬 Comentar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Community Page Component
const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold text-blue-900 mb-8">
          👥 Comunidad
        </h1>
        <div className="card-colombia max-w-2xl mx-auto">
          <div className="text-6xl mb-4">🚧</div>
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            Próximamente
          </h2>
          <p className="text-gray-600">
            Estamos trabajando en nuevas funcionalidades comunitarias que fortalecerán 
            la participación ciudadana. ¡Mantente atento a las actualizaciones!
          </p>
        </div>
      </div>
    </div>
  )
}

// Admin Page Component
const AdminPage = () => {
  const [stats] = useState({
    totalUsers: 157234,
    activeDebates: 23,
    activeSurveys: 8,
    dailyMessages: 1456,
    weeklyGrowth: '+12.5%'
  })
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-900 text-center mb-8">
          ⚙️ Panel de Administración
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="card-colombia text-center">
            <div className="text-3xl font-bold text-blue-900 mb-2">
              {stats.totalUsers.toLocaleString()}
            </div>
            <div className="text-gray-600">Usuarios Registrados</div>
          </div>
          <div className="card-colombia text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {stats.activeDebates}
            </div>
            <div className="text-gray-600">Debates Activos</div>
          </div>
          <div className="card-colombia text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">
              {stats.activeSurveys}
            </div>
            <div className="text-gray-600">Encuestas Activas</div>
          </div>
          <div className="card-colombia text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {stats.dailyMessages.toLocaleString()}
            </div>
            <div className="text-gray-600">Mensajes Hoy</div>
          </div>
          <div className="card-colombia text-center">
            <div className="text-3xl font-bold text-green-500 mb-2">
              {stats.weeklyGrowth}
            </div>
            <div className="text-gray-600">Crecimiento Semanal</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card-colombia">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">
              Acciones Rápidas
            </h3>
            <div className="space-y-2">
              <button className="w-full btn-colombia text-left">
                📊 Crear Nueva Encuesta
              </button>
              <button className="w-full btn-colombia-blue text-left">
                🗣️ Moderar Debates
              </button>
              <button className="w-full btn-colombia-red text-left">
                👥 Gestionar Usuarios
              </button>
            </div>
          </div>
          
          <div className="card-colombia">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">
              Actividad Reciente
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Nuevo debate creado</span>
                <span className="text-gray-500">Hace 15 min</span>
              </div>
              <div className="flex justify-between">
                <span>Usuario reportado</span>
                <span className="text-gray-500">Hace 32 min</span>
              </div>
              <div className="flex justify-between">
                <span>Encuesta finalizada</span>
                <span className="text-gray-500">Hace 1 hora</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Main App Component
function App() {
  const [language, setLanguage] = useState('es')
  const t = translations[language]
  
  return (
    <LanguageContext.Provider value={{ t, language, setLanguage }}>
      <Router>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/debates" element={<DebatesPage />} />
            <Route path="/surveys" element={<SurveysPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </div>
      </Router>
    </LanguageContext.Provider>
  )
}

export default App