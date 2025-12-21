import "../components/Projectcard.css";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython
} from "react-icons/fa";
import {
  SiVite,
  SiGooglemaps,
  SiEspressif,
  SiFlutter
} from "react-icons/si";
import { IoLogoIonic } from "react-icons/io";

// IMPORT PROJECT IMAGES
// add more images when needed
import portfolioimg from "../assets/Portfolio.png";
import hackathonImg from "../assets/pastrypantry.png"; // placeholder - replace with actual image

export default function Projects() {
  return (
    <motion.div 
      className="projects-page"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h2 
        className="projects-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
      >
        PROJECTS
      </motion.h2>

      <motion.div 
        className="projects-grid"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        {/* PROJECT 1 */}
        <ProjectCard
          image={portfolioimg}
          title="PORTOFOLIO"
          techIcons={[
            { icon: <FaReact />, color: "#61DAFB", name: "React.js" },
            { icon: <FaCss3Alt />, color: "#1572B6", name: "CSS3" },
            { icon: <FaHtml5 />, color: "#E34F26", name: "HTML5" },
            { icon: <FaJs />, color: "#F7DF1E", name: "JavaScript" },
            { icon: <SiVite />, color: "#646CFF", name: "Vite" }
          ]}
          githubLink="https://github.com/Annamalaiajay"
          liveLink="#"
        />

        {/* PROJECT 2 */}
        <ProjectCard
          image={hackathonImg}
          title="PASTRY-PANTRY(freelancing)"
          techIcons={[
            { icon: <FaReact />, color: "#61DAFB", name: "React.js" },
            { icon: <FaCss3Alt />, color: "#1572B6", name: "CSS3" },
            { icon: <FaHtml5 />, color: "#E34F26", name: "HTML5" },
            { icon: <FaJs />, color: "#F7DF1E", name: "JavaScript" },
            { icon: <SiVite />, color: "#646CFF", name: "Vite" }
          ]}
          githubLink="https://github.com/Annamalaiajay/pastrypantry"
          liveLink="https://pastrypantry.onrender.com/"
        />

        {/* PROJECT 3 */}
        <ProjectCard
          image={hackathonImg}
          title="Drive-Sync – Road Safety System"
          techIcons={[
            { icon: <IoLogoIonic />, color: "#3880FF", name: "IoT" },
            { icon: <FaPython />, color: "#3776AB", name: "Python" },
            { icon: <SiEspressif />, color: "#E7352C", name: "ESP32" }
          ]}
          githubLink="https://github.com/Annamalaiajay"
          liveLink="#"
        />

        {/* PROJECT 4 */}
        <ProjectCard
          image={hackathonImg}
          title="Way-Sync – Smart Route App"
          techIcons={[
            { icon: <SiFlutter />, color: "#02569B", name: "Flutter" },
            { icon: <FaPython />, color: "#3776AB", name: "Python" },
            { icon: <SiGooglemaps />, color: "#4285F4", name: "Google Maps" }
          ]}
          githubLink="https://github.com/Annamalaiajay"
          liveLink="#"
        />
      </motion.div>
    </motion.div>
  );
}

/* =========================
   PROJECT CARD COMPONENT
========================= */
function ProjectCard({ image, title, techIcons, githubLink, liveLink }) {
  return (
    <div className="project-card">
      <div className="project-card-inner">
        {/* FRONT SIDE */}
        <div className="project-card-front">
          <img src={image} alt={title} />
          <h3>{title}</h3>
        </div>

        {/* BACK SIDE */}
        <div className="project-card-back">
          <h3>Tech Stack</h3>
          <div className="tech-icons">
            {techIcons.map((tech, index) => (
              <div key={index} className="tech-icon-wrapper">
                <div className="tech-icon" style={{ color: tech.color }}>
                  {tech.icon}
                </div>
                <div className="tech-tooltip">{tech.name}</div>
              </div>
            ))}
          </div>
          <div className="project-buttons">
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-btn github-btn">
              GitHub
            </a>
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="project-btn live-btn">
              Live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}