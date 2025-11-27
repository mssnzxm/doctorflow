import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ChatbotRecommendPage from './pages/ChatbotRecommendPage'
import CreativeTeamPage from './pages/CreativeTeamPage'
import CreativeThinkingPage from './pages/CreativeThinkingPage'
import ScriptReviewPage from './pages/ScriptReviewPage'
import CharacterRecommendPage from './pages/CharacterRecommendPage'
// 在Routes中添加

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chatbot" element={<ChatbotRecommendPage />} />
          <Route path="/creative-team" element={<CreativeTeamPage />} />
          <Route path="/creative-thinking" element={<CreativeThinkingPage />} />
          <Route path="/script-review" element={<ScriptReviewPage />} />  
          <Route path="/character-recommend" element={<CharacterRecommendPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App