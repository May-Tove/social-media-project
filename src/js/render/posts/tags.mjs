import { tags } from "../../templates/posts/tags.mjs";

/**
 * Render all tags that belong to a post
 * @param {array} allTags - array with all tags
 * @returns {array} array with all tags, they will be mapped and displayed
 * @example
 * ```js
 * async function renderListingDetails() {
 * const id = getUrlSearchParam("id");
 * const result = await getListing(id);
 *
 * renderTags(result.tags);
 * }}
 * ```
 */
export async function renderTags(allTags) {
  const tagContainer = document.querySelector(".tag-container");

  if (tagContainer) {
    const output = allTags.map(tags);

    if (allTags.length === 0) {
      tagContainer.innerHTML = " ";
    } else {
      tagContainer.innerHTML = output.join("");
    }
  }
}
