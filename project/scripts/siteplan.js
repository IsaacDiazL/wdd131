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
});

const places = [
    {
        name: "Nature & Adventure",
        imgUrl: "images/nature.webp",
    },
    {
        name: "Beaches & Surfing",
        imgUrl: "images/tunco-beach.webp"
    },
    {
        name: "Cities & Culture",
        imgUrl: "images/cities.webp"
    },
    {
        name: "Archaeo logical Sites",
        imgUrl: "images/archaeo.webp"
    },
    {
        name: "Tourist Routes & Villages",
        imgUrl: "images/routes.webp"
    }
];
const naturePlaces = [
    {
        name: "El Boquerón National Park (San Salvador)",
        desc: "Located on the crater of the San Salvador volcano, El Boquerón offers scenic hiking trails, panoramic viewpoints, and fresh mountain air. The main crater is about 1.5 km wide and provides stunning views of the city below."
    },
    {
        name: "Izalco Volcano",
        desc: 'Known as the "Lighthouse of the Pacific," Izalco is one of the youngest volcanoes in the Americas. Adventurous visitors can hike to the top with local guides and enjoy breathtaking views.'
    },
    {
        name: "Lake Coatepeque",
        desc: "A beautiful volcanic lake with turquoise waters, perfect for kayaking, swimming, and boat tours. Lakeside restaurants and vacation homes offer great views and relaxing experiences."
    },
    {
        name: "El Imposible National Park",
        desc: "One of El Salvador's most important natural reserves. El Imposible offers hiking trails, birdwatching, waterfalls, and unique flora and fauna in a lush mountain environment."
    }
];
const beachPlaces = [
    {
        name: "El Tunco Beach",
        desc: "A small, vibrant surf town famous for its black sand beach, world-class waves, and lively nightlife. A favorite among international backpackers and surfers."
    },
    {
        name: "El Zonte Beach",
        desc: "A laid-back surf destination with a friendly, peaceful vibe. Known for consistent waves, yoga retreats, and a growing eco-tourism scene."
    },
    {
        name: "Costa del Sol",
        desc: "One of the longest and most popular beaches in the country, ideal for families and beach lovers. Features beachfront restaurants, hotels, and calm waves."
    }
];
const cityPlaces = [
    {
        name: "Suchitoto",
        desc: "A charming colonial town with cobblestone streets, art galleries, historic churches, and views of Lake Suchitlán. Known as a cultural and artistic hub of El Salvador."
    },
    {
        name: "Santa Ana",
        desc: "El Salvador's second-largest city, featuring the stunning neo-Gothic Cathedral of Santa Ana, the historic Santa Ana Theater, and access to the Santa Ana Volcano."
    },
    {
        name: "San Salvador (Capital City)",
        desc: "The dynamic capital of El Salvador. Must-visit spots include the National Palace, Metropolitan Cathedral, Museum of Anthropology (MUNA), and the iconic Savior of the World Monument."
    }
];
const archeoPlaces = [
    {
        name: "Joya de Cerén",
        desc: "A UNESCO World Heritage Site often referred to as the “Pompeii of the Americas.” It preserves a pre-Hispanic village buried by volcanic ash, offering a rare glimpse into ancient daily life."
    },
    {
        name: "Tazumal (Chalchuapa)",
        desc: "One of the most important Maya ruins in El Salvador. Features impressive pyramids, tombs, and artifacts in a well-maintained archaeological park."
    }
];
const routePlaces = [
    {
        name: "Ruta de Las Flores",
        desc: "A scenic route through colorful mountain towns like Juayúa, Apaneca, Ataco, Nahuizalco, and Salcoatitán. Known for coffee plantations, weekend food festivals, crafts, murals, and cool weather."
    }
];

const placesSection = document.querySelector(".placesSection");
places.forEach((place) => {
    let card = document.createElement('div');
    let count = places.indexOf(place) + 1;
    card.innerHTML = `
        <img src="${place.imgUrl}" alt="${place.name}" loading="lazy">
        <a href="#placeOpt${count}">${place.name}</a>
        `
    placesSection.appendChild(card);
});

const natureOption = document.querySelector("#placeOpt1");
naturePlaces.forEach((place) => {
    let card = document.createElement('p');
    card.innerHTML = `
        <strong>${place.name}</strong>: <br>${place.desc}
    `
    natureOption.appendChild(card);
});

const beachOption = document.querySelector("#placeOpt2");
beachPlaces.forEach((place) => {
    let card = document.createElement('p');
    card.innerHTML = `
        <strong>${place.name}</strong>: <br>${place.desc}
    `
    beachOption.appendChild(card)
});

const citiesOption = document.querySelector("#placeOpt3");
cityPlaces.forEach((place) => {
    let card = document.createElement('p');
    card.innerHTML = `
        <strong>${place.name}</strong>: <br>${place.desc}
    `
    citiesOption.appendChild(card);
});

const archaeoOption = document.querySelector("#placeOpt4");
archeoPlaces.forEach((place) => {
    let card = document.createElement('p');
    card.innerHTML = `
        <strong>${place.name}</strong>: <br>${place.desc}
    `
    archaeoOption.appendChild(card);
});

const routeOption = document.querySelector("#placeOpt5");
routePlaces.forEach((place) => {
    let card = document.createElement('p');
    card.innerHTML = `
        <strong>${place.name}</strong>: <br>${place.desc}
    `
    routeOption.appendChild(card);
});