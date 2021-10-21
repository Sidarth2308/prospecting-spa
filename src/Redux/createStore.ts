import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// Import logger from "redux-logger";
import {rootReducer} from './reducers';

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk));
}
