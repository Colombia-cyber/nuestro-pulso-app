import React from 'react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto">
      <div className="glass-card colombia-accent" style={{ borderRadius: '0', marginTop: 'auto' }}>
        <div className="container">
          <div className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-colombia-yellow via-colombia-blue to-colombia-red rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🇨🇴</span>
                  </div>
                  <h3 className="text-xl font-bold text-colombia-blue">Nuestro Pulso</h3>
                </div>
                <p className="text-gray-600 mb-4 max-w-md">
                  Plataforma de participación ciudadana que fortalece la democracia colombiana 
                  a través del diálogo, los debates y la colaboración comunitaria.
                </p>
                <p className="text-sm text-gray-500">
                  Colombian civic engagement platform strengthening democracy through 
                  dialogue, debates, and community collaboration.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-colombia-blue mb-4">Enlaces Rápidos</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/chat" className="text-gray-600 hover:text-colombia-blue transition-colors">Chat Comunitario</a></li>
                  <li><a href="/debates" className="text-gray-600 hover:text-colombia-blue transition-colors">Debates Semanales</a></li>
                  <li><a href="/surveys" className="text-gray-600 hover:text-colombia-blue transition-colors">Encuestas</a></li>
                  <li><a href="/news" className="text-gray-600 hover:text-colombia-blue transition-colors">Noticias</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-semibold text-colombia-blue mb-4">Contacto</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>📧 info@nuestropulso.co</li>
                  <li>🌐 www.nuestropulso.co</li>
                  <li>📱 @NuestroPulsoCol</li>
                  <li>🇨🇴 Bogotá, Colombia</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-500 mb-4 md:mb-0">
                © {currentYear} Nuestro Pulso. Fortaleciendo la democracia colombiana.
              </p>
              <div className="flex space-x-4 text-sm">
                <a href="#" className="text-gray-500 hover:text-colombia-blue transition-colors">
                  Términos de Uso
                </a>
                <a href="#" className="text-gray-500 hover:text-colombia-blue transition-colors">
                  Privacidad
                </a>
                <a href="#" className="text-gray-500 hover:text-colombia-blue transition-colors">
                  Código de Conducta
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer