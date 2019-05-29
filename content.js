// to be used on tasty.com
let link = window.location.href;

class TastyRecipe {
    constructor() {
        this.link = link; // the current page url
        this.recipeName = this.getRecipeName();
        this.ingredientsTitle = this.getIngredientsTitle();
        this.ingredients = this.formatList(document.querySelectorAll("div.ingredients__section > ul.list-unstyled > li"));
        this.prepTitle = this.getContent(document.querySelector("div.prep > div > h2"));
        this.prepSteps = this.formatList(document.querySelectorAll("div.prep ol.prep-steps > li"));
    }

    // formats and returns the title of the recipe with added information
    getRecipeName() {
        let tempTitle = this.getContent(document.querySelector("recipe-name"));
        let tempSubTitle = this.getContent(document.querySelector("div.header div > h3"));

        // trim in case 'tempSubTitle' is undefined and you have an extra space after 'tempTitle'
        return `${tempTitle} ${tempSubTitle}`.trim();
    }

    getIngredientsTitle() {
        let tempTitle = this.getContent(document.querySelector("div.ingredients-prep > div > h2"));
        let tempSubTitle = this.getContent(document.querySelector("div.ingredients-prep > div > p"));

        // trim in case 'tempSubTitle' is undefined and you have an extra space after 'tempTitle'
        return `${tempTitle} ${tempSubTitle}`.trim();
    }

    formatList(tempList) {
        // console.log(tempList)
        return [...tempList].map(listItem => this.getContent(listItem));
    }

    // check if the selector found content, then extract the text and format it with the correct number of spaces
    getContent(content) {
        return content && content.textContent ? content.textContent.replace(/\s+/gm, ' ') : '';
    }

    log() {
        console.log(`Source: ${this.link}`);
        console.log(`Recipe Name: ${this.recipeName}`);

        console.log(this.ingredientsTitle)
        this.ingredients.forEach(ingredient => console.log(ingredient));

        console.log(this.prepTitle);
        this.prepSteps.forEach(prepStep => console.log(prepStep));
    }
}

if (/^https?:\/\/tasty.co\/recipe\//gi.test(link)) {
    let recipe = new TastyRecipe();
    chrome.runtime.sendMessage({message: "sending_document", recipe: JSON.stringify(recipe)});
}


// console.log(`recipe details: ${JSON.stringify(recipe)}`)

// let ingredientNodes = recipe.ingredients.reduce((acc, ingredient) => acc += `<a href="#">${ingredient}</a>\n`, '');
// document.querySelector('tag').innerHTML = ingredientNodes;

// content.js
// JSON.stringify(document.all[0].outerHTML)
