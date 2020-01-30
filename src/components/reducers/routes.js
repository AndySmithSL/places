import { fetch } from 'whatwg-fetch';
import { combineReducers } from 'redux';

import { updateObject, createReducer } from './commonFunctions';


// actions
const REQUEST_ROUTES = 'REQUEST_ROUTES';
const RECEIVE_ROUTES = 'RECEIVE_ROUTES';
const FILTER_ROUTES = 'FILTER_ROUTES';
const REQUEST_ROUTE = 'REQUEST_ROUTE';
const RECEIVE_ROUTE = 'RECEIVE_ROUTE';


// action creators

export const requestRoutes = () => ({
    type: REQUEST_ROUTES
});

export const receiveRoutes = routes => ({
    type: RECEIVE_ROUTES,
    routes
});

export const filterRoutes = filter => ({
    type: FILTER_ROUTES,
    filter
});

export const requestRoute = id => ({
    type: REQUEST_ROUTE,
    id
});

export const receiveRoute = route => ({
    type: RECEIVE_ROUTE,
    route
});


// reducers

const requestRoutesReducer = (state, action) => updateObject(state, { fetching: true });

const receiveRoutesReducer = (state, action) => updateObject(state, { fetching: false, items: action.routes });

const filterRoutesReducer = (state, action) => action.filter;

const requestRouteReducer = (state, action) => updateObject(state, { fetching: true, id: action.id });

const receiveRouteReducer = (state, action) => updateObject(state, { fetching: false, item: action.route });


const routesReducer = createReducer({ fetching: false, items: [] }, {
    REQUEST_ROUTES: requestRoutesReducer,
    RECEIVE_ROUTES: receiveRoutesReducer
});

const filterReducer = createReducer('', {
    FILTER_ROUTES: filterRoutesReducer
});

const routeReducer = createReducer({ fetching: false, id: null, item: null }, {
    REQUEST_ROUTE: requestRouteReducer,
    RECEIVE_ROUTE: receiveRouteReducer
})

export const routes = combineReducers ({
    routes: routesReducer,
    filter: filterReducer,
    route: routeReducer
});


// thunks

export const fetchRoutes = () => {
    return dispatch => {
        dispatch(requestRoutes());
        return fetch('https://localhost:44324/api/route')
            .then(response => response.json())
            .then(json => dispatch(receiveRoutes(json)))
            .then(result => dispatch(fetchRoute(result.routes[0].id)))
            .catch(error => console.log(error))
    }
}

export const fetchRoute = id => {
    return dispatch => {
        dispatch(requestRoute(id));
        return fetch(`https://localhost:44324/api/route/${id}`)
            .then(response => response.json())
            .then(json => dispatch(receiveRoute(json)))
            .catch((error) => console.log(error))
    }
}
