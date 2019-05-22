import { fetch } from 'whatwg-fetch';

// actions
const REQUEST_TERRITORIES = 'REQUEST_TERRITORIES';
const RECEIVE_TERRITORIES = 'RECEIVE_TERRITORIES';
const FILTER_TERRITORIES = 'FILTER_TERRITORIES';
const REQUEST_TERRITORY = 'REQUEST_TERRITORY';
const RECEIVE_TERRITORY = 'RECEIVE_TERRITORY';

// action creators

export const requestTerritories = () => ({
    type: REQUEST_TERRITORIES
});

export const receiveTerritories = data => ({
    type: RECEIVE_TERRITORIES,
    territories: data,
    receivedAt: Date.now()
});

export const filterTerritories = filter => ({
    type: FILTER_TERRITORIES,
    filter
});

export const requestTerritory = id => ({
    type: REQUEST_TERRITORY,
    territoryId: id
});

export const receiveTerritory = data => ({
    type: RECEIVE_TERRITORY,
    territory: data
});


// reducers

export const territories = (state = { isFetching: false, items: [], filter: '' }, action) => {
    switch(action.type) {
        case REQUEST_TERRITORIES:
            return Object.assign({}, state, { 
                isFetching: true
            });
        case RECEIVE_TERRITORIES:
            return Object.assign({}, state, { 
                isFetching: false, 
                items: action.territories, 
                lastUpdate: action.receivedAt 
            });
        case FILTER_TERRITORIES:
            return Object.assign({}, state, { 
                filter: action.filter
            });
        case REQUEST_TERRITORY:
            return Object.assign({}, state, { 
                territoryId: action.territoryId
            });
        case RECEIVE_TERRITORY:
            return Object.assign({}, state, { 
                territory: action.territory
            });
        default:
            return state;
    }
};


// thunks

export const fetchTerritories = () => {
    return dispatch => {
        dispatch(requestTerritories());
        return fetch('https://localhost:44324/api/territory')
            .then(response => response.json())
            .then(json => dispatch(receiveTerritories(json)))
            .then(result => dispatch(fetchTerritory(result.territories[0].id)))
            .catch(error => console.log(error))
    }
}

export const fetchTerritory = id => {
    return dispatch => {
        dispatch(requestTerritory(id));
        return fetch(`https://localhost:44324/api/territory/${id}`)
            .then(response => response.json())
            .then(json => dispatch(receiveTerritory(json)))
            .catch((error) => console.log(error))
    }
}
