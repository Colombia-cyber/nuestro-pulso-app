import React, { useState } from "react";

const ACTIVE_SURVEYS = [
  {
    id: 1,
    title: "Prioridades de Gobierno Local",
    description: "¿Cuál debería ser la principal prioridad de la administración municipal?",
    options: [
      { id: 1, text: "Mejora de la infraestructura vial", votes: 145 },
      { id: 2, text: "Fortalecimiento de la seguridad ciudadana", votes: 198 },
      { id: 3, text: "Ampliación de programas educativos", votes: 167 },
      { id: 4, text: "Desarrollo de espacios públicos", votes: 89 }
    ],
    totalVotes: 599,
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    isActive: true
  },
  {
    id: 2,
    title: "Participación Ciudadana Digital",
    description: "¿Qué herramientas digitales consideras más importantes para la participación cívica?",
    options: [
      { id: 1, text: "Plataformas de consulta popular", votes: 78 },
      { id: 2, text: "Sistemas de seguimiento a proyectos", votes: 92 },
      { id: 3, text: "Canales de comunicación directa", votes: 65 },
      { id: 4, text: "Aplicaciones de denuncia ciudadana", votes: 101 }
    ],
    totalVotes: 336,
    endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
    isActive: true
  }
];

function SurveyCard({ survey, onVote, hasVoted }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResults, setShowResults] = useState(hasVoted);

  function handleVote() {
    if (selectedOption !== null && !hasVoted) {
      onVote(survey.id, selectedOption);
      setShowResults(true);
    }
  }

  function getPercentage(votes) {
    return survey.totalVotes > 0 ? ((votes / survey.totalVotes) * 100).toFixed(1) : 0;
  }

  const timeLeft = Math.ceil((survey.endDate - new Date()) / (1000 * 60 * 60 * 24));

  return (
    <div className="glass-card animate-fade-in-up">
      <div style={{ marginBottom: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "8px" }}>
          <h3 style={{ color: "#0038A8", margin: 0, fontSize: "20px", fontWeight: "600" }}>
            📊 {survey.title}
          </h3>
          <span style={{ 
            padding: "4px 12px", 
            borderRadius: "20px", 
            fontSize: "12px",
            fontWeight: "600",
            background: survey.isActive ? '#22c55e' : '#6b7280',
            color: 'white'
          }}>
            {survey.isActive ? `${timeLeft} días restantes` : 'Finalizada'}
          </span>
        </div>
        <p style={{ color: "#666", margin: 0, lineHeight: "1.5" }}>
          {survey.description}
        </p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        {survey.options.map((option, index) => (
          <div 
            key={option.id}
            style={{ 
              marginBottom: "12px",
              position: "relative"
            }}
          >
            {showResults ? (
              <div style={{ 
                padding: "12px",
                background: "rgba(255, 255, 255, 0.6)",
                borderRadius: "8px",
                border: "1px solid rgba(212, 175, 55, 0.3)",
                position: "relative",
                overflow: "hidden"
              }}>
                <div 
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: `${getPercentage(option.votes)}%`,
                    background: "linear-gradient(90deg, rgba(212, 175, 55, 0.3), rgba(212, 175, 55, 0.1))",
                    transition: "width 0.8s ease"
                  }}
                />
                <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontWeight: "500" }}>{option.text}</span>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <span style={{ fontSize: "14px", color: "#d4af37", fontWeight: "600" }}>
                      {getPercentage(option.votes)}%
                    </span>
                    <span style={{ fontSize: "12px", color: "#666" }}>
                      ({option.votes} votos)
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <label style={{ 
                display: "block",
                padding: "12px",
                background: selectedOption === index ? "rgba(212, 175, 55, 0.1)" : "rgba(255, 255, 255, 0.6)",
                borderRadius: "8px",
                border: selectedOption === index ? "2px solid #d4af37" : "1px solid rgba(212, 175, 55, 0.3)",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}>
                <input
                  type="radio"
                  name={`survey-${survey.id}`}
                  value={index}
                  checked={selectedOption === index}
                  onChange={() => setSelectedOption(index)}
                  style={{ marginRight: "12px" }}
                />
                {option.text}
              </label>
            )}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: "14px", color: "#666" }}>
          Total de votos: <strong>{survey.totalVotes}</strong>
        </div>
        {!showResults && !hasVoted && (
          <button 
            className="btn-colombian-primary"
            onClick={handleVote}
            disabled={selectedOption === null}
            style={{ opacity: selectedOption === null ? 0.5 : 1 }}
          >
            Votar 🗳️
          </button>
        )}
        {showResults && (
          <button 
            className="btn-colombian-secondary"
            onClick={() => setShowResults(!showResults)}
          >
            {showResults ? "Ver Opciones" : "Ver Resultados"}
          </button>
        )}
      </div>
    </div>
  );
}

