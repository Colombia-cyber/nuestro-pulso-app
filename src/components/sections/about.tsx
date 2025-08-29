import { Button } from '@/components/ui/button';
import { Heart, Target, Eye } from 'lucide-react';

export function About() {
  return (
    <section id="nosotros" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Construyendo una Colombia más participativa
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Nuestro Pulso nace de la convicción de que cada ciudadano colombiano 
              tiene el derecho y la responsabilidad de participar activamente en 
              la construcción de su país.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Somos una plataforma digital que facilita la participación ciudadana, 
              promoviendo el diálogo constructivo, la transparencia gubernamental 
              y el empoderamiento de las comunidades locales.
            </p>
            <Button size="lg" variant="colombia">
              Conoce nuestro equipo
            </Button>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Heart className="h-8 w-8 text-colombia-red flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Nuestra Misión
                </h3>
                <p className="text-gray-600">
                  Empoderar a los ciudadanos colombianos con herramientas digitales 
                  que faciliten su participación activa en la democracia.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Eye className="h-8 w-8 text-colombia-blue flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Nuestra Visión
                </h3>
                <p className="text-gray-600">
                  Ser la plataforma líder de participación ciudadana en Colombia, 
                  fomentando una sociedad más justa y transparente.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Target className="h-8 w-8 text-colombia-yellow flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Nuestro Objetivo
                </h3>
                <p className="text-gray-600">
                  Crear puentes de comunicación efectivos entre ciudadanos y 
                  gobierno, facilitando decisiones más informadas y representativas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}