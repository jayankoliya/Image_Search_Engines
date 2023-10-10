const acceskey = "oSiAJEFfZA7CQKictit6gv1KYj6i2K5g_QMrs0ReDb0";

const searchform = document.getElementById('search-form');
const searchbox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const showMoreBtn = document.getElementById('show-more-btn');

// API wit key & search method

// https://api.unsplash.com/search/photos?page=1&query=office&client_id=oSiAJEFfZA7CQKictit6gv1KYj6i2K5g_QMrs0ReDb0 
let keyword = "";
let page = 1;

showMoreBtn.addEventListener("click", ()=>{
    page++;
    searchImages();
})

async function searchImages() {
    keyword = searchbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${acceskey}&per_page=12`

    const response = await fetch(url);
    const data = await response.json();

    if (page === 1) {
        searchResult.innerHTML ="";
    }

    const results = data.results;
    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);

    })
    showMoreBtn.style.display = "block"
}

searchform.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1
})


