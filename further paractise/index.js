const searchBox = document.querySelector(".searchBox");
const searchBtn = document.querySelector(".searchBtn");
const recipecontainer = document.querySelector(".recipe-container");

const fetchRecipes =async (query) => {
    const data = await fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    const responce = await data.json();
    console.log(responce);
}

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const searchInput = searchBox.ariaValueMax.trim();
    fetchRecipes();
    console.log("Button Click");
});