////IIFE Immediately invoked function expressions
//(async function () {
//const response = await fetch("./recipes.json");
//const recipes = await response.json();
////searchbar
//const inputElem = document.getElementById("searchInput");
////btn
//const btnElem = document.getElementById("searchBtn");
////ul
//const listElem = document.getElementById("recipe-list");
////recipe Deatils
//const detailsElem =document.getElementById("recipeDetailsContainer");
//
//
//function loadRecipeDetails(recipe){
//console.log(recipe);
//detailsElem.innerHTML = `
//<h2 class="tittle">${recipe.title}</h2>
//<ul>${recipe.ingredients.map(function (ingredients){
//  return "<li>"+ingredients+"</li>"
//}).join("")}</ul>
//<h3>Instruction</h3>
//<div>${recipe.instructions}</div>
//<h4>Author</h4>
//<div>${recipe.author}</div>
//<a href="${recipe.url}">visit Site</a>
//`;
//}

//
//function displaySearchResults(results){
//    listElem.innerHTML = "";
//  results.forEach(function(recipe){
//   const li = document.createElement("li");
//   const listItem = `
//   <h2>${recipe.title}</h2>
//   <div class="description">${recipe.description}</div>
//   `
//    li.innerHTML = listItem;
//    li.addEventListener("click", function(){
//     loadRecipeDetails(recipe)
//    })
//    listElem.appendChild(li);
//  })
//}

//
//function search(){
//    const qurey = inputElem.value.toLowerCase();
//    const results = recipes.filter(function(recipe){
//       return (recipe.title.toLowerCase().includes(qurey)||recipe.ingredients.join(" ").toLowerCase().includes(qurey));
//    })
//    displaySearchResults(results);
//}
//
//btnElem.addEventListener("click", search);
//})();

(async function(){
  
  const response = await fetch("./recipes.json");
  const recipes = await response.json();
  //search bar
  const inputElem = document.getElementById("searchInput")
  //search btn
  const searchBtn = document.getElementById("searchBtn")
  //ul
  const listElem = document.getElementById("recipe-list");
  //recipes details
  const detailsElem = document.getElementById("recipeDetailsContainer");

  function loadRecipes(recipe) {
    console.log(recipe);
    detailsElem.innerHTML = `
    <h2 class="title">${recipe.title}</h2>
    <ul>${recipe.ingredients.map(function(ingredients){
      return "<li>"+ingredients+"</li>"
    }).join("")}</ul>
    <h3>Instructions</h3>
    <p>${recipe.instructions}</p>
    <h4>Author</h4>
    <p>${recipe.author}</p>
    <a href="https://www.bbcgoodfood.com/recipes/2793/christmas-pie">Visit Site</a>
    `
  }

  function displaySearchRecipes(results){
  listElem.innerHTML = "";
  results.forEach(function(recipe){
  const li = document.createElement("li");
  const listItem = `
  <h2>${recipe.title}</h2>
  <div class="description">${recipe.description}</div>
  `
  li.innerHTML = listItem;
  li.addEventListener("click", function(){
    loadRecipes(recipe);
  })
  listElem.appendChild(li)
  })
}

 function search(){
    const query = inputElem.value.toLowerCase();
    const results = recipes.filter(function(recipe){
      return (recipe.title.toLowerCase().includes(query) || recipe.ingredients.join(" ").toLowerCase().includes(query));
    })
    displaySearchRecipes(results)
  }
  searchBtn.addEventListener("click", search);

})();