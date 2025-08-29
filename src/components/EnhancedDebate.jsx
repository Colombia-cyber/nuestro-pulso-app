import React, { useState } from "react";

const DEBATE_TOPICS = [
  {
    id: 1,
    title: "Reforma Política en Colombia",
    description: "¿Qué cambios necesita el sistema político colombiano para fortalecer la democracia?",
    status: "active"
  },
  {
    id: 2,
    title: "Implementación del Acuerdo de Paz",
    description: "Evaluación y propuestas para mejorar la implementación del Acuerdo de Paz.",
    status: "pending"
  },
  {
    id: 3,
    title: "Políticas de Seguridad Ciudadana",
    description: "Estrategias efectivas para combatir la criminalidad en las ciudades colombianas.",
    status: "completed"
  }
];

const DEBATE_HOST = { 
  name: "Moderador Cívico", 
  id: "moderador-civico",
  description: "Facilitador de debates democráticos"
};

function DebateTopic({ topic, onJoin, isActive }) {
  return (
    <div className={`glass-card ${isActive ? 'pulse-gold' : ''}`} 
         style={{ border: isActive ? '2px solid #d4af37' : '1px solid rgba(255,255,255,0.2)' }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "12px" }}>
        <h3 style={{ color: "#0038A8", margin: 0, fontSize: "20px", fontWeight: "600" }}>
          {topic.title}
        </h3>
        <span style={{ 
          padding: "4px 12px", 
          borderRadius: "20px", 
          fontSize: "12px",
          fontWeight: "600",
          background: topic.status === 'active' ? '#22c55e' : 
                     topic.status === 'pending' ? '#f59e0b' : '#6b7280',
          color: 'white'
        }}>
          {topic.status === 'active' ? 'En Vivo' : 
           topic.status === 'pending' ? 'Próximo' : 'Finalizado'}
        </span>
      </div>
      <p style={{ color: "#666", marginBottom: "16px", lineHeight: "1.5" }}>
        {topic.description}
      </p>
      <button 
        className={topic.status === 'active' ? 'btn-colombian-primary' : 'btn-colombian-secondary'}
        onClick={() => onJoin(topic)}
        disabled={topic.status === 'completed'}
        style={{ opacity: topic.status === 'completed' ? 0.5 : 1 }}
      >
        {topic.status === 'active' ? '🎙️ Unirse al Debate' : 
         topic.status === 'pending' ? '📅 Programado' : '✅ Finalizado'}
      </button>
    </div>
  );
}

