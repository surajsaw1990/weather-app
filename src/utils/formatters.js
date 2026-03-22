export const getWeatherIconUrl = (iconCode) =>
  `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

export const formatCurrentWeather = (data) => ({
  searchLabel: data.name,
  city: `${data.name}, ${data.sys.country}`,
  temperature: data.main.temp,
  feelsLike: data.main.feels_like,
  humidity: data.main.humidity,
  pressure: data.main.pressure,
  windSpeed: data.wind.speed,
  visibility: (data.visibility / 1000).toFixed(1),
  description: data.weather[0].description,
  weatherMain: data.weather[0].main,
  icon: data.weather[0].icon
});

export const formatHourlyForecast = (list) =>
  list.slice(0, 8).map((item) => ({
    timestamp: item.dt,
    temp: Math.round(item.main.temp),
    timeLabel: new Date(item.dt_txt).toLocaleTimeString([], {
      hour: 'numeric',
      minute: '2-digit'
    }),
    icon: item.weather[0].icon,
    description: item.weather[0].description
  }));

export const formatDailyForecast = (list) => {
  const middayForecast = list.filter((item) => item.dt_txt.includes('12:00:00'));

  return middayForecast.slice(0, 5).map((item) => ({
    timestamp: item.dt,
    dayLabel: new Date(item.dt_txt).toLocaleDateString([], {
      weekday: 'short'
    }),
    temp: item.main.temp,
    icon: item.weather[0].icon,
    description: item.weather[0].main
  }));
};

export const getAqiLabel = (aqi) => {
  const labels = {
    1: 'Good air quality',
    2: 'Fair air quality',
    3: 'Moderate air quality',
    4: 'Poor air quality',
    5: 'Very poor air quality'
  };

  return labels[aqi] || 'AQI unavailable';
};
