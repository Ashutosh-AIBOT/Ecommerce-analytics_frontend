import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import ProjectBanner from '../projects/ecommerce-analytics/components/ProjectBanner'
import ProjectNavbar from '../projects/ecommerce-analytics/components/ProjectNavbar'
import Overview from '../projects/ecommerce-analytics/components/Overview'
import DataCleaning from '../projects/ecommerce-analytics/components/DataCleaning'
import ChartsSection from '../projects/ecommerce-analytics/components/ChartsSection'
import SQLSection from '../projects/ecommerce-analytics/components/SQLSection'
import ExcelSection from '../projects/ecommerce-analytics/components/ExcelSection'
import PowerBISection from '../projects/ecommerce-analytics/components/PowerBISection'
import MLModel from '../projects/ecommerce-analytics/components/MLModel'
import Insights from '../projects/ecommerce-analytics/components/Insights'
import Footer from '../components/Footer'
import '../projects/ecommerce-analytics/styles/project.css'

function Ecommers_Analytics_copy() {
  return (
    <div className="project-page">
      <Navbar />
      <Projects />
      <ProjectBanner />
      <ProjectNavbar />
      <div className="project-sections">
        <section id="overview"><Overview /></section>
        <section id="cleaning"><DataCleaning /></section>
        <section id="charts"><ChartsSection /></section>
        <section id="sql"><SQLSection /></section>
        <section id="excel"><ExcelSection /></section>
        <section id="powerbi"><PowerBISection /></section>
        <section id="model"><MLModel /></section>
        <section id="insights"><Insights /></section>
      </div>
      <Footer />
    </div>
  )
}

export default Ecommers_Analytics_copy