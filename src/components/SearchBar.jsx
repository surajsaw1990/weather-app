import { useState } from 'react';

function SearchBar({ query, onQueryChange, onSearch }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`glass-panel mb-5 flex flex-col gap-3 rounded-3xl p-4 shadow-soft transition-all duration-300 sm:flex-row sm:items-center w-full ${
        isFocused ? 'ring-2 ring-sky-400/60' : ''
      }`}
    >
      <div className="flex-1">
        <label htmlFor="city-search" className="mb-2 block text-sm font-medium">
          Search by city
        </label>
        <input
          id="city-search"
          type="text"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Enter a city name"
          className="w-full rounded-2xl border border-slate-200/70 bg-white/85 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 dark:border-slate-700 dark:bg-slate-950/60 dark:text-white"
        />
      </div>

      <button
        onClick={onSearch}
        className="px-6 py-3 bg-blue-500 text-white rounded-xl active:scale-95 transition-transform duration-150"
      >
        Search Weather
      </button>
    </form>
  );
}

export default SearchBar;
