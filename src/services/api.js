import { get, post } from './request';

const URL = '/api';
const GOALS_URL = `${URL}/me/goals`;
const AUTH_URL = `${URL}/auth`;

export const signin = credentials => post(`${AUTH_URL}/signin`, credentials);
export const signup = credentials => post(`${AUTH_URL}/signup`, credentials);

export const verifyUser = token => get(`${AUTH_URL}/verify`, {
  headers: {
    Authorization: token
  }
});

export const loadAllGoals = () => get(GOALS_URL);
export const loadGoal = id => get(`${GOALS_URL}/${id}`);