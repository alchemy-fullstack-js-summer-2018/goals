

export const GOALS_LOAD = 'GOALS_LOAD';

export function goalsById(state = [], { type, payload }) {
  switch(type) {
    case GOALS_LOAD:
      return payload;
    default:
      return state;
  }
}