import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function NewsPage() {
  const { t } = useTranslation();

  const news = [
    {
      id: 1,
      title: "Nueva biblioteca comunitaria abre sus puertas",
      summary: "La esperada biblioteca del barrio San José finalmente abrió al público con más de 5,000 libros disponibles.",
      author: "María González",
      category: "Educación",
      publishedAt: "2024-01-20",
      imageUrl: "/api/placeholder/400/200",
      featured: true
    },
    {
      id: 2,
      title: "Mejoras en el transporte público local",
      summary: "Se anuncian nuevas rutas y horarios extendidos para mejorar la movilidad en la comunidad.",
      author: "Carlos Rodríguez",
      category: "Transporte",
      publishedAt: "2024-01-19",
      imageUrl: "/api/placeholder/400/200",
      featured: false
    },
    {
      id: 3,
      title: "Festival cultural de primavera 2024",
      summary: "Prepárate para tres días de música, arte y gastronomía local en el parque central.",
      author: "Ana Martínez",
      category: "Cultura",
      publishedAt: "2024-01-18",
      imageUrl: "/api/placeholder/400/200",
      featured: false
    },
    {
      id: 4,
      title: "Programa de reciclaje expande su cobertura",
      summary: "El programa municipal de reciclaje ahora incluye más zonas residenciales.",
      author: "Luis Herrera",
      category: "Ambiente",
      publishedAt: "2024-01-17",
      imageUrl: "/api/placeholder/400/200",
      featured: false
    }
  ];

  const categories = ["Todas", "Educación", "Transporte", "Cultura", "Ambiente", "Seguridad"];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{t('news.title')}</h1>
        <Button>Escribir Artículo</Button>
      </div>

      {/* Categories Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <Button key={category} variant="outline" size="sm">
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Featured Article */}
          {news.filter(article => article.featured).map(article => (
            <Card key={article.id} className="overflow-hidden">
              <div className="aspect-video bg-muted">
                <div className="w-full h-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-muted-foreground">Imagen destacada</span>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                    Destacada
                  </span>
                  <span className="text-sm text-muted-foreground">{article.category}</span>
                </div>
                <CardTitle className="text-xl">{article.title}</CardTitle>
                <CardDescription>{article.summary}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Por {article.author} • {article.publishedAt}
                  </div>
                  <Button variant="outline" size="sm">
                    {t('news.readMore')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Regular Articles */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">{t('news.latest')}</h2>
            {news.filter(article => !article.featured).map(article => (
              <Card key={article.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                          {article.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {article.publishedAt}
                        </span>
                      </div>
                      <CardTitle className="text-lg">{article.title}</CardTitle>
                      <CardDescription className="mt-2">{article.summary}</CardDescription>
                    </div>
                    <div className="w-24 h-16 bg-muted rounded ml-4">
                      <div className="w-full h-full bg-gradient-to-r from-primary/10 to-secondary/10 rounded"></div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      Por {article.author}
                    </div>
                    <Button variant="ghost" size="sm">
                      {t('news.readMore')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Trending</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm">
                <div className="font-medium">Plan de movilidad urbana</div>
                <div className="text-muted-foreground">234 lecturas</div>
              </div>
              <div className="text-sm">
                <div className="font-medium">Nuevos centros de salud</div>
                <div className="text-muted-foreground">189 lecturas</div>
              </div>
              <div className="text-sm">
                <div className="font-medium">Programa de emprendimiento</div>
                <div className="text-muted-foreground">156 lecturas</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Categorías</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {categories.slice(1).map(category => (
                <Button key={category} variant="ghost" className="w-full justify-start" size="sm">
                  {category}
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}