import { user, getUser, USER_AUTH, LOGOUT } from './reducers';

describe('User reducer', () => {
  
  it('Initializes to null', () => {
    const state = user(undefined, {});
    expect(state).toBe(null);
  });
});