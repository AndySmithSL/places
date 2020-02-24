import { fetch } from 'whatwg-fetch';
import { combineReducers } from 'redux';

import { updateObject, createReducer } from './commonFunctions';


// actions
const REQUEST_ROUTE_LEGS = 'REQUEST_ROUTE_LEGS';
const RECEIVE_ROUTE_LEGS = 'RECEIVE_ROUTE_LEGS';
const FILTER_ROUTE_LEGS = 'FILTER_ROUTE_LEGS';
const REQUEST_ROUTE_LEG = 'REQUEST_ROUTE_LEG';
const RECEIVE_ROUTE_LEG = 'RECEIVE_ROUTE_LEG';


// action creators

export const requestRouteLegs = () => ({
    type: REQUEST_ROUTE_LEGS
});

export const receiveRouteLegs = routeLegs => ({
    type: RECEIVE_ROUTE_LEGS,
    routeLegs
});

export const filterRouteLegs = filter => ({
    type: FILTER_ROUTE_LEGS,
    filter
});

export const requestRouteLeg = id => ({
    type: REQUEST_ROUTE_LEG,
    id
});

export const receiveRouteLeg = routeLeg => ({
    type: RECEIVE_ROUTE_LEG,
    routeLeg
});


// reducers

const requestRouteLegsReducer = state => updateObject(state, { fetching: true });

const receiveRouteLegsReducer = (state, action) => updateObject(state, { fetching: false, items: action.routeLegs });

const filterRouteLegsReducer = (state, action) => action.filter;

const requestRouteLegReducer = (state, action) => updateObject(state, { fetching: true, id: action.id });

const receiveRouteLegReducer = (state, action) => updateObject(state, { fetching: false, item: action.routeLeg });


const routeLegsReducer = createReducer({ fetching: false, items: [] }, {
    REQUEST_ROUTE_LEGS: requestRouteLegsReducer,
    RECEIVE_ROUTE_LEGS: receiveRouteLegsReducer
});

const filterReducer = createReducer('', {
    FILTER_ROUTE_LEGS: filterRouteLegsReducer
});

const routeLegReducer = createReducer({ fetching: false, id: null, item: null }, {
    REQUEST_ROUTE_LEG: requestRouteLegReducer,
    RECEIVE_ROUTE_LEG: receiveRouteLegReducer
})

export const routeLegsMain = combineReducers ({
    routeLegs: routeLegsReducer,
    filter: filterReducer,
    routeLeg: routeLegReducer
});


// thunks

export const fetchRouteLegs = () => {
    return dispatch => {
        dispatch(requestRouteLegs());
        return fetch('https://localhost:44324/api/routeLeg')
            .then(response => response.json())
            .then(json => dispatch(receiveRouteLegs(json)))
            .then(result => dispatch(fetchRouteLeg(result.routeLegs[0].id)))
            .catch(error => console.log(error))
    }
}

export const fetchRouteLeg = id => {
    return dispatch => {
        dispatch(requestRouteLeg(id));
        return fetch(`https://localhost:44324/api/routeLeg/${id}`)
            .then(response => response.json())
            .then(json => dispatch(receiveRouteLeg(json)))
            .catch((error) => console.log(error))
    }
}
