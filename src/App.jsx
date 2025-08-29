import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./components/Background";
import Navigation from "./components/Navigation";
import EnhancedHome from "./components/EnhancedHome";
import EnhancedChat from "./components/EnhancedChat";
import EnhancedDebate from "./components/EnhancedDebate";
import EnhancedSurvey from "./components/EnhancedSurvey";
import NewsComponent from "./components/NewsComponent";

// --- Error Boundary ---
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    this.setState({ info });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="glass-card" style={{
          margin: "32px auto", 
          maxWidth: "600px", 
          textAlign: "center",
          border: "2px solid #dc2626"
        }}>
          <h2 style={{color:"#dc2626", marginBottom: "16px"}}>⚠️ Algo salió mal</h2>
          <p style={{marginBottom: "16px"}}>
            Por favor recarga la página o <a href="/" style={{color: "#0038A8"}}>vuelve al inicio</a>.
          </p>
          <details style={{color:"#666", fontSize: "14px", textAlign: "left"}}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.info && this.state.info.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

// --- Authentication Gate for protected features ---
function AuthGate({ onAuth, title = "Acceso a la Plataforma" }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleLogin(e) {
    e.preventDefault();
    setError('');
    
    if (username.length < 3) {
      setError("El nombre de usuario debe tener al menos 3 caracteres.");
      return;
    }
    if (password.length < 5) {
      setError("La contraseña debe tener al menos 5 caracteres.");
      return;
    }
    
    // Simple validation - in real app, this would be proper authentication
    onAuth({ 
      username,
      joinedAt: new Date(),
      role: username === "admin" ? "moderator" : "citizen"
    });
  }

  return (
    <Background>
      <div style={{
        minHeight: "100vh", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center",
        padding: "20px"
      }}>
        <div className="glass-card" style={{ width: "100%", maxWidth: "400px" }}>
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <img 
              src="/images/colombian-flag.svg" 
              alt="Bandera Colombiana" 
              style={{ width: "80px", borderRadius: "8px", marginBottom: "16px" }}
            />
            <h2 style={{ color: "#0038A8", marginBottom: "8px", fontSize: "24px" }}>
              🇨🇴 {title}
            </h2>
            <p style={{ color: "#666", margin: 0 }}>
              Únete a la conversación democrática
            </p>
          </div>
          
          <form onSubmit={handleLogin}>
            <input
              className="colombian-input"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Nombre de usuario"
              required
            />
            <input
              className="colombian-input"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Contraseña"
              required
            />
            {error && (
              <div style={{
                color: "#dc2626", 
                marginBottom: "16px",
                padding: "8px",
                background: "rgba(220, 38, 38, 0.1)",
                borderRadius: "4px",
                fontSize: "14px"
              }}>
                {error}
              </div>
            )}
            <button 
              type="submit"
              className="btn-colombian-primary"
              style={{ width: "100%" }}
            >
              🚀 Ingresar a la Plataforma
            </button>
          </form>
          
          <div style={{ 
            marginTop: "16px", 
            fontSize: "12px", 
            color: "#666", 
            textAlign: "center" 
          }}>
            💡 Usa cualquier usuario/contraseña de 5+ caracteres para acceder
          </div>
        </div>
      </div>
    </Background>
  );
}

