import React, { useState } from "react";

// Mock news data - in a real application, this would come from APIs
const NEWS_SOURCES = {
  colombia: [
    {
      id: 1,
      title: "Gobierno anuncia nueva política de participación ciudadana digital",
      summary: "Iniciativa busca aumentar la participación democrática a través de plataformas tecnológicas.",
      source: "El Tiempo",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      category: "Política",
      flag: "🇨🇴"
    },
    {
      id: 2,
      title: "Avances en implementación del Acuerdo de Paz en territorios rurales",
      summary: "Reporte muestra progreso en programas de sustitución de cultivos ilícitos y desarrollo rural.",
      source: "Semana",
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
      category: "Paz",
      flag: "🇨🇴"
    },
    {
      id: 3,
      title: "Congreso debate reforma al sistema electoral colombiano",
      summary: "Propuesta incluye cambios en financiación de campañas y voto electrónico.",
      source: "El Espectador",
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
      category: "Democracia",
      flag: "🇨🇴"
    }
  ],
  australia: [
    {
      id: 4,
      title: "Australian Parliament passes new digital rights legislation",
      summary: "Landmark bill strengthens privacy protections and digital democracy initiatives.",
      source: "ABC News Australia",
      timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
      category: "Digital Rights",
      flag: "🇦🇺"
    },
    {
      id: 5,
      title: "Indigenous representation in government reaches historic high",
      summary: "New appointments mark significant milestone in reconciliation efforts.",
      source: "The Guardian Australia",
      timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000),
      category: "Representation",
      flag: "🇦🇺"
    }
  ],
  usa: [
    {
      id: 6,
      title: "Congress introduces bipartisan civic engagement initiative",
      summary: "New program aims to increase youth participation in democratic processes.",
      source: "Associated Press",
      timestamp: new Date(Date.now() - 10 * 60 * 60 * 1000),
      category: "Civic Engagement",
      flag: "🇺🇸"
    },
    {
      id: 7,
      title: "State governments expand digital voting infrastructure",
      summary: "Investment in secure online voting systems for local elections.",
      source: "Reuters",
      timestamp: new Date(Date.now() - 14 * 60 * 60 * 1000),
      category: "Election Technology",
      flag: "🇺🇸"
    }
  ]
};