function ActiveDebate({ topic, user, host, onBack }) {
  const [comments, setComments] = useState([
    {
      id: 1,
      user: "Ciudadano_Bogotá",
      text: "Es fundamental que la reforma incluya mayor transparencia en el financiamiento de campañas.",
      timestamp: new Date(Date.now() - 300000),
      likes: 12
    },
    {
      id: 2,
      user: "Activista_Medellín",
      text: "Necesitamos más participación ciudadana en las decisiones políticas locales.",
      timestamp: new Date(Date.now() - 120000),
      likes: 8
    }
  ]);
  const [newComment, setNewComment] = useState("");

  function handleAddComment(e) {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      user: user.username,
      text: newComment,
      timestamp: new Date(),
      likes: 0
    };

    setComments([...comments, comment]);
    setNewComment("");
  }

  function handleLike(commentId) {
    setComments(comments.map(comment => 
      comment.id === commentId 
        ? { ...comment, likes: comment.likes + 1 }
        : comment
    ));
  }

  return (
    <div className="colombian-container">
      <div className="glass-card-dark animate-fade-in-up">
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <button 
            onClick={onBack}
            style={{ 
              background: "transparent", 
              border: "1px solid white", 
              color: "white", 
              padding: "8px 12px", 
              borderRadius: "6px" 
            }}
          >
            ← Volver
          </button>
          <div>
            <h2 style={{ margin: 0, fontSize: "24px" }}>🗣️ {topic.title}</h2>
            <p style={{ margin: "4px 0 0 0", opacity: 0.8 }}>
              Moderado por {host.name} • En Vivo
            </p>
          </div>
        </div>
        
        <div style={{ 
          background: "rgba(255, 255, 255, 0.1)", 
          padding: "16px", 
          borderRadius: "8px",
          marginBottom: "20px"
        }}>
          <p style={{ margin: 0, lineHeight: "1.5" }}>
            {topic.description}
          </p>
        </div>
      </div>

      <div className="glass-card">
        <h3 className="civic-header" style={{ fontSize: "20px" }}>
          💭 Comentarios del Debate
        </h3>
        
        <div style={{ 
          maxHeight: "400px", 
          overflowY: "auto", 
          marginBottom: "20px"
        }}>
          {comments.map((comment) => (
            <div 
              key={comment.id}
              style={{ 
                padding: "16px",
                background: "rgba(255, 255, 255, 0.6)",
                borderRadius: "8px",
                marginBottom: "12px",
                border: "1px solid rgba(212, 175, 55, 0.3)"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ fontWeight: "600", color: "#0038A8" }}>
                  {comment.user}
                </span>
                <span className="timestamp">
                  {new Date(comment.timestamp).toLocaleTimeString('es-CO', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </span>
              </div>
              <p style={{ margin: "0 0 8px 0", lineHeight: "1.4" }}>
                {comment.text}
              </p>
              <button 
                onClick={() => handleLike(comment.id)}
                style={{ 
                  background: "transparent", 
                  border: "1px solid #d4af37", 
                  color: "#d4af37",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  fontSize: "12px",
                  cursor: "pointer"
                }}
              >
                👍 {comment.likes}
              </button>
            </div>
          ))}
        </div>

        <form onSubmit={handleAddComment} style={{ display: "flex", gap: "12px" }}>
          <input
            className="colombian-input"
            style={{ flex: 1, margin: 0 }}
            value={newComment}
            onChange={e => setNewComment(e.target.value)}
            placeholder="Comparte tu opinión sobre este tema..."
            maxLength={300}
          />
          <button type="submit" className="btn-colombian-primary">
            Comentar
          </button>
        </form>
      </div>
    </div>
  );
}

export default function EnhancedDebate({ user }) {
  const [activeDebate, setActiveDebate] = useState(null);

  function handleJoinDebate(topic) {
    if (topic.status === 'active') {
      setActiveDebate(topic);
    }
  }

  function handleBackToList() {
    setActiveDebate(null);
  }

  if (activeDebate) {
    return (
      <ActiveDebate 
        topic={activeDebate}
        user={user}
        host={DEBATE_HOST}
        onBack={handleBackToList}
      />
    );
  }

  return (
    <div className="colombian-container">
      <div className="colombian-hero animate-fade-in-up">
        <div className="left">
          <h1>🗣️ Plataforma de Debates Cívicos</h1>
          <p>
            Participa en debates constructivos sobre temas importantes para Colombia. 
            Tu voz cuenta en la construcción de nuestra democracia.
          </p>
        </div>
        <div className="right">
          <img 
            src="/images/colombian-flag.svg" 
            alt="Bandera Colombiana" 
            style={{ width: "160px", borderRadius: "8px" }} 
          />
        </div>
      </div>

      <div style={{ marginTop: "32px" }}>
        <h2 className="civic-header" style={{ fontSize: "24px" }}>
          📋 Debates Disponibles
        </h2>
        
        {DEBATE_TOPICS.map(topic => (
          <DebateTopic 
            key={topic.id}
            topic={topic}
            onJoin={handleJoinDebate}
            isActive={topic.status === 'active'}
          />
        ))}
      </div>

      <div className="glass-card" style={{ marginTop: "32px", textAlign: "center" }}>
        <h3 style={{ color: "#0038A8", marginBottom: "12px" }}>
          💡 ¿Tienes una propuesta de debate?
        </h3>
        <p style={{ marginBottom: "16px", color: "#666" }}>
          Sugiere temas relevantes para la comunidad colombiana
        </p>
        <button className="btn-colombian-secondary">
          Proponer Tema de Debate
        </button>
      </div>
    </div>
  );
}