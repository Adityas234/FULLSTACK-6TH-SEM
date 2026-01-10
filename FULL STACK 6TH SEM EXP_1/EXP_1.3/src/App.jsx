import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // 1. Use state to track theme (Check localStorage so it remembers user choice)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Update localStorage whenever theme changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    // 2. Change styles dynamically by attaching the theme name as a class
    <div className={`app-container ${theme}`}>
      <div className="glass-card">
        <div className="status-badge">
          {theme === 'light' ? 'Day Mode Active' : 'Night Mode Active'}
        </div>

        <h1>Theme Toggle SPA</h1>
        <p>
          Experiment-3: Implementing dynamic state-based 
          styling in a Single Page Application.
        </p>
        
        <button className="theme-button" onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </div>
  );
}

export default App;