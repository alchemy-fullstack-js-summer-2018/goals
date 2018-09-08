

export const GOALS_LOAD = 'GOALS_LOAD';
export const GOALS_ADD = 'GOALS_ADD';
export const GOALS_UPDATE = 'GOALS_UPDATE';
export const LOGOUT = 'LOGOUT';

export const getGoals = state => state.goals;

export function goals(state = [], { type, payload }) {
  switch(type) {
    case GOALS_LOAD:
      return payload;
    case GOALS_ADD:
      return [...state, payload];
    case GOALS_UPDATE:
      return state.map(goal => goal._id === payload._id ? payload : goal);
    case LOGOUT:
      return [];
    default:
      return state;
  }
}