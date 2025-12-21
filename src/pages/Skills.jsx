import { FaMicrosoft } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  FaPython,
  FaJava,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaCloud,
  FaBrain,
  FaCode,
  FaMicrochip,
  FaWifi,
  FaUsers,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiReact,
  SiNodedotjs,
  SiDjango,
  SiFlask,
  SiGooglecloud,
} from "react-icons/si";

export default function Skills() {
  return (
    <motion.div 
      className="skills-page"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h2 
        className="skills-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
      >
        SKILLS
      </motion.h2>
      <motion.p
        className="skills-intro"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        I am passionate about learning new concepts and exploring emerging
        technologies. Below are some of the key languages, tools, and platforms
        I have hands-on experience with.
      </motion.p>

      {/* EMBEDDED SYSTEMS & IOT */}
      <SkillSection title="Embedded Systems & IoT">
        <Skill icon={<FaMicrochip />} title="Embedded Systems" color="#00E5FF" level={75}>
          Hands-on experience with microcontrollers, sensors, and real-time hardware interfacing.
          Worked with ESP32, Arduino, and embedded C for practical applications.
        </Skill>
        <Skill icon={<FaWifi />} title="Internet of Things (IoT)" color="#00C853" level={70}>
          Designed IoT-based systems involving sensor data acquisition, wireless communication,
          and cloud integration for monitoring and automation.
        </Skill>
      </SkillSection>

      {/* PROGRAMMING LANGUAGES */}
      <SkillSection title="Programming Languages">
        <Skill icon={<FaPython />} title="Python" color="#3776AB" level={90}>
          Proficient in scripting, data analysis, ML model development, and automation.
        </Skill>
        <Skill icon={<FaJava />} title="Java" color="#E76F00" level={89}>
          Basic understanding of OOP concepts and problem solving.
        </Skill>
        <Skill icon={<SiCplusplus />} title="C++" color="#00599C" level={50}>
          Basic knowledge of data structures and algorithms.
        </Skill>
        <Skill icon={<FaJs />} title="JavaScript" color="#F7DF1E" level={55}>
          Used for frontend logic and basic full-stack applications.
        </Skill>
      </SkillSection>

      {/* AI/ML & DATA SCIENCE */}
      <SkillSection title="AI/ML & Data Science">
        <Skill icon={<FaBrain />} title="Machine Learning & AI" color="#9B5DE5" level={75}>
          Supervised & Unsupervised learning, CNN, RNN, LSTM.
        </Skill>
        <Skill icon={<SiScikitlearn />} title="Scikit-learn" color="#F7931E" level={70}>
          Model training, evaluation, and feature engineering.
        </Skill>
        <Skill icon={<SiTensorflow />} title="TensorFlow" color="#FF6F00" level={65}>
          Deep learning model development and experimentation.
        </Skill>
        <Skill icon={<SiPytorch />} title="PyTorch" color="#EE4C2C" level={50}>
          Basic experience with neural network research workflows.
        </Skill>
      </SkillSection>

      {/* WEB DEVELOPMENT */}
      <SkillSection title="Web Development">
        <Skill icon={<SiReact />} title="React" color="#61DAFB" level={55}>
          Component-based UI development (basic level).
        </Skill>
        <Skill icon={<SiNodedotjs />} title="Node.js" color="#339933" level={50}>
          Backend fundamentals and API handling.
        </Skill>
        <Skill icon={<SiFlask />} title="Flask" color="#ffffff" level={65}>
          Lightweight backend APIs for ML projects.
        </Skill>
        <Skill icon={<SiDjango />} title="Django" color="#092E20" level={60}>
          Backend development with ORM and authentication.
        </Skill>
      </SkillSection>

      {/* DATABASES */}
      <SkillSection title="Databases">
        <Skill icon={<SiMysql />} title="MySQL" color="#4479A1" level={70}>
          Relational database design and queries.
        </Skill>
        <Skill icon={<SiPostgresql />} title="PostgreSQL" color="#336791" level={65}>
          Structured data handling and joins.
        </Skill>
        <Skill icon={<SiMongodb />} title="MongoDB" color="#47A248" level={65}>
          NoSQL database handling for flexible data models.
        </Skill>
      </SkillSection>

      {/* TOOLS & PLATFORMS */}
      <SkillSection title="Tools & Platforms">
        <Skill icon={<FaGitAlt />} title="Git" color="#F05032" level={75}>
          Version control and collaborative workflows.
        </Skill>
        <Skill icon={<FaGithub />} title="GitHub" color="#ffffff" level={80}>
          Repository management and team collaboration.
        </Skill>
        <Skill icon={<FaAws />} title="AWS" color="#FF9900" level={45}>
          Cloud fundamentals and basic deployment.
        </Skill>
        <Skill icon={<SiGooglecloud />} title="GCP" color="#4285F4" level={40}>
          Cloud platform fundamentals.
        </Skill>
        <Skill icon={<FaMicrosoft />} title="Azure" color="#0078D4" level={40}>
          Azure cloud fundamentals.
        </Skill>
      </SkillSection>

      {/* CURRENTLY LEARNING */}
      <SkillSection title="Currently Learning">
        <Skill icon={<FaBrain />} title="Advanced Machine Learning" color="#9B5DE5" level={40}>
          Improving model optimization, real-world deployment, and performance tuning.
        </Skill>
        <Skill icon={<FaCloud />} title="Cloud & DevOps Basics" color="#FF9900" level={35}>
          Learning deployment pipelines, CI/CD, and cloud architecture.
        </Skill>
        <Skill icon={<FaCode />} title="Full Stack Development" color="#61DAFB" level={45}>
          Strengthening backend + frontend integration skills.
        </Skill>
      </SkillSection>

      {/* SOFT SKILLS */}
      <SkillSection title="Soft Skills">
        <Skill icon={<FaUsers />} title="Problem Solving" color="#6ccfff" level={100}>
          Analytical thinking and structured problem solving.
        </Skill>
        <Skill icon={<FaUsers />} title="Team Collaboration" color="#6ccfff" level={100}>
          Comfortable working in collaborative environments.
        </Skill>
        <Skill icon={<FaUsers />} title="Quick Learner" color="#6ccfff" level={100}>
          Adapts quickly to new tools and technologies.
        </Skill>
        <Skill icon={<FaUsers />} title="Communication" color="#6ccfff" level={100}>
          Clear technical and non-technical communication.
        </Skill>
      </SkillSection>
    </motion.div>
  );
}

/* SECTION */
function SkillSection({ title, children }) {
  return (
    <div className="skills-section">
      <h3>{title}</h3>
      <div className="skills-grid">{children}</div>
    </div>
  );
}

/* SKILL CARD */
function Skill({ icon, title, color, level, children }) {
  return (
    <div className="skill-card">
      <div className="skill-card-inner">
        {/* FRONT SIDE */}
        <div className="skill-card-front">
          <div className="skill-icon" style={{ color }}>
            {icon}
          </div>
          <h4>{title}</h4>
          <div className="skill-bar">
            <div
              className="skill-bar-fill"
              style={{ width: `${level}%`, backgroundColor: color }}
            />
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="skill-card-back">
          <h4 style={{ color }}>{title}</h4>
          <p>{children}</p>
          <div className="skill-level">Level: {level}%</div>
        </div>
      </div>
    </div>
  );
}