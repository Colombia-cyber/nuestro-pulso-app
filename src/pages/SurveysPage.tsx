import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function SurveysPage() {
  const { t } = useTranslation();

  const surveys = [
    {
      id: 1,
      title: "Satisfacción con los servicios municipales",
      description: "Ayúdanos a mejorar los servicios de la ciudad con tu opinión",
      status: "active",
      responses: 156,
      endDate: "2024-02-15"
    },
    {
      id: 2,
      title: "Preferencias de transporte público",
      description: "¿Qué mejoras necesita nuestro transporte público?",
      status: "active",
      responses: 89,
      endDate: "2024-02-20"
    },
    {
      id: 3,
      title: "Actividades recreativas comunitarias",
      description: "¿Qué actividades te gustaría ver en tu comunidad?",
      status: "draft",
      responses: 0,
      endDate: "2024-03-01"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{t('surveys.title')}</h1>
        <Button>{t('surveys.createSurvey')}</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Surveys List */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold">Encuestas Disponibles</h2>
          {surveys.map(survey => (
            <Card key={survey.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{survey.title}</CardTitle>
                    <CardDescription className="mt-2">{survey.description}</CardDescription>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    survey.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {survey.status === 'active' ? 'Activa' : 'Borrador'}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    {survey.responses} respuestas • Termina {survey.endDate}
                  </div>
                  <div className="space-x-2">
                    {survey.status === 'active' && (
                      <Button variant="outline" size="sm">
                        {t('surveys.takeSurvey')}
                      </Button>
                    )}
                    <Button variant="ghost" size="sm">
                      {t('surveys.results')}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Estadísticas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">12</div>
                <div className="text-sm text-muted-foreground">Encuestas totales</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">3</div>
                <div className="text-sm text-muted-foreground">Activas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">245</div>
                <div className="text-sm text-muted-foreground">Respuestas totales</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Encuestas Recientes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-sm">
                <div className="font-medium">Mejoras en parques</div>
                <div className="text-muted-foreground">78 respuestas</div>
              </div>
              <div className="text-sm">
                <div className="font-medium">Horarios de bibliotecas</div>
                <div className="text-muted-foreground">45 respuestas</div>
              </div>
              <div className="text-sm">
                <div className="font-medium">Seguridad nocturna</div>
                <div className="text-muted-foreground">92 respuestas</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}