import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import DebatesPage from './pages/DebatesPage';
import SurveysPage from './pages/SurveysPage';
import NewsPage from './pages/NewsPage';
import CommunityPage from './pages/CommunityPage';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/debates" element={<DebatesPage />} />
            <Route path="/surveys" element={<SurveysPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
