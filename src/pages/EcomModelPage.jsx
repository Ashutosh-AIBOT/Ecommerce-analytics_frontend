import Navbar from '../components/Navbar'
import ProjectNavbar from '../projects/ecommerce-analytics/components/ProjectNavbar'
import EcomModel from '../projects/ecommerce-analytics/components/EcomModel'
import Footer from '../components/Footer'
import '../projects/ecommerce-analytics/styles/project.css'

function EcomModelPage() {
  return (
    <div className="project-page">
      <Navbar />
      <ProjectNavbar />
      <EcomModel />
      <Footer />
    </div>
  )
}
export default EcomModelPage