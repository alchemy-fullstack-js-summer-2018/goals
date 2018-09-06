import { GOALS_LOAD, GOAL_LOAD, GOALS_ADD } from './reducers';
import { getAllGoals, getGoal, postGoal } from '../../services/api';
import { getGoalList, getGoalById } from './reducers';

export const loadGoals = () => (dispatch, getState) => {
  const goalList = getGoalList(getState());
  if(goalList.length) return;

  dispatch({
    type: GOALS_LOAD,
    payload: getAllGoals()
  });
};

export const loadGoal = id => (dispatch, getState) => {
  const goal = getGoalById(getState(), id);
  if(goal && goal.favoriteOptions) return;

  dispatch({
    type: GOAL_LOAD,
    payload: getGoal(id)
  });
};

export const clearGoal = () => ({
  type: GOAL_LOAD,
  payload: null
});

export const addGoal = data => {
  return {
    type: GOALS_ADD,
    payload: postGoal(data)
  };
};