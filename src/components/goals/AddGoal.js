import React, { PureComponent } from 'react';
import FormControl from '../shared/FormControl';

class AddGoal extends PureComponent {

  render() {

    return (
      <section>
        <h2> Add a New Goal</h2>
        <form>
          <FormControl label="Name">
            <input name="name"/>
          </FormControl>

          <FormControl>
            <select>
              <option>Personal</option>
              <option>Professional</option>
              <option>Squad</option>
              <option>For Eternity</option>
            </select>
          </FormControl>

          <FormControl label="options">
            <input type="checkbox"/>
          </FormControl>

          <button>Add</button>
        </form>
      </section>
    );
  }
}

export default AddGoal;