import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? "#0038A8" : "#333",
    fontWeight: isActive ? "600" : "normal",
    textDecoration: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    background: isActive ? "rgba(212, 175, 55, 0.2)" : "transparent",
    border: isActive ? "1px solid #d4af37" : "1px solid transparent",
    transition: "all 0.2s ease"
  });

  return (
    <nav className="colombian-nav">
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <img 
          src="/images/colombian-flag.svg" 
          alt="Colombian Flag" 
          style={{ width: "32px", height: "20px", borderRadius: "4px" }}
        />
        <span style={{ fontWeight: "700", color: "#0038A8", fontSize: "18px" }}>
          Nuestro Pulso
        </span>
      </div>
      <div style={{ display: "flex", gap: "8px", marginLeft: "auto" }}>
        <NavLink to="/" style={linkStyle} end>
          🏠 Inicio
        </NavLink>
        <NavLink to="/chat" style={linkStyle}>
          💬 Chat
        </NavLink>
        <NavLink to="/debate" style={linkStyle}>
          🗣️ Debate
        </NavLink>
        <NavLink to="/survey" style={linkStyle}>
          📊 Encuesta
        </NavLink>
        <NavLink to="/news" style={linkStyle}>
          📰 Noticias
        </NavLink>
        <NavLink to="/admin" style={linkStyle}>
          👥 Admin
        </NavLink>
      </div>
    </nav>
  );
}