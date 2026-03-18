import '../styles/projects.css'
import { Link } from 'react-router-dom'

const projects = [
  {
    id: 1,
    name: 'Ecommerce Sales & Customer Analytics',
    description: 'End-to-end analytics on 96,454 real orders from Olist dataset. RFM segmentation, CLV, cohort analysis, churn prediction.',
    tech: ['Python', 'SQL', 'Pandas', 'Scikit-learn', 'Power BI'],
    github: 'https://github.com/Ashutosh-AIBOT/ecommerce-analytics',
    demo: '/learning/allprojects/ecommerce-analytics',
    folder: '01_Ecommers-Analytics-Project'
  },
  {
    id: 12,
    name: 'ForecastX — Product Demand Forecasting',
    description: 'Time series forecasting on historical product demand. ARIMA, Prophet, LSTM, XGBoost models with trend analysis.',
    tech: ['Python', 'ARIMA', 'Prophet', 'LSTM', 'XGBoost', 'Streamlit'],
    github: 'https://github.com/Ashutosh-AIBOT/Forecasts-for-Product-Demand-full-Analysis',
    demo: null,
    folder: '12_ForecastX'
  },
  {
    id: 13,
    name: 'MetricFlow — Social Media Ads Analysis',
    description: 'Analysis of 300K ad campaigns across Google, Meta, Twitter, Pinterest. ROI, CTR, engagement metrics with interactive dashboards.',
    tech: ['Python', 'Pandas', 'React.js', 'Plotly', 'Power BI', 'Excel'],
    github: 'https://github.com/Ashutosh-AIBOT/Social-Media-Ads-Analysis',
    demo: null,
    folder: '13_MetricFlow'
  },
  {
    id: 6,
    name: 'DataWeave — Batch ETL Pipeline',
    description: 'Automated data pipeline using Airflow DAGs, dbt models and PostgreSQL. Raw to mart layer with data quality tests.',
    tech: ['Airflow', 'dbt', 'PostgreSQL', 'Docker', 'Python'],
    github: 'https://github.com/Ashutosh-AIBOT',
    demo: null,
    folder: '06_DataWeave_ETLPipeline'
  },
  {
    id: 14,
    name: 'ExperimentX — A/B Testing Framework',
    description: 'Statistical A/B testing engine with frequentist and Bayesian approaches, power analysis and experiment design.',
    tech: ['Python', 'SciPy', 'Streamlit', 'Statistics', 'Bayesian'],
    github: 'https://github.com/Ashutosh-AIBOT',
    demo: null,
    folder: '14_ExperimentX_ABTesting'
  }
]

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Data Analytics Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <h3 className="project-name">{project.name}</h3>
            </div>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((t) => (
                <span key={t} className="skill-tag">{t}</span>
              ))}
            </div>
            <div className="project-btns">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline">GitHub</a>
              {project.demo ? (
                <Link to={project.demo} className="btn-filled">View Project</Link>
              ) : (
                <span className="btn-disabled" title="Hosted separately - GitHub only">External</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects