

export function CivicEducation() {
  const modules = [
    { id: 1, title: 'Constitución de Colombia', progress: 85, duration: '45 min' },
    { id: 2, title: 'Estructura del Gobierno', progress: 60, duration: '30 min' },
    { id: 3, title: 'Proceso Electoral', progress: 100, duration: '40 min' },
    { id: 4, title: 'Derechos y Deberes', progress: 40, duration: '35 min' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-4">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          🎓 Centro de Educación Cívica
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Módulos de Aprendizaje Interactivos
              </h3>
              
              <div className="space-y-4">
                {modules.map((module) => (
                  <div key={module.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{module.title}</h4>
                      <span className="text-sm text-gray-500">{module.duration}</span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex-1 mr-4">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full" 
                            style={{width: `${module.progress}%`}}
                          ></div>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">{module.progress}%</span>
                    </div>
                    
                    <button className="w-full mt-3 px-4 py-2 bg-colombia-blue text-white rounded-lg hover:bg-blue-800">
                      {module.progress === 100 ? 'Revisar' : 'Continuar'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Constitución Política de Colombia - Capítulo 1
              </h3>
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">
                  La Constitución Política de Colombia de 1991 establece los principios fundamentales 
                  de nuestro Estado Social de Derecho. En este módulo aprenderás sobre:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Los principios fundamentales del Estado colombiano</li>
                  <li>La estructura del poder público</li>
                  <li>Los derechos fundamentales de los ciudadanos</li>
                  <li>Los mecanismos de participación ciudadana</li>
                </ul>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">¿Sabías que...?</h4>
                <p className="text-blue-800 text-sm">
                  Colombia fue uno de los primeros países en incluir la tutela como mecanismo 
                  de protección de derechos fundamentales en su Constitución.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Mi Progreso</h3>
              
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl font-bold text-green-600">71%</span>
                </div>
                <p className="text-sm text-gray-600">Progreso General</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Módulos completados:</span>
                  <span className="font-medium">1/4</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tiempo invertido:</span>
                  <span className="font-medium">2h 15min</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Certificados obtenidos:</span>
                  <span className="font-medium">1</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recursos Adicionales</h3>
              
              <div className="space-y-3">
                <a href="#" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                  <h4 className="font-medium text-sm">📖 Constitución Completa</h4>
                  <p className="text-xs text-gray-600">Texto completo actualizado</p>
                </a>
                
                <a href="#" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                  <h4 className="font-medium text-sm">🎥 Videos Educativos</h4>
                  <p className="text-xs text-gray-600">Serie documental cívica</p>
                </a>
                
                <a href="#" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                  <h4 className="font-medium text-sm">📊 Guías Electorales</h4>
                  <p className="text-xs text-gray-600">Cómo votar paso a paso</p>
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quiz Rápido</h3>
              
              <div className="mb-4">
                <p className="text-sm text-gray-700 mb-3">
                  ¿Cuántas ramas del poder público existen en Colombia?
                </p>
                
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="quiz" className="mr-2" />
                    <span className="text-sm">2</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="quiz" className="mr-2" />
                    <span className="text-sm">3</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="quiz" className="mr-2" />
                    <span className="text-sm">4</span>
                  </label>
                </div>
              </div>
              
              <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Responder
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}