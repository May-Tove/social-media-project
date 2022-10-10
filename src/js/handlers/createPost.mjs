import { createPost } from "../api/posts/index.mjs";

export function createPostFormListener() {
  const form = document.querySelector("#createForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const form = e.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());

      createPost(post);
    });
  }
}
