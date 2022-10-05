import * as postMethods from "../../api/posts/index.mjs";
import { postTemplate } from "../../templates/post.mjs";

export async function renderPostHtml(post) {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  const result = await postMethods.getPost(id);
  const output = postTemplate(result);

  const postContainer = document.querySelector("#post-container");
  postContainer.innerHTML = output;
}
