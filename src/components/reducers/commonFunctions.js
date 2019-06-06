
export const updateObject = (oldObject, newValues) => Object.assign({}, oldObject, newValues);

export const createReducer = (initialState, handlers) => {
    return (state = initialState, action) => {
        if(handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    }
}

export const isEmpty = str => {
    return (!str || 0 === str.length);
}
