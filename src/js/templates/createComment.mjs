export const createComment = () => {
  return `<form
    id="comment-form"
    class="w-100 mt-4 d-flex flex-column justify-content-end"
    >
    <textarea
      class="form-control"
      rows="2"
      aria-label="Write a comment"
      placeholder="Leave a comment..."
      required
      id="post-input"
    ></textarea>
    <div class="d-flex justify-content-end">
      <button type="submit" class="btn btn-sm btn-primary mt-1">
        Comment
      </button>
    </div>
    </form>`;
};
