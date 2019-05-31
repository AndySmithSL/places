
const categories = [
    { name: "Home", icon: "../assets/icons/home.png" },
    { name: "Continents", icon: "../assets/icons/america.png" },
    { name: "Territory Types", icon: "../assets/icons/map.png" },
    { name: "Territories", icon: "../assets/icons/passport.png" },
    { name: "Places", icon: "../assets/icons/marker.png" },
    { name: "Flags", icon: "../assets/icons/flag.png" },
    { name: "Place Groups", icon: "../assets/icons/picture.png" },
    { name: "Drives", icon: "../assets/icons/road.png" },
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
