// template for post
export const postTemplate = (post) => {
  let avatar = "";
  if (post.author.avatar === "") {
    avatar = "../../../images/avatar-placeholder.jpg";
  } else {
    avatar = post.author.avatar;
  }

  // Format Date
  let apiDate = post.created;
  let timestamp = new Date(apiDate).getTime();
  let day = new Date(timestamp).getDate();
  let month = new Date(timestamp).getMonth() + 1;
  let year = new Date(timestamp).getFullYear();
  let datePosted = `${day}.${month}.${year}`;

  return `<div class="bg-white p-4 rounded mb-4 shadow-sm">
      <div class="d-flex mb-3 justify-content-between">
        <div class="d-flex align-items-center">
          <img
            class="img-thumbnail rounded-circle me-3 d-flex justify-content-center align-items-center text-center"
            src="${avatar}"
            alt="Avatar"
          />
          <div>
            <h6 class="m-0">${post.author.name}</h6>
            <small class="text-muted m-0">${datePosted}</small>
          </div>
        </div>
        <div id="dropdownContainer"></div>
      </div>
      <a href="/posts/post/index.html?id=${post.id}" class="post-link">
        <div>
        <h6>${post.title}</h6>
        <p>${post.body}</p>
        <img
          src="${post.media}"
          class="img-fluid rounded mb-3 media"
        />
        </div>
      </a>
      <span class="badge rounded-pill text-bg-white mb-3">${post.tags}</span>
      <div class="d-flex align-items-center border-top pt-3">
        <button class="d-flex align-items-center like-btn" id="interactionBtn">
        <i class="fa-regular fa-thumbs-up me-1"></i>
          Like (${post._count.reactions})
        </button>
        <button class="d-flex align-items-center mx-3" id="interactionBtn">
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

/*export function postTemplate(post) {
  const template = document.querySelector("template#post");

  if (template) {
    const item = template.content.cloneNode(true);

    let avatar = "";
    if (post.author.avatar === "") {
      avatar = "../../../images/avatar-placeholder.jpg";
    } else {
      avatar = post.author.avatar;
    }

    const postAvatar = item.querySelector("img");
    postAvatar.src = avatar;

    const authorName = item.querySelector("h6");
    authorName.innerText = post.author.name;

    const datePosted = item.querySelector("small");
    datePosted.innerText = post.created;

    const title = item.querySelector("h5");
    title.innerText = post.title;

    const body = item.querySelector("p");
    body.innerText = post.body;

    const media = item.querySelector("img#postMedia");
    media.src = post.media;
    console.log(media);

    if (!media.src) {
      media.style.display = "none";
    } else {
      media.style.display = "block";
    }

    const a = item.querySelector("a");
    a.href = "/posts/post/index.html?id=" + post.id;

    console.log(item);
    return item;
  }
}*/
