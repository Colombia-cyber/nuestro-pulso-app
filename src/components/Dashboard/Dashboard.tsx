

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 pt-4">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          📊 Dashboard de Participación Cívica
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Mi Puntuación Cívica</h3>
            <div className="text-3xl font-bold text-green-600">850</div>
            <div className="text-sm text-gray-600">+45 esta semana</div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Debates Participados</h3>
            <div className="text-3xl font-bold text-blue-600">23</div>
            <div className="text-sm text-gray-600">Este mes</div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Encuestas Completadas</h3>
            <div className="text-3xl font-bold text-purple-600">47</div>
            <div className="text-sm text-gray-600">Histórico</div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Rango Nacional</h3>
            <div className="text-3xl font-bold text-yellow-600">#127</div>
            <div className="text-sm text-gray-600">Top 1%</div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Panel de Control Personal</h2>
          <p className="text-gray-600">
            Dashboard completo de métricas de participación cívica en desarrollo...
          </p>
        </div>
      </div>
    </div>
  );
}