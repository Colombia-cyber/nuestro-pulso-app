import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nuestro Pulso - Participación Ciudadana Colombia</title>
        <meta name="description" content="Plataforma de participación ciudadana para Colombia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className="container">
        <header className="header">
          <div className="logo">
            <h1>🇨🇴 Nuestro Pulso</h1>
            <p>Plataforma de Participación Ciudadana</p>
          </div>
        </header>

        <section className="hero">
          <h2>Conectando Ciudadanos con la Democracia</h2>
          <p>
            Participa activamente en el futuro de Colombia. Una plataforma donde tu voz cuenta
            y donde la transparencia gubernamental se encuentra con la participación ciudadana.
          </p>
          
          <div className="features">
            <div className="feature-card">
              <h3>🗳️ Participación</h3>
              <p>Vota en encuestas y consultas ciudadanas</p>
            </div>
            
            <div className="feature-card">
              <h3>📢 Noticias</h3>
              <p>Mantente informado sobre temas gubernamentales</p>
            </div>
            
            <div className="feature-card">
              <h3>💬 Comunidad</h3>
              <p>Conecta con otros ciudadanos comprometidos</p>
            </div>
          </div>
          
          <div className="actions">
            <Link href="/participar" className="btn btn-primary">
              Comenzar a Participar
            </Link>
            <Link href="/noticias" className="btn btn-secondary">
              Ver Noticias
            </Link>
          </div>
        </section>

        <footer className="footer">
          <p>&copy; 2025 Nuestro Pulso. Construyendo democracia participativa en Colombia.</p>
        </footer>
      </main>
    </>
  )
}