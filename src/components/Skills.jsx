import '../styles/skills.css'

const skills = [
  'Python', 'SQL', 'Pandas', 'NumPy',
  'Scikit-learn', 'Matplotlib', 'Plotly',
  'Power BI', 'Excel', 'FastAPI', 'React', 'Git'
]

function Skills() {
  return (
    <section className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <span key={skill} className="skill-tag">{skill}</span>
        ))}
      </div>
    </section>
  )
}

export default Skills