import { fetch } from 'whatwg-fetch';

// actions
const REQUEST_FLAGS = 'REQUEST_FLAGS';
const RECEIVE_FLAGS = 'RECEIVE_FLAGS';
const FILTER_FLAGS = 'FILTER_FLAGS';
const REQUEST_FLAG = 'REQUEST_FLAG';
const RECEIVE_FLAG = 'RECEIVE_FLAG';

// action creators

export const requestFlags = () => ({
    type: REQUEST_FLAGS
});

export const receiveFlags = data => ({
    type: RECEIVE_FLAGS,
    flags: data,
    receivedAt: Date.now()
});

export const filterFlags = filter => ({
    type: FILTER_FLAGS,
    filter
});

export const requestFlag = id => ({
    type: REQUEST_FLAG,
    flagId: id
});

export const receiveFlag = data => ({
    type: RECEIVE_FLAG,
    flag: data
});


// reducers

export const flags = (state = { isFetching: false, items: [], filter: '', flagId: null, flag: null }, action) => {
    switch(action.type) {
        case REQUEST_FLAGS:
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
