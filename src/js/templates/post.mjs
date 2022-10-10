import { get } from "../storage/index.mjs";

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
            alt="Profile picture of ${post.author.name}"
          />
          <div>
            <h6 class="m-0">${post.author.name}</h6>
            <small class="text-muted m-0">${datePosted}</small>
          </div>
        </div>
        <div id="dropdownContainer"></div>
      </div>
      <a href="/posts/post/index.html?id=${post.id}" class="post-link">
        <h6>${post.title}</h6>
        <p>${post.body}</p>
        <img
          src="${post.media}"
          class="img-fluid rounded mb-3 media"
        />
      </a>
      <span class="badge rounded-pill text-bg-secondary mb-3">${post.tags}</span>
      <div class="d-flex align-items-center border-top pt-3">
        <button class="d-flex align-items-center" id="interactionBtn">
        <i class="fa-regular fa-hand-spock me-1"></i>
          Like (${post._count.reactions})
        </button>
        <button class="d-flex align-items-center mx-3" id="interactionBtn">
        <i class="fa-regular fa-comment me-1"></i>
          Comment (${post._count.comments})
        </button>
      </div>
      <h6 class="border-bottom pb-2 mt-4 fw-semibold d-none" id="commentHeading">Comments</h6>
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

/*export const displayPosts = (posts) => {
  const htmlString = posts
    .map((post) => {
      // If no avatar - display placeholder avatar
      let avatar = "";
      if (post.author.avatar === "") {
        avatar = "../../../images/avatar-placeholder.jpg";
      } else {
        avatar = post.author.avatar;
      }

      const loggedInUser = get("user".name);
      if (post.author === loggedInUser) {
        return ` <div class="d-flex">
        <button title="Edit post" class="border-0 d-flex align-items-top p-0 me-2" id="edit-btn" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-pencil-square">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
      </svg>
          </button>
          <button title="Delete post" class="border-0 d-flex align-items-top p-0" id="delete-btn" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-trash3">
          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
        </svg>
            </button>
      </div> `;
      }

      // Format Date
      let apiDate = post.created;
      let timestamp = new Date(apiDate).getTime();
      let day = new Date(timestamp).getDate();
      let month = new Date(timestamp).getMonth() + 1;
      let year = new Date(timestamp).getFullYear();
      let hour = new Date(timestamp).getHours();
      let minutes = new Date(timestamp).getMinutes();
      let datePosted = `${day}.${month}.${year}`;

      return `<article class="bg-white p-4 rounded mb-4 shadow-sm">
                <div class="d-flex mb-3 justify-content-between">
                <div class="d-flex align-items-center">
                  <img
                    class="img-thumbnail rounded-circle me-3 d-flex justify-content-center align-items-center text-center"
                    src="${avatar}"
                    alt="Profile picture"
                  />
                  <div>
                    <h6 class="m-0">${post.author.name}</h6>
                    <small class="text-muted m-0">${datePosted}</small>
                  </div>
                  </div>

                </div>
                <a href="../../../posts/post/index.html?id=${post.id}" class="border-bottom post-link">
                  <h5>${post.title}</h5>
                  <p>${post.body}</p>
                  <img src="${post.media}" class="img-fluid rounded mb-3 media-post"/>
                </a>
                <div class="d-flex align-items-center mt-3">
                  <div class="d-flex align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      class="bi bi-heart me-1"
                      aria-label="Heart icon"
                    >
                      <path
                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                      />
                    </svg>
                    Like
                  </div>
                  <div class="d-flex align-items-center mx-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      class="bi bi-chat me-1"
                      aria-label="Chat icon"
                    >
                      <path
                        d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
                      />
                    </svg>
                    Comment
                  </div>
                </div>
              </article>`;
    })
    .join("");
  const postsContainer = document.querySelector("#feed-container");
  postsContainer.innerHTML = htmlString;
};*/
