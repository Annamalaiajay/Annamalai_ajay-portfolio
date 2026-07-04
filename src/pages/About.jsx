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
              <div className="leetcode-badge-3d">
                <div className="badge-3d-inner">
                  {/* FRONT */}
                  <div className="badge-3d-front">
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
                    </svg>
                  </div>
                  {/* BACK */}
                  <div className="badge-3d-back">
                    <svg className="leetcode-badge-svg" viewBox="0 0 100 100" width="75" height="75">
                      <defs>
                        <linearGradient id="silverGradientBack50" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f3f4f6" />
                          <stop offset="30%" stopColor="#d1d5db" />
                          <stop offset="70%" stopColor="#9ca3af" />
                          <stop offset="100%" stopColor="#4b5563" />
                        </linearGradient>
                        <linearGradient id="metalBackground50" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#9ca3af" />
                          <stop offset="50%" stopColor="#bdc3c7" />
                          <stop offset="100%" stopColor="#7f8c8d" />
                        </linearGradient>
                      </defs>
                      <path 
                        d="M50 18 L77.7 34 L77.7 66 L50 82 L22.3 66 L22.3 34 Z" 
                        fill="url(#metalBackground50)" 
                        stroke="url(#silverGradientBack50)" 
                        strokeWidth="3.5" 
                        strokeLinejoin="round" 
                      />
                      <path 
                        d="M50 22 L74.2 36 L74.2 64 L50 78 L25.8 64 L25.8 36 Z" 
                        fill="none" 
                        stroke="rgba(0, 200, 80, 0.15)" 
                        strokeWidth="1.2" 
                        strokeDasharray="2 2"
                      />
                      <g transform="translate(32, 32) scale(0.85)">
                        <path 
                          d="M16.1 11.2c-.6-.6-1.5-.6-2.1 0L3.4 21.7c-1.3 1.3-2 3-2 4.9s.7 3.6 2 4.9l8.6 8.6c1.3 1.3 3 2 4.9 2s3.6-.7 4.9-2l2.6-2.6c.6-.6.6-1.5 0-2.1-.6-.6-1.5-.6-2.1 0l-2.6 2.6c-.7.7-1.7 1.1-2.7 1.1s-2-.4-2.7-1.1L8.8 32.5c-.7-.7-1.1-1.7-1.1-2.7s.4-2 1.1-2.7l8.6-8.6c1.2-1.2 1.2-3.1 0-4.3zm12.3 8.3c-.6-.6-1.5-.6-2.1 0l-5.7 5.7c-.6.6-.6 1.5 0 2.1.6.6 1.5.6 2.1 0l5.7-5.7c.6-.6.6-1.5 0-2.1zm-4.3 11.4H10.6c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h13.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z" 
                          fill="#4ade80" 
                          opacity="0.85"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="leetcode-badge-info">
                <span className="leetcode-badge-title">50 DAYS STREAK</span>
                <span className="leetcode-badge-subtitle">LeetCode Consistent</span>
              </div>
            </div>

            {/* 100 DAYS BADGE */}
            <div className="leetcode-badge-container badge-100">
              <div className="leetcode-badge-3d">
                <div className="badge-3d-inner">
                  {/* FRONT */}
                  <div className="badge-3d-front">
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
                    </svg>
                  </div>
                  {/* BACK */}
                  <div className="badge-3d-back">
                    <svg className="leetcode-badge-svg" viewBox="0 0 100 100" width="75" height="75">
                      <defs>
                        <linearGradient id="silverGradientBack100" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f3f4f6" />
                          <stop offset="30%" stopColor="#d1d5db" />
                          <stop offset="70%" stopColor="#9ca3af" />
                          <stop offset="100%" stopColor="#4b5563" />
                        </linearGradient>
                        <linearGradient id="metalBackground100" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#9ca3af" />
                          <stop offset="50%" stopColor="#bdc3c7" />
                          <stop offset="100%" stopColor="#7f8c8d" />
                        </linearGradient>
                      </defs>
                      <path 
                        d="M50 18 L77.7 34 L77.7 66 L50 82 L22.3 66 L22.3 34 Z" 
                        fill="url(#metalBackground100)" 
                        stroke="url(#silverGradientBack100)" 
                        strokeWidth="3.5" 
                        strokeLinejoin="round" 
                      />
                      <path 
                        d="M50 22 L74.2 36 L74.2 64 L50 78 L25.8 64 L25.8 36 Z" 
                        fill="none" 
                        stroke="rgba(59, 130, 246, 0.15)" 
                        strokeWidth="1.2" 
                        strokeDasharray="2 2"
                      />
                      <g transform="translate(32, 32) scale(0.85)">
                        <path 
                          d="M16.1 11.2c-.6-.6-1.5-.6-2.1 0L3.4 21.7c-1.3 1.3-2 3-2 4.9s.7 3.6 2 4.9l8.6 8.6c1.3 1.3 3 2 4.9 2s3.6-.7 4.9-2l2.6-2.6c.6-.6.6-1.5 0-2.1-.6-.6-1.5-.6-2.1 0l-2.6 2.6c-.7.7-1.7 1.1-2.7 1.1s-2-.4-2.7-1.1L8.8 32.5c-.7-.7-1.1-1.7-1.1-2.7s.4-2 1.1-2.7l8.6-8.6c1.2-1.2 1.2-3.1 0-4.3zm12.3 8.3c-.6-.6-1.5-.6-2.1 0l-5.7 5.7c-.6.6-.6 1.5 0 2.1.6.6 1.5.6 2.1 0l5.7-5.7c.6-.6.6-1.5 0-2.1zm-4.3 11.4H10.6c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h13.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z" 
                          fill="#60a5fa" 
                          opacity="0.85"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
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