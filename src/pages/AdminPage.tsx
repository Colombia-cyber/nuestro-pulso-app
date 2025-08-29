import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function AdminPage() {
  const { t } = useTranslation();

  const stats = [
    { label: "Total Usuarios", value: 246, change: "+12%", color: "text-primary" },
    { label: "Debates Activos", value: 15, change: "+3", color: "text-green-600" },
    { label: "Encuestas Pendientes", value: 3, change: "-2", color: "text-orange-600" },
    { label: "Reportes Abiertos", value: 2, change: "0", color: "text-red-600" }
  ];

  const recentActivity = [
    { id: 1, action: "Nuevo usuario registrado", user: "Ana López", time: "hace 10 min" },
    { id: 2, action: "Debate iniciado", user: "Carlos Ruiz", time: "hace 23 min" },
    { id: 3, action: "Encuesta completada", user: "María González", time: "hace 1 hora" },
    { id: 4, action: "Reporte enviado", user: "Juan Pérez", time: "hace 2 horas" },
  ];

  const pendingActions = [
    { id: 1, type: "Reporte", description: "Contenido inapropiado en chat", priority: "alta" },
    { id: 2, type: "Solicitud", description: "Nuevo moderador - Ana López", priority: "media" },
    { id: 3, type: "Revisión", description: "Debate sobre transporte público", priority: "baja" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{t('admin.title')}</h1>
        <Button>Configuración</Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                </div>
                <div className="text-right">
                  <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : stat.change.startsWith('-') ? 'text-red-600' : 'text-muted-foreground'}`}>
                    {stat.change}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Pending Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Acciones Pendientes</CardTitle>
              <CardDescription>Elementos que requieren tu atención</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {pendingActions.map(action => (
                <div key={action.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      action.priority === 'alta' ? 'bg-red-500' :
                      action.priority === 'media' ? 'bg-orange-500' : 'bg-green-500'
                    }`}></div>
                    <div>
                      <div className="font-medium">{action.type}</div>
                      <div className="text-sm text-muted-foreground">{action.description}</div>
                    </div>
                  </div>
                  <div className="space-x-2">
                    <Button variant="outline" size="sm">Ver</Button>
                    <Button size="sm">Revisar</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Management Tools */}
          <Card>
            <CardHeader>
              <CardTitle>Herramientas de Gestión</CardTitle>
              <CardDescription>Acceso rápido a funciones administrativas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="h-auto p-4 flex flex-col space-y-2">
                  <div className="text-lg font-semibold">Usuarios</div>
                  <div className="text-sm text-muted-foreground">Gestionar miembros</div>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col space-y-2">
                  <div className="text-lg font-semibold">Contenido</div>
                  <div className="text-sm text-muted-foreground">Moderar publicaciones</div>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col space-y-2">
                  <div className="text-lg font-semibold">Reportes</div>
                  <div className="text-sm text-muted-foreground">Ver estadísticas</div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Actividad Reciente</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentActivity.map(activity => (
                <div key={activity.id} className="text-sm">
                  <div className="font-medium">{activity.action}</div>
                  <div className="text-muted-foreground">
                    por {activity.user} • {activity.time}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Estadísticas Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Nuevos usuarios (7d)</span>
                <span className="text-sm font-medium">+23</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Debates creados (7d)</span>
                <span className="text-sm font-medium">+8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Mensajes enviados (7d)</span>
                <span className="text-sm font-medium">+456</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Encuestas completadas (7d)</span>
                <span className="text-sm font-medium">+67</span>
              </div>
            </CardContent>
          </Card>

          {/* System Status */}
          <Card>
            <CardHeader>
              <CardTitle>Estado del Sistema</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Servidor</span>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Base de datos</span>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Chat en tiempo real</span>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Notificaciones</span>
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}