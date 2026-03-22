import { getWeatherIconUrl } from '../utils/formatters';

function ForecastCard({ item }) {
  return (
    <article className="min-w-[140px] rounded-3xl border border-white/35 bg-white/55 p-4 text-center transition hover:-translate-y-1 hover:bg-white dark:border-slate-700 dark:bg-slate-950/45 dark:hover:bg-slate-900">
      <p className="text-sm font-semibold">{item.dayLabel}</p>
      <img
        src={getWeatherIconUrl(item.icon)}
        alt={item.description}
        className="mx-auto h-16 w-16"
      />
      <p className="text-sm text-slate-600 dark:text-slate-300">
        {item.description}
      </p>
      <p className="mt-3 text-lg font-semibold">{Math.round(item.temp)}{'\u00B0C'}</p>
    </article>
  );
}

export default ForecastCard;
