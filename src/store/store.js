import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './promise-middleware';
import { error, loading } from '../components/app/app-reducers';
import { user, checkedAuth } from '../components/auth/auth-reducers';
// 

const rootReducer = combineReducers({
  error,
  loading,
  user,
  checkedAuth
  // goalList,
  // goalsById
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;

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
