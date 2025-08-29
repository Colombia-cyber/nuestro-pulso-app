import './PageStyles.css';

const DebatePage: React.FC = () => {
  return (
    <div className="page-content">
      <div className="page-header">
        <h2>⚖️ Debates Democráticos</h2>
        <p>Participa en debates estructurados sobre políticas y propuestas ciudadanas</p>
      </div>
      
      <div className="debates-container">
        <div className="debate-item featured">
          <div className="debate-header">
            <h3>🌱 Política Ambiental: ¿Prohibir el plástico de un solo uso?</h3>
            <div className="debate-meta">
              <span className="debate-time">⏰ Finaliza en 2 días</span>
              <span className="debate-participants">👥 234 participantes</span>
            </div>
          </div>
          <div className="debate-positions">
            <div className="position pro">
              <h4>✅ A Favor (67%)</h4>
              <p>"Es urgente proteger nuestros ecosistemas y reducir la contaminación plástica en nuestros océanos y ríos."</p>
              <span className="vote-count">156 votos</span>
            </div>
            <div className="position contra">
              <h4>❌ En Contra (33%)</h4>
              <p>"Necesitamos alternativas viables y asequibles antes de implementar prohibiciones que afecten la economía."</p>
              <span className="vote-count">78 votos</span>
            </div>
          </div>
          <button className="participate-button">Unirse al Debate</button>
        </div>
        
        <div className="debate-item">
          <div className="debate-header">
            <h3>🚌 Transporte Público: ¿Tarifa diferenciada por ingresos?</h3>
            <div className="debate-meta">
              <span className="debate-time">⏰ Finaliza en 5 días</span>
              <span className="debate-participants">👥 189 participantes</span>
            </div>
          </div>
          <div className="debate-positions">
            <div className="position pro">
              <h4>✅ A Favor (72%)</h4>
              <p>"Un sistema de transporte más equitativo que garantice el acceso a todos los ciudadanos."</p>
              <span className="vote-count">136 votos</span>
            </div>
            <div className="position contra">
              <h4>❌ En Contra (28%)</h4>
              <p>"La implementación sería compleja y costosa, mejor enfocar en mejorar la calidad del servicio."</p>
              <span className="vote-count">53 votos</span>
            </div>
          </div>
          <button className="participate-button">Unirse al Debate</button>
        </div>
        
        <div className="debate-item">
          <div className="debate-header">
            <h3>📚 Educación: ¿Educación universitaria gratuita para todos?</h3>
            <div className="debate-meta">
              <span className="debate-time">⏰ Finaliza en 1 semana</span>
              <span className="debate-participants">👥 312 participantes</span>
            </div>
          </div>
          <div className="debate-positions">
            <div className="position pro">
              <h4>✅ A Favor (84%)</h4>
              <p>"La educación es un derecho fundamental que debe ser accesible para todos los colombianos."</p>
              <span className="vote-count">262 votos</span>
            </div>
            <div className="position contra">
              <h4>❌ En Contra (16%)</h4>
              <p>"Los recursos son limitados, mejor enfocarse en mejorar la calidad de la educación básica."</p>
              <span className="vote-count">50 votos</span>
            </div>
          </div>
          <button className="participate-button">Unirse al Debate</button>
        </div>
      </div>
      
      <div className="create-debate">
        <h3>💡 ¿Tienes una propuesta para debatir?</h3>
        <button className="cta-button">Iniciar Nuevo Debate</button>
      </div>
    </div>
  );
};

export default DebatePage;