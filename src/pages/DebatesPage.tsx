import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function DebatesPage() {
  const { t } = useTranslation();

  const debates = [
    {
      id: 1,
      title: "¿Deberían aumentar los espacios verdes en la ciudad?",
      description: "Debate sobre la necesidad de más parques y zonas verdes en nuestra comunidad.",
      participants: 23,
      status: "active",
      createdAt: "2024-01-15"
    },
    {
      id: 2,
      title: "Transporte público: ¿Mejoras necesarias?",
      description: "Discusión sobre las mejoras que necesita nuestro sistema de transporte público.",
      participants: 18,
      status: "active",
      createdAt: "2024-01-14"
    },
    {
      id: 3,
      title: "Seguridad ciudadana en el barrio",
      description: "Propuestas para mejorar la seguridad en nuestro barrio.",
      participants: 31,
      status: "closed",
      createdAt: "2024-01-10"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{t('debates.title')}</h1>
        <Button>{t('debates.createDebate')}</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Debates */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold">Debates Activos</h2>
          {debates.filter(debate => debate.status === 'active').map(debate => (
            <Card key={debate.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{debate.title}</CardTitle>
                    <CardDescription className="mt-2">{debate.description}</CardDescription>
                  </div>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    Activo
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    {debate.participants} participantes
                  </div>
                  <Button variant="outline" size="sm">
                    {t('debates.joinDebate')}
                  </Button>
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
                <div className="text-2xl font-bold text-primary">42</div>
                <div className="text-sm text-muted-foreground">Debates totales</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">15</div>
                <div className="text-sm text-muted-foreground">Activos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">127</div>
                <div className="text-sm text-muted-foreground">Participantes</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Debates Recientes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {debates.filter(debate => debate.status === 'closed').map(debate => (
                <div key={debate.id} className="text-sm">
                  <div className="font-medium truncate">{debate.title}</div>
                  <div className="text-muted-foreground">{debate.participants} participantes</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}