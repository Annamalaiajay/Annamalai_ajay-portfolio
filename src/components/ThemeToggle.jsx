import { useState, useEffect } from "react";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved ? parseInt(saved) : 0;
  });
  const [showDropdown, setShowDropdown] = useState(false);
  
  const themes = [
    { name: 'NIGHT-BLUE', class: 'blue-theme' },
    { name: 'DARK-FIRE', class: 'red-theme' },
    { name: 'FORTUNE-BLACK', class: 'purple-theme' }
  ];

  useEffect(() => {
    document.body.classList.remove('blue-theme', 'red-theme', 'purple-theme');
    document.body.classList.add(themes[currentTheme].class);
    localStorage.setItem('portfolio-theme', currentTheme.toString());
  }, [currentTheme]);

  const selectTheme = (index) => {
    setCurrentTheme(index);
    setShowDropdown(false);
  };

  return (
    <div className="theme-toggle-container">
      <button 
        onClick={() => setShowDropdown(!showDropdown)} 
        className="theme-toggle-btn"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
      </button>
      
      {showDropdown && (
        <div className="theme-dropdown">
          {themes.map((theme, index) => (
            <button
              key={index}
              onClick={() => selectTheme(index)}
              className={`theme-option ${currentTheme === index ? 'active' : ''}`}
            >
              {theme.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}