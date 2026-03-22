import {
  formatCurrentWeather,
  formatDailyForecast,
  formatHourlyForecast
} from '../utils/formatters';

const API_BASE_URL = 'https://api.openweathermap.org/data/2.5';

const buildUrl = (path, searchParams) => {
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
  const url = new URL(`${API_BASE_URL}/${path}`);

  Object.entries({
    ...searchParams,
    appid: apiKey,
    units: 'metric'
  }).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  return url.toString();
};

const fetchJson = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Unable to complete the request.');
  }

  return data;
};

const fetchAqi = async (lat, lon) => {
  const data = await fetchJson(buildUrl('air_pollution', { lat, lon }));
  return data.list?.[0]?.main?.aqi ?? 0;
};

const fetchForecast = async (params) => {
  return fetchJson(buildUrl('forecast', params));
};

export const fetchWeatherByCity = async (city) => {
  const current = await fetchJson(buildUrl('weather', { q: city }));
  const forecast = await fetchForecast({ q: city });
  const aqi = await fetchAqi(current.coord.lat, current.coord.lon);

  return {
    current: formatCurrentWeather(current),
    daily: formatDailyForecast(forecast.list),
    hourly: formatHourlyForecast(forecast.list),
    aqi
  };
};

export const fetchWeatherByCoordinates = async (lat, lon) => {
  const current = await fetchJson(buildUrl('weather', { lat, lon }));
  const forecast = await fetchForecast({ lat, lon });
  const aqi = await fetchAqi(lat, lon);

  return {
    current: formatCurrentWeather(current),
    daily: formatDailyForecast(forecast.list),
    hourly: formatHourlyForecast(forecast.list),
    aqi
  };
};
