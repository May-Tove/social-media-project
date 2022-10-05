import { get } from "../storage/index.mjs";

export function headers() {
  const token = get("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export async function fetchWithAuth(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}
