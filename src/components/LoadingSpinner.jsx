function LoadingSpinner() {
  return (
    <div className="glass-panel flex min-h-[320px] items-center justify-center rounded-3xl p-10 shadow-soft">
      <div className="text-center">
        <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-sky-200 border-t-sky-600 dark:border-slate-700 dark:border-t-sky-400" />
        <p className="mt-4 text-sm font-medium text-slate-600 dark:text-slate-300">
          Fetching the latest weather details...
        </p>
      </div>
    </div>
  );
}

export default LoadingSpinner;
