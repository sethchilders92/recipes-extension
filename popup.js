
let ingredientList = document.querySelector('div.tag');
let title = document.querySelector('h2.title');
let description = document.querySelector('div.recipes h2 + p');

/**************************************************************************
 * Get the recipe data that was put into local storage by 'background.js'
 **************************************************************************/
chrome.storage.local.get('recipe', async data => {
  let recipe = JSON.parse(data.recipe);
  await setPopupHTML(recipe);
});

/*************************************************************************
 * Set the html in the extension's popup window to the generated content
 *************************************************************************/
async function setPopupHTML(recipe) {
  // create the '<a>' tags to put the ingredients into
  let tempIngredients = recipe.ingredients.reduce((acc, ingredient) => acc += `<a href="#">${ingredient}</a>\n`, ``)

  title.innerHTML = recipe.title;
  description.innerHTML = recipe.description
  // set the ingredients list in the html
  ingredientList.innerHTML = tempIngredients;
}

// changeColor.onclick = element => {
//   let color = element.target.value;
//   chrome.tabs.query({
//     active: true, currentWindow: true
//   }, tabs => {
//     chrome.tabs.executeScript(
//       tabs[0].id, {
//         code: 'document.body.style.backgroundColor = "' + color + '";'
//       });
//   });
// };
