  
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cmsReducer from './reducer/reducer';

const reducer = combineReducers({
  cmsReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;