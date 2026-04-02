// trigger deploy
import { useEffect, useMemo, useState } from 'react';
import HomePage from './pages/HomePage';
import { getBackgroundTheme } from './utils/backgroundThemes';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('weather-theme');
    return storedTheme ? storedTheme === 'dark' : false;
  });
  const [weatherCondition, setWeatherCondition] = useState('Clear');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('weather-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const backgroundTheme = useMemo(
    () => getBackgroundTheme(weatherCondition, isDarkMode),
    [weatherCondition, isDarkMode]
  );

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white transition-all duration-700"
    >
      <div className={`min-h-screen ${backgroundTheme.overlay}`}>
        <HomePage
          isDarkMode={isDarkMode}
          onThemeToggle={() => setIsDarkMode((current) => !current)}
          onWeatherConditionChange={setWeatherCondition}
        />
      </div>
    </div>
  );
}

export default App;
