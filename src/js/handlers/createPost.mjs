import { createPost } from "../api/posts/index.mjs";
export function createPostFormListener() {
  const form = document.querySelector("#createForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());

      createPost(post);
      console.log(post);
      window.location.reload();
      form.reset();
    });
  }
}
