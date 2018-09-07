import {
  user,
  getUser,
  USER_AUTH,
  LOGOUT
} from './reducers';

describe('user reducer', () => {

  it('initializes to null', () => {
    const state = user(undefined, {});
    expect(state).toBe(null);
  });

  it('loads a user', () => {
    const data = { 
      name: 'user',
      email: 'me@user.com'
    };
    const state = user(null, { type: USER_AUTH, payload: data });
    expect(state).toEqual(data);
  });

  it('clears user on logout', () => {
    const state = user({}, { type: LOGOUT });
    expect(state).toBe(null);
  });

  it('gets user from state', () => {
    const user = { name: 'user' };
    expect(getUser({ user })).toBe(user);
  });

});