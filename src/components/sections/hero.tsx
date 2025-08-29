import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Vote, MessageCircle } from 'lucide-react';

export function Hero() {
  return (
    <section id="inicio" className="pt-16 pb-20 bg-gradient-to-br from-colombia-yellow/20 via-white to-colombia-blue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Tu voz importa en{' '}
            <span className="text-colombia-blue">Colombia</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Conecta con tu comunidad, participa en decisiones importantes y 
            ayuda a construir el futuro de nuestro país.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/auth/register">
              <Button size="lg" variant="colombia" className="flex items-center">
                Únete Ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#caracteristicas">
              <Button size="lg" variant="outline">
                Conoce Más
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-colombia-blue mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">10,000+</h3>
              <p className="text-gray-600">Ciudadanos Activos</p>
            </div>
            <div className="flex flex-col items-center">
              <Vote className="h-12 w-12 text-colombia-red mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">500+</h3>
              <p className="text-gray-600">Propuestas Ciudadanas</p>
            </div>
            <div className="flex flex-col items-center">
              <MessageCircle className="h-12 w-12 text-colombia-yellow mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">1,200+</h3>
              <p className="text-gray-600">Conversaciones Activas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}