import { getWeatherIconUrl } from '../utils/formatters';
import { useEffect, useState } from "react";

function WeatherCard({ data }) {
  const [animatedTemp, setAnimatedTemp] = useState(0);

  useEffect(() => {
  if (data?.temperature === undefined) return;

  let start = animatedTemp;
  const end = Math.round(data.temperature);

  const duration = 700;
  const stepTime = 20;
  const steps = duration / stepTime;
  const increment = (end - start) / steps;

  const timer = setInterval(() => {
    start += increment;

    if (
      (increment > 0 && start >= end) ||
      (increment < 0 && start <= end)
    ) {

      setAnimatedTemp(end);
      clearInterval(timer);
    } else {
      setAnimatedTemp(Math.floor(start));
    }
  }, stepTime);

  return () => clearInterval(timer);
}, [data?.temperature]);
  return (
    <section className="glass-panel rounded-[2rem] p-6 shadow-soft animate-floatIn transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-sky-700 dark:text-sky-300">
            Current Weather
          </p>
          <div className="mt-4 flex items-end gap-3">
            <h2 className="text-5xl font-semibold sm:text-6xl">
              {animatedTemp}{'\u00B0C'}
            </h2>
            <span className="mb-2 text-lg text-slate-600 dark:text-slate-300">
              Feels like {Math.round(data.feelsLike)}{'\u00B0C'}
            </span>
          </div>
          <h3 className="mt-4 text-2xl font-semibold">{data.city}</h3>
          <p className="mt-1 text-slate-600 dark:text-slate-300">
            {data.description}
          </p>
        </div>

        <div className="flex items-center gap-4 self-start rounded-3xl bg-white/55 px-5 py-4 dark:bg-slate-950/45">
          <img
            src={getWeatherIconUrl(data.icon)}
            alt={data.description}
            className="h-20 w-20 animate-float"
          />
          <div className="space-y-1 text-sm">
            <p>
              <span className="font-semibold">Humidity:</span> {data.humidity}%
            </p>
            <p>
              <span className="font-semibold">Wind:</span> {data.windSpeed} m/s
            </p>
            <p>
              <span className="font-semibold">Condition:</span> {data.weatherMain}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeatherCard;
