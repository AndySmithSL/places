import { fetch } from 'whatwg-fetch';
import { combineReducers } from 'redux';
import { updateObject, createReducer } from './commonFunctions';


// action constants
export const REQUEST_PLACES = 'REQUEST_PLACES';
export const RECEIVE_PLACES = 'RECEIVE_PLACES';
export const FILTER_PLACES = 'FILTER_PLACES';
export const REQUEST_PLACE = 'REQUEST_PLACE';
export const RECEIVE_PLACE = 'RECEIVE_PLACE';
export const REQUEST_FEATURED_PLACE = 'REQUEST_FEATURED_PLACE';
export const RECEIVE_FEATURED_PLACE = 'RECEIVE_FEATURED_PLACE';

export const REQUEST_OPEN_WEATHER = 'REQUEST_OPEN_WEATHER';
export const RECEIVE_OPEN_WEATHER = 'RECEIVE_OPEN_WEATHER';
export const REQUEST_DARK_SKY_WEATHER = 'REQUEST_DARK_SKY_WEATHER';
export const RECEIVE_DARK_SKY_WEATHER = 'RECEIVE_DARK_SKY_WEATHER';


// action creators

export const requestPlaces = () => ({
    type: REQUEST_PLACES
});

export const receivePlaces = places => ({ 
    type: RECEIVE_PLACES,
    places
});

export const filterPlaces = filter => ({
    type: FILTER_PLACES,
    filter
});

export const requestPlace = id => ({
    type: REQUEST_PLACE,
    id
});

export const receivePlace = place => ({
    type: RECEIVE_PLACE,
    place
});

export const requestFeaturedPlace = id => ({
    type: REQUEST_FEATURED_PLACE,
    id
});

export const receiveFeaturedPlace = place => ({
    type: RECEIVE_FEATURED_PLACE,
    place
});


export const requestOpenWeather = location => ({
    type: REQUEST_OPEN_WEATHER,
    location
});

export const receiveOpenWeather = weather => ({
    type: RECEIVE_OPEN_WEATHER,
    weather
});

export const requestDarkSkyWeather = (latitude, longitude) => ({
    type: REQUEST_DARK_SKY_WEATHER,
    latitude,
    longitude
});

export const receiveDarkSkyWeather = results => ({
    type: RECEIVE_DARK_SKY_WEATHER,
    results
});



// reducers

const requestPlacesReducer = state => updateObject(state, { fetching: true });

const receivePlacesReducer = (state, action) => updateObject(state, { fetching: false, items: action.places });

const filterPlacesReducer = (state, action) => action.filter;

const requestPlaceReducer = (state, action) => updateObject(state, { fetching: true, id: action.id });

const receivePlaceReducer = (state, action) => updateObject(state, { fetching: false, item: action.place });

const requestFeaturedPlaceReducer = (state, action) => updateObject(state, { fetching: true, id: action.id });

const receiveFeaturedPlaceReducer = (state, action) => updateObject(state, { fetching: false, item: action.place });


const requestOpenWeatherReducer = (state, action) => updateObject(state, { fetching: true, location: action.location });

const receiveOpenWeatherReducer = (state, action) => updateObject(state, { fetching: false, weather: action.weather });


const requestDarkSkyWeatherReducer = (state, action) => updateObject(state, { fetching: true, latitude: action.latitude, longitude: action.longitude });

const receiveDarkSkyWeatherReducer = (state, action) => updateObject(state, { fetching: false, results: action.results });






const placesReducer = createReducer({ fetching: false, items: [] }, {
    REQUEST_PLACES: requestPlacesReducer,
    RECEIVE_PLACES: receivePlacesReducer
});

const filterReducer = createReducer('', {
    FILTER_PLACES: filterPlacesReducer
});

const placeReducer = createReducer({ fetching: false, id: null, item: null }, {
    REQUEST_PLACE: requestPlaceReducer,
    RECEIVE_PLACE: receivePlaceReducer
})

const featuredPlaceReducer = createReducer({ fetching: false, id: null, item: null }, {
    REQUEST_FEATURED_PLACE: requestFeaturedPlaceReducer,
    RECEIVE_FEATURED_PLACE: receiveFeaturedPlaceReducer
})

const weatherReducer = createReducer({ fetching: false, location: null, weather: null }, {
    REQUEST_OPEN_WEATHER: requestOpenWeatherReducer,
    RECEIVE_OPEN_WEATHER: receiveOpenWeatherReducer,
    REQUEST_DARK_SKY_WEATHER: requestDarkSkyWeatherReducer,
    RECEIVE_DARK_SKY_WEATHER: receiveDarkSkyWeatherReducer
})

export const places = combineReducers ({
    places: placesReducer,
    filter: filterReducer,
    place: placeReducer,
    featuredPlace: featuredPlaceReducer,
    weather: weatherReducer
});


// thunks

export const fetchPlaces = () => {
    return dispatch => {
        dispatch(requestPlaces());
        return fetch('https://localhost:44324/api/place')
            .then(response => response.json())
            .then(json => dispatch(receivePlaces(json)))
            .then(result => dispatch(fetchPlace(result.places[0].id)))
            .catch(error => console.log(error))
    }
}

export const fetchPlace = id => {
    return dispatch => {
        dispatch(requestPlace(id));
        return fetch(`https://localhost:44324/api/place/${id}`)
            .then(response => response.json())
            .then(json => dispatch(receivePlace(json)))
            .catch((error) => console.log(error))
    }
}

export const fetchFeaturedPlace = id => {
    return dispatch => {
        dispatch(requestFeaturedPlace(id));
        return fetch(`https://localhost:44324/api/place/${id}`)
            .then(response => response.json())
            .then(json => dispatch(receiveFeaturedPlace(json)))
            .catch((error) => console.log(error))
    }
}

export const fetchOpenWeather = location => {
    return dispatch => {
        console.log(location);
        dispatch(requestOpenWeather(location));
        return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=c29694cf8c7aaa0a7463afb4cb872d50`)
            .then(response => response.json())
            .then(json => dispatch(receiveOpenWeather(json)))
            .catch((error) => console.log(error))
    }
}

export const fetchDarkSkyWeather = (latitude, longitude) => {
    return dispatch => {
        dispatch(requestDarkSkyWeather(latitude, longitude));
        return fetch(`https://api.darksky.net/forecast/8dda2a9a80c310895992eb7e8b4ec034/${latitude},${longitude}`, {mode: 'no-cors'})
            .then(response => response.json())
            .then(json => dispatch(receiveDarkSkyWeather(json)))
            .catch((error) => console.log(error))
    }
}
