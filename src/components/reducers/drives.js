import { fetch } from 'whatwg-fetch';

const updateObject = (oldObject, newValues) => Object.assign({}, oldObject, newValues);

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

const initialState = {
    fetching: false,
    items: [],
    filter: '',
    id: null,
    item: null
}

export const drives = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_DRIVES:
            return requestDrivesReducer(state);
        case RECEIVE_DRIVES:
            return receiveDrivesReducer(state, action);
        case FILTER_DRIVES:
            return filterDrivesReducer(state, action);
        case REQUEST_DRIVE:
            return requestDriveReducer(state, action);
        case RECEIVE_DRIVE:
            return receiveDriveReducer(state, action);
        default:
            return state;
    }
};

const requestDrivesReducer = (state) => updateObject(state, { fetching: true });

const receiveDrivesReducer = (state, action) => updateObject(state, { fetching: false, items: action.drives });

const filterDrivesReducer = (state, action) => updateObject(state, { filter: action.filter });

const requestDriveReducer = (state, action) => updateObject(state, { id: action.id });

const receiveDriveReducer = (state, action) => updateObject(state, { item: action.drive });



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