function CreateSurveyForm({ onCreateSurvey, onCancel }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [options, setOptions] = useState(["", ""]);

  function addOption() {
    if (options.length < 6) {
      setOptions([...options, ""]);
    }
  }

  function removeOption(index) {
    if (options.length > 2) {
      setOptions(options.filter((_, i) => i !== index));
    }
  }

  function updateOption(index, value) {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validOptions = options.filter(opt => opt.trim().length > 0);
    
    if (title.trim().length > 0 && description.trim().length > 0 && validOptions.length >= 2) {
      onCreateSurvey({
        title: title.trim(),
        description: description.trim(),
        options: validOptions.map((opt, index) => ({
          id: index + 1,
          text: opt.trim(),
          votes: 0
        }))
      });
    }
  }

  return (
    <div className="glass-card">
      <h3 className="civic-header" style={{ fontSize: "20px" }}>
        ➕ Crear Nueva Encuesta
      </h3>
      
      <form onSubmit={handleSubmit}>
        <input
          className="colombian-input"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Título de la encuesta"
          maxLength={100}
          required
        />
        
        <textarea
          className="colombian-input"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Descripción de la encuesta"
          rows={3}
          maxLength={300}
          required
          style={{ resize: "vertical" }}
        />
        
        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#0038A8" }}>
            Opciones de respuesta:
          </label>
          {options.map((option, index) => (
            <div key={index} style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
              <input
                className="colombian-input"
                value={option}
                onChange={e => updateOption(index, e.target.value)}
                placeholder={`Opción ${index + 1}`}
                style={{ flex: 1, margin: 0 }}
                maxLength={80}
              />
              {options.length > 2 && (
                <button
                  type="button"
                  onClick={() => removeOption(index)}
                  style={{ 
                    background: "#dc2626", 
                    color: "white", 
                    border: "none", 
                    padding: "8px 12px", 
                    borderRadius: "6px" 
                  }}
                >
                  ✕
                </button>
              )}
            </div>
          ))}
          {options.length < 6 && (
            <button
              type="button"
              onClick={addOption}
              style={{ 
                background: "transparent", 
                border: "2px dashed #d4af37", 
                color: "#d4af37",
                padding: "8px 16px", 
                borderRadius: "6px",
                width: "100%"
              }}
            >
              ➕ Agregar Opción
            </button>
          )}
        </div>
        
        <div style={{ display: "flex", gap: "12px" }}>
          <button type="submit" className="btn-colombian-primary" style={{ flex: 1 }}>
            Crear Encuesta
          </button>
          <button 
            type="button" 
            onClick={onCancel}
            style={{ 
              background: "#6b7280", 
              color: "white", 
              border: "none", 
              padding: "12px 24px", 
              borderRadius: "8px" 
            }}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default function EnhancedSurvey({ user }) {
  const [surveys, setSurveys] = useState(ACTIVE_SURVEYS);
  const [votedSurveys, setVotedSurveys] = useState(new Set());
  const [showCreateForm, setShowCreateForm] = useState(false);

  function handleVote(surveyId, optionIndex) {
    setSurveys(surveys.map(survey => {
      if (survey.id === surveyId) {
        const updatedOptions = [...survey.options];
        updatedOptions[optionIndex].votes += 1;
        return {
          ...survey,
          options: updatedOptions,
          totalVotes: survey.totalVotes + 1
        };
      }
      return survey;
    }));
    
    setVotedSurveys(new Set([...votedSurveys, surveyId]));
  }

  function handleCreateSurvey(surveyData) {
    const newSurvey = {
      id: surveys.length + 1,
      ...surveyData,
      totalVotes: 0,
      endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      isActive: true
    };
    
    setSurveys([newSurvey, ...surveys]);
    setShowCreateForm(false);
  }

  return (
    <div className="colombian-container">
      <div className="colombian-hero animate-fade-in-up">
        <div className="left">
          <h1>📊 Sistema de Encuestas Democráticas</h1>
          <p>
            Participa en encuestas que reflejan la opinión ciudadana sobre temas importantes. 
            Tu voto cuenta para construir decisiones más democráticas.
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

      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        margin: "32px 0 20px 0" 
      }}>
        <h2 className="civic-header" style={{ fontSize: "24px", margin: 0 }}>
          🗳️ Encuestas Activas
        </h2>
        {user && (
          <button 
            className="btn-colombian-secondary"
            onClick={() => setShowCreateForm(!showCreateForm)}
          >
            {showCreateForm ? "Cancelar" : "➕ Nueva Encuesta"}
          </button>
        )}
      </div>

      {showCreateForm && (
        <CreateSurveyForm 
          onCreateSurvey={handleCreateSurvey}
          onCancel={() => setShowCreateForm(false)}
        />
      )}

      {surveys.map(survey => (
        <SurveyCard 
          key={survey.id}
          survey={survey}
          onVote={handleVote}
          hasVoted={votedSurveys.has(survey.id)}
        />
      ))}

      <div className="glass-card" style={{ textAlign: "center", marginTop: "32px" }}>
        <h3 style={{ color: "#0038A8", marginBottom: "12px" }}>
          🔍 Análisis y Transparencia
        </h3>
        <p style={{ marginBottom: "16px", color: "#666" }}>
          Todos los resultados son públicos y transparentes. Los datos ayudan a informar 
          decisiones políticas y sociales en nuestra comunidad.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn-colombian-secondary">
            📈 Ver Estadísticas
          </button>
          <button className="btn-colombian-primary">
            📋 Historial de Encuestas
          </button>
        </div>
      </div>
    </div>
  );
}