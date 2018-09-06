import { user } from './reducers';

describe('user reducers', () => {

  it('initializes to null', () => {
    const state = user(undefined, {});
    expect(state).toBe(null);
  });
});