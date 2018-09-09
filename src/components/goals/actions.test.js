jest.mock('../../services/api', () => ({
  getGoals: jest.fn(),
  addGoal: jest.fn(),
}));

import { loadGoals } from './actions';
import { GOALS_LOAD } from './reducers';
import { getGoals } from '../../services/api';

describe('Goals action creators', () => {

  it('Loads goals', () => {
    const promise = Promise.resolve();
    getGoals.mockReturnValueOnce(promise);

    const { type } = loadGoals();
    expect(type).toBe(GOALS_LOAD);
    expect(getGoals.mock.calls.length).toBe(1);
  });

});