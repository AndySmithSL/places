import { fetch } from 'whatwg-fetch';
import { combineReducers } from 'redux';
import { updateObject, createReducer } from './commonFunctions';


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
    territoryTypes: data
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

const requestTerritoryTypesReducer = state => updateObject(state, { fetching: true });

const receiveTerritoryTypesReducer = (state, action) => updateObject(state, { fetching: false, items: action.territoryTypes });

const filterTerritoryTypesReducer = (state, action) => action.filter;

const requestTerritoryTypeReducer = (state, action) => updateObject(state, { fetching: true, id: action.id });

const receiveTerritoryTypeReducer = (state, action) => updateObject(state, { fetching: false, item: action.territoryType });

const territoryTypesReducer = createReducer({ fetching: false, items: [] }, {
    REQUEST_TERRITORY_TYPES: requestTerritoryTypesReducer,
    RECEIVE_TERRITORY_TYPES: receiveTerritoryTypesReducer
});

const filterReducer = createReducer('', {
    FILTER_TERRITORY_TYPES: filterTerritoryTypesReducer
});

const territoryTypeReducer = createReducer({ fetching: false, id: null, item: null }, {
    REQUEST_TERRITORY_TYPE: requestTerritoryTypeReducer,
    RECEIVE_TERRITORY_TYPE: receiveTerritoryTypeReducer
})

export const territoryTypes = combineReducers ({
    territoryTypes: territoryTypesReducer,
    filter: filterReducer,
    territoryType: territoryTypeReducer
});


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
        return fetch(`https://localhost:44324/api/territoryType/${id}`)
            .then(response => response.json())
            .then(json => dispatch(receiveTerritoryType(json)))
            .catch((error) => console.log(error))
    }
}
