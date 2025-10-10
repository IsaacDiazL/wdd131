const displayYear = document.querySelector("#currentyear");
const date = new Date();
displayYear.innerHTML = `© ${date.getFullYear()}`;

const lastModified = document.querySelector("#lastModified");
const modified =  new Date(document.lastModified);
lastModified.innerHTML = `Last modified: ${modified.toLocaleString("en-US", { dateStyle: "short", timeStyle: "short" })}`;

const menuButton = document.querySelector("#menu");
const navigationBar = document.querySelector(".navigation");

menuButton.addEventListener('click', () => {
    navigationBar.classList.toggle('show')
    menuButton.classList.toggle('show')
})