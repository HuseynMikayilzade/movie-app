//=============== fetch api for cards in movies pages ============//

const row = document.querySelector(".row");

const fetchApi = () => {
  fetch("https://api.tvmaze.com/shows")
    .then((res) => res.json())
    .then((data) => {
      let col = "";
      data.forEach((item) => {
        col += `
        <div class="col-md-3 col-sm-6 mb-3 card-bg pt-3">
      <div class="card cardinfo">
          <img class="card-img-top" src="${item.image.medium}" alt="${item.name}">
          <div class="card-body d-flex justify-content-between">
              <h5 class="card-title cardname"><strong>${item.name}</strong></h5>
              <span class="imdb d-flex align-items-center"><i class="fa-regular fa-star"></i>${item.rating.average}</span>
          </div>
          <div class="card-body text-center">
              <a href="movie-details.html?=${item.id}" class="btn watch-btn text-light">More</a>
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

//=============== Movie Details Start =================//

const saveId = window.location.href.slice(
  window.location.href.length - 1,
  999999
);
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
              <img src="${item.image.original}" class="d-block mx-lg-auto img-fluid" alt="" width="700" height="500" loading="lazy">
            </div>
            <div class="col-lg-6 detail-body">
              <h1 class="display-5 fw-bold  lh-1 mb-3">${item.name}</h1>
              <p class="lead"><strong>Summary:</strong> ${item.summary}</p>
              <div class="genres"> <b>Genres: </b> ${item.genres[0]} , ${item.genres[1]} , ${item.genres[2]}</div>
              <div class=""><b>Runtime:</b> ${item.runtime} min</div>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start pt-2">
                <a href="movies.html" class="btn btn-back text-light btn-lg px-4 me-md-2">Back</a>
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
