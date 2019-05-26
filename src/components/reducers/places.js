import { fetch } from 'whatwg-fetch';

const updateObject = (oldObject, newValues) => Object.assign({}, oldObject, newValues);



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

const initialState = {
    fetching: false,
    items: [],
    filter: '',
    placeId: null,
    place: null
}

export const places = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_PLACES:
            return requestPlacesReducer(state);
        case RECEIVE_PLACES:
            return receivePlacesReducer(state, action);
        case FILTER_PLACES:
            return filterPlacesReducer(state, action);
        case REQUEST_PLACE:
            return updateObject(state, { placeId: action.id });
        case RECEIVE_PLACE:
            return updateObject(state, { place: action.place });
        default:
            return state;
    }
};

const requestPlacesReducer = (state) => updateObject(state, { fetching: true });

const receivePlacesReducer = (state, action) => updateObject(state, { fetching: false, items: action.places });

const filterPlacesReducer = (state, action) => updateObject(state, { filter: action.filter });





// thunks

export const fetchPlaces = () => {
    return dispatch => {
        dispatch(requestPlaces());
        return fetch('https://localhost:44324/api/place')
            .then(response => response.json())
            .then(json => dispatch(receivePlaces(json)))
            .then(result => {
                console.log('result');
                console.log(result);
                dispatch(fetchPlace(result.places[0].id))
            })
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
