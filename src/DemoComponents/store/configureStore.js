import { createStore, applyMiddleware } from 'redux';
import thunkyxx from 'redux-thunk'; // Can call it thunkyxx or anything we want as it must be an export default from the 'redux-thunk'
import rootReducer from '../reducers';

export default initialState => {
    return createStore(rootReducer, initialState, applyMiddleware(thunkyxx));
}
