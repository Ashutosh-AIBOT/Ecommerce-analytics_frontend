import { Link } from 'react-router-dom'
import '../styles/hero.css'

function Hero() {
  return (
    <section className="hero">
      <p className="hero-greeting">Hi, I am</p>
      <h1 className="hero-name">Ashutosh</h1>
      <h2 className="hero-role">Data Analyst & ML Engineer</h2>
      <p className="hero-bio">
        Analyzed 96,454 real orders from 
        Olist Brazilian E-Commerce dataset
        to extract business insights and predict churn.
      </p>
      <Link to="/ecommerce-analytics" className="hero-btn">
        View Live Project
      </Link>
    </section>
  )
}

export default Hero