// not in use at the moment, not done yet
export const followersTemplate = (followers) => {
  return `
      <div
        class="col col-sm-2 col-lg-12 d-flex flex-column flex-lg-row align-items-center mb-3 m-2 m-lg-0"
      >
        <img
          class="img-thumbnail rounded-circle mb-2 me-lg-3"
          src="../images/pfp-1.jpg"
          alt="Profile picture"
        />
        <h6 class="text-center">Sarah Jones</h6>
      </div>
      <div
        class="col col-sm-2 col-lg-12 d-flex flex-column flex-lg-row align-items-center mb-3 m-2 m-lg-0"
      >
        <img
          class="img-thumbnail rounded-circle mb-2 me-lg-3"
          src="../images/pfp-2.jpg"
          alt="Profile picture"
        />
        <h6 class="text-center">David Smith</h6>
      </div>
    <a href="#" class="mt-3">View all (54)</a>`;
};
