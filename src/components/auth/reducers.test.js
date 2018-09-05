import {
  user, getUser, USER_AUTH, LOGOUT } from './reducers';

describe('User reducer', () => {

  it('Initializes to null', () => {
    const state = user(undefined, {});
    expect(state).toBe(null);
  });

  it('Loads user', () => {
    const data = { name: 'user' };
    const state = user(null, { type: USER_AUTH, payload: data });
    expect(state).toEqual(data);
  });

  it('clears user on logout', () => {
    const state = user({}, { type: LOGOUT });
    expect(state).toBe(null);
  });

  it('Gets user from state', () => {
    const user = {};
    expect(getUser({ user })).toBe(user);
  });
});