import { getWearSuggestion } from '../utils/suggestions';

function WearSuggestion({ temperature }) {
  const suggestion = getWearSuggestion(temperature);

  return (
    <section className="glass-panel rounded-[2rem] p-6 shadow-soft transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <p className="text-sm uppercase tracking-[0.3em] text-sky-700 dark:text-sky-300">
        What To Wear
      </p>
      <h2 className="mt-3 text-2xl font-semibold">{suggestion.title}</h2>
      <p className="mt-3 text-slate-500 dark:text-slate-400 leading-relaxed">
        {suggestion.description}
      </p>
    </section>
  );
}

export default WearSuggestion;
