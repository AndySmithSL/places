import { fetch } from 'whatwg-fetch';

// actions
const REQUEST_PLACES = 'REQUEST_PLACES';
const RECEIVE_PLACES = 'RECEIVE_PLACES';
const FILTER_PLACES = 'FILTER_PLACES';
const REQUEST_PLACE = 'REQUEST_PLACE';
const RECEIVE_PLACE = 'RECEIVE_PLACE';

// action creators

export const requestPlaces = () => ({
    type: REQUEST_PLACES
});

export const receivePlaces = places => ({
    type: RECEIVE_PLACES,
    receivedAt: Date.now(),
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

export const places = (state = { isFetching: false, items: [], filter: '', flagId: null, flag: null }, action) => {
    switch(action.type) {
        case REQUEST_PLACES:
            return Object.assign({}, state, { 
                isFetching: true
            });
        case RECEIVE_FLAGS:
            return Object.assign({}, state, { 
                isFetching: false, 
                items: action.flags, 
                lastUpdate: action.receivedAt 
            });
        case FILTER_FLAGS:
            return Object.assign({}, state, { 
                filter: action.filter
            });
        case REQUEST_FLAG:
            return Object.assign({}, state, { 
                flagId: action.flagId
            });
        case RECEIVE_FLAG:
            return Object.assign({}, state, { 
                flag: action.flag
            });
        default:
            return state;
    }
};

const places = (state = { isFetching: false, items: [], filter: '', flagId: null, flag: null }, action) => {



// thunks

export const fetchFlags = () => {
    return dispatch => {
        dispatch(requestFlags());
        return fetch('https://localhost:44324/api/flag')
            .then(response => response.json())
            .then(json => dispatch(receiveFlags(json)))
            .then(result => {
                console.log('result');
                console.log(result);
                dispatch(fetchFlag(result.flags[0].id))
            })
            .catch(error => console.log(error))
    }
}

export const fetchFlag = id => {
    return dispatch => {
        dispatch(requestFlag(id));
        return fetch(`https://localhost:44324/api/flag/${id}`)
            .then(response => response.json())
            .then(json => dispatch(receiveFlag(json)))
            .catch((error) => console.log(error))
    }
}
