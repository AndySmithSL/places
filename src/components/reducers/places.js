import { fetch } from 'whatwg-fetch';
import { combineReducers } from 'redux';
import { updateObject, createReducer } from './commonFunctions';


// actions
export const REQUEST_PLACES = 'REQUEST_PLACES';
export const RECEIVE_PLACES = 'RECEIVE_PLACES';
export const FILTER_PLACES = 'FILTER_PLACES';
export const REQUEST_PLACE = 'REQUEST_PLACE';
export const RECEIVE_PLACE = 'RECEIVE_PLACE';
export const REQUEST_FEATURED_PLACE = 'REQUEST_FEATURED_PLACE';
export const RECEIVE_FEATURED_PLACE = 'RECEIVE_FEATURED_PLACE';

export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';


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


export const requestWeather = location => ({
    type: REQUEST_WEATHER,
    location
});

export const receiveWeather = weather => ({
    type: RECEIVE_WEATHER,
    weather
});



// reducers

const requestPlacesReducer = state => updateObject(state, { fetching: true });

const receivePlacesReducer = (state, action) => updateObject(state, { fetching: false, items: action.places });

const filterPlacesReducer = (state, action) => action.filter;

const requestPlaceReducer = (state, action) => updateObject(state, { fetching: true, id: action.id });

const receivePlaceReducer = (state, action) => updateObject(state, { fetching: false, item: action.place });

const requestFeaturedPlaceReducer = (state, action) => updateObject(state, { fetching: true, id: action.id });

const receiveFeaturedPlaceReducer = (state, action) => updateObject(state, { fetching: false, item: action.place });


const requestWeatherReducer = (state, action) => updateObject(state, { fetching: true, location: action.location });

const receiveWeatherReducer = (state, action) => updateObject(state, { fetching: false, weather: action.weather });



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
    REQUEST_WEATHER: requestWeatherReducer,
    RECEIVE_WEATHER: receiveWeatherReducer
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

export const fetchWeather = location => {
    return dispatch => {
        console.log(location);
        dispatch(requestWeather(location));
        return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=c29694cf8c7aaa0a7463afb4cb872d50`)
            .then(response => response.json())
            .then(json => dispatch(receiveWeather(json)))
            .catch((error) => console.log(error))
    }
}
