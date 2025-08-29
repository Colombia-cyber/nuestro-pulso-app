

export function LiveStreaming() {
  return (
    <div className="min-h-screen bg-gray-50 pt-4">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          🎥 Transmisiones en Vivo del Gobierno
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-black rounded-xl aspect-video mb-6">
              <div className="flex items-center justify-center h-full text-white">
                <div className="text-center">
                  <div className="text-6xl mb-4">🔴</div>
                  <h3 className="text-xl font-bold mb-2">Sesión del Congreso EN VIVO</h3>
                  <p className="text-gray-300">1,234 espectadores</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Debate sobre Reforma Tributaria 2024
              </h3>
              <p className="text-gray-600 mb-4">
                Seguimiento en tiempo real de la discusión sobre los cambios propuestos 
                al sistema tributario colombiano.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Iniciado hace 2 horas</span>
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                  🔴 EN VIVO
                </button>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Próximas Transmisiones</h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-sm">Asamblea Ciudadana Bogotá</h4>
                  <p className="text-xs text-gray-600">Hoy 3:00 PM</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-sm">Discurso Presidencial</h4>
                  <p className="text-xs text-gray-600">Mañana 8:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Chat en Vivo</h3>
              <div className="h-64 bg-gray-50 rounded-lg p-4 overflow-y-auto">
                <div className="space-y-2 text-sm">
                  <div><strong>Carlos_Medellín:</strong> Excelente propuesta</div>
                  <div><strong>Ana_Bogotá:</strong> ¿Cuándo se vota?</div>
                  <div><strong>Luis_Cali:</strong> Importante para el país</div>
                </div>
              </div>
              <div className="mt-4">
                <input 
                  type="text" 
                  placeholder="Escribe tu mensaje..."
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}