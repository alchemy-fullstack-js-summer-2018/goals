import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './promise-middleware';
import { error, loading } from '../components/app/app-reducers';
import { user, checkedAuth } from '../components/auth/auth-reducers';
import { users } from '../components/users/users-reducers';
import { goalList, goalsById } from '../components/goals/goals-reducers';
 

const rootReducer = combineReducers({
  error,
  loading,
  user,
  checkedAuth,
  goalList,
  goalsById,
  users
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
