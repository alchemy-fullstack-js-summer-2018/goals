jest.mock('../../services/goalsApi', () => ({
  signin: jest.fn(),
  signup: jest.fn()
}));

import { signin, signup } from './actions';
import { USER_AUTH } from './reducers';
import {
  signin as signinSvc,
  signup as signupSvc
} from '../../services/goalsApi';

describe('user action creators', () => {

  function testAuth(name, mockSvc, actionCreator) {
    it(`creates ${name} action`, () => {
      
    });
  }
});