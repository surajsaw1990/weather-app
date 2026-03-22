const STORAGE_KEY = 'weather-search-history';

export const getSavedHistory = () => {
  try {
    const history = localStorage.getItem(STORAGE_KEY);
    return history ? JSON.parse(history) : [];
  } catch (error) {
    return [];
  }
};

export const saveCityToHistory = (city) => {
  const existingHistory = getSavedHistory();
  const updatedHistory = [city, ...existingHistory.filter((item) => item !== city)].slice(0, 5);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
  return updatedHistory;
};
