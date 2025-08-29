import Clock from './Clock';
import './Header.css';

interface HeaderProps {
  userName?: string;
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  userName = 'Colombia-cyber', 
  currentPage = 'home',
  onNavigate 
}) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <header className="app-header">
      <div className="header-content">
        <div className="header-left">
          <h1 className="app-title">
            <span className="colombia-flag">🇨🇴</span>
            Nuestro Pulso
          </h1>
          <p className="app-subtitle">Plataforma de Participación Ciudadana</p>
        </div>
        
        <div className="header-right">
          <div className="user-info">
            <span className="user-label">Conectado como:</span>
            <span className="user-name">{userName}</span>
          </div>
          <Clock className="header-clock" />
        </div>
      </div>
      
      <nav className="main-nav">
        <ul className="nav-list">
          <li>
            <a 
              href="#home" 
              className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'home')}
            >
              Inicio
            </a>
          </li>
          <li>
            <a 
              href="#chat" 
              className={`nav-link ${currentPage === 'chat' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'chat')}
            >
              Chat
            </a>
          </li>
          <li>
            <a 
              href="#debate" 
              className={`nav-link ${currentPage === 'debate' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'debate')}
            >
              Debates
            </a>
          </li>
          <li>
            <a 
              href="#proposals" 
              className={`nav-link ${currentPage === 'proposals' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'proposals')}
            >
              Propuestas
            </a>
          </li>
          <li>
            <a 
              href="#community" 
              className={`nav-link ${currentPage === 'community' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'community')}
            >
              Comunidad
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;