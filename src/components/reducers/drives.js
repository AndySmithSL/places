import { fetch } from 'whatwg-fetch';
import { combineReducers } from 'redux';

import { updateObject, createReducer } from './commonFunctions';


// actions
const REQUEST_DRIVES = 'REQUEST_DRIVES';
const RECEIVE_DRIVES = 'RECEIVE_DRIVES';
const FILTER_DRIVES = 'FILTER_DRIVES';
const REQUEST_DRIVE = 'REQUEST_DRIVE';
const RECEIVE_DRIVE = 'RECEIVE_DRIVE';

// action creators

export const requestDrives = () => ({
    type: REQUEST_DRIVES
});

export const receiveDrives = drives => ({
    type: RECEIVE_DRIVES,
    drives
});

export const filterDrives = filter => ({
    type: FILTER_DRIVES,
    filter
});

export const requestDrive = id => ({
    type: REQUEST_DRIVE,
    id
});

export const receiveDrive = drive => ({
    type: RECEIVE_DRIVE,
    drive
});


// reducers

const requestDrivesReducer = (state, action) => updateObject(state, { fetching: true });

const receiveDrivesReducer = (state, action) => updateObject(state, { fetching: false, items: action.drives });

const filterDrivesReducer = (state, action) => action.filter;

const requestDriveReducer = (state, action) => updateObject(state, { fetching: true, id: action.id });

const receiveDriveReducer = (state, action) => updateObject(state, { fetching: false, item: action.drive });



const drivesReducer = createReducer({ fetching: false, items: [] }, {
    REQUEST_DRIVES: requestDrivesReducer,
    RECEIVE_DRIVES: receiveDrivesReducer
});

const filterReducer = createReducer('', {
    FILTER_DRIVES: filterDrivesReducer
});

const driveReducer = createReducer({ fetching: false, id: null, item: null }, {
    REQUEST_DRIVE: requestDriveReducer,
    RECEIVE_DRIVE: receiveDriveReducer
})

export const drives = combineReducers ({
    drives: drivesReducer,
    filter: filterReducer,
    drive: driveReducer
});


// thunks

export const fetchDrives = () => {
    return dispatch => {
        dispatch(requestDrives());
        return fetch('https://localhost:44324/api/drive')
            .then(response => response.json())
            .then(json => dispatch(receiveDrives(json)))
            .catch(error => console.log(error))
    }
}

export const fetchDrive = id => {
    return dispatch => {
        dispatch(requestDrive(id));
        return fetch(`https://localhost:44324/api/drive/${id}`)
            .then(response => response.json())
            .then(json => dispatch(receiveDrive(json)))
            .catch((error) => console.log(error))
    }
}
