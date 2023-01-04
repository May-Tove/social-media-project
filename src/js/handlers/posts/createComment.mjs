import { comment } from "../../api/posts/comment.mjs";

export async function commentListener() {
  const commentForm = document.querySelector("#comment-form");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (commentForm) {
    commentForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const data = new FormData(form);
      const body = data.get("body");

      await comment(id, { body });
    });
  }
}