function NewsCard({ article, onReadMore }) {
  function getTimeAgo(timestamp) {
    const now = new Date();
    const diffInHours = Math.floor((now - timestamp) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return "Hace menos de 1 hora";
    if (diffInHours < 24) return `Hace ${diffInHours} hora${diffInHours > 1 ? 's' : ''}`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    return `Hace ${diffInDays} día${diffInDays > 1 ? 's' : ''}`;
  }

  return (
    <div className="glass-card" style={{ marginBottom: "16px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "12px" }}>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <span style={{ fontSize: "20px" }}>{article.flag}</span>
          <span style={{ 
            padding: "4px 8px", 
            background: "#0038A8", 
            color: "white", 
            borderRadius: "12px", 
            fontSize: "12px",
            fontWeight: "600"
          }}>
            {article.category}
          </span>
        </div>
        <span className="timestamp">
          {getTimeAgo(article.timestamp)}
        </span>
      </div>
      
      <h3 style={{ 
        color: "#0038A8", 
        margin: "0 0 8px 0", 
        fontSize: "18px", 
        fontWeight: "600",
        lineHeight: "1.3"
      }}>
        {article.title}
      </h3>
      
      <p style={{ 
        color: "#666", 
        margin: "0 0 12px 0", 
        lineHeight: "1.5" 
      }}>
        {article.summary}
      </p>
      
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "14px", color: "#d4af37", fontWeight: "500" }}>
          📰 {article.source}
        </span>
        <button 
          className="btn-colombian-secondary"
          onClick={() => onReadMore(article)}
          style={{ padding: "6px 16px", fontSize: "14px" }}
        >
          Leer más →
        </button>
      </div>
    </div>
  );
}

function NewsDetail({ article, onBack }) {
  const expandedContent = {
    1: "El Ministerio de Tecnologías de la Información y las Comunicaciones presentó una nueva plataforma que permitirá a los ciudadanos participar de manera más activa en las decisiones gubernamentales. La iniciativa incluye consultas populares digitales, seguimiento en tiempo real de proyectos públicos y canales directos de comunicación con funcionarios. La plataforma utilizará tecnología blockchain para garantizar la transparencia y seguridad de los procesos democráticos digitales.",
    2: "Según el último informe de la Agencia para la Renovación del Territorio, los programas de sustitución voluntaria de cultivos ilícitos han mostrado resultados positivos en 15 municipios de Colombia. El informe destaca la participación de más de 30,000 familias campesinas en programas de desarrollo alternativo, con un incremento del 40% en cultivos lícitos como cacao, café y frutas tropicales. Además, se han construido 120 kilómetros de vías terciarias para mejorar la conectividad rural.",
    3: "La Comisión Primera del Senado inició debates sobre una propuesta de reforma electoral que incluye cambios significativos en el financiamiento de campañas políticas. La iniciativa propone límites más estrictos a las donaciones privadas, mayor transparencia en el origen de los recursos y la implementación gradual del voto electrónico en elecciones locales. Los ponentes esperan que la reforma fortalezca la confianza ciudadana en el sistema democrático."
  };

  return (
    <div className="colombian-container">
      <div className="glass-card animate-fade-in-up">
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
          <button 
            onClick={onBack}
            style={{ 
              background: "transparent", 
              border: "1px solid #d4af37", 
              color: "#d4af37", 
              padding: "8px 12px", 
              borderRadius: "6px" 
            }}
          >
            ← Volver
          </button>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <span style={{ fontSize: "24px" }}>{article.flag}</span>
            <span style={{ 
              padding: "6px 12px", 
              background: "#0038A8", 
              color: "white", 
              borderRadius: "16px", 
              fontSize: "14px",
              fontWeight: "600"
            }}>
              {article.category}
            </span>
          </div>
        </div>

        <h1 style={{ 
          color: "#0038A8", 
          margin: "0 0 16px 0", 
          fontSize: "28px", 
          fontWeight: "700",
          lineHeight: "1.2"
        }}>
          {article.title}
        </h1>

        <div style={{ 
          display: "flex", 
          gap: "16px", 
          alignItems: "center", 
          marginBottom: "24px",
          padding: "12px 0",
          borderBottom: "1px solid rgba(212, 175, 55, 0.3)"
        }}>
          <span style={{ color: "#d4af37", fontWeight: "600" }}>
            📰 {article.source}
          </span>
          <span className="timestamp">
            {article.timestamp.toLocaleDateString('es-CO', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </span>
        </div>

        <div style={{ 
          fontSize: "18px", 
          lineHeight: "1.7", 
          color: "#333",
          marginBottom: "24px"
        }}>
          <p style={{ margin: "0 0 16px 0", fontWeight: "500" }}>
            {article.summary}
          </p>
          <p style={{ margin: 0 }}>
            {expandedContent[article.id] || "Contenido completo del artículo estaría disponible aquí con integración a APIs de noticias reales."}
          </p>
        </div>

        <div className="glass-card" style={{ background: "rgba(0, 56, 168, 0.1)" }}>
          <h4 style={{ color: "#0038A8", margin: "0 0 12px 0" }}>
            💬 ¿Qué opinas sobre esta noticia?
          </h4>
          <p style={{ margin: "0 0 16px 0", color: "#666" }}>
            Comparte tu perspectiva en nuestro chat comunitario o participa en debates relacionados.
          </p>
          <div style={{ display: "flex", gap: "12px" }}>
            <button className="btn-colombian-primary">
              💬 Ir al Chat
            </button>
            <button className="btn-colombian-secondary">
              🗣️ Ver Debates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NewsComponent({ user }) {
  const [selectedCountry, setSelectedCountry] = useState("colombia");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const countries = [
    { id: "colombia", name: "Colombia", flag: "🇨🇴" },
    { id: "australia", name: "Australia", flag: "🇦🇺" },
    { id: "usa", name: "Estados Unidos", flag: "🇺🇸" }
  ];

  function handleReadMore(article) {
    setSelectedArticle(article);
  }

  function handleBackToNews() {
    setSelectedArticle(null);
  }

  if (selectedArticle) {
    return <NewsDetail article={selectedArticle} onBack={handleBackToNews} />;
  }

  return (
    <div className="colombian-container">
      <div className="colombian-hero animate-fade-in-up">
        <div className="left">
          <h1>📰 Centro de Noticias Democráticas</h1>
          <p>
            Mantente informado sobre desarrollos políticos y cívicos en Colombia, 
            Australia y Estados Unidos. Noticias que importan para la democracia.
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

      <div style={{ margin: "32px 0 24px 0" }}>
        <h2 className="civic-header" style={{ fontSize: "24px", marginBottom: "16px" }}>
          🌍 Selecciona País
        </h2>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {countries.map(country => (
            <button
              key={country.id}
              onClick={() => setSelectedCountry(country.id)}
              style={{
                padding: "12px 20px",
                borderRadius: "8px",
                border: selectedCountry === country.id ? "2px solid #d4af37" : "1px solid #ddd",
                background: selectedCountry === country.id ? "rgba(212, 175, 55, 0.1)" : "#fff",
                color: selectedCountry === country.id ? "#0038A8" : "#666",
                fontWeight: selectedCountry === country.id ? "600" : "normal",
                cursor: "pointer",
                transition: "all 0.2s ease",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <span style={{ fontSize: "18px" }}>{country.flag}</span>
              {country.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="civic-header" style={{ fontSize: "20px", marginBottom: "20px" }}>
          📋 Últimas Noticias - {countries.find(c => c.id === selectedCountry)?.name}
        </h3>
        
        {NEWS_SOURCES[selectedCountry]?.length > 0 ? (
          NEWS_SOURCES[selectedCountry].map(article => (
            <NewsCard 
              key={article.id}
              article={article}
              onReadMore={handleReadMore}
            />
          ))
        ) : (
          <div className="glass-card" style={{ textAlign: "center" }}>
            <p style={{ color: "#666", margin: 0 }}>
              No hay noticias disponibles para este país en este momento.
            </p>
          </div>
        )}
      </div>

      <div className="glass-card" style={{ marginTop: "32px" }}>
        <h3 style={{ color: "#0038A8", marginBottom: "12px", textAlign: "center" }}>
          🔗 Fuentes de Noticias Confiables
        </h3>
        <p style={{ marginBottom: "16px", color: "#666", textAlign: "center" }}>
          Nuestras noticias provienen de fuentes periodísticas reconocidas y verificadas.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
          <div style={{ textAlign: "center" }}>
            <h4 style={{ color: "#0038A8", fontSize: "16px", margin: "0 0 8px 0" }}>🇨🇴 Colombia</h4>
            <p style={{ fontSize: "14px", color: "#666", margin: 0 }}>
              El Tiempo, Semana, El Espectador
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <h4 style={{ color: "#0038A8", fontSize: "16px", margin: "0 0 8px 0" }}>🇦🇺 Australia</h4>
            <p style={{ fontSize: "14px", color: "#666", margin: 0 }}>
              ABC News, The Guardian Australia
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <h4 style={{ color: "#0038A8", fontSize: "16px", margin: "0 0 8px 0" }}>🇺🇸 Estados Unidos</h4>
            <p style={{ fontSize: "14px", color: "#666", margin: 0 }}>
              Associated Press, Reuters
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}