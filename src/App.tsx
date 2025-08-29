import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ChatPage from './pages/ChatPage'
import DebatesPage from './pages/DebatesPage'
import SurveysPage from './pages/SurveysPage'
import NewsPage from './pages/NewsPage'

function App() {
  return (
    <Router basename="/nuestro-pulso-app">
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/debates" element={<DebatesPage />} />
            <Route path="/surveys" element={<SurveysPage />} />
            <Route path="/news" element={<NewsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App