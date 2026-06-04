import { NavLink } from "react-router-dom";

export default function PortfolioNav() {
  return (
    <nav className="portfolio-nav">
      <NavLink to="/about">ABOUT</NavLink>
      <NavLink to="/skills">SKILLS</NavLink>
      <NavLink to="/projects">EXPERIENCE</NavLink>
      <NavLink to="/experience">TIMELINE</NavLink>
      <NavLink to="/achievements">ACHIEVEMENTS</NavLink>
      <NavLink to="/resume">RESUME</NavLink>
      <NavLink to="/contact">CONTACT</NavLink>
    </nav>
  );
}
