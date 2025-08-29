import Layout from '../components/Layout'
import Link from 'next/link'

export default function Participar() {
  return (
    <Layout 
      title="Participar - Nuestro Pulso"
      description="Participa en encuestas y consultas ciudadanas. Tu voz cuenta en la democracia colombiana."
    >
      <div className="container">
        <section className="page-header">
          <h1>🗳️ Participación Ciudadana</h1>
          <p>Tu voz cuenta en la democracia</p>
        </section>

        <section className="hero">
          <h2>Próximamente: Encuestas y Consultas</h2>
          <p>
            Esta sección estará disponible próximamente. Aquí podrás participar en:
          </p>
          
          <div className="features">
            <div className="feature-card">
              <h3>📊 Encuestas Públicas</h3>
              <p>Vota en temas de interés nacional y local que afectan tu comunidad</p>
            </div>
            
            <div className="feature-card">
              <h3>🏛️ Consultas Gubernamentales</h3>
              <p>Opina sobre propuestas de políticas públicas antes de su implementación</p>
            </div>
            
            <div className="feature-card">
              <h3>📈 Seguimiento de Resultados</h3>
              <p>Observa el impacto de tu participación y cómo influye en las decisiones</p>
            </div>
          </div>
          
          <div className="coming-soon">
            <h3>🚀 Funcionalidades en Desarrollo</h3>
            <ul>
              <li>✨ Sistema de votación seguro</li>
              <li>✨ Verificación de identidad ciudadana</li>
              <li>✨ Dashboard personalizado de participación</li>
              <li>✨ Notificaciones de nuevas consultas</li>
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