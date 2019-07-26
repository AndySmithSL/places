
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
        {   // Town
            name: "apartment",
            image: "apartment.png"
        },
        {   // Atoll / Island / Island Group
            name: "beach",
            image: "beach.png"
        },
        {   // Provincial / Regional Park
            name: "bear-footprint",
            image: "bear-footprint.png"
        },
        {   // Settlement
            name: "bungalow",
            image: "bungalow.png"
        },


        

        {   // Cave
            name: "cave",
            image: "cave.png"
        },

        {   // World Heritage
            name: "chichen-itza",
            image: "chichen-itza.png"
        },

        {   // Major Urban Area
            name: "city",
            image: "city.png"
        },

        {   // Municipality
            name: "city-hall",
            image: "city-hall.png"
        },

        

        {   // City
            name: "company",
            image: "company.png"
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

        {   // Suburb
            name: "house-with-a-garden",
            image: "house-with-a-garden.png"
        },


        

        {   // Historic Site
            name: "monument",
            image: "monument.png"
        },

        
        {   // Highest Point
            name: "mountain",
            image: "mountain.png"
        },
        {   // Building / Structure
            name: "museum",
            image: "museum.png"
        },

        {   // National Heritage Area
            name: "obelisk",
            image: "obelisk.png"
        },
        
        {   // National Park
            name: "national-park",
            image: "national-park.png"
        },
        {   // Atoll
            name: "palm-tree",
            image: "palm-tree.png"
        },


        
        {   // Heritage Site Cultural
            name: "pagoda",
            image: "pagoda.png"
        },



        {   // Capital
            name: "parliament",
            image: "parliament.png"
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

        {   // Commune
            name: "school-building",
            image: "school-building.png"
        },

        {   // New Seven Wonders of the World
            name: "taj-mahal",
            image: "taj-mahal.png"
        },


        

        {   // Research Base
            name: "thermometer",
            image: "thermometer.png"
        },

        {   // Region / State Park
            name: "trekking",
            image: "trekking.png"
        },

        {   // Must Visit Destination
            name: "triumphal-arch",
            image: "triumphal-arch.png"
        },


        

        {   // Region / State Capital
            name: "us-capitol",
            image: "us-capitol.png"
        },

        {   // Village / Hamlet
            name: "village",
            image: "village.png"
        },
        {   // Waterfall
            name: "waterfall",
            image: "waterfall.png"
        },
    ]  
};

export const getImage = name => ImageDetails.icons.find(icon => icon.name === name);

export const getFullPathImage = name => ImageDetails.iconPath + (getImage(name) &&  getImage(name).image);

export const getFullFlagImage = image => ImageDetails.flagPath + image;


