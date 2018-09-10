import { GOALS_LOAD, GOAL_LOAD, GOAL_ADD, GOAL_UPDATE } from './reducers';
import { getUserGoals, getGoal, postGoal, updateGoal as updateGoalApi } from '../../services/goalsApi';
import { getGoalList, getGoalById } from './reducers';

export const loadGoals = () => (dispatch, getState) => {
  const goalList = getGoalList(getState());
  if(goalList.length) return;

  dispatch({
    type: GOALS_LOAD,
    payload: getUserGoals()
  });
};

export const addGoal = data => {
  return {
    type: GOAL_ADD,
    payload: postGoal(data)
  };
};

export const loadGoal = id => (dispatch, getState) => {
  const goal = getGoalById(getState(), id);
  if(goal) return;

  dispatch({
    type: GOAL_LOAD,
    payload: getGoal(id)
  });
};

export const updateGoal = data => {
  return {
    type: GOAL_UPDATE,
    payload: updateGoalApi(data)
  };
};