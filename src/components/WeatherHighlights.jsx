function WeatherHighlights({ data }) {
  const highlights = [
    { label: 'Humidity', value: `${data.humidity}%` },
    { label: 'Wind Speed', value: `${data.windSpeed} m/s` },
    { label: 'Pressure', value: `${data.pressure} hPa` },
    { label: 'Visibility', value: `${data.visibility} km` }
  ];

  return (
    <section className="glass-panel rounded-[2rem] p-6 shadow-soft transition-all duration-300 hover:scale-[1.01]">
      <p className="text-sm uppercase tracking-[0.3em] text-sky-700 dark:text-sky-300">
        Highlights
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {highlights.map((item) => (
          <div
            key={item.label}
            className="rounded-3xl bg-white/55 p-4 dark:bg-slate-950/45 transition-all duration-300 hover:scale-[1.02]"
          >
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {item.label}
            </p>
            <h3 className="mt-2 text-2xl font-semibold">{item.value}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WeatherHighlights;
