const auth = "563492ad6f917000010000018bf172d1d1c74e8d8fc7a818431e8655"; 
const gallery = document.querySelector(".gallery");
const searchInput = document.querySelector(".search-input");
const form = document.querySelector(".search-form");
let searchValue;
const more = document.querySelector(".more");
let page = 1;
let fetchLink;
let currentSearch;

//Event Listeners
searchInput.addEventListener("input", updateInput);
form.addEventListener("submit", e => {
  e.preventDefault();
  currentSearch = searchValue;
  searchPhotos(searchValue);
});
more.addEventListener("click", loadMore);

function updateInput(e) {
  searchValue = e.target.value;
}

async function fetchApi(url) {
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth
      }
    });
    const data = await dataFetch.json();
    return data;
  }

  function generatePictures(data) {
    data.photos.forEach(photo => {
      const galleryImg = document.createElement("div");
      galleryImg.classList.add("gallery-img");
      galleryImg.innerHTML = `
              <div class="gallery-info">
              <p>${photo.photographer}</p>
              <a href=${photo.src.original}>Download</a>
              </div>
              <img src=${photo.src.large}></img>
              `;
      gallery.appendChild(galleryImg);
    });
  }
