import React from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'

// Components for different pages
const Home = () => (
  <div>
    <div className="hero">
      <h1>Nuestro Pulso</h1>
      <p>
        Plataforma de participación cívica para fortalecer la democracia colombiana. 
        Tu voz cuenta, tu opinión importa, tu participación construye país.
      </p>
      <Link to="/encuestas" className="btn-primary">
        Participa Ahora
      </Link>
    </div>
    
    <div className="colombian-flag"></div>
    
    <div className="card-grid">
      <div className="card">
        <h3>🗳️ Encuestas Ciudadanas</h3>
        <p>
          Participa en encuestas sobre temas importantes para Colombia. 
          Tu opinión ayuda a entender las necesidades y prioridades de los ciudadanos.
        </p>
        <Link to="/encuestas" className="btn-secondary">
          Ver Encuestas
        </Link>
      </div>
      
      <div className="card">
        <h3>🏛️ Consultas Públicas</h3>
        <p>
          Participa en las consultas públicas del gobierno. 
          Contribuye con tus comentarios y propuestas en procesos legislativos y normativos.
        </p>
        <Link to="/consultas" className="btn-secondary">
          Ver Consultas
        </Link>
      </div>
      
      <div className="card">
        <h3>📊 Transparencia</h3>
        <p>
          Accede a información transparente sobre las decisiones del gobierno 
          y el impacto de la participación ciudadana en las políticas públicas.
        </p>
        <a href="#transparencia" className="btn-secondary">
          Ver Datos
        </a>
      </div>
    </div>
    
    <div className="section">
      <h2>¿Por qué participar?</h2>
      <div className="card-grid">
        <div className="card">
          <h3>🇨🇴 Fortalece la Democracia</h3>
          <p>Tu participación activa fortalece las instituciones democráticas colombianas.</p>
        </div>
        
        <div className="card">
          <h3>🤝 Construye Consensos</h3>
          <p>Ayuda a construir consensos nacionales sobre temas importantes para el país.</p>
        </div>
        
        <div className="card">
          <h3>📈 Impulsa el Cambio</h3>
          <p>Tus aportes contribuyen a políticas públicas más efectivas y representativas.</p>
        </div>
      </div>
    </div>
  </div>
)

const Encuestas = () => (
  <div>
    <h1 className="page-title">Encuestas Ciudadanas</h1>
    
    <div className="section">
      <h2>Encuestas Activas</h2>
      
      <div className="survey-item">
        <h4>Prioridades en Seguridad Ciudadana</h4>
        <p>Ayúdanos a entender cuáles son las principales preocupaciones en seguridad en tu región.</p>
        <span className="status active">Activa</span>
        <div style={{ marginTop: '1rem' }}>
          <button className="btn-primary">Participar</button>
        </div>
      </div>
      
      <div className="survey-item">
        <h4>Calidad de Servicios Públicos</h4>
        <p>Evalúa la calidad de los servicios públicos en tu municipio: agua, energía, internet, transporte.</p>
        <span className="status active">Activa</span>
        <div style={{ marginTop: '1rem' }}>
          <button className="btn-primary">Participar</button>
        </div>
      </div>
      
      <div className="survey-item">
        <h4>Medio Ambiente y Sostenibilidad</h4>
        <p>Comparte tu opinión sobre las políticas ambientales y de sostenibilidad en Colombia.</p>
        <span className="status active">Activa</span>
        <div style={{ marginTop: '1rem' }}>
          <button className="btn-primary">Participar</button>
        </div>
      </div>
    </div>
    
    <div className="section">
      <h2>Próximas Encuestas</h2>
      
      <div className="survey-item">
        <h4>Educación Digital</h4>
        <p>Proximamente: Encuesta sobre la digitalización en la educación colombiana.</p>
        <span className="status upcoming">Próximamente</span>
      </div>
      
      <div className="survey-item">
        <h4>Empleo y Economía Local</h4>
        <p>Proximamente: Tu perspectiva sobre el empleo y desarrollo económico local.</p>
        <span className="status upcoming">Próximamente</span>
      </div>
    </div>
    
    <div className="section">
      <h2>Resultados Anteriores</h2>
      
      <div className="survey-item">
        <h4>Participación Electoral 2023</h4>
        <p>Resultados: 85% de los encuestados considera importante la participación electoral activa.</p>
        <span className="status completed">Completada</span>
        <div style={{ marginTop: '1rem' }}>
          <button className="btn-secondary">Ver Resultados</button>
        </div>
      </div>
    </div>
  </div>
)

