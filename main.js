/* Changes the header to reflect my name */
const articleHeader = document.querySelector(".article__header");
articleHeader.textContent = "Welcome to the Jack Parsons blog!"

/* Adds 'important' class to all .article__header elements via a For loop */
const allArticleHeaders = document.querySelectorAll(".article__header");

for (let i = 0; i < allArticleHeaders.length; i++) {
    allArticleHeaders[i].classList.add('important'); 
}

/* Removed dashed border */
const dashedElement = document.querySelector(".dashed");
dashedElement.classList.remove("dashed");

/*  */

const goldenrod = document.querySelector(".article__footer");
console.log(goldenrod);
goldenrod.classList.add("goldenrod");