import React, { useState } from 'react'

interface NewsArticle {
  id: string
  title: string
  summary: string
  content: string
  source: string
  category: 'Colombia' | 'Australia' | 'Donald Trump' | 'Internacional'
  publishedAt: Date
  author: string
  imageUrl?: string
  comments: Comment[]
  likes: number
}

interface Comment {
  id: string
  author: string
  content: string
  timestamp: Date
  likes: number
}

const NewsPage: React.FC = () => {
  const [articles] = useState<NewsArticle[]>([
    {
      id: '1',
      title: 'Gobierno anuncia nuevas inversiones en infraestructura rural',
      summary: 'El presidente confirmó un plan de inversión de $2 billones para mejorar las vías rurales y conectividad en zonas apartadas del país.',
      content: 'El gobierno nacional anunció hoy un ambicioso plan de inversión en infraestructura rural que beneficiará a más de 300 municipios...',
      source: 'El Tiempo',
      category: 'Colombia',
      publishedAt: new Date(Date.now() - 3600000), // 1 hour ago
      author: 'María González',
      imageUrl: '/images/colombia-rural.jpg',
      comments: [
        {
          id: 'c1',
          author: 'Carlos Mendez',
          content: 'Excelente noticia para nuestras comunidades rurales. Esperemos que se ejecute correctamente.',
          timestamp: new Date(Date.now() - 1800000),
          likes: 12
        }
      ],
      likes: 156
    },
    {
      id: '2',
      title: 'Australia implements new climate policies',
      summary: 'The Australian government has announced comprehensive climate action plans targeting net-zero emissions by 2050.',
      content: 'In a landmark decision, the Australian Parliament has passed sweeping climate legislation...',
      source: 'ABC News Australia',
      category: 'Australia',
      publishedAt: new Date(Date.now() - 7200000), // 2 hours ago
      author: 'John Smith',
      comments: [],
      likes: 89
    },
    {
      id: '3',
      title: 'Trump announces 2024 campaign rally schedule',
      summary: 'Former President Donald Trump has released the dates for his upcoming campaign rallies across key swing states.',
      content: 'Donald Trump\'s campaign team announced today a series of rallies scheduled for the coming months...',
      source: 'CNN Politics',
      category: 'Donald Trump',
      publishedAt: new Date(Date.now() - 10800000), // 3 hours ago
      author: 'Sarah Johnson',
      comments: [
        {
          id: 'c2',
          author: 'Ana Rodríguez',
          content: 'Interesante desarrollo en la política estadounidense. ¿Cómo afectará esto a las relaciones internacionales?',
          timestamp: new Date(Date.now() - 5400000),
          likes: 8
        }
      ],
      likes: 234
    }
  ])

  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [commentInputs, setCommentInputs] = useState<{[articleId: string]: string}>({})
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null)

  const categories = ['all', 'Colombia', 'Australia', 'Donald Trump', 'Internacional']

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Colombia': return 'bg-colombia-yellow text-colombia-blue'
      case 'Australia': return 'bg-green-100 text-green-700'
      case 'Donald Trump': return 'bg-red-100 text-red-700'
      case 'Internacional': return 'bg-blue-100 text-blue-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const handleCommentSubmit = (articleId: string) => {
    const comment = commentInputs[articleId]
    if (comment?.trim()) {
      // In a real app, this would submit to backend
      alert('Comentario enviado exitosamente')
      setCommentInputs(prev => ({ ...prev, [articleId]: '' }))
    }
  }

  const formatTimeAgo = (date: Date) => {
    const now = new Date()
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)
    
    if (diffInSeconds < 60) return 'hace unos segundos'
    if (diffInSeconds < 3600) return `hace ${Math.floor(diffInSeconds / 60)} minutos`
    if (diffInSeconds < 86400) return `hace ${Math.floor(diffInSeconds / 3600)} horas`
    return date.toLocaleDateString('es-CO')
  }

  return (
    <div className="container py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="glass-card mb-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-colombia-blue mb-4">📰 Centro de Noticias</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mantente informado sobre los acontecimientos más importantes en Colombia, 
              Australia y el panorama político internacional.
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="glass-card mb-8">
          <h3 className="text-lg font-semibold text-colombia-blue mb-4">Filtrar Noticias</h3>
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
                {category === 'all' ? 'Todas las Noticias' : category}
              </button>
            ))}
          </div>
        </div>

        {/* News Articles */}
        <div className="space-y-6">
          {filteredArticles.map(article => (
            <NewsArticleCard
              key={article.id}
              article={article}
              isExpanded={expandedArticle === article.id}
              onToggleExpand={() => setExpandedArticle(
                expandedArticle === article.id ? null : article.id
              )}
              commentInput={commentInputs[article.id] || ''}
              onCommentChange={(value) => setCommentInputs(prev => ({ 
                ...prev, 
                [article.id]: value 
              }))}
              onCommentSubmit={() => handleCommentSubmit(article.id)}
              getCategoryColor={getCategoryColor}
              formatTimeAgo={formatTimeAgo}
            />
          ))}
        </div>

        {/* News Sources */}
        <div className="glass-card mt-8">
          <h3 className="text-xl font-semibold text-colombia-blue mb-4 text-center">
            Fuentes de Noticias Confiables
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-white/50 rounded-lg">
              <div className="text-2xl mb-2">🇨🇴</div>
              <div className="font-medium">El Tiempo</div>
              <div className="text-sm text-gray-600">Colombia</div>
            </div>
            <div className="p-4 bg-white/50 rounded-lg">
              <div className="text-2xl mb-2">🇦🇺</div>
              <div className="font-medium">ABC News</div>
              <div className="text-sm text-gray-600">Australia</div>
            </div>
            <div className="p-4 bg-white/50 rounded-lg">
              <div className="text-2xl mb-2">🇺🇸</div>
              <div className="font-medium">CNN</div>
              <div className="text-sm text-gray-600">Estados Unidos</div>
            </div>
            <div className="p-4 bg-white/50 rounded-lg">
              <div className="text-2xl mb-2">🌍</div>
              <div className="font-medium">BBC</div>
              <div className="text-sm text-gray-600">Internacional</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface NewsArticleCardProps {
  article: NewsArticle
  isExpanded: boolean
  onToggleExpand: () => void
  commentInput: string
  onCommentChange: (value: string) => void
  onCommentSubmit: () => void
  getCategoryColor: (category: string) => string
  formatTimeAgo: (date: Date) => string
}

