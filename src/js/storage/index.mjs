export const store = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

export const get = (key) => JSON.parse(localStorage.getItem(key));

/*export function get(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch {
    return null;
  }
}*/

export const remove = (key) => localStorage.removeItem(key);
