const hambutton = document.querySelector("#menu");
const mainnav = document.querySelector(".navigation");
const header = document.querySelector("header"); 
const homebutton = document.querySelector("#home");
const oldButton = document.querySelector("#old");
const newButton = document.querySelector("#new");
const largeButton = document.querySelector('#large');
const smallButton = document.querySelector('#small');
const display = document.querySelector(".img");
const titleList = document.querySelector("#subtitle");

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle('show');
})

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
    // Add more temple objects here...
    {
        templeName: "Tijuana Mexico Temple",
        location: "Tijuana, Mexico",
        dedicated: "2015, December, 13",
        area: 3100,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/tijuana-mexico-temple/tijuana-mexico-temple-14590-main.jpg"
    },
    {
        templeName: "Puebla Mexico Temple",
        location: "Puebla, Mexico",
        dedicated: "2024, May, 19",
        area: 3332,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/puebla-mexico-temple/puebla-mexico-temple-46342-main.jpg"
    },
    {
        templeName: "San Salvador El Salvador Temple",
        location: "San Salvador, El Salvador",
        dedicated: "2011, August, 21",
        area: 2600,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/_temp/135-San-Salvador-El-Salvador-Temple.jpg"
    }
];

const showTemples = temples.map((temple) =>
    `<section>
        <h2>${temple.templeName}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    </section>`
)

display.innerHTML = showTemples.join("");

homebutton.addEventListener('click', () => {
  titleList.textContent = "Home";
  display.innerHTML = showTemples.join("");
});

oldButton.addEventListener('click', () => {
  const filterOlds = temples.filter((temple) => 
    parseInt(temple.dedicated.split(", ")[0]) < 1900
  )

  const oldTemples = filterOlds.map((temple) => 
    `<section>
        <h2>${temple.templeName}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    </section>`
  )
  titleList.textContent = "Old";
  display.innerHTML = oldTemples.join("");
});

newButton.addEventListener('click', () => {
  const filternews = temples.filter((temple) => 
    parseInt(temple.dedicated.split(", ")[0]) > 2000
  )

  const newTemples = filternews.map((temple) => 
    `<section>
        <h2>${temple.templeName}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    </section>`
  )
  titleList.textContent = "New";
  display.innerHTML = newTemples.join("");
});

largeButton.addEventListener('click', () => {
  const filterlarge = temples.filter((temple) => 
    parseInt(temple.area) > 90000
  )

  const largeTemples = filterlarge.map((temple) => 
    `<section>
        <h2>${temple.templeName}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    </section>`
  )
  titleList.textContent = "Large";
  display.innerHTML = largeTemples.join("");
});

smallButton.addEventListener('click', () => {
  const filtersmall = temples.filter((temple) => 
    parseInt(temple.area) > 10000
  )

  const smallTemples = filtersmall.map((temple) => 
    `<section>
        <h2>${temple.templeName}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    </section>`
  )
  titleList.textContent = "Small";
  display.innerHTML = smallTemples.join("");
});