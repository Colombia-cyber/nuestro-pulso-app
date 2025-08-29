import Head from 'next/head'
import Link from 'next/link'

export default function Participar() {
  return (
    <>
      <Head>
        <title>Participar - Nuestro Pulso</title>
        <meta name="description" content="Participa en encuestas y consultas ciudadanas" />
      </Head>
      
      <main className="container">
        <header className="header">
          <div className="logo">
            <h1>🗳️ Participación Ciudadana</h1>
            <p>Tu voz cuenta en la democracia</p>
          </div>
        </header>

        <section className="hero">
          <h2>Próximamente: Encuestas y Consultas</h2>
          <p>
            Esta sección estará disponible próximamente. Aquí podrás participar en:
          </p>
          
          <div className="features">
            <div className="feature-card">
              <h3>📊 Encuestas Públicas</h3>
              <p>Vota en temas de interés nacional y local</p>
            </div>
            
            <div className="feature-card">
              <h3>🏛️ Consultas Gubernamentales</h3>
              <p>Opina sobre propuestas de políticas públicas</p>
            </div>
            
            <div className="feature-card">
              <h3>📈 Seguimiento de Resultados</h3>
              <p>Observa el impacto de tu participación</p>
            </div>
          </div>
          
          <div className="actions">
            <Link href="/" className="btn btn-secondary">
              Volver al Inicio
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