import { getAqiLabel } from '../utils/formatters';

function AirQualityCard({ aqi }) {
  const label = getAqiLabel(aqi);

  return (
    <section className="glass-panel rounded-[2rem] p-6 shadow-soft animate-floatIn">
      <p className="text-sm uppercase tracking-[0.3em] text-sky-700 dark:text-sky-300">
        Air Quality
      </p>
      <div className="mt-4 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-4xl font-semibold">{aqi}</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">{label}</p>
        </div>
        <div className="rounded-3xl bg-emerald-500/15 px-4 py-3 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
          AQI Scale 1-5
        </div>
      </div>
    </section>
  );
}

export default AirQualityCard;
