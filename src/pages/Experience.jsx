import "../pages/Experience.css";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="experience-section">
      <h2 className="section-title">TIMELINE</h2>

      <div className="timeline">

        {/* 2022 – SSLC */}
        <TimelineItem
          year="2022"
          side="left"
          title="SSLC"
          school="DEVA ANNAI MATRIC.HIGHER.SCHOOL"
          location="CHENNAI"
          subtitle="Percentage: 70%"
        />

        {/* 2023 – College */}
        <TimelineItem
          year="2023"
          side="left"
          title="B.E / B.Tech (ECE)"
          school={"Sathyabama university"}
          location={"Chennai"}
          subtitle="CGPA: 7.7 • Present"
          isPresent
        />

        {/* 2024 – MEDTREX */}
        <TimelineItem
          year="2024"
          side="right"
          title="MEDTREX"
          subtitle="IoT & Embedded Health Monitoring System"
        />

        {/* 2024 – Drive-Sync */}
        <TimelineItem
          year="2024"
          side="right"
          title="Drive-Sync"
          subtitle="AI-based Road Safety System"
        />

        {/* 2025 – Way-Sync */}
        <TimelineItem
          year="2025"
          side="right"
          title="Way-Sync"
          subtitle="Smart Route Optimization App"
          isCurrent
        />

      </div>
    </section>
  );
}

/* TIMELINE ITEM */
function TimelineItem({ year, side, title, school, location, subtitle, isPresent, isCurrent }) {
  return (
    <motion.div
      className={`timeline-row ${side} ${isCurrent ? "current" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="content">
        <h4>{title}</h4>
        {school && <p className="school-name">{school}</p>}
        {location && <p className="location">{location}</p>}
        <p>{subtitle}</p>
        {isPresent && <span className="badge">PRESENT</span>}
      </div>

      <div className={`dot ${isCurrent ? "current" : ""}`}>
        <span>{year}</span>
      </div>
    </motion.div>
  );
}


