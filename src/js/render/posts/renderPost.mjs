import * as postMethods from "../../api/posts/index.mjs";
import * as templates from "../../templates/posts/index.mjs";
import * as render from "./index.mjs";

/**
 * Displaying a single post details on the page using API call
 */
export async function renderPostHtml() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");
  if (id) {
    const result = await postMethods.getPost(id);

    const postContainer = document.querySelector("#post-container");
    if (postContainer) {
      postContainer.innerHTML = templates.postTemplate(result);
    }

    // buttons to edit or delete post
    render.displayPostOptions(result.author.name);

    // displaying comments
    render.renderComments();
  }

  // displaying comment form
  render.displayCommentForm();
}
