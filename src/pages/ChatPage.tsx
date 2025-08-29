import './PageStyles.css';

const ChatPage: React.FC = () => {
  return (
    <div className="page-content">
      <div className="page-header">
        <h2>💬 Chat Comunitario</h2>
        <p>Conversaciones en tiempo real sobre temas de interés nacional</p>
      </div>
      
      <div className="chat-container">
        <div className="chat-rooms">
          <h3>Salas de Chat</h3>
          <div className="room-list">
            <div className="room-item active">
              <span className="room-name">🏛️ Política Nacional</span>
              <span className="room-count">45 usuarios</span>
            </div>
            <div className="room-item">
              <span className="room-name">🏙️ Gobierno Local</span>
              <span className="room-count">23 usuarios</span>
            </div>
            <div className="room-item">
              <span className="room-name">🌱 Medio Ambiente</span>
              <span className="room-count">31 usuarios</span>
            </div>
            <div className="room-item">
              <span className="room-name">📚 Educación</span>
              <span className="room-count">18 usuarios</span>
            </div>
            <div className="room-item">
              <span className="room-name">🏥 Salud Pública</span>
              <span className="room-count">27 usuarios</span>
            </div>
          </div>
        </div>
        
        <div className="chat-main">
          <div className="chat-messages">
            <div className="message">
              <span className="message-user">María_Bogotá</span>
              <span className="message-time">14:30</span>
              <p className="message-text">¿Qué opinan sobre la nueva propuesta de transporte público?</p>
            </div>
            <div className="message">
              <span className="message-user">Carlos_Medellín</span>
              <span className="message-time">14:32</span>
              <p className="message-text">Creo que es un paso importante para mejorar la movilidad en las ciudades.</p>
            </div>
            <div className="message">
              <span className="message-user">Ana_Cali</span>
              <span className="message-time">14:35</span>
              <p className="message-text">Necesitamos más detalles sobre el presupuesto y la implementación.</p>
            </div>
          </div>
          
          <div className="chat-input">
            <input type="text" placeholder="Escribe tu mensaje..." className="message-input" />
            <button className="send-button">Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;