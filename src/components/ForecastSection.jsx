import ForecastCard from './ForecastCard';

function ForecastSection({ forecast }) {
  return (
    <section className="glass-panel rounded-[2rem] p-6 shadow-soft animate-floatIn">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-sky-700 dark:text-sky-300">
            5-Day Forecast
          </p>
          <h2 className="mt-2 text-2xl font-semibold">Plan the week ahead</h2>
        </div>
      </div>

      <div className="weather-scrollbar flex gap-4 overflow-x-auto pb-2">
        {forecast.map((item) => (
          <ForecastCard key={item.timestamp} item={item} />
        ))}
      </div>
    </section>
  );
}

export default ForecastSection;
