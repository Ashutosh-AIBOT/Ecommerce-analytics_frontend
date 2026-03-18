import { useState } from 'react'
import '../styles/ai.css'

const responses = {
  hello: "Hi! I'm Ashutosh's portfolio assistant. Ask me about his projects, skills or how to contact him!",
  project: "Ashutosh has built 5 projects — E-Commerce Analytics (done ✅), ChurnRadar (in progress 🔄), and 3 more coming soon. Which one interests you?",
  skill: "Ashutosh's core skills: Python, SQL, Machine Learning, FastAPI, React, Power BI, XGBoost, SHAP, Docker. He's a fresher targeting Data Analyst and ML Engineer roles.",
  contact: "You can reach Ashutosh at: GitHub → github.com/Ashutosh-AIBOT | LinkedIn → linkedin.com/in/ashutosh1975271",
  hire: "Ashutosh is an immediate joiner based in Kanpur, India. He has built real projects with real datasets — 96,454 orders analyzed, ML models deployed. He's ready to contribute from day one.",
  default: "I can answer questions about Ashutosh's projects, skills, and how to contact him. Try asking about a specific project!"
}

function getReply(msg) {
  const m = msg.toLowerCase()
  if (m.includes('hello') || m.includes('hi') || m.includes('hey')) return responses.hello
  if (m.includes('project') || m.includes('work') || m.includes('portfolio')) return responses.project
  if (m.includes('skill') || m.includes('tech') || m.includes('stack') || m.includes('know')) return responses.skill
  if (m.includes('contact') || m.includes('email') || m.includes('reach') || m.includes('linkedin')) return responses.contact
  if (m.includes('hire') || m.includes('job') || m.includes('recruit') || m.includes('available')) return responses.hire
  return responses.default
}

function AIAssistant({ visitorName }) {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'ai', text: visitorName ? `Hi ${visitorName}! Ask me anything about Ashutosh's work.` : "Hi! Ask me anything about Ashutosh's portfolio." }
  ])
  const [input, setInput] = useState('')

  const send = () => {
    if (!input.trim()) return
    const userMsg = { from: 'user', text: input }
    const aiMsg = { from: 'ai', text: getReply(input) }
    setMessages(prev => [...prev, userMsg, aiMsg])
    setInput('')
  }

  return (
    <div className="ai-assistant">
      <button className="ai-toggle" onClick={() => setOpen(!open)}>
        <span className="ai-dot"></span>
        🤖 AI Assistant
      </button>

      {open && (
        <div className="ai-panel">
          <div className="ai-panel-header">
            <span>🤖 Ashutosh's AI</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>
          <div className="ai-messages">
            {messages.map((m, i) => (
              <div key={i} className={`ai-msg ${m.from}`}>{m.text}</div>
            ))}
          </div>
          <div className="ai-input-row">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Ask something..."
            />
            <button onClick={send}>→</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AIAssistant