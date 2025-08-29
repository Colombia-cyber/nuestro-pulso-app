import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tienes preguntas, sugerencias o quieres colaborar con nosotros? 
            Nos encantaría escucharte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Envíanos un mensaje</CardTitle>
              <CardDescription>
                Completa el formulario y te responderemos lo antes posible.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Nombre" />
                <Input placeholder="Apellido" />
              </div>
              <Input type="email" placeholder="Correo electrónico" />
              <Input placeholder="Asunto" />
              <textarea
                className="w-full min-h-[120px] px-3 py-2 text-sm ring-offset-background border border-input rounded-md bg-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Tu mensaje..."
              />
              <Button className="w-full" variant="colombia">
                Enviar Mensaje
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-colombia-blue flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Correo electrónico
                </h3>
                <p className="text-gray-600">contacto@nuestropulso.co</p>
                <p className="text-gray-600">soporte@nuestropulso.co</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-colombia-blue flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Teléfono
                </h3>
                <p className="text-gray-600">+57 (1) 234-5678</p>
                <p className="text-gray-600">Línea de soporte técnico</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-colombia-blue flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Ubicación
                </h3>
                <p className="text-gray-600">Bogotá, Colombia</p>
                <p className="text-gray-600">Serving all Colombian territories</p>
              </div>
            </div>

            <div className="bg-colombia-yellow/10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ¿Necesitas ayuda urgente?
              </h3>
              <p className="text-gray-600 mb-4">
                Si tienes problemas técnicos o necesitas asistencia inmediata, 
                contáctanos directamente.
              </p>
              <Button variant="outline">
                Soporte Técnico
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}