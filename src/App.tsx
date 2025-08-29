import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Homepage } from './components/Homepage';
import { ColombiaMap } from './components/Map/ColombiaMap';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Polls } from './components/Polls/Polls';
import { Achievements } from './components/Achievements/Achievements';
import { LiveStreaming } from './components/Streaming/LiveStreaming';
import { Transparency } from './components/Transparency/Transparency';
import { CivicEducation } from './components/Education/CivicEducation';
import { AIAssistant } from './components/AI/AIAssistant';
import { AccessibilityProvider } from './components/Accessibility/AccessibilityProvider';
import './index.css';

function App() {
  return (
    <AccessibilityProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/map" element={<ColombiaMap />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/polls" element={<Polls />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/streaming" element={<LiveStreaming />} />
              <Route path="/transparency" element={<Transparency />} />
              <Route path="/education" element={<CivicEducation />} />
              <Route path="/ai-assistant" element={<AIAssistant />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AccessibilityProvider>
  );
}

export default App;
