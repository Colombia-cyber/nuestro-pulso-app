import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export default function ChatPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{t('chat.title')}</h1>
        <Button>{t('common.settings')}</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[600px]">
        {/* Chat Sidebar */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Salas</CardTitle>
            <CardDescription>Canales de chat disponibles</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              # General
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              # Debates
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              # Noticias
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              # Eventos
            </Button>
          </CardContent>
        </Card>

        {/* Main Chat Area */}
        <Card className="lg:col-span-3 flex flex-col">
          <CardHeader>
            <CardTitle># General</CardTitle>
            <CardDescription>Chat principal de la comunidad</CardDescription>
          </CardHeader>
          
          <CardContent className="flex-1 flex flex-col">
            {/* Messages Area */}
            <div className="flex-1 space-y-4 p-4 bg-muted/20 rounded-lg overflow-y-auto">
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                    J
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">Juan Pérez</span>
                      <span className="text-xs text-muted-foreground">hace 2 min</span>
                    </div>
                    <p className="text-sm">¡Hola a todos! ¿Cómo están?</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground text-sm font-medium">
                    M
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">María González</span>
                      <span className="text-xs text-muted-foreground">hace 1 min</span>
                    </div>
                    <p className="text-sm">¡Muy bien! ¿Han visto las últimas noticias sobre el nuevo proyecto comunitario?</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="mt-4 flex space-x-2">
              <Input 
                placeholder={t('chat.sendMessage')}
                className="flex-1"
              />
              <Button>{t('common.submit')}</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}