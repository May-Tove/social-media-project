import * as postMethods from "../../api/posts/index.mjs";
import { postTemplate } from "../../templates/post.mjs";
import { get } from "../../storage/index.mjs";

/*export function renderHtml() {
  postMethods.getPosts().then((posts) => {
    const output = posts.map(postTemplate);
    const feedContainer = document.querySelector("#feed-container");
    feedContainer.innerHTML = output.join("");

    const loggedInUser = get("user").name;
    console.log(posts);

    const buttons = document.querySelector("#adjustButtons");
    console.log(buttons);
    if (loggedInUser === posts.author.name) {
      buttons.classList.remove("d-none");
    }
  });
}*/

export async function renderPostsHtml() {
  const posts = await postMethods.getPosts();
  const output = posts.map(postTemplate);
  const feedContainer = document.querySelector("#feed-container");
  feedContainer.innerHTML = output.join("");

  const loggedInUser = get("user").name;
  const dropdownBtn = document.querySelector("#dropdownBtn");
  posts.filter((post) => {
    if (!post.author.name === loggedInUser) {
      dropdownBtn.classList.add("d-none");
    }
    console.log(post.author.name);
  });
}
