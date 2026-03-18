import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/ai.css'

function WelcomeModal({ isDirectVisit, targetPath, onDone, saveName }) {
  const [step, setStep] = useState('greeting') // greeting → name → choice → done
  const [name, setName] = useState('')
  const [aiText, setAiText] = useState('')
  const [listening, setListening] = useState(false)
  const navigate = useNavigate()
  const inputRef = useRef()

  // Typewriter effect
  const typeText = (text, callback) => {
    setAiText('')
    let i = 0
    const interval = setInterval(() => {
      setAiText(text.slice(0, i + 1))
      i++
      if (i === text.length) {
        clearInterval(interval)
        if (callback) setTimeout(callback, 400)
      }
    }, 28)
  }

  useEffect(() => {
    typeText("Hi there 👋 I'm Ashutosh's AI Assistant. What's your name?")
  }, [])

  const handleName = () => {
    if (!name.trim()) return
    saveName(name.trim())

    if (isDirectVisit) {
      typeText(`Nice to meet you, ${name}! Taking you to the project... 🚀`, () => {
        onDone()
        navigate(targetPath)
      })
      setStep('done')
    } else {
      setStep('choice')
      typeText(`Great to meet you, ${name}! Are you a recruiter or just exploring?`)
    }
  }

  const handleChoice = (choice) => {
    if (choice === 'recruiter') {
      typeText(`Perfect! Let me show you Ashutosh's best work. Starting with Project 1 🎯`, () => {
        onDone()
        navigate('/ecommerce-analytics')
      })
    } else {
      typeText(`Awesome! Feel free to explore everything. Redirecting to portfolio 🌟`, () => {
        onDone()
      })
    }
    setStep('done')
  }

  // Voice input
  const handleVoice = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognition) {
      alert('Voice not supported in this browser. Please type your name.')
      return
    }
    const recognition = new SpeechRecognition()
    recognition.lang = 'en-US'
    recognition.start()
    setListening(true)
    recognition.onresult = (e) => {
      const spoken = e.results[0][0].transcript
      setName(spoken)
      setListening(false)
    }
    recognition.onerror = () => setListening(false)
    recognition.onend = () => setListening(false)
  }

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-avatar">🤖</div>
        <div className="modal-ai-text">{aiText}<span className="cursor">|</span></div>

        {(step === 'greeting' || step === 'name') && (
          <div className="modal-input-row">
            <input
              ref={inputRef}
              className="modal-input"
              placeholder="Type your name..."
              value={name}
              onChange={e => setName(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleName()}
              autoFocus
            />
            <button
              className={`voice-btn ${listening ? 'listening' : ''}`}
              onClick={handleVoice}
              title="Speak your name"
            >
              {listening ? '🔴' : '🎤'}
            </button>
            <button className="modal-submit" onClick={handleName}>→</button>
          </div>
        )}

        {step === 'choice' && (
          <div className="modal-choices">
            <button className="choice-btn recruiter" onClick={() => handleChoice('recruiter')}>
              💼 I'm a Recruiter
            </button>
            <button className="choice-btn explorer" onClick={() => handleChoice('explorer')}>
              🔍 Just Exploring
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default WelcomeModal