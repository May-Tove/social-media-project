/**
 * Reusable error message
 * @param {string} message
 * ```js
 * displayError("An error occurred");
 * ```
 */
export function displayError(message = "Unknown error") {
  return `
  <div class="p-4 rounded shadow-sm d-flex flex-column justify-content-center align-items-center mt-5 error-container">
  <h5 class="error-title text-white">Error!</h5>
  <h6 class="mb-0 text-white">${message}</h6>
  </div>`;
}

export function noResultError(message = "No result") {
  return ` <div class="p-4 flex-column justify-content-center align-items-center mt-3">
  <h6 class="mb-0 text-muted text-center">${message}</h6>
  </div>`;
}

export function authError(message) {
  return `<div class='alert alert-danger p-2' role="alert">${message}</div>`;
}
