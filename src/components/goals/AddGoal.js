import React, { PureComponent } from 'react';
import FormControl from '../shared/FormControl';

class AddGoal extends PureComponent {

  render() {

    return (
      <section>
        <h2>Add a New Goal</h2>
        <form>
          <FormControl label="Goal">
            <input name="name"/>
          </FormControl>

          <FormControl label="Description">
            <textarea placeholder="Goal description..."></textarea>
          </FormControl>

          <button>Add</button>
        </form>
      </section>
    );
  }
}

export default AddGoal;