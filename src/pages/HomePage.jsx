import { useEffect, useState } from 'react';
import AirQualityCard from '../components/AirQualityCard';
import ErrorMessage from '../components/ErrorMessage';
import ForecastSection from '../components/ForecastSection';
import HourlyChart from '../components/HourlyChart';
import LoadingSpinner from '../components/LoadingSpinner';
import SearchBar from '../components/SearchBar';
import SearchHistory from '../components/SearchHistory';
import ThemeToggle from '../components/ThemeToggle';
import WearSuggestion from '../components/WearSuggestion';
import WeatherCard from '../components/WeatherCard';
import WeatherHighlights from '../components/WeatherHighlights';
import DailyBrief from "../components/DailyBrief";
import {
  fetchWeatherByCity,
  fetchWeatherByCoordinates
} from '../services/weatherService';
import {
  getSavedHistory,
  saveCityToHistory
} from '../utils/searchHistory';

const DEFAULT_CITY = 'New York';

function HomePage({ isDarkMode, onThemeToggle, onWeatherConditionChange }) {
  const [query, setQuery] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [history, setHistory] = useState(() => getSavedHistory());
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const loadWeather = async (loader) => {
    try {
      setIsLoading(true);
      setError('');
      const data = await loader();
      setWeatherData(data);
      setQuery(data.current.searchLabel);
      onWeatherConditionChange(data.current.weatherMain);

      if (data.current.searchLabel) {
        const updatedHistory = saveCityToHistory(data.current.searchLabel);
        setHistory(updatedHistory);
      }
    } catch (loadError) {
      setError(loadError.message || 'Unable to fetch weather details.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const initializeWeather = async () => {
      const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

      if (!apiKey) {
        setError('Missing OpenWeatherMap API key. Add it to your .env file.');
        setIsLoading(false);
        return;
      }

      if (!navigator.geolocation) {
        loadWeather(() => fetchWeatherByCity(DEFAULT_CITY));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async ({ coords }) => {
          await loadWeather(() =>
            fetchWeatherByCoordinates(coords.latitude, coords.longitude)
          );
        },
        async () => {
          await loadWeather(() => fetchWeatherByCity(DEFAULT_CITY));
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    };

    initializeWeather();
    // We only need this on first render.
    
  }, []);

  const handleSearch = async (cityName) => {
    const trimmedCity = cityName.trim();

    if (!trimmedCity) {
      setError('Please enter a city name before searching.');
      return;
    }

    setQuery(trimmedCity);
    await loadWeather(() => fetchWeatherByCity(trimmedCity));
  };

  return (
    <main className="w-full min-h-screen px-4 py-4 max-w-5xl mx-auto space-y-6">
      <header className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl animate-floatIn">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.35em] text-sky-700 dark:text-sky-300">
            WeatherSphere
          </p>
          <h1 className="text-2xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            SkyCastDaily - Smart weather insights & real-time forecast
          </h1>
          <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
            Track current conditions, upcoming forecasts, air quality, and
            wardrobe suggestions in one clean dashboard.
          </p>
        </div>

        <div className="flex items-center justify-end">
          <ThemeToggle isDarkMode={isDarkMode} onToggle={onThemeToggle} />
        </div>
      </header>

      <SearchBar
        query={query}
        onQueryChange={setQuery}
        onSearch={handleSearch}
      />

      <SearchHistory history={history} onSelect={handleSearch} />

      {error && <ErrorMessage message={error} />}

      {isLoading ? (
        <LoadingSpinner />
      ) : weatherData ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-6 w-full">
          
          <DailyBrief 
            weather={{ 
              main: { temp: weatherData.current.temperature },
              name: weatherData.current.searchLabel || query 
            }}
            aqi={weatherData.aqi}
          />

          
          <section className="space-y-6 lg:col-span-2 w-full">
   
            <WeatherCard data={weatherData.current} />
            <HourlyChart
              hourlyData={weatherData.hourly}
              isDarkMode={isDarkMode}
            />
            <ForecastSection forecast={weatherData.daily} />
          </section>

          <aside className="space-y-6 w-full">
            <WearSuggestion temperature={weatherData.current.temperature} />
            <AirQualityCard aqi={weatherData.aqi} />
            <WeatherHighlights data={weatherData.current} />
          </aside>
        </div>
      ) : null}
    </main>
  );
}

export default HomePage;
