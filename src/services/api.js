import { get, post } from './request';

const URL = '/api';
const GOALS_URL = `${URL}/me/goals`;
const AUTH_URL = `${URL}/auth`;

export const signin = credentials => post(`${AUTH_URL}/signin`, credentials);
export const signup = credentials => post(`${AUTH_URL}/signup`, credentials);

export const getUserGoals = () => get(GOALS_URL);
export const postGoal = data => {
  console.log(data);
  return post(GOALS_URL, data);
};


export const verifyUser = token => get(`${AUTH_URL}/verify`, {
  headers: {
    Authorization: token
  }
});