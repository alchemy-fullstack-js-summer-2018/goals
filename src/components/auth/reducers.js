export const USER_AUTH = 'USER_AUTH';
export const LOGOUT = 'LOGOUT';
export const CHECKED_AUTH = 'CHECKED_AUTH';

export const getUser = state => state.user;
export const getCheckedAuth = state => state.checkedAuth;

export function user(state = null, { type }) {
  switch(type) {
    default:
      return state;
  }
}