import { useState } from "react";
import "../components/ProjectCard.css";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaDownload,
  FaBriefcase
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
import roverImg from "../assets/rover.png";
import offerLetter from "../assets/ANNAMALAI AJAY D (1).pdf";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("projects");

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
        EXPERIENCE
      </motion.h2>

      {/* Tabs Selector */}
      <div className="experience-tabs-container">
        <div className="experience-tabs">
          <button 
            className={`tab-btn ${activeTab === "projects" ? "active" : ""}`}
            onClick={() => setActiveTab("projects")}
          >
            PROJECTS
            {activeTab === "projects" && (
              <motion.div 
                className="active-tab-indicator" 
                layoutId="activeTabIndicator"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
          <button 
            className={`tab-btn ${activeTab === "internships" ? "active" : ""}`}
            onClick={() => setActiveTab("internships")}
          >
            INTERNSHIPS
            {activeTab === "internships" && (
              <motion.div 
                className="active-tab-indicator" 
                layoutId="activeTabIndicator"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "projects" ? (
          <motion.div 
            key="projects-grid"
            className="projects-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
        {/* ROVER PROJECT */}
        <ProjectCard
          title="Self-Recognizing Rover"
          techIcons={[
            { icon: <IoLogoIonic />, color: "#3880FF", name: "IoT" },
            { icon: <FaPython />, color: "#3776AB", name: "Python" },
            { icon: <SiEspressif />, color: "#E7352C", name: "ESP32" }
          ]}
          isDevelopment={true}
          dmLink="https://www.linkedin.com/in/annamalai-ajay-8888a6283/"
        />

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
        ) : (
          <motion.div 
            key="internships-content"
            className="internships-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="internships-grid">
              <InternshipCard
                company="AISHWI TECHNOLOGY COMPANY"
                position="Data Analyst Intern"
                startDate="21th July 2025"
                duration="3 months"
                workMode="Remote"
                offerLetterLink={offerLetter}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* =========================
   PROJECT CARD COMPONENT
========================= */
function ProjectCard({ image, title, techIcons, githubLink, liveLink, isDevelopment, dmLink }) {
  return (
    <div className="project-card">
      <div className="project-card-inner">
        {/* FRONT SIDE */}
        <div className="project-card-front">
          {image ? (
            <>
              <img src={image} alt={title} />
              <h3>{title}</h3>
            </>
          ) : (
            <div className="project-card-no-img-content">
              <h3>{title}</h3>
            </div>
          )}
          {isDevelopment && (
            <div className="dev-badge">Under Development</div>
          )}
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
            {isDevelopment ? (
              <a href={dmLink} target="_blank" rel="noopener noreferrer" className="project-btn dm-btn">
                DM for Queries
              </a>
            ) : (
              <>
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-btn github-btn">
                  GitHub
                </a>
                <a href={liveLink} target="_blank" rel="noopener noreferrer" className="project-btn live-btn">
                  Live
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================
   INTERNSHIP CARD COMPONENT
============================ */
function InternshipCard({ company, position, startDate, duration, workMode, offerLetterLink }) {
  return (
    <div className="internship-card">
      <div className="internship-card-inner">
        <div className="internship-badge-icon">
          <FaBriefcase />
        </div>
        <div className="internship-details">
          <h3 className="company-name">{company}</h3>
          <h4 className="position-title">{position}</h4>
          
          <div className="internship-meta-grid">
            <div className="meta-item">
              <FaCalendarAlt className="meta-icon" />
              <span>{startDate}</span>
            </div>
            <div className="meta-item">
              <FaClock className="meta-icon" />
              <span>{duration}</span>
            </div>
            <div className="meta-item">
              <FaMapMarkerAlt className="meta-icon" />
              <span>{workMode}</span>
            </div>
          </div>
          
          {offerLetterLink && (
            <a 
              href={offerLetterLink} 
              download="Annamalai_Ajay_D_Offer_Letter.pdf" 
              className="download-offer-btn"
            >
              <FaDownload className="download-icon" />
              <span>Download Offer Letter</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}