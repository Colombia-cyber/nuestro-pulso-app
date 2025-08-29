import React from 'react'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
  return (
    <div className="container py-8">
      {/* Hero Section */}
      <section className="text-center py-16">
        <div className="glass-card max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-r from-colombia-yellow via-colombia-blue to-colombia-red rounded-full flex items-center justify-center">
              <span className="text-4xl">🇨🇴</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-colombia-blue mb-6">
            Nuestro Pulso
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-700 mb-8">
            Plataforma de Participación Ciudadana Colombiana
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Únete a la conversación democrática. Participa en debates, encuestas y 
            chat comunitario para fortalecer nuestra democracia colombiana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/chat" className="btn btn-primary">
              💬 Únete al Chat
            </Link>
            <Link to="/debates" className="btn btn-secondary">
              🗣️ Ver Debates
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <h3 className="text-3xl font-bold text-center text-colombia-blue mb-12">
          Participa en la Democracia
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon="💬"
            title="Chat Comunitario"
            description="Conversaciones en tiempo real con ciudadanos de toda Colombia"
            link="/chat"
          />
          <FeatureCard
            icon="🗣️"
            title="Debates Semanales"
            description="Debates estructurados sobre temas políticos y sociales colombianos"
            link="/debates"
          />
          <FeatureCard
            icon="📊"
            title="Encuestas Ciudadanas"
            description="Comparte tu opinión en encuestas sobre políticas públicas"
            link="/surveys"
          />
          <FeatureCard
            icon="📰"
            title="Centro de Noticias"
            description="Mantente informado sobre Colombia, Australia y noticias internacionales"
            link="/news"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="glass-card">
          <h3 className="text-2xl font-bold text-center text-colombia-blue mb-8">
            Impacto de la Comunidad
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-colombia-red">1,247</div>
              <div className="text-gray-600">Ciudadanos Activos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-colombia-blue">89</div>
              <div className="text-gray-600">Debates Realizados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-colombia-yellow">156</div>
              <div className="text-gray-600">Encuestas Completadas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-colombia-red">24/7</div>
              <div className="text-gray-600">Chat Activo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center">
        <div className="glass-card max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-colombia-blue mb-4">
            ¿Listo para hacer la diferencia?
          </h3>
          <p className="text-gray-600 mb-6">
            Tu voz importa. Únete a miles de colombianos que ya están 
            participando activamente en el futuro de nuestro país.
          </p>
          <Link to="/chat" className="btn btn-primary">
            Comenzar Ahora
          </Link>
        </div>
      </section>
    </div>
  )
}

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  link: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, link }) => {
  return (
    <Link to={link} className="block">
      <div className="glass-card h-full hover:scale-105 transition-transform cursor-pointer">
        <div className="text-center">
          <div className="text-4xl mb-4">{icon}</div>
          <h4 className="text-xl font-semibold text-colombia-blue mb-3">{title}</h4>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default HomePage