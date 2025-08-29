import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function CommunityPage() {
  const { t } = useTranslation();

  const events = [
    {
      id: 1,
      title: "Limpieza comunitaria del parque",
      date: "2024-02-10",
      time: "09:00 AM",
      location: "Parque Central",
      attendees: 23,
      maxAttendees: 50
    },
    {
      id: 2,
      title: "Taller de huerta urbana",
      date: "2024-02-15",
      time: "02:00 PM", 
      location: "Centro Comunitario",
      attendees: 15,
      maxAttendees: 25
    }
  ];

  const members = [
    { id: 1, name: "María González", role: "Coordinadora", avatar: "M", online: true },
    { id: 2, name: "Juan Pérez", role: "Miembro", avatar: "J", online: true },
    { id: 3, name: "Ana Martínez", role: "Moderadora", avatar: "A", online: false },
    { id: 4, name: "Carlos Rodríguez", role: "Miembro", avatar: "C", online: true },
  ];

  const groups = [
    { id: 1, name: "Medio Ambiente", members: 45, description: "Iniciativas ecológicas y sostenibilidad" },
    { id: 2, name: "Cultura y Arte", members: 32, description: "Eventos culturales y artísticos" },
    { id: 3, name: "Deportes", members: 28, description: "Actividades deportivas comunitarias" },
    { id: 4, name: "Educación", members: 51, description: "Programas educativos y talleres" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{t('community.title')}</h1>
        <Button>Crear Evento</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle>{t('community.events')}</CardTitle>
              <CardDescription>Próximos eventos comunitarios</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {events.map(event => (
                <div key={event.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{event.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {event.date} • {event.time} • {event.location}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {event.attendees}/{event.maxAttendees} asistentes
                      </p>
                    </div>
                    <Button size="sm">{t('community.join')}</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Community Groups */}
          <Card>
            <CardHeader>
              <CardTitle>{t('community.groups')}</CardTitle>
              <CardDescription>Grupos temáticos de la comunidad</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {groups.map(group => (
                  <div key={group.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold">{group.name}</h3>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {group.members} miembros
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{group.description}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      {t('community.join')}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Community Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Estadísticas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">246</div>
                <div className="text-sm text-muted-foreground">Miembros totales</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">34</div>
                <div className="text-sm text-muted-foreground">En línea ahora</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">8</div>
                <div className="text-sm text-muted-foreground">Eventos este mes</div>
              </div>
            </CardContent>
          </Card>

          {/* Active Members */}
          <Card>
            <CardHeader>
              <CardTitle>Miembros Activos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {members.map(member => (
                <div key={member.id} className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                      {member.avatar}
                    </div>
                    {member.online && (
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{member.name}</div>
                    <div className="text-xs text-muted-foreground">{member.role}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Acciones Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start" size="sm">
                Crear Grupo
              </Button>
              <Button variant="outline" className="w-full justify-start" size="sm">
                Organizar Evento
              </Button>
              <Button variant="outline" className="w-full justify-start" size="sm">
                Invitar Amigos
              </Button>
              <Button variant="outline" className="w-full justify-start" size="sm">
                Ver Calendario
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}