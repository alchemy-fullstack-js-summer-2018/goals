import { post } from './request';

const AUTH_URL = `${URL}/auth`;

export const signin = credentials => post(`${AUTH_URL}/signin`, credentials);