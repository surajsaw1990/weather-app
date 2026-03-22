import { getWearSuggestion } from '../utils/suggestions';

function WearSuggestion({ temperature }) {
  const suggestion = getWearSuggestion(temperature);

  return (
    <section className="glass-panel rounded-[2rem] p-6 shadow-soft animate-floatIn">
      <p className="text-sm uppercase tracking-[0.3em] text-sky-700 dark:text-sky-300">
        What To Wear
      </p>
      <h2 className="mt-3 text-2xl font-semibold">{suggestion.title}</h2>
      <p className="mt-3 text-slate-600 dark:text-slate-300">
        {suggestion.description}
      </p>
    </section>
  );
}

export default WearSuggestion;
