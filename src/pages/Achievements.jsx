import "../styles/Achievements.css";
import { motion } from "framer-motion";

const achievementsData = [
  {
    year: "2023",
    items: [
      {
        month: "May",
        title: "Hackathon Finalist",
        date: "May 2023",
        desc: "Selected as finalist for innovative problem-solving solution."
      },
      {
        month: "June",
        title: "Tech Competition Winner",
        date: "June 2023",
        desc: "Won first place in college-level programming competition."
      }
    ]
  },
  {
    year: "2024",
    items: [
      {
        month: "Feb",
        title: "MEDTREX Recognition",
        date: "Feb 2024",
        desc: "IoT & Embedded health monitoring project recognition."
      },
      {
        month: "Aug",
        title: "Drive-Sync Shortlisted",
        date: "Aug 2024",
        desc: "AI-based road safety project shortlisted in tech event."
      }
    ]
  },
  {
    year: "2025",
    items: [
      {
        month: "Jan",
        title: "Way-Sync (Ongoing)",
        date: "Jan 2025",
        desc: "Smart route optimization app under active development.",
        current: true
      }
    ]
  }
];

const coursesData = [
  {
    year: "2023",
    items: [
      {
        month: "Mar",
        title: "Python Programming",
        platform: "Coursera",
        date: "Mar 2023"
      },
      {
        month: "Jul",
        title: "Machine Learning Basics",
        platform: "edX",
        date: "Jul 2023"
      }
    ]
  },
  {
    year: "2024",
    items: [
      {
        month: "Jan",
        title: "React.js Development",
        platform: "Udemy",
        date: "Jan 2024"
      },
      {
        month: "May",
        title: "IoT Fundamentals",
        platform: "Coursera",
        date: "May 2024"
      },
      {
        month: "Sep",
        title: "Data Structures & Algorithms",
        platform: "LeetCode",
        date: "Sep 2024"
      }
    ]
  },
  {
    year: "2025",
    items: [
      {
        month: "Jan",
        title: "Advanced AI/ML (Ongoing)",
        platform: "Coursera",
        date: "Jan 2025",
        current: true
      }
    ]
  }
];

export default function Achievements() {
  return (
    <section className="achievements-section">
      <h2 className="section-title">ACHIEVEMENTS</h2>

      <div className="achievements-container">
        {/* LEFT COLUMN - ACHIEVEMENTS */}
        <div className="achievements-column">
          <h3 className="column-title">EVENTS</h3>
          <div className="timeline-grid">
            {achievementsData.map((yearBlock, i) => (
              <YearBlock key={i} {...yearBlock} type="achievement" />
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN - COURSES */}
        <div className="courses-column">
          <h3 className="column-title">CERTIFICATIONS</h3>
          <div className="timeline-grid">
            {coursesData.map((yearBlock, i) => (
              <YearBlock key={i} {...yearBlock} type="course" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function YearBlock({ year, items, type }) {
  const hasMultiple = items.length > 1;
  return (
    <div className="year-block">
      <div className="year-label">{year}</div>

      {items.map((item, i) => (
        <TimelineRow
          key={i}
          {...item}
          type={type}
          showConnector={hasMultiple && i < items.length - 1}
        />
      ))}
    </div>
  );
}

function TimelineRow({ month, title, date, desc, platform, current, type, showConnector }) {
  return (
    <motion.div
      className={`timeline-row ${current ? "current" : ""} ${type === 'course' ? 'course-row' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {type === 'course' ? (
        <>
          {/* COURSE CARD - LEFT SIDE */}
          <div className="course-card">
            <h4>{title}</h4>
            {platform && <span className="platform">{platform}</span>}
            <small>{date}</small>
            {desc && <p>{desc}</p>}
          </div>

          {/* DOT - CENTER */}
          <div className="line-dot">
            {showConnector && <div className="connector-line"></div>}
          </div>

          {/* MONTH - RIGHT SIDE */}
          <div className="month course-month">{month}</div>
        </>
      ) : (
        <>
          {/* MONTH - LEFT SIDE */}
          <div className="month">{month}</div>

          {/* DOT - CENTER */}
          <div className="line-dot">
            {showConnector && <div className="connector-line"></div>}
          </div>

          {/* ACHIEVEMENT CARD - RIGHT SIDE */}
          <div className="achievement-card">
            <h4>{title}</h4>
            <small>{date}</small>
            {desc && <p>{desc}</p>}
          </div>
        </>
      )}
    </motion.div>
  );
}
