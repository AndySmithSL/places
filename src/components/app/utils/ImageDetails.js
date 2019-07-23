
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
        {   // Mountain(s)
            name: "alps",
            image: "alps.png"
        },
        {   // Atoll
            name: "beach",
            image: "beach.png"
        },

        {   // Cave
            name: "cave",
            image: "cave.png"
        },

        {   // World Heritage
            name: "chichen-itza",
            image: "chichen-itza.png"
        },

        {   // Reef
            name: "coral",
            image: "coral.png"
        },

        {   // Must Visit City
            name: "eiffel-tower",
            image: "eiffel-tower.png"
        },
        {   // Wildlife
            name: "elephant",
            image: "elephant.png"
        },

        {   // Hotel
            name: "hotel-star",
            image: "hotel-star.png"
        },

        {   // World Heritage Natural
            name: "landscape",
            image: "landscape.png"
        },

        {   // Island
            name: "lighthouse",
            image: "lighthouse.png"
        },

        {   // Military Base
            name: "fighter-jet",
            image: "fighter-jet.png"
        },

        {   // Forest / Jungle
            name: "forest",
            image: "forest.png"
        },

        {   // Highest Point
            name: "mountain",
            image: "mountain.png"
        },
        {   // Building / Structure
            name: "museum",
            image: "museum.png"
        },
        {   // National Park
            name: "national-park",
            image: "national-park.png"
        },
        {   // Heritage Site Cultural
            name: "pagoda",
            image: "pagoda.png"
        },

        {   // Natural Wonders
            name: "grand-canyon",
            image: "grand-canyon.png"
        },

        {   // VOR
            name: "radio-tower",
            image: "radio-tower.png"
        },

        {   // Spectacular Valley
            name: "scenic-view",
            image: "scenic-view.png"
        },

        {   // Research Base
            name: "thermometer",
            image: "thermometer.png"
        },

        {   // Region / State Park
            name: "trekking",
            image: "trekking.png"
        },

        {   // Region / State Capital
            name: "us-capitol",
            image: "us-capitol.png"
        },

        {   // Village / Hamlet
            name: "village",
            image: "village.png"
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


