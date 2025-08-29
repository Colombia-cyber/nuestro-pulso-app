import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
          {t('app.title')}
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t('app.description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/community">
            <Button size="lg">
              {t('navigation.community')}
            </Button>
          </Link>
          <Button variant="outline" size="lg">
            {t('auth.register')}
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>{t('chat.title')}</CardTitle>
            <CardDescription>
              Conéctate con tu comunidad en tiempo real
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/chat">
              <Button variant="outline" className="w-full">
                {t('navigation.chat')}
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t('debates.title')}</CardTitle>
            <CardDescription>
              Participa en debates constructivos sobre temas importantes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/debates">
              <Button variant="outline" className="w-full">
                {t('navigation.debates')}
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t('surveys.title')}</CardTitle>
            <CardDescription>
              Comparte tu opinión a través de encuestas comunitarias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/surveys">
              <Button variant="outline" className="w-full">
                {t('navigation.surveys')}
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t('news.title')}</CardTitle>
            <CardDescription>
              Mantente informado con las últimas noticias de tu comunidad
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/news">
              <Button variant="outline" className="w-full">
                {t('navigation.news')}
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t('community.title')}</CardTitle>
            <CardDescription>
              Conoce a otros miembros y participa en eventos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/community">
              <Button variant="outline" className="w-full">
                {t('navigation.community')}
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t('admin.title')}</CardTitle>
            <CardDescription>
              Panel de administración para gestionar la comunidad
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/admin">
              <Button variant="outline" className="w-full">
                {t('navigation.admin')}
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}