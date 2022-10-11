import { get } from "../storage/index.mjs";

/**
 *
 * @returns
 */
export function headers() {
  const token = get("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

/**
 *
 * @param {String} url
 * @param {*} options
 * @returns
 */
export async function fetchWithAuth(url, options = {}) {
  try {
    return fetch(url, {
      ...options,
      headers: headers(),
    });
  } catch (error) {
    console.log(error);
  }
}
