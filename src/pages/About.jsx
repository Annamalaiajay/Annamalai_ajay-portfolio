import { motion } from "framer-motion";
import "../styles/About.css";

export default function About() {
  return (
    <section className="about-section">

      {/* PAGE TITLE */}
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        ABOUT
      </motion.h2>

      {/* PROFILE SUMMARY */}
      <motion.div
        className="about-block"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="about-subtitle">Profile Summary</h3>
        <p>
          Electronics and Communication Engineering student with a strong interest in
          AI/ML, Full Stack development, IoT, and Embedded Systems. Experienced in building
          practical, real-world projects that integrate intelligent software with hardware
          systems. Actively focused on problem solving, system design, and scalable
          application development.
        </p>
      </motion.div>

      {/* CODE SUMMARY */}
      <motion.div
        className="about-block"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h3 className="about-subtitle">Code Summary</h3>

        {/* LEETCODE */}
        <div className="code-platform">
          <div className="platform-card">
            <a href="https://leetcode.com/Annamalai_aajay" target="_blank" rel="noopener noreferrer" className="stats-link">
              <img
                src="https://leetcard.jacoblin.cool/Annamalai_aajay?theme=dark&font=Baloo&ext=heatmap"
                alt="LeetCode Profile"
              />
            </a>
          </div>
          <div className="platform-info">
            <h4>LeetCode</h4>
            <p>@Annamalai_aajay</p>
          </div>
        </div>

        {/* CODECHEF */}
        <div className="code-platform">
          <div className="platform-card">
            <a href="https://www.codechef.com/users/annamalai_ajay" target="_blank" rel="noopener noreferrer" className="logo-link">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbYQVq17d3AJTeHVrSidugpEx_LUhlYeO5DA&s" alt="CodeChef Logo" />
            </a>
          </div>
          <div className="platform-info">
            <h4>CodeChef</h4>
            <p>@annamalai_ajay</p>
          </div>
        </div>

        {/* HACKERRANK */}
        <div className="code-platform">
          <div className="platform-card">
            <a href="https://www.hackerrank.com/profile/annamalaiajay201" target="_blank" rel="noopener noreferrer" className="logo-link">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png" alt="HackerRank Logo" />
            </a>
          </div>
          <div className="platform-info">
            <h4>HackerRank</h4>
            <p>@annamalaiajay201</p>
          </div>
        </div>

        {/* GITHUB */}
        <div className="code-platform">
          <div className="platform-card">
            <a href="https://github.com/Annamalaiajay" target="_blank" rel="noopener noreferrer" className="stats-link">
              <img
                src="https://github-readme-stats.vercel.app/api?username=Annamalaiajay&show_icons=true&theme=dark"
                alt="GitHub Stats"
              />
            </a>
          </div>
          <div className="platform-info">
            <h4>GitHub</h4>
            <p>@Annamalaiajay</p>
          </div>
        </div>

        <p className="code-summary-text">
          My coding activity spans multiple platforms, reflecting consistent practice in
          problem solving, algorithmic thinking, and software development. I actively
          solve problems across varying difficulty levels, participate in contests, and
          maintain project repositories to strengthen coding efficiency and system-level
          understanding.
        </p>
      </motion.div>

    </section>
  );
}
