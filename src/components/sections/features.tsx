import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Users, BarChart3, MessageSquare, Map, Zap } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Participación Segura',
      description: 'Tu identidad y datos están protegidos con los más altos estándares de seguridad.'
    },
    {
      icon: Users,
      title: 'Comunidad Activa',
      description: 'Conecta con ciudadanos de toda Colombia que comparten tus intereses y preocupaciones.'
    },
    {
      icon: BarChart3,
      title: 'Datos Transparentes',
      description: 'Accede a información clara y actualizada sobre proyectos y decisiones gubernamentales.'
    },
    {
      icon: MessageSquare,
      title: 'Diálogo Constructivo',
      description: 'Participa en conversaciones moderadas y respetuosas sobre temas importantes.'
    },
    {
      icon: Map,
      title: 'Impacto Local',
      description: 'Enfócate en los temas que afectan directamente a tu municipio y región.'
    },
    {
      icon: Zap,
      title: 'Acción Inmediata',
      description: 'Convierte tus ideas en propuestas concretas que pueden generar cambios reales.'
    }
  ];

  return (
    <section id="caracteristicas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Características que nos distinguen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestro Pulso está diseñado para empoderar a los ciudadanos colombianos 
            con herramientas modernas de participación democrática.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-colombia-blue mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}