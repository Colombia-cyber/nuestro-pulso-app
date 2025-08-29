import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Nuestro Pulso - Plataforma de Participación Ciudadana',
  description: 'Conecta con tu comunidad y participa en la democracia colombiana a través de encuestas, retroalimentación y foros comunitarios.',
  keywords: 'participación ciudadana, democracia, Colombia, encuestas, comunidad',
  authors: [{ name: 'Colombia-cyber' }],
  openGraph: {
    title: 'Nuestro Pulso',
    description: 'Plataforma de Participación Ciudadana para Colombia',
    type: 'website',
    locale: 'es_CO',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="h-full">
      <body className="h-full font-sans">
        <div id="root" className="min-h-full">
          {children}
        </div>
      </body>
    </html>
  )
}