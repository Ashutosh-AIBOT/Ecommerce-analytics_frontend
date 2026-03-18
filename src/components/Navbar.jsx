import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/navbar.css'

function Navbar() {
  const [theme, setTheme] = useState('dark')
  const navigate = useNavigate()

  const changeTheme = (t) => {
    document.body.className = `theme-${t}`
    setTheme(t)
  }

  const scrollToProjects = () => {
    // First navigate to home page
    navigate('/')
    
    // Small delay to ensure home page loads before scrolling
    setTimeout(() => {
      const section = document.getElementById('projects')
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const scrollToHome = () => {
    navigate('/')
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={scrollToHome} style={{ cursor: 'pointer' }}>
        Ashutosh
      </div>
      
      <div className="navbar-links">
        {/* Home Button */}
        <button className="nav-link-btn" onClick={scrollToHome}>
          Home
        </button>

        {/* Projects Button - Scrolls to projects section on home page */}
        <button className="nav-link-btn" onClick={scrollToProjects}>
          Projects
        </button>


        {/* External Links */}
        <a 
          href="https://github.com/Ashutosh-AIBOT" 
          target="_blank" 
          rel="noopener noreferrer"
          className="nav-link"
        >
          GitHub
        </a>
        
        <a 
          href="https://www.linkedin.com/in/ashutosh1975271/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="nav-link"
        >
          LinkedIn
        </a>
      </div>

      <div className="theme-switcher">
        <button 
          className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
          onClick={() => changeTheme('dark')}
        >
          Dark
        </button>
        <button 
          className={`theme-btn ${theme === 'navy' ? 'active' : ''}`}
          onClick={() => changeTheme('navy')}
        >
          Navy
        </button>
        <button 
          className={`theme-btn ${theme === 'slate' ? 'active' : ''}`}
          onClick={() => changeTheme('slate')}
        >
          Slate
        </button>
      </div>
    </nav>
  )
}

export default Navbar