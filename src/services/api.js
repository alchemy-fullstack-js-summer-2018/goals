import { get, post, put } from './request';

const URL = '/api';
const AUTH_URL = `${URL}/auth`;
const GOALS_URL = `${URL}/me/goals`;

export const signin = credentials => post(`${AUTH_URL}/signin`, credentials);
export const signup = credentials => post(`${AUTH_URL}/signup`, credentials);

export const verifyUser = token => get(`${AUTH_URL}/verify`, {
  headers: {
    Authorization: token
  }
});

export const getGoals = () => get(GOALS_URL);
export const postGoal = data => post(GOALS_URL, data);
export const putGoal = goal => {
  const { _id, ...copy } = goal;
  return put(`${GOALS_URL}/${_id}`, copy);
};