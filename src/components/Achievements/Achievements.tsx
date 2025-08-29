

export function Achievements() {
  const achievements = [
    { id: 1, title: 'Campeón de la Democracia', icon: '🥇', description: '100+ debates participados', earned: true },
    { id: 2, title: 'Voz del Pueblo', icon: '🗣️', description: '500+ respuestas de encuestas', earned: true },
    { id: 3, title: 'Constructor de Comunidad', icon: '🤝', description: '50+ referidos', earned: false },
    { id: 4, title: 'Patriota Oro', icon: '🇨🇴', description: 'Máximo nivel de compromiso cívico', earned: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-4">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          🎖️ Sistema de Logros Cívicos
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {achievements.map((achievement) => (
            <div 
              key={achievement.id}
              className={`bg-white rounded-xl shadow-lg p-6 border-2 ${
                achievement.earned ? 'border-green-200 bg-green-50' : 'border-gray-200'
              }`}
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{achievement.description}</p>
              {achievement.earned ? (
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                  ✓ Desbloqueado
                </span>
              ) : (
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  En progreso
                </span>
              )}
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Mi Progreso Cívico</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Participación en Debates</span>
                <span className="text-sm text-gray-600">23/100</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '23%'}}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Encuestas Completadas</span>
                <span className="text-sm text-gray-600">127/500</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{width: '25%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}