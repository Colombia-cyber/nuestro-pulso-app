export default function DashboardPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">Mi Panel de Participación</h1>
          <p className="mt-2 text-primary-100">
            Rastrea tu actividad cívica y contribuciones a la comunidad
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="civic-card text-center">
            <div className="text-3xl font-bold text-primary-500">7</div>
            <div className="text-sm text-gray-600">Encuestas Participadas</div>
          </div>
          <div className="civic-card text-center">
            <div className="text-3xl font-bold text-secondary-500">3</div>
            <div className="text-sm text-gray-600">Retroalimentaciones Enviadas</div>
          </div>
          <div className="civic-card text-center">
            <div className="text-3xl font-bold text-accent-500">12</div>
            <div className="text-sm text-gray-600">Puntos Cívicos</div>
          </div>
          <div className="civic-card text-center">
            <div className="text-3xl font-bold text-green-500">85%</div>
            <div className="text-sm text-gray-600">Nivel de Participación</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="civic-card">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Actividad Reciente</h2>
              <div className="space-y-4">
                {[
                  {
                    type: 'poll',
                    title: 'Votaste en "Mejoramiento del Transporte Público"',
                    date: '2024-08-27',
                    status: 'completed'
                  },
                  {
                    type: 'feedback',
                    title: 'Enviaste retroalimentación sobre "Iluminación en parques"',
                    date: '2024-08-25',
                    status: 'in_review'
                  },
                  {
                    type: 'poll',
                    title: 'Participaste en "Espacios Verdes en Medellín"',
                    date: '2024-08-23',
                    status: 'completed'
                  },
                  {
                    type: 'feedback',
                    title: 'Tu sugerencia sobre horarios municipales fue implementada',
                    date: '2024-08-20',
                    status: 'implemented'
                  }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200">
                    <div className={`w-3 h-3 rounded-full ${
                      activity.status === 'implemented' ? 'bg-green-500' :
                      activity.status === 'in_review' ? 'bg-yellow-500' :
                      'bg-blue-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                      <p className="text-xs text-gray-500">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <div className="civic-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Logros</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    🗳️
                  </div>
                  <div>
                    <p className="text-sm font-medium">Primer Voto</p>
                    <p className="text-xs text-gray-500">Participaste en tu primera encuesta</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center">
                    💬
                  </div>
                  <div>
                    <p className="text-sm font-medium">Voz Activa</p>
                    <p className="text-xs text-gray-500">Enviaste 3 retroalimentaciones</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 opacity-50">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    👥
                  </div>
                  <div>
                    <p className="text-sm font-medium">Líder Comunitario</p>
                    <p className="text-xs text-gray-500">Participa en 10 encuestas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="civic-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Notificaciones</h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm font-medium text-blue-900">Nueva encuesta disponible</p>
                  <p className="text-xs text-blue-700">Horarios de Atención Municipal</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-sm font-medium text-green-900">Retroalimentación respondida</p>
                  <p className="text-xs text-green-700">La alcaldía respondió tu sugerencia</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="civic-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Acciones Rápidas</h3>
              <div className="space-y-2">
                <button className="w-full text-left px-3 py-2 text-sm text-primary-600 hover:bg-primary-50 rounded-md transition-colors">
                  Ver encuestas activas
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-primary-600 hover:bg-primary-50 rounded-md transition-colors">
                  Enviar nueva retroalimentación
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-primary-600 hover:bg-primary-50 rounded-md transition-colors">
                  Explorar eventos comunitarios
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}