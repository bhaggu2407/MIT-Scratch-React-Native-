import {createStore, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk'; // Import thunk middleware
import {rootReducer} from './redux/rootReducer'; // Import your root reducer

// Create the Redux store with the root reducer and thunk middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
