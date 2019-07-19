
import { getFullPathImage } from '../app/utils/ImageDetails';

const categories = [
    { name: "Home", icon: getFullPathImage("home-page") },
    { name: "Continents", icon: getFullPathImage("globe") },
    { name: "Territory Types", icon: getFullPathImage("quest") },
    { name: "Territories", icon: getFullPathImage("country") },
    { name: "Places", icon: getFullPathImage("place-marker") },
    { name: "Flags", icon: getFullPathImage("great-britain") },
    { name: "Place Groups", icon: getFullPathImage("picture") },
    { name: "Drives", icon: getFullPathImage("road") },
];

const updateObject = (oldObject, newValues) => Object.assign({}, oldObject, newValues);

// actions
const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';

// action creators

export const receiveCategories = categories => ({
    type: RECEIVE_CATEGORIES,
    categories
});

export const receiveCategory = category => ({
    type: RECEIVE_CATEGORY,
    category
});


// reducers

const initialState = {
    categories: [],
    selectedCategory: null,
}

export const categoriesReducer = (state = initialState, action) => {
    switch(action.type) {
        case RECEIVE_CATEGORIES:
            return receiveCategoriesReducer(state, action);
        case RECEIVE_CATEGORY:
            return receiveCategoryReducer(state, action);
        default:
            return state;
    }
};

const receiveCategoriesReducer = (state, action) => updateObject(state, { categories: action.categories });

const receiveCategoryReducer = (state, action) => updateObject(state, { selectedCategory: action.category });


// thunks

export const fetchCategories = () => {
    return dispatch => {
        dispatch(receiveCategories(categories));
        dispatch(setCategory(categories[0]));
    }
}

export const setCategory = category => {
    return dispatch => dispatch(receiveCategory(category));
}
