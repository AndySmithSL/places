import { fetch } from 'whatwg-fetch';

// actions
const REQUEST_CONTINENTS = 'REQUEST_CONTINENTS';
const RECEIVE_CONTINENTS = 'RECEIVE_CONTINENTS';
const FILTER_CONTINENTS = 'FILTER_CONTINENTS';
const REQUEST_CONTINENT = 'REQUEST_CONTINENT';
const RECEIVE_CONTINENT = 'RECEIVE_CONTINENT';

// action creators

export const continentsRequest = () => ({
    type: REQUEST_CONTINENTS
});

export const continentsReceive = data => ({
    type: RECEIVE_CONTINENTS,
    continents: data,
    receivedAt: Date.now()
});

export const continentsFilter = filter => ({
    type: FILTER_CONTINENTS,
    filter
});

export const continentRequest = id => ({
    type: REQUEST_CONTINENT,
    continentId: id
});

export const continentReceive = data => ({
    type: RECEIVE_CONTINENT,
    continent: data
});


// reducers

export const continents = (state = { isFetching: false, items: [], filter: '' }, action) => {
    switch(action.type) {
        case REQUEST_CONTINENTS:
            return Object.assign({}, state, { 
                isFetching: true
            });
        case RECEIVE_CONTINENTS:
            return Object.assign({}, state, { 
                isFetching: false, 
                items: action.continents, 
                lastUpdate: action.receivedAt 
            });
        case FILTER_CONTINENTS:
            return Object.assign({}, state, { 
                filter: action.filter
            });
        case REQUEST_CONTINENT:
            return Object.assign({}, state, { 
                continentId: action.continentId
            });
        case RECEIVE_CONTINENT:
            return Object.assign({}, state, { 
                continent: action.continent
            });
        default:
            return state;
    }
};




// thunks

export const fetchContinents = () => {
    return dispatch => {
        dispatch(continentsRequest());
        return fetch('https://localhost:44324/api/continent')
            .then(response => response.json())
            .then(json => dispatch(continentsReceive(json)))
            .then(result => dispatch(fetchContinent(result.continents[0].id)))
            .catch(error => console.log(error))
    }
}

export const fetchContinent = id => {
    return dispatch => {
        dispatch(continentRequest(id));
        return fetch(`https://localhost:44324/api/continent/${id}`)
            .then(response => response.json())
            .then(json => dispatch(continentReceive(json)))
            .catch((error) => console.log(error))
    }
}

// export const filterContinents = filter => {
//     return dispatch => {
//         dispatch(continentsFilter(filter));
//     }
// }
