import "./ProjectCard.css";

export default function ProjectCard({ image, title, tech }) {
  return (
    <div className="project-card">
      <div className="project-card-inner">

        {/* FRONT */}
        <div className="project-card-front">
          <img src={image} alt={title} />
          <h3>{title}</h3>
        </div>

        {/* BACK */}
        <div className="project-card-back">
          <h3>Tech Stack</h3>
          <ul>
            {tech.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
