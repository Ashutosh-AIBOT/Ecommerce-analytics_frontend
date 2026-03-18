// src/config/projectsConfig.js
export const PROJECTS_CONFIG = [
  {
    id: 'ecommerce-analytics',
    name: 'Ecommerce Sales & Customer Analytics',
    description: 'End-to-end analytics on 96,454 real orders from Olist dataset.',
    tech: ['Python', 'SQL', 'Pandas', 'Scikit-learn', 'Power BI'],
    status: 'done',
    folder: 'ecommerce-analytics',
    github: 'https://github.com/Ashutosh-AIBOT/ecommerce-analytics',
    sections: [
      { id: 'overview', label: 'Overview' },
      { id: 'cleaning', label: 'Data Cleaning' },
      { id: 'charts', label: 'Matplotlib Charts' },
      { id: 'sql', label: 'SQL' },
      { id: 'excel', label: 'Ms Excel' },
      { id: 'powerbi', label: 'Power BI' },
      { id: 'model', label: 'ML Model' },
      { id: 'insights', label: 'Insights' }
    ]
  },
  {
    id: 'forecastx',
    name: 'ForecastX — Product Demand Forecasting',
    description: 'Time series forecasting with ARIMA, Prophet, LSTM, XGBoost.',
    tech: ['Python', 'ARIMA', 'Prophet', 'LSTM', 'XGBoost', 'Streamlit'],
    status: 'done',
    folder: 'forecastx',
    github: 'https://github.com/Ashutosh-AIBOT/Forecasts-for-Product-Demand-full-Analysis',
    sections: [
      { id: 'overview', label: 'Overview' },
      { id: 'cleaning', label: 'Data Cleaning' },
      { id: 'charts', label: 'Charts' },
      { id: 'model', label: 'ML Model' },
      { id: 'insights', label: 'Insights' }
    ]
  },
  {
    id: 'metricflow',
    name: 'MetricFlow — Social Media Ads Analysis',
    description: 'Analysis of 300K ad campaigns across multiple channels.',
    tech: ['Python', 'Pandas', 'React.js', 'Plotly', 'Power BI'],
    status: 'done',
    folder: 'metricflow',
    github: 'https://github.com/Ashutosh-AIBOT/Social-Media-Ads-Analysis',
    sections: [
      { id: 'overview', label: 'Overview' },
      { id: 'cleaning', label: 'Data Cleaning' },
      { id: 'charts', label: 'Charts' },
      { id: 'insights', label: 'Insights' }
    ]
  },
  {
    id: 'dataweave',
    name: 'DataWeave — Batch ETL Pipeline',
    description: 'Automated data pipeline with Airflow, dbt, PostgreSQL.',
    tech: ['Airflow', 'dbt', 'PostgreSQL', 'Docker', 'Python'],
    status: 'soon',
    folder: 'dataweave',
    github: 'https://github.com/Ashutosh-AIBOT',
    sections: [
      { id: 'overview', label: 'Overview' },
      { id: 'cleaning', label: 'Data Cleaning' },
      { id: 'insights', label: 'Insights' }
    ]
  },
  {
    id: 'experimentx',
    name: 'ExperimentX — A/B Testing Framework',
    description: 'Statistical A/B testing with frequentist and Bayesian approaches.',
    tech: ['Python', 'SciPy', 'Streamlit', 'Statistics', 'Bayesian'],
    status: 'soon',
    folder: 'experimentx',
    github: 'https://github.com/Ashutosh-AIBOT',
    sections: [
      { id: 'overview', label: 'Overview' },
      { id: 'cleaning', label: 'Data Cleaning' },
      { id: 'insights', label: 'Insights' }
    ]
  }
]

export const getProjectById = (id) => {
  return PROJECTS_CONFIG.find(p => p.id === id)
}

export const getAllProjects = () => {
  return PROJECTS_CONFIG
}