const Consultas = () => (
  <div>
    <h1 className="page-title">Consultas Públicas</h1>
    
    <div className="section">
      <h2>Consultas Abiertas</h2>
      
      <div className="consultation-item">
        <h4>Ley de Participación Ciudadana Digital</h4>
        <p>
          Proyecto de ley para regular y promover la participación ciudadana a través 
          de plataformas digitales. Tu opinión es fundamental.
        </p>
        <span className="status active">Abierta hasta: 30 Nov 2024</span>
        <div style={{ marginTop: '1rem' }}>
          <button className="btn-primary">Comentar</button>
          <button className="btn-secondary" style={{ marginLeft: '1rem' }}>
            Descargar Documento
          </button>
        </div>
      </div>
      
      <div className="consultation-item">
        <h4>Plan Nacional de Desarrollo Digital</h4>
        <p>
          Consulta sobre las estrategias para la digitalización del país y 
          la inclusión digital de todos los colombianos.
        </p>
        <span className="status active">Abierta hasta: 15 Dic 2024</span>
        <div style={{ marginTop: '1rem' }}>
          <button className="btn-primary">Comentar</button>
          <button className="btn-secondary" style={{ marginLeft: '1rem' }}>
            Descargar Documento
          </button>
        </div>
      </div>
      
      <div className="consultation-item">
        <h4>Reforma al Sistema de Salud</h4>
        <p>
          Propuesta de reforma al sistema de salud colombiano. 
          Participa con tus comentarios y sugerencias.
        </p>
        <span className="status active">Abierta hasta: 10 Ene 2025</span>
        <div style={{ marginTop: '1rem' }}>
          <button className="btn-primary">Comentar</button>
          <button className="btn-secondary" style={{ marginLeft: '1rem' }}>
            Descargar Documento
          </button>
        </div>
      </div>
    </div>
    
    <div className="section">
      <h2>Próximas Consultas</h2>
      
      <div className="consultation-item">
        <h4>Política Nacional de Ciberseguridad</h4>
        <p>
          Próximamente se abrirá la consulta sobre la nueva política nacional de ciberseguridad.
        </p>
        <span className="status upcoming">Abre: Febrero 2025</span>
      </div>
    </div>
    
    <div className="section">
      <h2>Consultas Cerradas</h2>
      
      <div className="consultation-item">
        <h4>Ley de Protección de Datos Personales</h4>
        <p>
          Consulta cerrada sobre modificaciones a la ley de protección de datos personales.
          Recibimos 1,247 comentarios ciudadanos.
        </p>
        <span className="status completed">Cerrada</span>
        <div style={{ marginTop: '1rem' }}>
          <button className="btn-secondary">Ver Resultados</button>
        </div>
      </div>
    </div>
  </div>
)

const App = () => {
  const location = useLocation()
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : ''
  }
  
  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <Link to="/" className="logo">
            🇨🇴 Nuestro Pulso
          </Link>
          <nav className="nav">
            <Link to="/" className={`nav-link ${isActive('/')}`}>
              Inicio
            </Link>
            <Link to="/encuestas" className={`nav-link ${isActive('/encuestas')}`}>
              Encuestas
            </Link>
            <Link to="/consultas" className={`nav-link ${isActive('/consultas')}`}>
              Consultas Públicas
            </Link>
          </nav>
        </div>
      </header>
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/encuestas" element={<Encuestas />} />
          <Route path="/consultas" element={<Consultas />} />
        </Routes>
      </main>
      
      <footer className="footer">
        <div className="colombian-flag"></div>
        <p>
          © 2024 Nuestro Pulso - Plataforma de Participación Cívica Colombiana
        </p>
        <p>
          Construyendo democracia digital para Colombia 🇨🇴
        </p>
      </footer>
    </div>
  )
}

export default App