export const profileTemplate = (profile) => {
  let avatar = "";
  if (profile.avatar === "") {
    avatar = "../../../images/avatar-placeholder.jpg";
  } else {
    avatar = profile.avatar;
  }

  return `
  <div class="profile-container w-100 rounded d-flex justify-content-center"
    style="background-image: url(${profile.banner})">
    <div class="large-avatar-container">
        <img src="${avatar}" alt="Profile picture of ${profile.name}" class="profile-img img-fluid rounded-circle position-absolute top-50 start-50 translate-middle">
    </div>
  </div>
  <div class="text-center mt-3 pt-5">
    <h1 class="mt-2 mb-0 profile-name">${profile.name}</h1>
    <div class="d-flex align-items-center justify-content-center m-3">
        <div class="d-flex flex-column align-items-center">
            <small class=text-center">Posts</small>
            <strong class=text-center">${profile._count.posts}</strong>
        </div>
        <div class="d-flex flex-column align-items-center mx-4">
            <small class=text-center">Followers</small>
            <strong class=text-center">${profile._count.followers}</strong>
        </div>
        <div class="d-flex flex-column align-items-center">
            <small class=text-center">Following</small>
            <strong class=text-center">${profile._count.following}</strong>
        </div>
    </div>
    <button
      class="btn btn-outline-primary btn-sm position-absolute"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
        id="editProfileBtn"
    ><i class="fa-regular fa-pen-to-square"></i>
      Edit profile
    </button>
  </div>`;
};
