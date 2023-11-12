// fetch api for cards in movies pages
const row = document.querySelector(".row");

const fetchApi = () => {
  fetch("https://api.tvmaze.com/shows")
    .then((res) => res.json())
    .then((data) => {
      let col = "";
      data.forEach((item) => {
        col += `
            <div class="col-12 col-sm-6 col-md-3">
            <div class="card" >
                <img src="${item.image.medium}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${item.name}</h5>
                  <p class="card-text">${item.rating.average}</p>
                  <a href="movie-details.html?=${item.id}" class="btn btn-primary">Read More</a>
                </div>
              </div>
        </div>
            `;
      });
      row.innerHTML = col;
    })
    .catch((err) => console.log(err));
};
fetchApi();


// Fetch Api End


// Movie Details Start



const saveId = window.location.href.slice(66, 999999);
console.log(saveId);
const detailsAll = document.querySelector(".details-all");
const detailsData = () => {
  fetch("https://api.tvmaze.com/shows")
    .then((res) => res.json())
    .then((data) => {
      let detailsdatacon = "";
      data.forEach((item) => {
        // == qoysaqda olar onda tostring lazim olmuyacaq //
        if (item.id.toString() === saveId) {
          detailsdatacon += `
            <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src="${item.image.original}" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">${item.name}</h1>
        <p class="lead">${item.summary}</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <a href="movies.html" class="btn btn-primary btn-lg px-4 me-md-2">Back</a>
        </div>
      </div>
    </div>
  </div>
            `;
        }
      });
      detailsAll.innerHTML = detailsdatacon;
    });
};
detailsData();

//======================================= Movie Details End ===================================

// Sign In Start







//=========================================== Sign In End =============================================================



