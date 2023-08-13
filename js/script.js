const burgerMenu = document.querySelector(".intro-mobile");
const burgerCatalog = document.querySelector(".burger-catalog");
const catalogList = document.querySelector(".catalog-list");
const filterButton = document.querySelector(".catalog-products__filter");
const catalogParams = document.querySelector(".catalog-params");

function toggleMenu() {
    burgerMenu.classList.toggle("active");
}
function toggleCatalog() {
    burgerCatalog.classList.toggle("active");
    catalogList.classList.toggle("active");
}

function Showfilter() {
    catalogParams.classList.toggle("active");
}

burgerMenu.addEventListener("click", toggleMenu);
burgerCatalog.addEventListener("click", toggleCatalog);
filterButton.addEventListener("click", Showfilter);
