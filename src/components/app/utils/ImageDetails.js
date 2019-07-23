
export const ImageDetails = {
    flagPath: "../assets/flags/",
    iconPath: "../assets/icons/",
    icons: [

        // Main

        {
            name: "around-the-globe",
            image: "around-the-globe.png"
        },
        {
            name: "home-page",
            image: "home-page.png"
        },
        {
            name: "globe",
            image: "globe.png"
        },
        {
            name: "quest",
            image: "quest.png"
        },
        {
            name: "country",
            image: "country.png"
        },
        {
            name: "place-marker",
            image: "place-marker.png"
        },
        {
            name: "great-britain",
            image: "great-britain.png"
        },
        {
            name: "picture",
            image: "picture.png"
        },
        {
            name: "road",
            image: "road.png"
        },
        {
            name: "info-squared",
            image: "info-squared.png"
        },
        {
            name: "information",
            image: "info.png"
        },
        {
            name: "world-map",
            image: "world-map.png"
        },
        {
            name: "forward",
            image: "forward.png"
        },
        {
            name: "image",
            image: "image.png"
        },
        {
            name: "journey",
            image: "journey.png"
        },
        {
            name: "route",
            image: "route.png"
        },

        //Place Groups

        {   // Airport (small)
            name: "aircraft",
            image: "aircraft.png"
        },
        {   // International Airport
            name: "airport",
            image: "airport.png"
        },
        {   // Atoll
            name: "beach",
            image: "beach.png"
        },

        {   // Cave
            name: "cave",
            image: "cave.png"
        },

        {   // Reef
            name: "coral",
            image: "coral.png"
        },

        {   // Natural Wonders
            name: "grand-canyon",
            image: "grand-canyon.png"
        },






        






        
        
        
        {
            name: "city-hall",
            image: "city-hall.png"
        },
        
        
       
        
        
        {
            name: "map",
            image: "map.png"
        },
       
        
        
        
        
    ]  
};

export const getImage = name => ImageDetails.icons.find(icon => icon.name === name);

export const getFullPathImage = name => ImageDetails.iconPath + (getImage(name) &&  getImage(name).image);

export const getFullFlagImage = image => ImageDetails.flagPath + image;


