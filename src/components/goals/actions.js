import { GOALS_LOAD } from './reducers';
import { loadAllGoals } from '../../services/api';


export const load = () => ({
  type: GOALS_LOAD,
  payload: loadAllGoals()
});