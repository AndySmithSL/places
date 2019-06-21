
export const ImageDetails = {
    flagPath: "../assets/flags/",
    iconPath: "../assets/icons/",
    icons: [
        {
            name: "aircraft",
            image: "aircraft.png"
        },
        {
            name: "airport",
            image: "airport.png"
        },
        {
            name: "around-the-globe",
            image: "around-the-globe.png"
        },
        {
            name: "city-hall",
            image: "city-hall.png"
        },
        {
            name: "country",
            image: "country.png"
        },
        {
            name: "forward",
            image: "forward.png"
        },
        {
            name: "globe",
            image: "globe.png"
        },
        {
            name: "great-britain",
            image: "great-britain.png"
        },
        {
            name: "home-page",
            image: "home-page.png"
        },
        {
            name: "image",
            image: "image.png"
        },
        {
            name: "information",
            image: "info.png"
        },
        {
            name: "journey",
            image: "journey.png"
        },
        {
            name: "map",
            image: "map.png"
        },
        {
            name: "picture",
            image: "picture.png"
        },
        {
            name: "place-marker",
            image: "place-marker.png"
        },
        {
            name: "road",
            image: "road.png"
        },
        {
            name: "route",
            image: "route.png"
        },
        {
            name: "world-map",
            image: "world-map.png"
        }
    ]  
};

export const getImage = name => ImageDetails.icons.find(icon => icon.name === name);

export const getFullPathImage = name => ImageDetails.iconPath + (getImage(name) &&  getImage(name).image);

export const getFullFlagImage = image => ImageDetails.flagPath + image;


