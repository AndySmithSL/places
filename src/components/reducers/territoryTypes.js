import { fetch } from 'whatwg-fetch';

// actions
const REQUEST_TERRITORY_TYPES = 'REQUEST_TERRITORY_TYPES';
const RECEIVE_TERRITORY_TYPES = 'RECEIVE_TERRITORY_TYPES';
const FILTER_TERRITORY_TYPES = 'FILTER_TERRITORY_TYPES';
const REQUEST_TERRITORY_TYPE = 'REQUEST_TERRITORY_TYPE';
const RECEIVE_TERRITORY_TYPE = 'RECEIVE_TERRITORY_TYPE';

// action creators

export const requestTerritoryTypes = () => ({
    type: REQUEST_TERRITORY_TYPES
});

export const receiveTerritoryTypes = data => ({
    type: RECEIVE_TERRITORY_TYPES,
    territoryTypes: data,
    receivedAt: Date.now()
});

export const filterTerritoryTypes = filter => ({
    type: FILTER_TERRITORY_TYPES,
    filter
});

export const requestTerritoryType = id => ({
    type: REQUEST_TERRITORY_TYPE,
    territoryTypeId: id
});

export const receiveTerritoryType = data => ({
    type: RECEIVE_TERRITORY_TYPE,
    territoryType: data
});


// reducers

export const territoryTypes = (state = { isFetching: false, items: [], filter: '' }, action) => {
    switch(action.type) {
        case REQUEST_TERRITORY_TYPES:
            return Object.assign({}, state, { 
                isFetching: true
            });
        case RECEIVE_TERRITORY_TYPES:
            return Object.assign({}, state, { 
                isFetching: false, 
                items: action.territoryTypes, 
                lastUpdate: action.receivedAt 
            });
        case FILTER_TERRITORY_TYPES:
            return Object.assign({}, state, { 
                filter: action.filter
            });
        case REQUEST_TERRITORY_TYPE:
            return Object.assign({}, state, { 
                territoryTypeId: action.territoryTypeId
            });
        case RECEIVE_TERRITORY_TYPE:
            return Object.assign({}, state, { 
                territoryType: action.territoryType
            });
        default:
            return state;
    }
};


// thunks

export const fetchTerritoryTypes = () => {
    return dispatch => {
        dispatch(requestTerritoryTypes());
        return fetch('https://localhost:44324/api/territorytype')
            .then(response => response.json())
            .then(json => dispatch(receiveTerritoryTypes(json)))
            .then(result => dispatch(fetchTerritoryType(result.territoryTypes[0].id)))
            .catch(error => console.log(error))
    }
}

export const fetchTerritoryType = id => {
    return dispatch => {
        dispatch(requestTerritoryType(id));
        return fetch(`https://localhost:44324/api/territorytype/${id}`)
            .then(response => response.json())
            .then(json => dispatch(receiveTerritoryType(json)))
            .catch((error) => console.log(error))
    }
}
