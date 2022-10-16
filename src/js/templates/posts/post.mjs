export const postTemplate = (post) => {
  // avatar placeholder
  let avatar = "";
  if (post.author.avatar === "") {
    avatar = "/images/avatar-placeholder.jpg";
  } else {
    avatar = post.author.avatar;
  }

  // Only displaying the image in html if there is any
  let image = "";
  if (post.media) {
    image = `<img
    src="${post.media}"
    class="img-fluid rounded mb-3 media"
    alt="Image from ${post.title}"
  />`;
  }

  // Format Date
  let apiDate = post.created;
  let timestamp = new Date(apiDate).getTime();
  let day = new Date(timestamp).getDate();
  let month = new Date(timestamp).getMonth() + 1;
  let year = new Date(timestamp).getFullYear();
  let datePosted = `${day}.${month}.${year}`;

  return `<div class="bg-white p-4 rounded mb-4 shadow-sm" id="post">
      <div class="d-flex mb-3 justify-content-between">
        <div class="d-flex align-items-center">
          <img
            class="img-thumbnail rounded-circle me-3 d-flex justify-content-center align-items-center text-center"
            src="${avatar}"
            alt="${post.author.name}"
          />
          <div>
            <h6 class="m-0">${post.author.name}</h6>
            <small class="text-muted m-0">${datePosted}</small>
          </div>
        </div>
        <div id="dropdownContainer"></div>
      </div>
      <a href="/src/pages/posts/post/index.html?id=${post.id}" class="post-link">
        <div class="post-content">
        <h6>${post.title}</h6>
        <p>${post.body}</p>
        ${image}
        </div>
      </a>
      <span class="badge rounded-pill text-bg-white mb-3">${post.tags}</span>
      <div class="d-flex align-items-center border-top pt-3">
        <button class="d-flex align-items-center like-btn" id="interactionBtn" type="button">
        <i class="fa-regular fa-thumbs-up me-1"></i>
          Like (${post._count.reactions})
        </button>
        <button class="d-flex align-items-center mx-3" id="interactionBtn" type="button">
        <i class="fa-regular fa-comment me-1"></i>
          Comment (${post._count.comments})
        </button>
      </div>
      <h6 class="pb-2 mt-4 fw-semibold d-none" id="commentHeading">Comments</h6>
      <div class="comment-section">
      </div>
      <div id="createCommentForm"></div>
    </div>`;
};
