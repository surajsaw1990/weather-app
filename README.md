# WeatherSphere

WeatherSphere is a professional, production-ready weather dashboard built with React.js, Tailwind CSS, Chart.js, and the OpenWeatherMap API. It provides current weather details, a 5-day forecast, a 24-hour trend chart, AQI insights, wardrobe suggestions, geolocation-based lookup, search history, and dark mode.

## Features

- Search weather by city name
- Auto-detect user location with the Geolocation API
- Current weather card with temperature, humidity, wind speed, pressure, and visibility
- 5-day weather forecast
- 24-hour forecast chart using Chart.js
- Air Quality Index (AQI) display
- "What to Wear" suggestions based on temperature
- Dynamic background based on weather conditions
- Dark mode toggle
- Search history for the last 5 cities using `localStorage`
- Loading spinner, responsive layout, hover states, and error handling

## Tech Stack

- React.js with functional components and hooks
- Tailwind CSS
- Chart.js
- OpenWeatherMap API

## Project Structure

```text
src/
  components/
  pages/
  services/
  utils/
```

## Setup Instructions

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root and add your OpenWeatherMap API key:

```env
REACT_APP_OPENWEATHER_API_KEY=your_openweathermap_api_key_here
```

4. Start the development server:

```bash
npm start
```

5. Build for production:

```bash
npm run build
```

## OpenWeatherMap Endpoints Used

- `/weather` for current weather
- `/forecast` for forecast data
- `/air_pollution` for AQI

## Screenshots

- `screenshots/homepage.png` - Add homepage screenshot here
- `screenshots/dark-mode.png` - Add dark mode screenshot here
- `screenshots/mobile-view.png` - Add mobile screenshot here

## Notes

- The app expects a valid OpenWeatherMap API key in `.env`.
- The 24-hour chart is based on OpenWeatherMap forecast intervals.
- If geolocation permission is denied, the app falls back to New York.
