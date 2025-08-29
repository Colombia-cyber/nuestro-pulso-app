

export function Polls() {
  return (
    <div className="min-h-screen bg-gray-50 pt-4">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          🗳️ Encuestas y Votaciones en Tiempo Real
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ¿Apoyas la nueva ley de educación digital?
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Sí, completamente</span>
                  <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '67%'}}></div>
                  </div>
                  <span className="font-bold">67%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Parcialmente</span>
                  <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{width: '23%'}}></div>
                  </div>
                  <span className="font-bold">23%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>No</span>
                  <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '10%'}}></div>
                  </div>
                  <span className="font-bold">10%</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">2,347 votos • Termina en 3 días</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Encuestas Activas</h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-sm">Transporte Público Medellín</h4>
                  <p className="text-xs text-gray-600">892 participantes</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-sm">Reforma Salud Pública</h4>
                  <p className="text-xs text-gray-600">1,247 participantes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}