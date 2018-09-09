import {
  goals,
  GOALS_LOAD,
  GOALS_ADD,
  GOAL_TOGGLE
} from './reducers';

describe('Goals reducers', () => {
  
  it('Initialize to empty array', () => {
    const state = goals(undefined, {});
    expect(state).toEqual([]);
  });

  it('Loads goals', () => {
    const payload = [{}, {}, {}];

    const state = goals([], {
      type: GOALS_LOAD,
      payload
    });

    expect(state).toBe(payload);
  });

  it('Adds a goal', () => {
    const goal1 = { name: 'Profit', description: '$$$', completed: false };
    const goal2 = { name: 'Learn', description: 'Get edumacated', completed: true };
    const goal3 = { name: 'Mentor', description: 'Edumucate peoples', completed: false };

    const state = goals([goal1, goal2], {
      type: GOALS_ADD,
      payload: goal3
    });

    expect(state).toEqual([goal1, goal2, goal3]);

  });

  it('Updates a goal', () => {
    const goal1 = { _id: 1, name: 'Profit', description: '$$$', completed: false };
    const goal2 = { _id: 2, name: 'Learn', description: 'Get edumacated', completed: true };
    const goal3 = { _id: 3, name: 'Mentor', description: 'Edumucate peoples', completed: false };

    const updated = { _id: 2, name: 'Learn', description: 'Read about new tech', completed: true };

    const state = goals([goal1, goal2, goal3], {
      type: GOAL_TOGGLE,
      payload: updated
    });

    expect(state).toEqual([
      goal1,
      updated,
      goal3
    ]);
  });


});