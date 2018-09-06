import { user, getUser, USER_AUTH, LOGOUT } from './reducers';

describe('User reducer', () => {
  
  it('Initializes to null', () => {
    const state = user(undefined, {});
    expect(state).toBe(null);
  });

  it('Loads a user', () => {
    const data = { name: 'KG', email: 'kg@me.com', password: 'abc' }
    const state = user(null, { type: USER_AUTH, payload: data });
    expect(state).toEqual(data);
  });


  
});