import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './promiseMiddleware';
import { loading, error } from '../components/app/reducers';
import { user, checkedAuth } from '../components/auth/reducers';
import { goalsById, goalList } from '../components/goals/reducers';

const rootReducer = combineReducers({
  user,
  loading,
  error,
  checkedAuth,
  goalsById,
  goalList
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