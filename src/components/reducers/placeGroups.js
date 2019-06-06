import { fetch } from 'whatwg-fetch';

const updateObject = (oldObject, newValues) => Object.assign({}, oldObject, newValues);



// actions
export const REQUEST_PLACE_GROUPS = 'REQUEST_PLACE_GROUPS';
export const RECEIVE_PLACE_GROUPS = 'RECEIVE_PLACE_GROUPS';
export const FILTER_PLACE_GROUPS = 'FILTER_PLACE_GROUPS';
export const REQUEST_PLACE_GROUP = 'REQUEST_PLACE_GROUP';
export const RECEIVE_PLACE_GROUP = 'RECEIVE_PLACE_GROUP';

// action creators

export const requestPlaceGroups = () => ({
    type: REQUEST_PLACE_GROUPS
});

export const receivePlaceGroups = placeGroups => ({ 
    type: RECEIVE_PLACE_GROUPS,
    placeGroups
});

export const filterPlaceGroups = filter => ({
    type: FILTER_PLACE_GROUPS,
    filter
});

export const requestPlaceGroup= id => ({
    type: REQUEST_PLACE_GROUP,
    id
});

export const receivePlaceGroup = placeGroup => ({
    type: RECEIVE_PLACE_GROUP,
    placeGroup
});


// reducers

const initialState = {
    fetching: false,
    items: [],
    filter: '',
    placeGroupId: null,
    placeGroup: null
}

export const placeGroups = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_PLACE_GROUPS:
            return requestPlaceGroupsReducer(state);
        case RECEIVE_PLACE_GROUPS:
            return receivePlaceGroupsReducer(state, action);
        case FILTER_PLACE_GROUPS:
            return filterPlaceGroupsReducer(state, action);
        case REQUEST_PLACE_GROUP:
            return updateObject(state, { placeGroupId: action.id });
        case RECEIVE_PLACE_GROUP:
            return updateObject(state, { placeGroup: action.placeGroup });
        default:
            return state;
    }
};

const requestPlaceGroupsReducer = (state) => updateObject(state, { fetching: true });

const receivePlaceGroupsReducer = (state, action) => updateObject(state, { fetching: false, items: action.placeGroups });

const filterPlaceGroupsReducer = (state, action) => updateObject(state, { filter: action.filter });





// thunks

export const fetchPlaceGroups = () => {
    return dispatch => {
        dispatch(requestPlaceGroups());
        return fetch('https://localhost:44324/api/placegroup')
            .then(response => response.json())
            .then(json => dispatch(receivePlaceGroups(json)))
            .then(result => dispatch(fetchPlaceGroup(result.placeGroups[0].id)))
            .catch(error => console.log(error))
    }
}

export const fetchPlaceGroup = id => {
    return dispatch => {
        dispatch(requestPlaceGroup(id));
        return fetch(`https://localhost:44324/api/placegroup/${id}`)
            .then(response => response.json())
            .then(json => dispatch(receivePlaceGroup(json)))
            .catch((error) => console.log(error))
    }
}
