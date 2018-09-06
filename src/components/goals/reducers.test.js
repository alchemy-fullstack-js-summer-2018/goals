import {
  goalsById,
  GOALS_LOAD
} from './reducers';

describe('Goals reducers', () => {
  
  it('Initialize to empty array', () => {
    const state = goalsById(undefined, {});
    expect(state).toEqual([]);
  });


});