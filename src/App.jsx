import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from "react-router-dom";

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
        <div style={{padding:32, background:"#fee", minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center"}}>
          <h2 style={{color:"#b00"}}>Something went wrong.</h2>
          <p>
            Please refresh, or <a href="/">go back home</a>.
          </p>
          <details style={{color:"#555"}}>
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

// --- Navbar ---
function Navbar() {
  const linkStyle = ({isActive}) => ({
    color: isActive ? "#22c55e" : "#fff",
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: "none",
    marginRight: 18
  });
  return (
    <nav style={{background:"#164e63", color:"#fff", padding:"18px 24px", display:"flex", gap:8}}>
      <NavLink to="/" style={linkStyle} end>Home</NavLink>
      <NavLink to="/chat" style={linkStyle}>Chat</NavLink>
      <NavLink to="/debate" style={linkStyle}>Debate</NavLink>
      <NavLink to="/survey" style={linkStyle}>Survey</NavLink>
      <NavLink to="/admin" style={linkStyle}>Admin</NavLink>
    </nav>
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
      setError("Invalid username or password.");
      return;
    }
    onAuth({ username });
  }
  return (
    <div style={{minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", background:"#e0f2fe"}}>
      <form onSubmit={handleLogin} style={{background:"#fff", padding:32, borderRadius:12, boxShadow:"0 4px 16px #0001", width:320}}>
        <h2 style={{fontWeight:"bold", fontSize:24, marginBottom:18, color:"#164e63"}}>Chat Login</h2>
        <input
          type="text"
          style={{border:"1px solid #ddd", padding:10, borderRadius:8, marginBottom:12, width:"100%"}}
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          style={{border:"1px solid #ddd", padding:10, borderRadius:8, marginBottom:12, width:"100%"}}
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        {error && <div style={{color:"#b00", marginBottom:10}}>{error}</div>}
        <button style={{background:"#22c55e", color:"#fff", padding:"10px 0", borderRadius:8, fontWeight:"bold", width:"100%"}}>Join Chat</button>
      </form>
    </div>
  );
}

// --- Simple Chat ---
function ChatComponent({ user }) {
  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState("");
  function handleSend(e) {
    e.preventDefault();
    if (!msg.trim()) return;
    setMessages([...messages, { user: user.username, text: msg }]);
    setMsg("");
  }
  return (
    <div style={{padding:32, maxWidth:600, margin:"auto", background:"#fff", borderRadius:12, boxShadow:"0 8px 32px #0001", minHeight:"100vh"}}>
      <h2 style={{fontWeight:"bold", fontSize:24, marginBottom:18, color:"#164e63"}}>Community Chat</h2>
      <div style={{marginBottom:20}}>
        {messages.map((m, idx) => (
          <div key={idx} style={{marginBottom:6}}>
            <span style={{fontWeight:"bold", color:"#22c55e"}}>{m.user}: </span>
            <span>{m.text}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} style={{display:"flex", gap:8}}>
        <input style={{border:"1px solid #ddd", padding:8, borderRadius:8, flex:1}} value={msg} onChange={e=>setMsg(e.target.value)} placeholder="Type your message..." />
        <button style={{background:"#164e63", color:"#fff", padding:"8px 20px", borderRadius:8, fontWeight:"bold"}}>Send</button>
      </form>
    </div>
  );
}

// --- Weekly Debate ---
const DEBATE_HOST = { name: "Adriana Charry", id: "adriana-charry", avatar: "https://placehold.co/100x100?text=Adriana" };
function WeeklyDebate({ user, host }) {
  return (
    <div style={{padding:32, background:"#e0f2fe", minHeight:"100vh", textAlign:"center"}}>
      <h2 style={{fontWeight:"bold", fontSize:36, color:"#164e63", borderBottom:"4px solid #22c55e", paddingBottom:12, marginBottom:24}}>Weekly Debate</h2>
      <div style={{display:"flex", alignItems:"center", justifyContent:"center", gap:16, marginBottom:24}}>
        <img src={host.avatar} alt={host.name} style={{borderRadius:"50%", width:60, height:60, border:"2px solid #22c55e"}} />
        <div>
          <span style={{fontWeight:"bold", color:"#164e63"}}>Host:</span> <span style={{color:"#22c55e"}}>{host.name}</span>
        </div>
      </div>
      {user && user.username === host.id && (
        <div style={{background:"#164e63", color:"#fff", padding:16, borderRadius:8, marginTop:24}}>You are the debate host! You can start or moderate debates.</div>
      )}
      <div style={{marginTop:32, fontSize:18, color:"#333"}}>Debate topic goes here...</div>
    </div>
  );
}

// --- Debate Survey ---
function DebateSurvey({ host, user }) {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState('');
  const [survey, setSurvey] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [error, setError] = useState('');

  function handleCreate() {
    setError('');
    if (!question.trim()) {
      setError('Please enter a survey question.');
      return;
    }
    if (!options.trim()) {
      setError('Please enter survey options.');
      return;
    }
    const optionList = options.split(',').map(opt => opt.trim()).filter(opt => opt.length > 0);
    if (optionList.length < 2) {
      setError('Please provide at least 2 options separated by commas.');
      return;
    }
    setSurvey({
      question,
      options: optionList.map(opt => ({ title: opt, votes: 0 }))
    });
    setQuestion('');
    setOptions('');
  }

  function handleVote(idx) {
    if (hasVoted) return;
    const updated = { ...survey };
    updated.options[idx].votes += 1;
    setSurvey(updated);
    setHasVoted(true);
  }

  return (
    <div style={{background:"#fff", padding:32, borderRadius:12, boxShadow:"0 4px 16px #0001", marginTop:32, maxWidth:520, marginLeft:"auto", marginRight:"auto"}}>
      <h3 style={{fontWeight:"bold", color:"#164e63", marginBottom:18, fontSize:22}}>Debate Survey</h3>
      {host && user && user.username === host.id && !survey && (
        <div>
          <input style={{border:"1px solid #ddd", padding:10, borderRadius:8, marginBottom:12, width:"100%"}}
            value={question} onChange={e => setQuestion(e.target.value)} placeholder="Survey Question" />
          <input style={{border:"1px solid #ddd", padding:10, borderRadius:8, marginBottom:12, width:"100%"}}
            value={options} onChange={e => setOptions(e.target.value)} placeholder="Options (comma separated)" />
          {error && <div style={{color:"#b91c1c", marginBottom:12, fontSize:14}}>{error}</div>}
          <button style={{background:"#22c55e", color:"#fff", padding:"12px 0", borderRadius:8, fontWeight:"bold", width:"100%"}} onClick={handleCreate}>Create Survey</button>
        </div>
      )}
      {survey && (
        <div>
          <div style={{fontWeight:"bold", marginBottom:12}}>{survey.question}</div>
          <div style={{display:"flex", flexWrap:"wrap", gap:12}}>
            {survey.options.map((opt, idx) => (
              <button key={idx} style={{background:"#164e63", color:"#fff", padding:"10px 18px", borderRadius:8, flex:"1 1 auto", minWidth:"120px"}} onClick={() => handleVote(idx)} disabled={hasVoted}>
                {opt.title} ({opt.votes} votes)
              </button>
            ))}
          </div>
          {hasVoted && <div style={{marginTop:12, color:"#22c55e", fontWeight:"bold"}}>Thanks for voting!</div>}
        </div>
      )}
    </div>
  );
}

// --- Admin Controls ---
function AdminControls({ userList, host, currentUser }) {
  if (!currentUser || currentUser.username !== host.id) return null;
  return (
    <div style={{background:"#22c55e", padding:32, borderRadius:12, color:"#fff", marginTop:32, maxWidth:520, marginLeft:"auto", marginRight:"auto"}}>
      <h3 style={{fontWeight:"bold", marginBottom:18}}>Moderator Controls</h3>
      <ul style={{padding:0}}>
        {userList.map(u => (
          <li key={u.username} style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8}}>
            <span>{u.username}</span>
            <div style={{display:"flex", gap:6}}>
              <button style={{background:"#b91c1c", padding:"6px 10px", borderRadius:6, fontSize:12, color:"#fff"}}>Mute</button>
              <button style={{background:"#a21caf", padding:"6px 10px", borderRadius:6, fontSize:12, color:"#fff"}}>Kick</button>
              <button style={{background:"#be123c", padding:"6px 10px", borderRadius:6, fontSize:12, color:"#fff"}}>Ban</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// --- Home Page ---
function Home() {
  return (
    <div style={{minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", background:"#e0f2fe"}}>
      <h1 style={{fontSize:48, fontWeight:"bold", color:"#164e63", marginBottom:24}}>Nuestro Pulso</h1>
      <p style={{fontSize:24, marginBottom:18, color:"#334155"}}>Community Platform for News, Debates, Events, and More.</p>
      <Link to="/chat" style={{background:"#22c55e", color:"#fff", padding:"18px 36px", borderRadius:10, fontWeight:"bold", fontSize:22, marginBottom:12, textDecoration:"none", display:"inline-block"}}>Join Chat</Link>
      <Link to="/debate" style={{background:"#164e63", color:"#fff", padding:"18px 36px", borderRadius:10, fontWeight:"bold", fontSize:22, marginTop:8, textDecoration:"none", display:"inline-block"}}>Weekly Debate</Link>
    </div>
  );
}

// --- Not Found Page ---
function NotFound() {
  return (
    <div style={{minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
      <h1 style={{fontSize:36, fontWeight:"bold", color:"#164e63", marginBottom:12}}>Page Not Found</h1>
      <p style={{marginBottom:18}}>The page you requested doesn’t exist.</p>
      <Link to="/" style={{background:"#22c55e", color:"#fff", padding:"12px 28px", borderRadius:8, fontWeight:"bold", textDecoration:"none"}}>Go Home</Link>
    </div>
  );
}

// --- The App ---
function App() {
  const [user, setUser] = useState(null);
  const allUsers = [
    { username: "adriana-charry" },
    { username: "user1" },
    { username: "user2" }
  ];

  return (
    <ErrorBoundary>
      <Router basename="/nuestro-pulso-app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={user ? <ChatComponent user={user} /> : <ChatAuthGate onAuth={setUser} />} />
          <Route path="/debate" element={<WeeklyDebate user={user} host={DEBATE_HOST} />} />
          <Route path="/survey" element={<DebateSurvey host={DEBATE_HOST} user={user} />} />
          <Route path="/admin" element={<AdminControls userList={allUsers} host={DEBATE_HOST} currentUser={user} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
