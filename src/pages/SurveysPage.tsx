import React, { useState } from 'react'

interface Survey {
  id: string
  title: string
  description: string
  questions: Question[]
  endDate: Date
  totalResponses: number
  status: 'active' | 'closed' | 'draft'
  category: string
}

interface Question {
  id: string
  text: string
  type: 'multiple-choice' | 'yes-no' | 'text' | 'rating'
  options?: string[]
  required: boolean
}

interface SurveyResponse {
  questionId: string
  answer: string | number
}

const SurveysPage: React.FC = () => {
  const [surveys] = useState<Survey[]>([
    {
      id: '1',
      title: 'Opinión sobre el Sistema de Salud Colombiano',
      description: 'Evaluación ciudadana sobre la calidad y accesibilidad del sistema de salud en Colombia.',
      questions: [
        {
          id: 'q1',
          text: '¿Cómo calificarías la calidad del servicio de salud en tu región?',
          type: 'rating',
          required: true
        },
        {
          id: 'q2',
          text: '¿Has tenido dificultades para acceder a servicios médicos en el último año?',
          type: 'yes-no',
          required: true
        }
      ],
      endDate: new Date(Date.now() + 1209600000), // 2 weeks
      totalResponses: 1247,
      status: 'active',
      category: 'Salud Pública'
    },
    {
      id: '2',
      title: 'Propuestas para el Desarrollo Rural',
      description: 'Recopilación de ideas ciudadanas para el desarrollo y apoyo a las comunidades rurales.',
      questions: [
        {
          id: 'q1',
          text: '¿Cuál consideras que es la principal necesidad en las zonas rurales?',
          type: 'multiple-choice',
          options: ['Infraestructura', 'Educación', 'Conectividad', 'Servicios de Salud', 'Oportunidades Económicas'],
          required: true
        }
      ],
      endDate: new Date(Date.now() + 604800000), // 1 week
      totalResponses: 856,
      status: 'active',
      category: 'Desarrollo Rural'
    },
    {
      id: '3',
      title: 'Evaluación de Políticas Ambientales Urbanas',
      description: 'Percepción ciudadana sobre las políticas ambientales implementadas en las principales ciudades.',
      questions: [],
      endDate: new Date(Date.now() - 86400000), // Yesterday
      totalResponses: 2134,
      status: 'closed',
      category: 'Medio Ambiente'
    }
  ])

  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [responses, setResponses] = useState<{[surveyId: string]: SurveyResponse[]}>({})
  const [activeSurvey, setActiveSurvey] = useState<string | null>(null)

  const categories = ['all', 'Salud Pública', 'Desarrollo Rural', 'Medio Ambiente', 'Educación', 'Economía']

  const filteredSurveys = selectedCategory === 'all' 
    ? surveys 
    : surveys.filter(survey => survey.category === selectedCategory)

  const handleSurveyResponse = (surveyId: string, questionId: string, answer: string | number) => {
    setResponses(prev => ({
      ...prev,
      [surveyId]: [
        ...(prev[surveyId] || []).filter(r => r.questionId !== questionId),
        { questionId, answer }
      ]
    }))
  }

  const submitSurvey = (surveyId: string) => {
    // In a real app, this would send to a backend
    alert('¡Gracias por tu participación! Tu respuesta ha sido enviada.')
    setActiveSurvey(null)
    setResponses(prev => ({ ...prev, [surveyId]: [] }))
  }

  return (
    <div className="container py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="glass-card mb-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-colombia-blue mb-4">📊 Encuestas Ciudadanas</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tu opinión cuenta. Participa en encuestas sobre políticas públicas y 
              ayuda a construir un futuro mejor para Colombia.
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="glass-card mb-8">
          <h3 className="text-lg font-semibold text-colombia-blue mb-4">Filtrar por Categoría</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-colombia-blue text-white'
                    : 'bg-white/50 text-gray-700 hover:bg-colombia-yellow hover:text-colombia-blue'
                }`}
              >
                {category === 'all' ? 'Todas las Categorías' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Surveys List */}
        <div className="space-y-6">
          {filteredSurveys.map(survey => (
            <SurveyCard 
              key={survey.id} 
              survey={survey} 
              isActive={activeSurvey === survey.id}
              onToggle={() => setActiveSurvey(activeSurvey === survey.id ? null : survey.id)}
              responses={responses[survey.id] || []}
              onResponse={handleSurveyResponse}
              onSubmit={submitSurvey}
            />
          ))}
        </div>

        {/* Impact Section */}
        <div className="glass-card mt-8">
          <h3 className="text-xl font-semibold text-colombia-blue mb-6 text-center">
            Impacto de las Encuestas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-colombia-red mb-2">4,237</div>
              <div className="text-gray-600">Respuestas Totales</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-colombia-blue mb-2">23</div>
              <div className="text-gray-600">Políticas Influenciadas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-colombia-yellow mb-2">89%</div>
              <div className="text-gray-600">Satisfacción Ciudadana</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface SurveyCardProps {
  survey: Survey
  isActive: boolean
  onToggle: () => void
  responses: SurveyResponse[]
  onResponse: (surveyId: string, questionId: string, answer: string | number) => void
  onSubmit: (surveyId: string) => void
}

const SurveyCard: React.FC<SurveyCardProps> = ({ 
  survey, 
  isActive, 
  onToggle, 
  responses, 
  onResponse, 
  onSubmit 
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100'
      case 'closed': return 'text-red-600 bg-red-100'
      case 'draft': return 'text-yellow-600 bg-yellow-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return '✅ ACTIVA'
      case 'closed': return '🔒 CERRADA'
      case 'draft': return '📝 BORRADOR'
      default: return status
    }
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-CO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const daysUntilEnd = Math.ceil((survey.endDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24))

  return (
    <div className="glass-card">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(survey.status)}`}>
              {getStatusText(survey.status)}
            </span>
            <span className="px-3 py-1 bg-colombia-yellow text-colombia-blue rounded-full text-sm font-medium">
              {survey.category}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-colombia-blue mb-3">{survey.title}</h3>
          <p className="text-gray-600 mb-4">{survey.description}</p>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-1">
              <span>📅</span>
              <span>Cierra: {formatDate(survey.endDate)}</span>
              {daysUntilEnd > 0 && <span className="text-colombia-red">({daysUntilEnd} días restantes)</span>}
            </div>
            <div className="flex items-center gap-1">
              <span>👥</span>
              <span>{survey.totalResponses} respuestas</span>
            </div>
            <div className="flex items-center gap-1">
              <span>❓</span>
              <span>{survey.questions.length} preguntas</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-3 lg:w-48">
          {survey.status === 'active' && (
            <button 
              onClick={onToggle}
              className="btn btn-primary"
            >
              {isActive ? 'Ocultar' : 'Participar'}
            </button>
          )}
          {survey.status === 'closed' && (
            <button className="btn btn-outline">
              📈 Ver Resultados
            </button>
          )}
        </div>
      </div>

      {/* Survey Questions */}
      {isActive && survey.status === 'active' && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="space-y-6">
            {survey.questions.map((question, index) => (
              <QuestionComponent
                key={question.id}
                question={question}
                questionNumber={index + 1}
                response={responses.find(r => r.questionId === question.id)?.answer}
                onResponse={(answer) => onResponse(survey.id, question.id, answer)}
              />
            ))}
            
            <div className="flex justify-end gap-3 pt-4">
              <button 
                onClick={onToggle}
                className="btn btn-outline"
              >
                Cancelar
              </button>
              <button 
                onClick={() => onSubmit(survey.id)}
                className="btn btn-primary"
                disabled={responses.length < survey.questions.filter(q => q.required).length}
              >
                Enviar Respuestas
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

interface QuestionComponentProps {
  question: Question
  questionNumber: number
  response?: string | number
  onResponse: (answer: string | number) => void
}

const QuestionComponent: React.FC<QuestionComponentProps> = ({
  question,
  questionNumber,
  response,
  onResponse
}) => {
  return (
    <div className="bg-white/50 rounded-lg p-4">
      <h4 className="font-semibold text-colombia-blue mb-3">
        {questionNumber}. {question.text}
        {question.required && <span className="text-red-500 ml-1">*</span>}
      </h4>
      
      {question.type === 'multiple-choice' && question.options && (
        <div className="space-y-2">
          {question.options.map((option, index) => (
            <label key={index} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name={question.id}
                value={option}
                checked={response === option}
                onChange={(e) => onResponse(e.target.value)}
                className="w-4 h-4 text-colombia-blue"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      )}
      
      {question.type === 'yes-no' && (
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name={question.id}
              value="yes"
              checked={response === 'yes'}
              onChange={(e) => onResponse(e.target.value)}
              className="w-4 h-4 text-colombia-blue"
            />
            <span>Sí</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name={question.id}
              value="no"
              checked={response === 'no'}
              onChange={(e) => onResponse(e.target.value)}
              className="w-4 h-4 text-colombia-blue"
            />
            <span>No</span>
          </label>
        </div>
      )}
      
      {question.type === 'rating' && (
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map(rating => (
            <button
              key={rating}
              onClick={() => onResponse(rating)}
              className={`w-10 h-10 rounded-full border-2 transition-colors ${
                response === rating
                  ? 'bg-colombia-blue text-white border-colombia-blue'
                  : 'border-gray-300 hover:border-colombia-blue'
              }`}
            >
              {rating}
            </button>
          ))}
        </div>
      )}
      
      {question.type === 'text' && (
        <textarea
          value={response as string || ''}
          onChange={(e) => onResponse(e.target.value)}
          className="form-input h-24 resize-none"
          placeholder="Escribe tu respuesta..."
          maxLength={500}
        />
      )}
    </div>
  )
}

export default SurveysPage