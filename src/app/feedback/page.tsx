export default function FeedbackPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-secondary-500 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Sistema de Retroalimentación</h1>
          <p className="mt-4 text-xl text-blue-100">
            Envía tus comentarios y sugerencias directamente a las autoridades
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Feedback Form */}
        <div className="civic-card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Nueva Retroalimentación</h2>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Categoría
              </label>
              <select id="category" className="civic-input">
                <option value="">Seleccionar categoría</option>
                <option value="transport">Transporte</option>
                <option value="environment">Medio Ambiente</option>
                <option value="security">Seguridad</option>
                <option value="education">Educación</option>
                <option value="health">Salud</option>
                <option value="infrastructure">Infraestructura</option>
                <option value="other">Otro</option>
              </select>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                Ubicación
              </label>
              <input 
                type="text" 
                id="location" 
                placeholder="Barrio, ciudad o dirección específica"
                className="civic-input"
              />
            </div>

            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Título
              </label>
              <input 
                type="text" 
                id="title" 
                placeholder="Breve descripción del tema"
                className="civic-input"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Descripción Detallada
              </label>
              <textarea 
                id="description" 
                rows={6}
                placeholder="Describe tu sugerencia o problema en detalle..."
                className="civic-input"
              />
            </div>

            <div>
              <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
                Prioridad
              </label>
              <select id="priority" className="civic-input">
                <option value="low">Baja</option>
                <option value="medium">Media</option>
                <option value="high">Alta</option>
                <option value="urgent">Urgente</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
                Email de Contacto (Opcional)
              </label>
              <input 
                type="email" 
                id="contact" 
                placeholder="tu@email.com"
                className="civic-input"
              />
              <p className="mt-2 text-sm text-gray-500">
                Para recibir actualizaciones sobre el estado de tu retroalimentación
              </p>
            </div>

            <div className="pt-4">
              <button type="submit" className="civic-button text-lg px-8 py-3">
                Enviar Retroalimentación
              </button>
            </div>
          </form>
        </div>

        {/* Recent Feedback */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Retroalimentación Reciente</h2>
          
          <div className="space-y-4">
            {[
              {
                id: 1,
                title: "Mejora en la iluminación del Parque Central",
                category: "Infraestructura",
                location: "Bogotá, Centro",
                status: "En revisión",
                date: "2024-08-25",
                responses: 3
              },
              {
                id: 2,
                title: "Frecuencia de recolección de basura",
                category: "Medio Ambiente",
                location: "Medellín, El Poblado",
                status: "Implementado",
                date: "2024-08-20",
                responses: 1
              },
              {
                id: 3,
                title: "Semáforo peatonal en intersección peligrosa",
                category: "Seguridad",
                location: "Cali, San Fernando",
                status: "Pendiente",
                date: "2024-08-18",
                responses: 0
              }
            ].map((feedback) => (
              <div key={feedback.id} className="civic-card">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-gray-500">{feedback.category}</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-sm text-gray-500">{feedback.location}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{feedback.title}</h3>
                    <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                      <span>{feedback.date}</span>
                      <span>{feedback.responses} respuestas</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                      feedback.status === 'Implementado' 
                        ? 'bg-green-100 text-green-800'
                        : feedback.status === 'En revisión'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {feedback.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guidelines */}
        <div className="mt-12 civic-card bg-blue-50">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">
            Pautas para Retroalimentación Efectiva
          </h3>
          <ul className="text-blue-800 space-y-2">
            <li>• Se específico sobre la ubicación y el problema</li>
            <li>• Proporciona detalles que ayuden a entender la situación</li>
            <li>• Sugiere soluciones cuando sea posible</li>
            <li>• Incluye información de contacto para seguimiento</li>
            <li>• Mantén un tono respetuoso y constructivo</li>
          </ul>
        </div>
      </div>
    </div>
  )
}