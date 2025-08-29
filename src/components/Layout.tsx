import { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
}

export default function Layout({ 
  children, 
  title = 'Nuestro Pulso - Participación Ciudadana Colombia',
  description = 'Plataforma de participación ciudadana para Colombia'
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="layout">
        <nav className="navigation" role="navigation">
          <div className="nav-container">
            <Link href="/" className="nav-logo">
              🇨🇴 Nuestro Pulso
            </Link>
            
            <ul className="nav-links">
              <li>
                <Link href="/" className="nav-link">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/participar" className="nav-link">
                  Participar
                </Link>
              </li>
              <li>
                <Link href="/noticias" className="nav-link">
                  Noticias
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className="main-content" role="main">
          {children}
        </main>

        <footer className="site-footer" role="contentinfo">
          <div className="footer-container">
            <div className="footer-section">
              <h3>Nuestro Pulso</h3>
              <p>Conectando ciudadanos con la democracia colombiana</p>
            </div>
            
            <div className="footer-section">
              <h4>Enlaces</h4>
              <ul>
                <li><Link href="/">Inicio</Link></li>
                <li><Link href="/participar">Participar</Link></li>
                <li><Link href="/noticias">Noticias</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Información</h4>
              <ul>
                <li><a href="#" aria-label="Política de privacidad">Privacidad</a></li>
                <li><a href="#" aria-label="Términos de uso">Términos</a></li>
                <li><a href="#" aria-label="Contacto">Contacto</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 Nuestro Pulso. Construyendo democracia participativa en Colombia.</p>
          </div>
        </footer>
      </div>
    </>
  )
}