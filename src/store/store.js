import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import promiseMiddleware from './promise-middleware';
import thunk from 'redux-thunk';
import { user } from '../components/auth/reducers';

const rootReducer = combineReducers({
  user
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
      promiseMiddleware
    )
  )
);

export default store;