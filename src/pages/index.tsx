import Layout from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout 
      title="Nuestro Pulso - Participación Ciudadana Colombia"
      description="Plataforma de participación ciudadana para Colombia. Conecta con tu gobierno, participa en consultas y mantente informado."
    >
      <div className="container">
        <section className="hero">
          <h1>🇨🇴 Conectando Ciudadanos con la Democracia</h1>
          <p>
            Participa activamente en el futuro de Colombia. Una plataforma donde tu voz cuenta
            y donde la transparencia gubernamental se encuentra con la participación ciudadana.
          </p>
          
          <div className="features">
            <div className="feature-card">
              <h3>🗳️ Participación</h3>
              <p>Vota en encuestas y consultas ciudadanas sobre temas que impactan tu comunidad</p>
            </div>
            
            <div className="feature-card">
              <h3>📢 Noticias</h3>
              <p>Mantente informado sobre temas gubernamentales y políticas públicas</p>
            </div>
            
            <div className="feature-card">
              <h3>💬 Comunidad</h3>
              <p>Conecta con otros ciudadanos comprometidos con el futuro de Colombia</p>
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

        <section className="stats-section">
          <h2>Impacto de la Participación Ciudadana</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">25M</div>
              <div className="stat-label">Ciudadanos Registrados</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">150+</div>
              <div className="stat-label">Consultas Realizadas</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">89%</div>
              <div className="stat-label">Tasa de Participación</div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}