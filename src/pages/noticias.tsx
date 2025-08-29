import Head from 'next/head'
import Link from 'next/link'

export default function Noticias() {
  return (
    <>
      <Head>
        <title>Noticias - Nuestro Pulso</title>
        <meta name="description" content="Noticias y actualizaciones del gobierno colombiano" />
      </Head>
      
      <main className="container">
        <header className="header">
          <div className="logo">
            <h1>📢 Noticias Ciudadanas</h1>
            <p>Mantente informado sobre Colombia</p>
          </div>
        </header>

        <section className="hero">
          <h2>Próximamente: Centro de Noticias</h2>
          <p>
            Esta sección estará disponible próximamente. Aquí encontrarás:
          </p>
          
          <div className="features">
            <div className="feature-card">
              <h3>🏛️ Noticias Gubernamentales</h3>
              <p>Actualizaciones oficiales y políticas públicas</p>
            </div>
            
            <div className="feature-card">
              <h3>🌍 Noticias Locales</h3>
              <p>Información relevante de tu región</p>
            </div>
            
            <div className="feature-card">
              <h3>📊 Análisis y Contexto</h3>
              <p>Explicaciones claras de temas complejos</p>
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