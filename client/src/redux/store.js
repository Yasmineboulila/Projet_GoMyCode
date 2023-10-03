import { createStore, applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import postReducer from './reducers/reducers'
const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(postReducer, composeEnhancers(applyMiddleware(thunk)))
export default store;