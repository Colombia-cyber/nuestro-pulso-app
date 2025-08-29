import Layout from '../components/Layout'
import Link from 'next/link'

export default function Noticias() {
  return (
    <Layout 
      title="Noticias - Nuestro Pulso"
      description="Noticias y actualizaciones del gobierno colombiano. Mantente informado sobre políticas públicas."
    >
      <div className="container">
        <section className="page-header">
          <h1>📢 Noticias Ciudadanas</h1>
          <p>Mantente informado sobre Colombia</p>
        </section>

        <section className="hero">
          <h2>Próximamente: Centro de Noticias</h2>
          <p>
            Esta sección estará disponible próximamente. Aquí encontrarás:
          </p>
          
          <div className="features">
            <div className="feature-card">
              <h3>🏛️ Noticias Gubernamentales</h3>
              <p>Actualizaciones oficiales y políticas públicas directamente desde las fuentes</p>
            </div>
            
            <div className="feature-card">
              <h3>🌍 Noticias Locales</h3>
              <p>Información relevante de tu región y cómo te afectan las decisiones locales</p>
            </div>
            
            <div className="feature-card">
              <h3>📊 Análisis y Contexto</h3>
              <p>Explicaciones claras de temas complejos con datos verificables</p>
            </div>
          </div>
          
          <div className="coming-soon">
            <h3>📰 Funcionalidades en Desarrollo</h3>
            <ul>
              <li>✨ Feed personalizado por región</li>
              <li>✨ Notificaciones de breaking news</li>
              <li>✨ Fact-checking integrado</li>
              <li>✨ Comentarios verificados de ciudadanos</li>
            </ul>
          </div>
          
          <div className="actions">
            <Link href="/" className="btn btn-secondary">
              Volver al Inicio
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}