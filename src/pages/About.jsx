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
            <a href="https://leetcode.com/Annamalai_aajay" target="_blank" rel="noopener noreferrer">
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

          {/* ROTATING BADGES */}
          <div className="leetcode-badges-wrapper">
            {/* 50 DAYS BADGE */}
            <div className="leetcode-badge-container badge-50">
              <svg className="leetcode-badge-svg" viewBox="0 0 100 100" width="75" height="75">
                <defs>
                  <linearGradient id="silverGradient50" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e5e7eb" />
                    <stop offset="50%" stopColor="#9ca3af" />
                    <stop offset="100%" stopColor="#374151" />
                  </linearGradient>
                  <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4ade80" />
                    <stop offset="100%" stopColor="#15803d" />
                  </linearGradient>
                </defs>
                <g className="rotating-badge">
                  <path 
                    d="M50 18 L77.7 34 L77.7 66 L50 82 L22.3 66 L22.3 34 Z" 
                    fill="#111827" 
                    stroke="url(#silverGradient50)" 
                    strokeWidth="3.5" 
                    strokeLinejoin="round" 
                  />
                  <circle cx="62" cy="50" r="18" fill="url(#greenGradient)" opacity="0.9" />
                  <circle cx="62" cy="50" r="18" fill="none" stroke="#4ade80" strokeWidth="1.5" />
                  <text x="38" y="58" textAnchor="middle" fill="#f3f4f6" fontSize="26" fontWeight="800" fontFamily="system-ui, sans-serif">5</text>
                  <text x="62" y="58" textAnchor="middle" fill="#111827" fontSize="26" fontWeight="900" fontFamily="system-ui, sans-serif">0</text>
                  <g transform="translate(29, 44)">
                    <text x="0" y="0" textAnchor="middle" fill="#9ca3af" fontSize="4.5" fontWeight="800" letterSpacing="0.5">D</text>
                    <text x="0" y="5" textAnchor="middle" fill="#9ca3af" fontSize="4.5" fontWeight="800" letterSpacing="0.5">A</text>
                    <text x="0" y="10" textAnchor="middle" fill="#9ca3af" fontSize="4.5" fontWeight="800" letterSpacing="0.5">Y</text>
                    <text x="0" y="15" textAnchor="middle" fill="#9ca3af" fontSize="4.5" fontWeight="800" letterSpacing="0.5">S</text>
                  </g>
                </g>
              </svg>
              <div className="leetcode-badge-info">
                <span className="leetcode-badge-title">50 DAYS STREAK</span>
                <span className="leetcode-badge-subtitle">LeetCode Consistent</span>
              </div>
            </div>

            {/* 100 DAYS BADGE */}
            <div className="leetcode-badge-container badge-100">
              <svg className="leetcode-badge-svg" viewBox="0 0 100 100" width="75" height="75">
                <defs>
                  <linearGradient id="silverGradient100" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e5e7eb" />
                    <stop offset="50%" stopColor="#9ca3af" />
                    <stop offset="100%" stopColor="#374151" />
                  </linearGradient>
                  <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#1d4ed8" />
                  </linearGradient>
                </defs>
                <g className="rotating-badge">
                  <path 
                    d="M50 18 L77.7 34 L77.7 66 L50 82 L22.3 66 L22.3 34 Z" 
                    fill="#111827" 
                    stroke="url(#silverGradient100)" 
                    strokeWidth="3.5" 
                    strokeLinejoin="round" 
                  />
                  <circle cx="62" cy="50" r="18" fill="url(#blueGradient)" opacity="0.9" />
                  <circle cx="62" cy="50" r="18" fill="none" stroke="#60a5fa" strokeWidth="1.5" />
                  <text x="35" y="58" textAnchor="middle" fill="#f3f4f6" fontSize="20" fontWeight="800" fontFamily="system-ui, sans-serif">10</text>
                  <text x="62" y="58" textAnchor="middle" fill="#111827" fontSize="22" fontWeight="900" fontFamily="system-ui, sans-serif">0</text>
                  <g transform="translate(29, 44)">
                    <text x="0" y="0" textAnchor="middle" fill="#9ca3af" fontSize="4.5" fontWeight="800" letterSpacing="0.5">D</text>
                    <text x="0" y="5" textAnchor="middle" fill="#9ca3af" fontSize="4.5" fontWeight="800" letterSpacing="0.5">A</text>
                    <text x="0" y="10" textAnchor="middle" fill="#9ca3af" fontSize="4.5" fontWeight="800" letterSpacing="0.5">Y</text>
                    <text x="0" y="15" textAnchor="middle" fill="#9ca3af" fontSize="4.5" fontWeight="800" letterSpacing="0.5">S</text>
                  </g>
                </g>
              </svg>
              <div className="leetcode-badge-info">
                <span className="leetcode-badge-title">100 DAYS STREAK</span>
                <span className="leetcode-badge-subtitle">LeetCode Consistent</span>
              </div>
            </div>
          </div>
        </div>

        {/* CODECHEF */}
        <div className="code-platform">
          <div className="platform-card">
            <a href="https://www.codechef.com/users/annamalai_ajay" target="_blank" rel="noopener noreferrer">
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
            <a href="https://www.hackerrank.com/profile/annamalaiajay201" target="_blank" rel="noopener noreferrer">
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
            <a href="https://github.com/Annamalaiajay" target="_blank" rel="noopener noreferrer">
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

        <motion.div 
          className="code-summary-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>
            My coding activity spans multiple platforms, reflecting consistent practice in
            problem solving, algorithmic thinking, and software development. I actively
            solve problems across varying difficulty levels, participate in contests, and
            maintain project repositories to strengthen coding efficiency and system-level
            understanding.
          </p>
        </motion.div>
      </motion.div>

    </section>
  );
}