const NewsArticleCard: React.FC<NewsArticleCardProps> = ({
  article,
  isExpanded,
  onToggleExpand,
  commentInput,
  onCommentChange,
  onCommentSubmit,
  getCategoryColor,
  formatTimeAgo
}) => {
  return (
    <div className="glass-card">
      <div className="flex flex-col">
        {/* Article Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
                {article.category}
              </span>
              <span className="text-sm text-gray-500">{article.source}</span>
            </div>
            <h3 className="text-xl font-bold text-colombia-blue mb-2">{article.title}</h3>
            <p className="text-gray-600 mb-4">{article.summary}</p>
          </div>
          {article.imageUrl && (
            <div className="w-32 h-20 bg-gray-200 rounded-lg ml-4 flex-shrink-0">
              <div className="w-full h-full bg-colombia-yellow/20 rounded-lg flex items-center justify-center">
                📸
              </div>
            </div>
          )}
        </div>

        {/* Article Meta */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-4">
            <span>👤 {article.author}</span>
            <span>🕒 {formatTimeAgo(article.publishedAt)}</span>
          </div>
          <div className="flex items-center gap-4">
            <span>❤️ {article.likes}</span>
            <span>💬 {article.comments.length}</span>
          </div>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="border-t border-gray-200 pt-4 mb-4">
            <p className="text-gray-700 mb-6 leading-relaxed">{article.content}</p>
            
            {/* Comments Section */}
            {article.comments.length > 0 && (
              <div className="mb-6">
                <h4 className="font-semibold text-colombia-blue mb-4">Comentarios</h4>
                <div className="space-y-3">
                  {article.comments.map(comment => (
                    <div key={comment.id} className="bg-white/50 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-colombia-blue">{comment.author}</span>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span>{formatTimeAgo(comment.timestamp)}</span>
                          <span>❤️ {comment.likes}</span>
                        </div>
                      </div>
                      <p className="text-gray-700">{comment.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Add Comment */}
            <div className="border-t border-gray-200 pt-4">
              <h4 className="font-semibold text-colombia-blue mb-3">Agregar Comentario</h4>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={commentInput}
                  onChange={(e) => onCommentChange(e.target.value)}
                  placeholder="Comparte tu opinión sobre esta noticia..."
                  className="form-input flex-1"
                  maxLength={300}
                />
                <button
                  onClick={onCommentSubmit}
                  className="btn btn-primary"
                  disabled={!commentInput.trim()}
                >
                  Comentar
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Mantén un diálogo respetuoso y constructivo
              </p>
            </div>
          </div>
        )}

        {/* Article Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-colombia-red transition-colors">
              <span>❤️</span>
              <span>Me gusta</span>
            </button>
            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-colombia-blue transition-colors">
              <span>🔗</span>
              <span>Compartir</span>
            </button>
            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-colombia-blue transition-colors">
              <span>💾</span>
              <span>Guardar</span>
            </button>
          </div>
          <button
            onClick={onToggleExpand}
            className="btn btn-outline text-sm"
          >
            {isExpanded ? 'Ocultar' : 'Leer más'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewsPage