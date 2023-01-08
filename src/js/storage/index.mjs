// storing value in localStorage
export const store = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

// getting value from localStorage
export const get = (key) => JSON.parse(localStorage.getItem(key));

// removing value from localStorage
export const remove = (key) => localStorage.removeItem(key);
