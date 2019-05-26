import { fetch } from 'whatwg-fetch';

const updateObject = (oldObject, newValues) => Object.assign({}, oldObject, newValues);

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

const initialState = {
    fetchingItems: false,
    items: [],
    filter: '',
    fetchingItem: false,
    itemId: null,
    item: null
}

export const territoriesReducer = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_TERRITORIES:
            return requestTerritoriesReducer(state);
        case RECEIVE_TERRITORIES:
            return receiveTerritoriesReducer(state, action);
        case FILTER_TERRITORIES:
            return filterTerritoriesReducer(state, action);
        case REQUEST_TERRITORY:
            return requestTerritoryReducer(state, action);
        case RECEIVE_TERRITORY:
            return receiveTerritoryReducer(state, action);
        default:
            return state;
    }
};

const requestTerritoriesReducer = (state) => updateObject(state, { fetchingItems: true });

const receiveTerritoriesReducer = (state, action) => updateObject(state, { fetchingItems: false, items: action.territories });

const filterTerritoriesReducer = (state, action) => updateObject(state, { filter: action.filter });

const requestTerritoryReducer = (state, action) => updateObject(state, { fetchingItem: true, itemId: action.id });

const receiveTerritoryReducer = (state, action) => updateObject(state, { fetchingItem: false, item: action.territory });


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
