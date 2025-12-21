import {
  FaPython,
  FaJava,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaBrain,
  FaUsers,
  FaMicrosoft
} from "react-icons/fa";

import {
  SiCplusplus,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiReact,
  SiNodedotjs,
  SiFlask,
  SiDjango,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGooglecloud,
  SiVisualstudiocode,
  SiEclipseide,
  SiPostman,
  SiIntellijidea
} from "react-icons/si";

export default function Skills() {
  return (
    <div className="skills-page">
      <h2 className="skills-title">SKILLS</h2>
    {/* 👇 SKILLS INTRO SENTENCE (THIS IS WHERE IT GOES) */}
      <p className="skills-intro">
        I am passionate about learning new concepts and exploring emerging
        technologies. Below are some of the key languages, tools, and platforms
        I have hands-on experience with.
      </p>

      {/* HARD SKILLS */}
      <div className="skills-section">
        <h3>Hard Skills</h3>

        <div className="skills-grid">
          <Skill icon={<FaPython />} title="Python" color="#3776AB" level={85}>
            Proficient in scripting, data analysis, ML model development, and automation.
          </Skill>

          <Skill icon={<FaJava />} title="Java" color="#E76F00" level={55}>
            Basic understanding of object-oriented programming and problem solving.
          </Skill>

          <Skill icon={<SiCplusplus />} title="C++" color="#00599C" level={50}>
            Basic knowledge of data structures and algorithms.
          </Skill>

          <Skill icon={<FaJs />} title="JavaScript" color="#F7DF1E" level={55}>
            Frontend logic and basic full-stack web applications.
          </Skill>

          <Skill icon={<FaBrain />} title="Machine Learning & AI" color="#9B5DE5" level={75}>
            Supervised & Unsupervised learning, CNN, RNN, and LSTM.
          </Skill>

          <Skill icon={<SiScikitlearn />} title="Scikit-learn" color="#F7931E" level={70}>
            Model training, feature engineering, and evaluation.
          </Skill>

          <Skill icon={<SiTensorflow />} title="TensorFlow" color="#FF6F00" level={65}>
            Deep learning model development and experimentation.
          </Skill>

          <Skill icon={<SiPytorch />} title="PyTorch" color="#EE4C2C" level={50}>
            Basic experience with neural network workflows.
          </Skill>

          <Skill icon={<SiReact />} title="React" color="#61DAFB" level={55}>
            Component-based UI development.
          </Skill>

          <Skill icon={<SiNodedotjs />} title="Node.js" color="#339933" level={50}>
            Backend APIs and server-side logic fundamentals.
          </Skill>

          <Skill icon={<SiFlask />} title="Flask" color="#ffffff" level={65}>
            Lightweight backend APIs for ML and web applications.
          </Skill>

          <Skill icon={<SiDjango />} title="Django" color="#092E20" level={60}>
            Backend development using ORM and authentication.
          </Skill>

          <Skill icon={<SiMysql />} title="MySQL" color="#4479A1" level={70}>
            Relational database design and SQL queries.
          </Skill>

          <Skill icon={<SiPostgresql />} title="PostgreSQL" color="#336791" level={65}>
            Structured data handling and joins.
          </Skill>

          <Skill icon={<SiMongodb />} title="MongoDB" color="#47A248" level={65}>
            NoSQL database handling.
          </Skill>

          <Skill icon={<FaGitAlt />} title="Git" color="#F05032" level={75}>
            Version control and collaborative workflows.
          </Skill>

          <Skill icon={<FaGithub />} title="GitHub" color="#ffffff" level={80}>
            Repository management and collaboration.
          </Skill>

          <Skill icon={<FaAws />} title="AWS" color="#FF9900" level={45}>
            Cloud fundamentals and basic deployment.
          </Skill>

          <Skill icon={<SiGooglecloud />} title="GCP" color="#4285F4" level={40}>
            Google Cloud platform fundamentals.
          </Skill>

          <Skill icon={<FaMicrosoft />} title="Azure" color="#0078D4" level={40}>
            Azure cloud fundamentals.
          </Skill>
        </div>
      </div>

      {/* TOOLS & IDEs */}
      <div className="skills-section">
        <h3>Tools & IDEs</h3>

        <div className="skills-grid">
          <Skill icon={<SiVisualstudiocode />} title="Visual Studio Code" color="#007ACC" level={85}>
            Primary editor used for frontend, backend, and full-stack development.
          </Skill>

          <Skill icon={<SiEclipseide />} title="Eclipse IDE" color="#2C2255" level={60}>
            Used for Java development and debugging.
          </Skill>

          <Skill icon={<SiIntellijidea />} title="IntelliJ IDEA" color="#000000" level={65}>
            Preferred IDE for Java-based applications.
          </Skill>

          <Skill icon={<SiPostman />} title="Postman" color="#FF6C37" level={70}>
            API testing, request validation, and backend integration.
          </Skill>
        </div>
      </div>

      {/* SOFT SKILLS */}
      <div className="skills-section">
        <h3>Soft Skills</h3>

        <div className="skills-grid">
          <Skill icon={<FaUsers />} title="Problem Solving" color="#6ccfff" level={85}>
            Analytical and structured approach to solving problems.
          </Skill>

          <Skill icon={<FaUsers />} title="Team Collaboration" color="#6ccfff" level={80}>
            Comfortable working in team-based environments.
          </Skill>

          <Skill icon={<FaUsers />} title="Quick Learner" color="#6ccfff" level={90}>
            Adapts quickly to new tools and technologies.
          </Skill>

          <Skill icon={<FaUsers />} title="Communication" color="#6ccfff" level={75}>
            Clear technical and non-technical communication.
          </Skill>
        </div>
      </div>
    </div>
  );
}

/* SINGLE SKILL CARD */
function Skill({ icon, title, color, level, children }) {
  return (
    <div className="skill-item">
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

      {/* HOVER POPUP */}
      <div className="skill-tooltip">
        {children}
      </div>
    </div>
  );
}
