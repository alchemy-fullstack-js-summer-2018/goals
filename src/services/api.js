import { get, post } from './request';

const URL = '/api';
const GOALS_URL = `${URL}/me/goals`;
const AUTH_URL = `${URL}/auth`;

export const signin = credentials => post(`${AUTH_URL}/signin`, credentials);
export const signup = credentials => post(`${AUTH_URL}/signup`, credentials);

export const verifyUser = token => {
  return get(`${AUTH_URL}/verify`, {
    headers: {
      Authorization: token
    }
  });
};

export const getGoals = () => get(GOALS_URL);
export const postGoal = data => post(GOALS_URL, data);
export const toggleGoal = id => post(`${GOALS_URL}/${id}`);
export const getUsersGoals = () => get(`${URL}/users`);