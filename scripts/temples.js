const hambutton = document.querySelector("#menu");
const mainnav = document.querySelector(".navigation");
const header = document.querySelector("header"); 


hambutton.addEventListener('click', () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle('show');
})