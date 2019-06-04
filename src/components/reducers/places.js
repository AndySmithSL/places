import { fetch } from 'whatwg-fetch';
import { combineReducers } from 'redux';
import { updateObject, createReducer } from './commonFunctions';


// actions
export const REQUEST_PLACES = 'REQUEST_PLACES';
export const RECEIVE_PLACES = 'RECEIVE_PLACES';
export const FILTER_PLACES = 'FILTER_PLACES';
export const REQUEST_PLACE = 'REQUEST_PLACE';
export const RECEIVE_PLACE = 'RECEIVE_PLACE';


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


// reducers

// This will probably fail
const requestPlacesReducer = state => updateObject(state, { fetching: true });

const receivePlacesReducer = (state, action) => updateObject(state, { fetching: false, items: action.places });

const filterPlacesReducer = (state, action) => action.filter;

const requestPlaceReducer = (state, action) => updateObject(state, { fetching: true, id: action.id });

const receivePlaceReducer = (state, action) => updateObject(state, { fetching: false, item: action.place });


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

export const places = combineReducers ({
    places: placesReducer,
    filter: filterReducer,
    place: placeReducer
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
