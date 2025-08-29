import React from "react";
import { Link } from "react-router-dom";

export default function EnhancedHome() {
  const features = [
    {
      icon: "💬",
      title: "Chat Comunitario",
      description: "Conecta con otros ciudadanos en conversaciones constructivas",
      link: "/chat",
      color: "#22c55e"
    },
    {
      icon: "🗣️",
      title: "Debates Cívicos",
      description: "Participa en debates sobre temas importantes para Colombia",
      link: "/debate",
      color: "#0038A8"
    },
    {
      icon: "📊",
      title: "Encuestas Democráticas",
      description: "Tu opinión cuenta en las decisiones de la comunidad",
      link: "/survey",
      color: "#d4af37"
    },
    {
      icon: "📰",
      title: "Centro de Noticias",
      description: "Mantente informado sobre política nacional e internacional",
      link: "/news",
      color: "#CE1126"
    }
  ];

  const stats = [
    { number: "2,847", label: "Ciudadanos Activos", icon: "👥" },
    { number: "156", label: "Debates Realizados", icon: "🗣️" },
    { number: "89", label: "Encuestas Completadas", icon: "📊" },
    { number: "1,293", label: "Mensajes de Chat", icon: "💬" }
  ];

  return (
    <div className="colombian-container">
      {/* Hero Section */}
      <div className="colombian-hero animate-fade-in-up">
        <div className="left">
          <h1 style={{ fontSize: "3rem", marginBottom: "16px" }}>
            🇨🇴 Nuestro Pulso
          </h1>
          <p style={{ fontSize: "20px", marginBottom: "24px", lineHeight: "1.6" }}>
            Plataforma digital para el engagement cívico colombiano. 
            Conectamos voces, facilitamos diálogos y fortalecemos nuestra democracia.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link 
              to="/chat"
              className="btn-colombian-primary"
              style={{ 
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "18px",
                padding: "16px 32px"
              }}
            >
              💬 Unirse al Chat
            </Link>
            <Link 
              to="/debate"
              className="btn-colombian-secondary"
              style={{ 
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "18px",
                padding: "16px 32px"
              }}
            >
              🗣️ Ver Debates
            </Link>
          </div>
        </div>
        <div className="right">
          <img 
            src="/images/colombian-flag.svg" 
            alt="Bandera de Colombia" 
            style={{ 
              width: "200px", 
              borderRadius: "12px",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
            }} 
          />
        </div>
      </div>

      {/* Stats Section */}
      <div style={{ margin: "48px 0" }}>
        <h2 className="civic-header" style={{ fontSize: "28px", marginBottom: "32px" }}>
          📈 Impacto de la Comunidad
        </h2>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
          gap: "24px" 
        }}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass-card"
              style={{ textAlign: "center", padding: "32px 24px" }}
            >
              <div style={{ fontSize: "48px", marginBottom: "12px" }}>
                {stat.icon}
              </div>
              <div style={{ 
                fontSize: "32px", 
                fontWeight: "700", 
                color: "#0038A8",
                marginBottom: "8px"
              }}>
                {stat.number}
              </div>
              <div style={{ color: "#666", fontWeight: "500" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div style={{ margin: "48px 0" }}>
        <h2 className="civic-header" style={{ fontSize: "28px", marginBottom: "32px" }}>
          🚀 Herramientas Democráticas
        </h2>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "24px" 
        }}>
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              style={{ textDecoration: "none" }}
            >
              <div 
                className="glass-card"
                style={{ 
                  height: "100%",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  border: `2px solid ${feature.color}20`
                }}
                onMouseEnter={e => {
                  e.target.style.transform = "translateY(-4px)";
                  e.target.style.boxShadow = `0 12px 40px ${feature.color}30`;
                }}
                onMouseLeave={e => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.1)";
                }}
              >
                <div style={{ 
                  fontSize: "48px", 
                  marginBottom: "16px",
                  textAlign: "center"
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ 
                  color: feature.color, 
                  fontSize: "22px", 
                  fontWeight: "600",
                  marginBottom: "12px",
                  textAlign: "center"
                }}>
                  {feature.title}
                </h3>
                <p style={{ 
                  color: "#666", 
                  lineHeight: "1.6",
                  textAlign: "center",
                  margin: 0
                }}>
                  {feature.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="glass-card-dark" style={{ margin: "48px 0", textAlign: "center" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px", color: "white" }}>
          🎯 Nuestra Misión
        </h2>
        <p style={{ 
          fontSize: "18px", 
          lineHeight: "1.7", 
          marginBottom: "24px",
          opacity: 0.9,
          maxWidth: "800px",
          margin: "0 auto 24px auto"
        }}>
          Fortalecer la democracia colombiana a través de la tecnología, creando espacios 
          digitales seguros para el diálogo ciudadano, la participación cívica y la 
          construcción colectiva de soluciones a los desafíos nacionales.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn-colombian-primary">
            🤝 Únete a la Comunidad
          </button>
          <button 
            style={{ 
              background: "transparent", 
              border: "2px solid white", 
              color: "white",
              padding: "12px 24px",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: "pointer"
            }}
          >
            📖 Conocer Más
          </button>
        </div>
      </div>

      {/* Values Section */}
      <div style={{ margin: "48px 0" }}>
        <h2 className="civic-header" style={{ fontSize: "28px", marginBottom: "32px" }}>
          💫 Nuestros Valores
        </h2>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
          gap: "24px" 
        }}>
          <div className="glass-card" style={{ textAlign: "center" }}>
            <div style={{ fontSize: "40px", marginBottom: "16px" }}>🤝</div>
            <h3 style={{ color: "#0038A8", marginBottom: "12px" }}>Respeto</h3>
            <p style={{ color: "#666", margin: 0 }}>
              Valoramos todas las voces y perspectivas en el diálogo democrático.
            </p>
          </div>
          <div className="glass-card" style={{ textAlign: "center" }}>
            <div style={{ fontSize: "40px", marginBottom: "16px" }}>🔍</div>
            <h3 style={{ color: "#0038A8", marginBottom: "12px" }}>Transparencia</h3>
            <p style={{ color: "#666", margin: 0 }}>
              Operamos con total apertura y claridad en todos nuestros procesos.
            </p>
          </div>
          <div className="glass-card" style={{ textAlign: "center" }}>
            <div style={{ fontSize: "40px", marginBottom: "16px" }}>⚖️</div>
            <h3 style={{ color: "#0038A8", marginBottom: "12px" }}>Inclusión</h3>
            <p style={{ color: "#666", margin: 0 }}>
              Creamos espacios accesibles para todos los ciudadanos colombianos.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="glass-card" style={{ 
        textAlign: "center", 
        margin: "48px 0",
        background: "linear-gradient(135deg, rgba(255, 209, 0, 0.1), rgba(0, 56, 168, 0.1))"
      }}>
        <h2 style={{ color: "#0038A8", marginBottom: "16px", fontSize: "24px" }}>
          🚀 ¿Listo para participar?
        </h2>
        <p style={{ color: "#666", marginBottom: "24px", fontSize: "16px" }}>
          La democracia se fortalece con tu participación. Cada voz importa, cada opinión cuenta.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/chat" className="btn-colombian-primary" style={{ textDecoration: "none" }}>
            💬 Comenzar a Participar
          </Link>
          <Link to="/survey" className="btn-colombian-secondary" style={{ textDecoration: "none" }}>
            📊 Ver Encuestas
          </Link>
        </div>
      </div>
    </div>
  );
}