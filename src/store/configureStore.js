import { createStore, applyMiddleware } from 'redux';
import thunks from 'redux-thunk'; // Can call it thunkyxx or anything we want as it must be an export default from the 'redux-thunk'
import rootReducer from '../components/reducers/root';

export default initialState => {
    return createStore(rootReducer, initialState, applyMiddleware(thunks));
}
