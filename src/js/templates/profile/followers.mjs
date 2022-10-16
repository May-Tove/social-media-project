export const followers = (followers) => {
  // avatar placeholder
  let avatar = "";
  if (followers.avatar === "") {
    avatar = "../../../images/avatar-placeholder.jpg";
  } else {
    avatar = followers.avatar;
  }

  return `
  <div class="d-flex align-items-center mb-3 m-2 m-lg-0">
  <img
    class="img-thumbnail rounded-circle mb-2 me-3"
    src="${followers.avatar}"
    alt="Profile picture"
  />
  <h6 class="text-center">${followers.name}</h6>
</div>`;
};
