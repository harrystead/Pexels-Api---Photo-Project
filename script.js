const auth = "563492ad6f917000010000018bf172d1d1c74e8d8fc7a818431e8655"; 
const gallery = document.querySelector(".gallery");
const searchInput = document.querySelector(".search-input");
const form = document.querySelector(".search-form");
let searchValue;
const more = document.querySelector(".more");
let page = 1;
let fetchLink;
let currentSearch;