// --- Admin Panel ---
function AdminPanel({ user }) {
  const [activeUsers] = useState([
    { username: "maria_bogota", status: "online", joinedAt: new Date(Date.now() - 1800000) },
    { username: "carlos_medellin", status: "away", joinedAt: new Date(Date.now() - 3600000) },
    { username: "ana_cali", status: "online", joinedAt: new Date(Date.now() - 900000) },
    { username: "luis_barranquilla", status: "offline", joinedAt: new Date(Date.now() - 7200000) }
  ]);

  const [moderationQueue] = useState([
    { id: 1, type: "debate_comment", content: "Propuesta para mejorar el transporte público", reporter: "ciudadano_activo" },
    { id: 2, type: "chat_message", content: "Mensaje reportado por contenido inapropiado", reporter: "moderador_comunidad" }
  ]);

  if (!user || user.role !== "moderator") {
    return (
      <div className="colombian-container">
        <div className="glass-card" style={{ textAlign: "center" }}>
          <h2 style={{ color: "#dc2626", marginBottom: "16px" }}>
            🚫 Acceso Restringido
          </h2>
          <p>Solo los moderadores pueden acceder al panel de administración.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="colombian-container">
      <div className="colombian-hero">
        <div className="left">
          <h1>👥 Panel de Administración</h1>
          <p>Herramientas de moderación para mantener una comunidad sana y constructiva.</p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
        <div className="glass-card">
          <h3 className="civic-header" style={{ fontSize: "18px" }}>
            👥 Usuarios Activos ({activeUsers.length})
          </h3>
          {activeUsers.map(user => (
            <div key={user.username} style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center",
              padding: "8px 0",
              borderBottom: "1px solid rgba(212, 175, 55, 0.2)"
            }}>
              <div>
                <div style={{ fontWeight: "500" }}>{user.username}</div>
                <div style={{ fontSize: "12px", color: "#666" }}>
                  Conectado hace {Math.floor((Date.now() - user.joinedAt) / 60000)}m
                </div>
              </div>
              <span style={{ 
                width: "8px", 
                height: "8px", 
                borderRadius: "50%",
                background: user.status === "online" ? "#22c55e" : 
                           user.status === "away" ? "#f59e0b" : "#6b7280"
              }} />
            </div>
          ))}
        </div>

        <div className="glass-card">
          <h3 className="civic-header" style={{ fontSize: "18px" }}>
            🚨 Cola de Moderación ({moderationQueue.length})
          </h3>
          {moderationQueue.map(item => (
            <div key={item.id} style={{ 
              padding: "12px",
              background: "rgba(255, 209, 0, 0.1)",
              borderRadius: "8px",
              marginBottom: "12px",
              border: "1px solid rgba(255, 209, 0, 0.3)"
            }}>
              <div style={{ fontSize: "12px", color: "#d4af37", marginBottom: "4px" }}>
                {item.type} • Reportado por {item.reporter}
              </div>
              <div style={{ fontSize: "14px", marginBottom: "8px" }}>
                {item.content}
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <button style={{ 
                  padding: "4px 12px", 
                  background: "#22c55e", 
                  color: "white", 
                  border: "none", 
                  borderRadius: "4px",
                  fontSize: "12px"
                }}>
                  ✓ Aprobar
                </button>
                <button style={{ 
                  padding: "4px 12px", 
                  background: "#dc2626", 
                  color: "white", 
                  border: "none", 
                  borderRadius: "4px",
                  fontSize: "12px"
                }}>
                  ✗ Rechazar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- Not Found Page ---
function NotFound() {
  return (
    <div className="colombian-container">
      <div className="glass-card" style={{ textAlign: "center", marginTop: "64px" }}>
        <h1 style={{ fontSize: "48px", margin: "0 0 16px 0" }}>🤔</h1>
        <h2 style={{ color: "#0038A8", marginBottom: "16px" }}>Página No Encontrada</h2>
        <p style={{ marginBottom: "24px", color: "#666" }}>
          La página que buscas no existe o ha sido movida.
        </p>
        <a 
          href="/" 
          className="btn-colombian-primary"
          style={{ textDecoration: "none" }}
        >
          🏠 Volver al Inicio
        </a>
      </div>
    </div>
  );
}

// --- Main App Component ---
function App() {
  const [user, setUser] = useState(null);

  return (
    <ErrorBoundary>
      <Router basename="/nuestro-pulso-app">
        <Background>
          <Navigation />
          <Routes>
            <Route path="/" element={<EnhancedHome />} />
            <Route 
              path="/chat" 
              element={
                user ? 
                <EnhancedChat user={user} /> : 
                <AuthGate onAuth={setUser} title="Chat Comunitario" />
              } 
            />
            <Route 
              path="/debate" 
              element={
                user ? 
                <EnhancedDebate user={user} /> : 
                <AuthGate onAuth={setUser} title="Plataforma de Debates" />
              } 
            />
            <Route 
              path="/survey" 
              element={<EnhancedSurvey user={user} />} 
            />
            <Route 
              path="/news" 
              element={<NewsComponent user={user} />} 
            />
            <Route 
              path="/admin" 
              element={
                user ? 
                <AdminPanel user={user} /> : 
                <AuthGate onAuth={setUser} title="Panel de Administración" />
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Background>
      </Router>
    </ErrorBoundary>
  );
}

export default App;