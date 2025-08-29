import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState<'es' | 'en'>('es')
  const location = useLocation()

  const navItems = [
    { 
      path: '/', 
      label: language === 'es' ? 'Inicio' : 'Home',
      icon: '🏠'
    },
    { 
      path: '/chat', 
      label: language === 'es' ? 'Chat Comunitario' : 'Community Chat',
      icon: '💬'
    },
    { 
      path: '/debates', 
      label: language === 'es' ? 'Debates' : 'Debates',
      icon: '🗣️'
    },
    { 
      path: '/surveys', 
      label: language === 'es' ? 'Encuestas' : 'Surveys',
      icon: '📊'
    },
    { 
      path: '/news', 
      label: language === 'es' ? 'Noticias' : 'News',
      icon: '📰'
    }
  ]

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es')
  }

  return (
    <header className="colombia-accent">
      <div className="glass-card mb-0" style={{ borderRadius: '0', marginBottom: '0' }}>
        <div className="container">
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-colombia-yellow via-colombia-blue to-colombia-red rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">🇨🇴</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-colombia-blue">
                  Nuestro Pulso
                </h1>
                <p className="text-sm text-gray-600">
                  {language === 'es' ? 'Participación Ciudadana' : 'Civic Engagement'}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'bg-colombia-blue text-white'
                      : 'text-gray-700 hover:bg-colombia-yellow hover:text-colombia-blue'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </div>

            {/* Language Toggle & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="px-3 py-1 bg-colombia-red text-white rounded-md text-sm font-medium hover:bg-red-dark transition-colors"
              >
                {language.toUpperCase()}
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-colombia-blue"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? 'bg-colombia-blue text-white'
                        : 'text-gray-700 hover:bg-colombia-yellow hover:text-colombia-blue'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header