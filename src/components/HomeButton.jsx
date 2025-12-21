import { Link } from "react-router-dom";
import "./HomeButton.css";

export default function HomeButton() {
  return (
    <Link to="/" className="home-btn">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </svg>
    </Link>
  );
}