import {
  goalsById,
  GOALS_LOAD
} from './reducers';

describe('Goals reducers', () => {
  
  it('Initialize to empty array', () => {
    const state = goalsById(undefined, {});
    expect(state).toEqual([]);
  });

  it('Loads goals', () => {
    const payload = [{}, {}, {}];

    const state = goalsById([], {
      type: GOALS_LOAD,
      payload
    });

    expect(state).toBe(payload);
  });


});