import { GOALS_LOAD } from './reducers';
import { getGoals } from '../../services/api';


export const loadGoals = () => {
  return {
    type: GOALS_LOAD,
    payload: getGoals()
  };
};