import React, { useState } from 'react'

interface Debate {
  id: string
  title: string
  description: string
  date: Date
  status: 'upcoming' | 'live' | 'completed'
  participants: number
  topic: string
  moderator: string
}

const DebatesPage: React.FC = () => {
  const [debates] = useState<Debate[]>([
    {
      id: '1',
      title: 'Reforma Pensional: ¿Beneficia a todos los colombianos?',
      description: 'Debate sobre las implicaciones de la nueva reforma pensional y su impacto en diferentes sectores de la población.',
      date: new Date(Date.now() + 86400000), // Tomorrow
      status: 'upcoming',
      participants: 156,
      topic: 'Política Social',
      moderator: 'Dr. Elena Vásquez'
    },
    {
      id: '2',
      title: 'Transporte Sostenible en las Grandes Ciudades',
      description: 'Discusión sobre alternativas de transporte público y movilidad sostenible en Bogotá, Medellín y Cali.',
      date: new Date(),
      status: 'live',
      participants: 89,
      topic: 'Medio Ambiente',
      moderator: 'Ing. Carlos Mendoza'
    },
    {
      id: '3',
      title: 'Educación Digital: Cerrando la Brecha Tecnológica',
      description: 'Cómo mejorar el acceso a la educación digital en zonas rurales y urbanas marginales.',
      date: new Date(Date.now() - 604800000), // Last week
      status: 'completed',
      participants: 234,
      topic: 'Educación',
      moderator: 'Dra. Ana Rodríguez'
    }
  ])

  const [selectedTopic, setSelectedTopic] = useState<string>('all')

  const topics = ['all', 'Política Social', 'Medio Ambiente', 'Educación', 'Economía', 'Seguridad']

  const filteredDebates = selectedTopic === 'all' 
    ? debates 
    : debates.filter(debate => debate.topic === selectedTopic)

  return (
    <div className="container py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="glass-card mb-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-colombia-blue mb-4">🗣️ Debates Ciudadanos</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Participa en debates estructurados sobre temas importantes para Colombia. 
              Tu voz y perspectiva son fundamentales para el diálogo democrático.
            </p>
          </div>
        </div>

        {/* Topic Filter */}
        <div className="glass-card mb-8">
          <h3 className="text-lg font-semibold text-colombia-blue mb-4">Filtrar por Tema</h3>
          <div className="flex flex-wrap gap-2">
            {topics.map(topic => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedTopic === topic
                    ? 'bg-colombia-blue text-white'
                    : 'bg-white/50 text-gray-700 hover:bg-colombia-yellow hover:text-colombia-blue'
                }`}
              >
                {topic === 'all' ? 'Todos los Temas' : topic}
              </button>
            ))}
          </div>
        </div>

        {/* Debates List */}
        <div className="space-y-6">
          {filteredDebates.map(debate => (
            <DebateCard key={debate.id} debate={debate} />
          ))}
        </div>

        {/* Create Debate CTA */}
        <div className="glass-card mt-8 text-center">
          <h3 className="text-xl font-semibold text-colombia-blue mb-4">
            ¿Tienes una propuesta de debate?
          </h3>
          <p className="text-gray-600 mb-6">
            Los ciudadanos pueden proponer temas para futuros debates. 
            Comparte tu idea y ayuda a construir la agenda democrática.
          </p>
          <button className="btn btn-primary">
            Proponer Debate
          </button>
        </div>
      </div>
    </div>
  )
}

interface DebateCardProps {
  debate: Debate
}

const DebateCard: React.FC<DebateCardProps> = ({ debate }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'text-red-600 bg-red-100'
      case 'upcoming': return 'text-blue-600 bg-blue-100'
      case 'completed': return 'text-gray-600 bg-gray-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'live': return '🔴 EN VIVO'
      case 'upcoming': return '📅 PRÓXIMO'
      case 'completed': return '✅ FINALIZADO'
      default: return status
    }
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-CO', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="glass-card">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(debate.status)}`}>
              {getStatusText(debate.status)}
            </span>
            <span className="px-3 py-1 bg-colombia-yellow text-colombia-blue rounded-full text-sm font-medium">
              {debate.topic}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-colombia-blue mb-3">{debate.title}</h3>
          <p className="text-gray-600 mb-4">{debate.description}</p>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <span>📅</span>
              <span>{formatDate(debate.date)}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>👥</span>
              <span>{debate.participants} participantes</span>
            </div>
            <div className="flex items-center gap-1">
              <span>🎯</span>
              <span>Moderador: {debate.moderator}</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-3 lg:w-48">
          {debate.status === 'live' && (
            <button className="btn btn-secondary">
              🔴 Unirse al Debate
            </button>
          )}
          {debate.status === 'upcoming' && (
            <button className="btn btn-outline">
              📝 Registrarse
            </button>
          )}
          {debate.status === 'completed' && (
            <button className="btn btn-outline">
              📺 Ver Grabación
            </button>
          )}
          <button className="btn btn-outline">
            💾 Guardar
          </button>
        </div>
      </div>
    </div>
  )
}

export default DebatesPage