let changeColor = document.getElementById('changeColor');
// console.log(changeColor);
let stuff = '';

chrome.storage.local.get('recipe', recipe => {
  // changeColor.style.backgroundColor = data.color;
  // changeColor.setAttribute('value', data.color);
  // recipe = JSON.parse(recipe)
  console.log(recipe)
});

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


let title = document.getElementsByName("h2");
console.log(title)