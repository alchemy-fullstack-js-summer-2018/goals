jest.mock('../../services/api', () => ({
  loadAllGoals: jest.fn(),
  addGoal: jest.fn(),
}));

import { load, add } from './actions';
import { GOALS_LOAD, GOALS_ADD, GOALS_UPDATE } from './reducers';
import { loadAllGoals, loadGoal } from '../../services/api';

describe('Goals action creators', () => {

  it('Loads goals', () => {
    const promise = Promise.resolve();
    loadAllGoals.mockReturnValueOnce(promise);

    const { type } = load();
    expect(type).toBe(GOALS_LOAD);
    expect(loadAllGoals.mock.calls.length).toBe(1);
  });

});