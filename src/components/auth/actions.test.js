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
      const promise = Promise.resolve();
      mockSvc.mockReturnValueOnce(promise);

      const credentials = {};
      const { type, payload } = actionCreator(credentials);
      expect(type).toBe(USER_AUTH);
      expect(payload).toBe(promise);
      expect(mockSvc.mock.calls.length).toBe(1);
      expect(mockSvc.mock.calls[0][0]).toBe(credentials);
    }); 
  }

  testAuth('signup', signupSvc, signup);
  testAuth('signin', signinSvc, signin);
});