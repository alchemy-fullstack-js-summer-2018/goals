import { get, post } from './request';

const URL = '/goalsApi';
const GOALS_URL = `${URL}/goals`;
const AUTH_URL = `${URL}/auth`;

export const getUserGoals = () => get(GOALS_URL);
export const getUser = id => get(`${GOALS_URL}/${id}`);

export const signin = credentials => post(`${AUTH_URL}/signin`, credentials);
export const signup = credentials => post(`${AUTH_URL}/signup`, credentials);

export const verifyUser = token => get(`${AUTH_URL}/verify`, {
  headers: {
    Authorization: token
  }
});


