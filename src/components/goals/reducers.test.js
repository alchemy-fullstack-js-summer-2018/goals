import { goals } from './reducers';

describe('Goals reducers', () => {
  it('loads initial state', () => {
    const state = goals(undefined, {});
    expect(state).toEqual([]);
  });
});