import React, { useState } from "react";

function formatTimestamp(date) {
  return new Date(date).toLocaleTimeString('es-CO', { 
    hour: '2-digit', 
    minute: '2-digit',
    timeZone: 'America/Bogota'
  });
}

export default function EnhancedChat({ user }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "Sistema",
      text: "¡Bienvenido al chat comunitario de Nuestro Pulso! 🇨🇴",
      timestamp: new Date(),
      isSystem: true
    }
  ]);
  const [msg, setMsg] = useState("");

  function handleSend(e) {
    e.preventDefault();
    if (!msg.trim()) return;
    
    const newMessage = {
      id: Date.now(),
      user: user.username,
      text: msg,
      timestamp: new Date(),
      isSystem: false
    };
    
    setMessages([...messages, newMessage]);
    setMsg("");
  }

  return (
    <div className="colombian-container">
      <div className="glass-card animate-fade-in-up">
        <div className="civic-header">
          <h2 style={{ fontSize: "28px", marginBottom: "8px" }}>💬 Chat Comunitario</h2>
          <p style={{ color: "#666", margin: "0" }}>
            Conectando voces colombianas para el diálogo democrático
          </p>
        </div>
        
        <div style={{ 
          height: "400px", 
          overflowY: "auto", 
          padding: "16px",
          background: "rgba(255, 255, 255, 0.5)",
          borderRadius: "12px",
          marginBottom: "20px",
          border: "1px solid rgba(212, 175, 55, 0.2)"
        }}>
          {messages.map((m) => (
            <div 
              key={m.id} 
              style={{ 
                marginBottom: "12px",
                padding: "12px",
                borderRadius: "8px",
                background: m.isSystem 
                  ? "rgba(0, 56, 168, 0.1)" 
                  : "rgba(255, 255, 255, 0.8)",
                border: m.isSystem 
                  ? "1px solid rgba(0, 56, 168, 0.3)"
                  : "1px solid rgba(212, 175, 55, 0.3)"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                <span style={{ 
                  fontWeight: "600", 
                  color: m.isSystem ? "#0038A8" : "#d4af37",
                  fontSize: "14px"
                }}>
                  {m.user}
                </span>
                <span className="timestamp">
                  {formatTimestamp(m.timestamp)}
                </span>
              </div>
              <div style={{ color: "#333", lineHeight: "1.4" }}>
                {m.text}
              </div>
            </div>
          ))}
        </div>
        
        <form onSubmit={handleSend} style={{ display: "flex", gap: "12px" }}>
          <input 
            className="colombian-input"
            style={{ flex: 1, margin: 0 }}
            value={msg} 
            onChange={e => setMsg(e.target.value)} 
            placeholder="Escribe tu mensaje aquí..." 
            maxLength={500}
          />
          <button 
            type="submit"
            className="btn-colombian-primary"
            style={{ minWidth: "120px" }}
          >
            Enviar 📤
          </button>
        </form>
        
        <div style={{ marginTop: "12px", fontSize: "12px", color: "#666", textAlign: "center" }}>
          💡 Recuerda mantener un diálogo respetuoso y constructivo
        </div>
      </div>
    </div>
  );
}