import { get } from "../storage/index.mjs";

/**
 * Setting headers with JWT token to authenticate user
 */
export function headers() {
  const token = get("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

/**
 * Fetch with JWT access token to be able to get, create, update and remove posts and profile details
 * @param {String} url - API url to be passed in
 * @param {any} options - fetch options such as method and body
 * @returns
 * @example
 * ```js
 * async function createPost(postData) {
 * // URL
 * const createPostUrl = api_social_url + endpoint;
 *
 * // Call fetch function and pass in url and options as parameters
 * const response = await fetchWithAuth(createPostUrl, {
 * method: "POST",
 * body: JSON.stringify(postData),
 * });
 *
 * return await response.json();
 * }
 * ```
 */
export async function fetchWithAuth(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}
