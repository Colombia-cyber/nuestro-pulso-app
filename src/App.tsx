import { useState } from 'react'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import ChatPage from './pages/ChatPage'
import DebatePage from './pages/DebatePage'
import './App.css'

type PageType = 'home' | 'chat' | 'debate' | 'proposals' | 'community'

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home')

  const handleNavigation = (page: string) => {
    setCurrentPage(page as PageType)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />
      case 'chat':
        return <ChatPage />
      case 'debate':
        return <DebatePage />
      case 'proposals':
        return (
          <div className="page-content">
            <div className="page-header">
              <h2>📋 Propuestas Ciudadanas</h2>
              <p>Presenta y vota propuestas para mejorar nuestras comunidades</p>
            </div>
            <div className="feature-card">
              <h3>🚧 En Construcción</h3>
              <p>Esta sección está siendo desarrollada. Pronto podrás crear y votar propuestas ciudadanas.</p>
            </div>
          </div>
        )
      case 'community':
        return (
          <div className="page-content">
            <div className="page-header">
              <h2>🤝 Comunidad</h2>
              <p>Conecta con otros ciudadanos comprometidos con el cambio</p>
            </div>
            <div className="feature-card">
              <h3>🚧 En Construcción</h3>
              <p>Esta sección está siendo desarrollada. Pronto podrás explorar la comunidad de ciudadanos activos.</p>
            </div>
          </div>
        )
      default:
        return <HomePage />
    }
  }

  return (
    <div className="app">
      <Header 
        userName="Colombia-cyber" 
        currentPage={currentPage}
        onNavigate={handleNavigation}
      />
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  )
}

export default App
