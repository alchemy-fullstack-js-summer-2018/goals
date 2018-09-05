import { USER_AUTH } from './reducers';

import { signin as signinApi } from '../../services/api';

export const signin = credentials => ({
  type: USER_AUTH,
  payload: signinApi(credentials)
});