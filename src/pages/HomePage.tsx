import './PageStyles.css';

const HomePage: React.FC = () => {
  return (
    <div className="page-content">
      <div className="page-header">
        <h2>🏠 Bienvenido a Nuestro Pulso</h2>
        <p>La plataforma digital para la participación ciudadana en Colombia</p>
      </div>
      
      <div className="content-grid">
        <div className="feature-card">
          <h3>💬 Conversaciones Públicas</h3>
          <p>Únete a discusiones importantes sobre temas que afectan a nuestra comunidad colombiana.</p>
          <button className="cta-button">Ir al Chat</button>
        </div>
        
        <div className="feature-card">
          <h3>⚖️ Debates Democráticos</h3>
          <p>Participa en debates estructurados sobre políticas públicas y propuestas ciudadanas.</p>
          <button className="cta-button">Ver Debates</button>
        </div>
        
        <div className="feature-card">
          <h3>📋 Propuestas Ciudadanas</h3>
          <p>Presenta y vota propuestas para mejorar nuestras comunidades locales y nacionales.</p>
          <button className="cta-button">Crear Propuesta</button>
        </div>
        
        <div className="feature-card">
          <h3>🤝 Comunidad Activa</h3>
          <p>Conecta con otros ciudadanos comprometidos con el cambio social y político.</p>
          <button className="cta-button">Explorar Comunidad</button>
        </div>
      </div>
      
      <div className="stats-section">
        <h3>Impacto de Nuestra Comunidad</h3>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">1,250</span>
            <span className="stat-label">Ciudadanos Activos</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">347</span>
            <span className="stat-label">Propuestas Presentadas</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">89</span>
            <span className="stat-label">Debates Activos</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">23</span>
            <span className="stat-label">Cambios Implementados</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;