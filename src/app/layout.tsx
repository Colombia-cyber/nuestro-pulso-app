import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '@/components/providers/auth-provider';
import { ToastProvider } from '@/components/providers/toast-provider';
import { ErrorBoundary } from '@/components/ui/error-boundary';

export const metadata: Metadata = {
  title: 'Nuestro Pulso - Plataforma de Participación Ciudadana',
  description: 'Plataforma digital para la participación ciudadana en Colombia. Conecta, participa y construye el futuro de tu comunidad.',
  keywords: ['participación ciudadana', 'colombia', 'democracia', 'comunidad'],
  authors: [{ name: 'Colombia Cyber' }],
  openGraph: {
    title: 'Nuestro Pulso',
    description: 'Plataforma de Participación Ciudadana para Colombia',
    url: 'https://nuestro-pulso.vercel.app',
    siteName: 'Nuestro Pulso',
    locale: 'es_CO',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CO">
      <body className="font-sans antialiased">
        <ErrorBoundary>
          <AuthProvider>
            <ToastProvider>
              {children}
            </ToastProvider>
          </AuthProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}