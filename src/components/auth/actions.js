import { USER_AUTH, LOGOUT, CHECKED_AUTH } from './reducers';
// import { verifyUser } from '../../services/api';
// import { getStoredUser, clearStoredUser } from '../../services/request';

import {
  signup as signupApi,
  signin as signinApi
} from '../../services/api';

// // Use of higher-order-functions (HOF) to have two api calls with same
// // input and output, but different api call
// const makeAuth = api => credentials => ({
//   type: USER_AUTH,
//   payload: api(credentials)
// });

// export const signup = makeAuth(signupApi);
// export const signin = makeAuth(signinApi);

export const signup = credentials => ({
  type: USER_AUTH,
  payload: signupApi(credentials)
});

export const signin = credentials => ({
  type: USER_AUTH,
  payload: signinApi(credentials)
});