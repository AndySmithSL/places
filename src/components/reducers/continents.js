import { fetch } from "whatwg-fetch";
import { combineReducers } from "redux";
import { updateObject, createReducer } from "./commonFunctions";

// action names
const REQUEST_CONTINENTS = "REQUEST_CONTINENTS";
const RECEIVE_CONTINENTS = "RECEIVE_CONTINENTS";
const FILTER_CONTINENTS = "FILTER_CONTINENTS";
const REQUEST_CONTINENT = "REQUEST_CONTINENT";
const RECEIVE_CONTINENT = "RECEIVE_CONTINENT";

// action creators

export const requestContinents = () => ({
  type: REQUEST_CONTINENTS,
});

export const receiveContinents = (continents) => ({
  type: RECEIVE_CONTINENTS,
  continents,
});

export const filterContinents = (filter) => ({
  type: FILTER_CONTINENTS,
  filter,
});

export const requestContinent = (id) => ({
  type: REQUEST_CONTINENT,
  id,
});

export const receiveContinent = (continent) => ({
  type: RECEIVE_CONTINENT,
  continent,
});

// reducers

// This will probably fail
const requestContinentsReducer = (state) =>
  Object.assign({}, state, { fetching: true });
//updateObject(state, { fetching: true });

const receiveContinentsReducer = (state, action) =>
  Object.assign({}, state, { fetching: false, items: action.continents });
//updateObject(state, { fetching: false, items: action.continents });

const filterContinentsReducer = (state, action) => action.filter;

const requestContinentReducer = (state, action) =>
  Object.assign({}, state, { fetching: true, id: action.id });
//updateObject(state, { fetching: true, id: action.id });

const receiveContinentReducer = (state, action) =>
  Object.assign({}, state, { fetching: false, item: action.continent });
//updateObject(state, { fetching: false, item: action.continent });

const continentsReducer = createReducer(
  { fetching: false, items: [] },
  {
    REQUEST_CONTINENTS: requestContinentsReducer,
    RECEIVE_CONTINENTS: receiveContinentsReducer,
  }
);

const filterReducer = createReducer("", {
  FILTER_CONTINENTS: filterContinentsReducer,
});

const continentReducer = createReducer(
  { fetching: false, id: null, item: null },
  {
    REQUEST_CONTINENT: requestContinentReducer,
    RECEIVE_CONTINENT: receiveContinentReducer,
  }
);

export const continents = combineReducers({
  continents: continentsReducer,
  filter: filterReducer,
  continent: continentReducer,
});

// thunks

export const fetchContinents = () => {
  return (dispatch) => {
    dispatch(requestContinents());
    return fetch("https://localhost:44324/api/continent")
      .then((response) => response.json())
      .then((json) => dispatch(receiveContinents(json)))
      .then((result) => dispatch(fetchContinent(result.continents[0].id)))
      .catch((error) => console.log(error));
  };
};

export const fetchContinent = (id) => {
  return (dispatch) => {
    dispatch(requestContinent(id));
    return fetch(`https://localhost:44324/api/continent/${id}`)
      .then((response) => response.json())
      .then((json) => dispatch(receiveContinent(json)))
      .catch((error) => console.log(error));
  };
};
