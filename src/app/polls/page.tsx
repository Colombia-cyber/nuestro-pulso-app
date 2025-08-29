export default function PollsPage() {
  const polls = [
    {
      id: 1,
      title: "Mejoramiento del Transporte Público en Bogotá",
      description: "¿Qué aspecto del transporte público considera más importante mejorar?",
      options: ["Frecuencia de buses", "Infraestructura de estaciones", "Tarifas", "Seguridad"],
      votes: 1247,
      endDate: "2024-09-15",
      status: "active"
    },
    {
      id: 2,
      title: "Espacios Verdes en Medellín",
      description: "¿Dónde debería la ciudad invertir en nuevos parques?",
      options: ["Centro de la ciudad", "Barrios periféricos", "Corredor verde del río", "Zonas industriales"],
      votes: 892,
      endDate: "2024-09-10",
      status: "active"
    },
    {
      id: 3,
      title: "Horarios de Atención Municipal",
      description: "¿Cuál sería el mejor horario para atención al ciudadano?",
      options: ["Mañana (8-12)", "Tarde (2-6)", "Horario extendido (8-8)", "Sábados incluidos"],
      votes: 2156,
      endDate: "2024-08-30",
      status: "closed"
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-primary-500 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Encuestas Cívicas</h1>
          <p className="mt-4 text-xl text-primary-100">
            Participa en las decisiones importantes de tu comunidad
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-12">
          <div className="civic-card text-center">
            <div className="text-3xl font-bold text-primary-500">2</div>
            <div className="text-gray-600">Encuestas Activas</div>
          </div>
          <div className="civic-card text-center">
            <div className="text-3xl font-bold text-primary-500">2,139</div>
            <div className="text-gray-600">Votos Totales</div>
          </div>
          <div className="civic-card text-center">
            <div className="text-3xl font-bold text-primary-500">3</div>
            <div className="text-gray-600">Ciudades Participantes</div>
          </div>
        </div>

        {/* Active Polls */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Encuestas Activas</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {polls.filter(poll => poll.status === 'active').map((poll) => (
              <div key={poll.id} className="civic-card">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{poll.title}</h3>
                    <p className="mt-2 text-gray-600">{poll.description}</p>
                    
                    <div className="mt-4 space-y-2">
                      {poll.options.map((option, index) => (
                        <button
                          key={index}
                          className="block w-full text-left px-4 py-2 border border-gray-300 rounded-md hover:border-primary-500 hover:bg-primary-50 transition-colors"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                    
                    <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
                      <span>{poll.votes} votos</span>
                      <span>Cierra: {poll.endDate}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button className="civic-button w-full">
                    Votar Ahora
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Polls */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Encuestas Recientes</h2>
          <div className="space-y-4">
            {polls.filter(poll => poll.status === 'closed').map((poll) => (
              <div key={poll.id} className="civic-card">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{poll.title}</h3>
                    <p className="text-gray-600">{poll.description}</p>
                    <div className="mt-2 text-sm text-gray-500">
                      {poll.votes} votos • Cerrada el {poll.endDate}
                    </div>
                  </div>
                  <button className="text-primary-500 hover:text-primary-600 font-medium">
                    Ver Resultados
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="civic-card bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
            <h3 className="text-2xl font-bold">¿Tienes una propuesta?</h3>
            <p className="mt-2 text-primary-100">
              Sugiere temas para futuras encuestas y ayuda a definir las prioridades de tu comunidad.
            </p>
            <button className="mt-4 bg-white text-primary-500 px-6 py-3 rounded-md font-medium hover:bg-primary-50 transition-colors">
              Proponer Encuesta
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}