function ThemeToggle({ isDarkMode, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="glass-panel inline-flex items-center gap-3 rounded-full px-4 py-3 text-sm font-medium shadow-soft transition hover:-translate-y-0.5"
      aria-label="Toggle dark mode"
    >
      <span className="text-xs uppercase tracking-[0.25em] text-sky-700 dark:text-sky-300">
        {isDarkMode ? 'Night' : 'Day'}
      </span>
      <span>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
    </button>
  );
}

export default ThemeToggle;
