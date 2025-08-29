import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { colombianDepartments, civicActivities } from '../../data/colombia';
import type { MapRegion } from '../../types';

// Fix for default markers in React Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export function ColombiaMap() {
  const [selectedDepartment, setSelectedDepartment] = useState<MapRegion | null>(null);
  const [mapCenter] = useState<[number, number]>([4.5709, -74.2973]); // Bogotá center
  const [mapZoom] = useState(6);

  // Get civic score color
  const getCivicScoreColor = (score: number) => {
    if (score >= 8) return '#10B981'; // Green
    if (score >= 6) return '#F59E0B'; // Yellow
    if (score >= 4) return '#EF4444'; // Red
    return '#6B7280'; // Gray
  };

  // Get activity color intensity
  const getActivityOpacity = (activities: number) => {
    const maxActivities = Math.max(...colombianDepartments.map(d => d.activeDebates + d.activeSurveys));
    return 0.3 + (activities / maxActivities) * 0.7;
  };

  const handleDepartmentClick = (department: MapRegion) => {
    setSelectedDepartment(department);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-4">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🗺️ Mapa Interactivo de Colombia
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Explora la actividad cívica en tiempo real en los 32 departamentos de Colombia
          </p>
          
          {/* Live Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium text-gray-900">En Vivo</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mt-1">145</div>
              <div className="text-sm text-gray-600">Debates Activos</div>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium text-gray-900">Encuestas</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mt-1">89</div>
              <div className="text-sm text-gray-600">Activas Hoy</div>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium text-gray-900">Participantes</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mt-1">2.1M</div>
              <div className="text-sm text-gray-600">Ciudadanos</div>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium text-gray-900">Puntuación</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mt-1">7.8</div>
              <div className="text-sm text-gray-600">Promedio Cívico</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Container */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="h-96 lg:h-[600px]">
                <MapContainer
                  center={mapCenter}
                  zoom={mapZoom}
                  style={{ height: '100%', width: '100%' }}
                  className="z-10"
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  
                  {/* Department Polygons */}
                  {colombianDepartments.map((dept) => (
                    <Polygon
                      key={dept.id}
                      positions={dept.coordinates}
                      fillColor={getCivicScoreColor(dept.civicScore)}
                      fillOpacity={getActivityOpacity(dept.activeDebates + dept.activeSurveys)}
                      color="#003087"
                      weight={2}
                      eventHandlers={{
                        click: () => handleDepartmentClick(dept)
                      }}
                    >
                      <Popup>
                        <div className="p-2 min-w-48">
                          <h3 className="font-bold text-lg text-colombia-blue">{dept.name}</h3>
                          <div className="mt-2 space-y-1">
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">Debates activos:</span>
                              <span className="font-medium">{dept.activeDebates}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">Encuestas activas:</span>
                              <span className="font-medium">{dept.activeSurveys}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">Población:</span>
                              <span className="font-medium">{dept.population.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">Puntuación cívica:</span>
                              <span className="font-medium text-green-600">{dept.civicScore}/10</span>
                            </div>
                          </div>
                        </div>
                      </Popup>
                    </Polygon>
                  ))}
                  
                  {/* Activity Markers */}
                  {civicActivities.map((activity) => {
                    const dept = colombianDepartments.find(d => d.department === activity.department);
                    if (!dept) return null;
                    
                    return (
                      <Marker
                        key={activity.id}
                        position={dept.center}
                      >
                        <Popup>
                          <div className="p-2 min-w-48">
                            <h4 className="font-semibold text-colombia-blue">{activity.title}</h4>
                            <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                            <div className="mt-2">
                              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                {activity.participants} participantes
                              </span>
                            </div>
                          </div>
                        </Popup>
                      </Marker>
                    );
                  })}
                </MapContainer>
              </div>
              
              {/* Map Legend */}
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <h4 className="font-semibold text-sm text-gray-900 mb-2">Leyenda</h4>
                <div className="flex flex-wrap gap-4 text-xs">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                    <span>Puntuación Alta (8+)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-yellow-500 rounded mr-2"></div>
                    <span>Puntuación Media (6-8)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-500 rounded mr-2"></div>
                    <span>Puntuación Baja (4-6)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-500 rounded mr-2"></div>
                    <span>Sin Datos (&lt;4)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Selected Department Details */}
            {selectedDepartment && (
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-colombia-blue mb-4">
                  {selectedDepartment.name}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Actividad Cívica</span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">
                        {selectedDepartment.civicScore}/10
                      </div>
                      <div className="text-xs text-gray-500">Puntuación</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-red-50 rounded-lg p-3">
                      <div className="text-lg font-bold text-red-700">
                        {selectedDepartment.activeDebates}
                      </div>
                      <div className="text-xs text-red-600">Debates</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="text-lg font-bold text-blue-700">
                        {selectedDepartment.activeSurveys}
                      </div>
                      <div className="text-xs text-blue-600">Encuestas</div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Población:</span>
                      <span className="font-medium">{selectedDepartment.population.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm mt-1">
                      <span className="text-gray-600">Última actualización:</span>
                      <span className="font-medium">Hace 5 min</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Top Active Departments */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                🔥 Más Activos Hoy
              </h3>
              
              <div className="space-y-3">
                {colombianDepartments
                  .sort((a, b) => (b.activeDebates + b.activeSurveys) - (a.activeDebates + a.activeSurveys))
                  .slice(0, 5)
                  .map((dept, index) => (
                    <div
                      key={dept.id}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                      onClick={() => handleDepartmentClick(dept)}
                    >
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-gradient-to-r from-colombia-yellow to-colombia-blue rounded-full mr-3 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{index + 1}</span>
                        </div>
                        <div>
                          <div className="font-medium text-sm">{dept.name}</div>
                          <div className="text-xs text-gray-500">
                            {dept.activeDebates + dept.activeSurveys} actividades
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-green-600">
                          {dept.civicScore}
                        </div>
                        <div className="text-xs text-gray-500">score</div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Acciones Rápidas
              </h3>
              
              <div className="space-y-3">
                <button className="w-full p-3 bg-colombia-blue text-white rounded-lg hover:bg-blue-800 transition-colors text-sm font-medium">
                  🗳️ Participar en Encuesta
                </button>
                <button className="w-full p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                  💬 Unirse a Debate
                </button>
                <button className="w-full p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
                  📊 Ver Estadísticas
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}