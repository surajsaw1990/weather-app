function SearchHistory({ history, onSelect }) {
  if (!history.length) {
    return null;
  }

  return (
    <section className="mb-5 animate-floatIn">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-600 dark:text-slate-300">
          Recent Searches
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Last 5 cities
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {history.map((city) => (
          <button
            key={city}
            type="button"
            onClick={() => onSelect(city)}
            className="rounded-full border border-white/40 bg-white/55 px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:bg-white dark:border-slate-700 dark:bg-slate-900/55 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {city}
          </button>
        ))}
      </div>
    </section>
  );
}

export default SearchHistory;
