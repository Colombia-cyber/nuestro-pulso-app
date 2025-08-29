import { useState } from 'react';

export function AIAssistant() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "¡Hola! Soy Adriana, tu asistente de IA para el compromiso cívico. ¿En qué puedo ayudarte hoy?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const quickQuestions = [
    "¿Cuándo son las próximas elecciones?",
    "¿Cómo puedo verificar mi cédula?",
    "¿Qué proyectos de ley están activos?",
    "¿Cómo funciona el sistema electoral?",
    "¿Cuáles son mis derechos como ciudadano?"
  ];

  const recommendations = [
    {
      title: "Participa en el debate sobre educación digital",
      description: "Basado en tu interés en tecnología",
      action: "Ver debate",
      priority: "high"
    },
    {
      title: "Completa tu perfil cívico",
      description: "Para recibir recomendaciones personalizadas",
      action: "Completar",
      priority: "medium"
    },
    {
      title: "Nueva encuesta en tu departamento",
      description: "Sobre transporte público en Antioquia",
      action: "Participar",
      priority: "medium"
    }
  ];

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    const botResponse = {
      id: messages.length + 2,
      text: generateBotResponse(inputText),
      isBot: true,
      timestamp: new Date()
    };

    setMessages([...messages, userMessage, botResponse]);
    setInputText('');
  };

  const generateBotResponse = (input: string) => {
    const responses = {
      elecciones: "Las próximas elecciones regionales están programadas para octubre de 2024. Puedes verificar tu lugar de votación en la página de la Registraduría Nacional.",
      cedula: "Para verificar tu cédula, visita la página web de la Registraduría Nacional del Estado Civil o acércate a cualquier oficina regional.",
      leyes: "Actualmente hay 23 proyectos de ley en trámite en el Congreso. Los más relevantes incluyen la reforma educativa digital y la ley de energías renovables.",
      default: "Excelente pregunta. Como tu asistente cívico, te ayudo con información sobre elecciones, proyectos de ley, participación ciudadana y educación cívica. ¿Podrías ser más específico?"
    };

    const lowerInput = input.toLowerCase();
    if (lowerInput.includes('elección')) return responses.elecciones;
    if (lowerInput.includes('cédula') || lowerInput.includes('cedula')) return responses.cedula;
    if (lowerInput.includes('ley') || lowerInput.includes('proyecto')) return responses.leyes;
    return responses.default;
  };

  const handleQuickQuestion = (question: string) => {
    setInputText(question);
    handleSendMessage();
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-4">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          🤖 Adriana AI - Asistente Cívico Inteligente
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg h-96 flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 bg-colombia-blue text-white rounded-t-xl">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-lg">🤖</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Adriana AI</h3>
                    <p className="text-sm text-blue-100">Asistente Cívico • En línea</p>
                  </div>
                </div>
              </div>
              
              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.isBot 
                          ? 'bg-gray-100 text-gray-900' 
                          : 'bg-colombia-blue text-white'
                      }`}>
                        <p className="text-sm">{message.text}</p>
                        <p className="text-xs mt-1 opacity-70">
                          {message.timestamp.toLocaleTimeString('es-CO', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Pregúntame sobre civismo, elecciones, leyes..."
                    className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-colombia-blue focus:border-colombia-blue"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="px-4 py-2 bg-colombia-blue text-white rounded-lg hover:bg-blue-800"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
            
            {/* Quick Questions */}
            <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Preguntas Frecuentes</h3>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Capabilities */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Capacidades de Adriana</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm">Información electoral</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm">Seguimiento de leyes</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm">Educación cívica</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm">Análisis personalizado</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm">Recordatorios cívicos</span>
                </div>
              </div>
            </div>
            
            {/* Personalized Recommendations */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recomendaciones Personalizadas</h3>
              <div className="space-y-3">
                {recommendations.map((rec, index) => (
                  <div key={index} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-sm">{rec.title}</h4>
                      <span className={`w-2 h-2 rounded-full ${
                        rec.priority === 'high' ? 'bg-red-500' :
                        rec.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                      }`}></span>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">{rec.description}</p>
                    <button className="text-xs bg-colombia-blue text-white px-2 py-1 rounded">
                      {rec.action}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Usage Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Estadísticas de Uso</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Consultas realizadas:</span>
                  <span className="font-medium">47</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Precisión de respuestas:</span>
                  <span className="font-medium">96%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tiempo promedio respuesta:</span>
                  <span className="font-medium">0.8s</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Satisfacción:</span>
                  <span className="font-medium">⭐⭐⭐⭐⭐</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}