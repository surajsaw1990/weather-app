function ErrorMessage({ message }) {
  return (
    <div className="mb-5 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700 dark:border-rose-500/40 dark:bg-rose-950/40 dark:text-rose-200">
      {message}
    </div>
  );
}

export default ErrorMessage;
