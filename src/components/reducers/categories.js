
const categories = [
    { name: "Home", icon: "../assets/home.png" },
    { name: "Continents", icon: "../assets/america.png" },
    { name: "Territory Types", icon: "../assets/map.png" },
    { name: "Territories", icon: "../assets/passport.png" },
    { name: "Places", icon: "../assets/marker.png" },
    { name: "Flags", icon: "../assets/flag.png" },
    { name: "Place Groups", icon: "../assets/picture.png" },
    { name: "Drives", icon: "../assets/road.png" },
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
        dispatch(fetchCategory(categories[0].name));
    }
}

export const fetchCategory = name => {
    console.log(name);
    return dispatch => dispatch(receiveCategory(categories.find(x => x.name === name)));
}
