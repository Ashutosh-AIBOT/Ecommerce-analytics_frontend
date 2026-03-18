import { useNavigate, useLocation } from 'react-router-dom'
import '../styles/projectnavbar.css'

const sections = [
  { label: 'Overview',         id: 'overview'  },
  { label: 'Data Cleaning',    id: 'cleaning'  },
  { label: 'Matplotlib Charts',id: 'charts'    },
  { label: 'SQL',              id: 'sql'       },
  { label: 'Ms Excel',         id: 'excel'     },
  { label: 'Power BI',         id: 'powerbi'   },
  { label: 'ML Model',         id: 'model'     },
  { label: 'Insights',         id: 'insights'  },
]

function ProjectNavbar() {
  const navigate = useNavigate()
  const location = useLocation()

  // Check if we're on the model pageconfa
  const isOnModelPage = location.pathname.includes('/model')

  const handleSectionClick = (id) => {
    if (isOnModelPage) {
      // Navigate back to main project page first
      navigate('/ecommerce-analytics')
      // Wait for navigation, then scroll
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 200)
    } else {
      // Already on main page, just scroll
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className="project-navbar">
      <div className="project-navbar-container">
        {sections.map((s) => (
          <button 
            key={s.id} 
            onClick={() => handleSectionClick(s.id)} 
            className="pnav-btn"
          >
            {s.label}
          </button>
        ))}
        <button
          className="pnav-btn model-btn"
          onClick={() => navigate('/ecommerce-analytics/model')}
        >
          🧠 Try Model
        </button>
      </div>
    </nav>
  )
}

export default ProjectNavbar