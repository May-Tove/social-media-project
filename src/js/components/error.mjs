/**
 * Error message for no results
 * @param {string} message - error message to be entered
 * @example
 * ```js
 * // no search results, no comments yet or no posts yet
 * errorContainer.innerHtml = noResultError("No comments yet");
 * ```
 */
export function noResultError(message = "No result") {
  return ` <div class="p-4 flex-column justify-content-center align-items-center mt-5">
  <h6 class="mb-0 text-muted text-center">${message}</h6>
  </div>`;
}

/**
 * Error message for failed authentication
 * @param {string} message - error message to be entered
 * @example
 * ```js
 * errorContainer.innerHtml = authError("Invalid password or username");
 * ```
 */
export function authError(message) {
  return `<div class='alert alert-danger p-2' role="alert">${message}</div>`;
}
