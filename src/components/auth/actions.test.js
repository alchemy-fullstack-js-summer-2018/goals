jest.mock('../../services/api', () => ({
  signin: jest.fn()
}));

import { signin } from './actions';
import { signin as signinSvc } from '../../services/api';
import { USER_AUTH } from './reducers';

describe('auth action creators', () => {

  function testauth(name, mockSvc, actionCreator) {
    it(`cretes ${name} action`, () => {
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

  testauth('signup', signinSvc, signin);
});