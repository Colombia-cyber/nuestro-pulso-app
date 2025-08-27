import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from "react-router-dom";

// --- Navbar ---
function Navbar() {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? "#2563eb" : "#334155",
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: "none",
    marginRight: 18,
    fontSize: "1.1rem"
  });
  return (
    <nav className="bg-yellow-100 text-blue-900 px-6 py-4 flex gap-4 shadow-md">
      <NavLink to="/" style={linkStyle} end>Inicio</NavLink>
      <NavLink to="/chat" style={linkStyle}>Chat</NavLink>
    </nav>
  );
}

// --- Home Page ---
function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 via-blue-100 to-red-100">
      <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 via-blue-600 to-red-600 mb-4 drop-shadow-xl">
        Nuestro Pulso
      </h1>
      <p className="text-xl text-blue-800 mb-10 font-medium">
        Plataforma comunitaria para noticias, debates, eventos y más.
      </p>
      <Link to="/chat">
        <button className="bg-gradient-to-r from-yellow-400 via-blue-500 to-red-400 hover:from-red-500 hover:to-yellow-500 text-white font-bold py-4 px-10 rounded-xl shadow-xl transition-transform duration-200 hover:scale-105 text-xl">
          🚀 Unirse al chat
        </button>
      </Link>
    </div>
  );
}

// --- Chat Login ---
function ChatAuthGate({ onAuth }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  function handleLogin(e) {
    e.preventDefault();
    setError('');
    if (username.length < 3 || password.length < 5) {
      setError("Usuario o contraseña inválidos.");
      return;
    }
    onAuth({ username });
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-2xl w-80">
        <h2 className="font-extrabold text-2xl mb-6 text-blue-700">Ingreso al Chat</h2>
        <input
          type="text"
          className="border border-yellow-200 p-2 rounded mb-4 w-full"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Usuario"
          required
        />
        <input
          type="password"
          className="border border-yellow-200 p-2 rounded mb-4 w-full"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Contraseña"
          required
        />
        {error && <div className="text-red-700 mb-2">{error}</div>}
        <button className="bg-yellow-400 text-white py-2 rounded font-bold w-full">Unirse</button>
      </form>
    </div>
  );
}

// --- Simple Chat (local only) ---
function MVPChat({ user }) {
  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSend(e) {
    e.preventDefault();
    if (!msg.trim()) return;
    setMessages([...messages, { user: user.username, text: msg, timestamp: Date.now() }]);
    setMsg("");
  }

  return (
    <div className="p-8 max-w-2xl mx-auto bg-white rounded-xl shadow-2xl min-h-screen">
      <h2 className="font-extrabold text-2xl mb-6 text-blue-700">Chat Comunitario</h2>
      <div className="mb-6 h-96 overflow-y-auto bg-blue-50 p-4 rounded-xl">
        {messages.length === 0 && <div className="text-blue-400 text-center mt-10">¡No hay mensajes aún, inicia la conversación!</div>}
        {messages.map((m, idx) => (
          <div key={idx} className="flex items-end mb-5">
            <span className="font-semibold text-blue-700 mr-2">{m.user}:</span>
            <span className="bg-gradient-to-r from-yellow-200 via-blue-200 to-red-200 rounded-xl px-4 py-2 mt-1 text-blue-900 shadow">{m.text}</span>
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>
      <form onSubmit={handleSend} className="flex gap-2">
        <input className="flex-1 border border-blue-300 p-2 rounded-xl" value={msg} onChange={e=>setMsg(e.target.value)} placeholder="Escribe tu mensaje..." />
        <button className="bg-blue-500 text-white px-6 py-2 rounded-xl font-bold">Enviar</button>
      </form>
    </div>
  );
}

// --- Not Found Page ---
function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Página no encontrada</h1>
      <p className="mb-6">La página solicitada no existe.</p>
      <Link to="/">
        <button className="bg-yellow-400 text-white px-6 py-2 rounded-xl font-bold">Volver al inicio</button>
      </Link>
    </div>
  );
}

// --- Main App ---
export default function App() {
  const [user, setUser] = useState(null);

  return (
    <Router basename="/">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={
          user
            ? <MVPChat user={user} />
            : <ChatAuthGate onAuth={setUser} />
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
