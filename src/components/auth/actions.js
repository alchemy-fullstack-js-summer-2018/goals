import { USER_AUTH, LOGOUT, CHECKED_AUTH } from './reducers';
import { verifyUser } from '../../services/goalsApi';
import { getStoredUser, clearStoredUser } from '../../services/request';

import {
  signin as signinApi,
  signup as signupApi,
} from '../../services/goalsApi';

const makeAuth = api => credentials => ({
  type: USER_AUTH,
  payload: api(credentials)
});

export const signin = makeAuth(signinApi);
export const signup = makeAuth(signupApi);

export const logout = () => ({
  type: LOGOUT
});

export const authChecked = () => ({
  type: CHECKED_AUTH
});

export const tryLoadUser = () => dispatch => {
  const user = getStoredUser();
  if(!user || !user.token) {
    return dispatch(authChecked());
  }

  verifyUser(user.token)
    .then(() => dispatch({
      type: USER_AUTH,
      payload: user
    }))
    .catch(() => {
      clearStoredUser();
    })
    .then(() => {
      dispatch(authChecked());
    });
};