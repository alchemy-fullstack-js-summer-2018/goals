import {
  user } from './reducers';

describe('User reducer', () => {

  it('Initializes to null', () => {
    const state = user(undefined, {});
    expect(state).toBe(null);
  });
});