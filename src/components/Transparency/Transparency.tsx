

export function Transparency() {
  return (
    <div className="min-h-screen bg-gray-50 pt-4">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          👁️ Dashboard de Transparencia Gubernamental
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Presupuesto Nacional</h3>
            <div className="text-3xl font-bold text-blue-600">$2.3B</div>
            <div className="text-sm text-gray-600">Asignado 2024</div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Proyectos Activos</h3>
            <div className="text-3xl font-bold text-green-600">847</div>
            <div className="text-sm text-gray-600">En ejecución</div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Índice Transparencia</h3>
            <div className="text-3xl font-bold text-yellow-600">8.2/10</div>
            <div className="text-sm text-gray-600">Nacional</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Seguimiento de Presupuesto por Sector
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Educación</span>
                  <span className="font-bold">$456M / $500M</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '91%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span>Salud</span>
                  <span className="font-bold">$298M / $400M</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '74%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span>Infraestructura</span>
                  <span className="font-bold">$567M / $800M</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{width: '71%'}}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Proyectos de Ley en Proceso
            </h3>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-semibold">Reforma Educativa Digital</h4>
                <p className="text-sm text-gray-600 mt-1">Estado: Comisión Primera</p>
                <div className="mt-2">
                  <div className="text-xs text-gray-500">Votos a favor: 67 | En contra: 23</div>
                </div>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-semibold">Ley de Energías Renovables</h4>
                <p className="text-sm text-gray-600 mt-1">Estado: Plenaria</p>
                <div className="mt-2">
                  <div className="text-xs text-gray-500">Votos a favor: 89 | En contra: 12</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}