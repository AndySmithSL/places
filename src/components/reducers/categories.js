import { getFullPathImage } from "../app/utils/ImageDetails";

const categories = [
  { name: "Home", icon: getFullPathImage("home-page") },
  { name: "Continents", icon: getFullPathImage("globe") },
  { name: "Territory Types", icon: getFullPathImage("quest") },
  { name: "Territories", icon: getFullPathImage("country") },
  { name: "Places", icon: getFullPathImage("place-marker") },
  { name: "Flags", icon: getFullPathImage("great-britain") },
  { name: "Place Groups", icon: getFullPathImage("picture") },
  { name: "Drives", icon: getFullPathImage("road") },
  { name: "Drive Legs", icon: getFullPathImage("route") },
  { name: "Routes", icon: getFullPathImage("airplane") },
  { name: "Route Legs", icon: getFullPathImage("journey") },
];

//const updateObject = (oldObject, newValues) =>
//  Object.assign({}, oldObject, newValues);

// action names
const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";

// action creators

const receiveCategories = (categories) => ({
  type: RECEIVE_CATEGORIES,
  categories,
});

const receiveCategory = (category) => ({
  type: RECEIVE_CATEGORY,
  category,
});

// reducers

const initialState = {
  categories: [],
  selectedCategory: null,
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      //return receiveCategoriesReducer(state, action);
      return Object.assign({}, state, { categories: action.categories });
    case RECEIVE_CATEGORY:
      //return receiveCategoryReducer(state, action);
      return Object.assign({}, state, { selectedCategory: action.category });
    default:
      return state;
  }
};

//const receiveCategoriesReducer = (state, action) =>
//  Object.assign({}, state, { categories: action.categories });
//updateObject(state, { categories: action.categories });

//const receiveCategoryReducer = (state, action) =>
//  updateObject(state, { selectedCategory: action.category });

// thunks

export const fetchCategories = () => {
  return (dispatch) => {
    dispatch(receiveCategories(categories));
    dispatch(setCategory(categories[0]));
  };
};

export const setCategory = (category) => {
  return (dispatch) => dispatch(receiveCategory(category));
};
