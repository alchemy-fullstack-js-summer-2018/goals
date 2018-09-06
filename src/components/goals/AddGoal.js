import React, { PureComponent } from 'react';
import FormControl from '../shared/FormControl';

class AddGoal extends PureComponent {

  render() { 
    return (
      <section>
        <h2>Add a new goal!</h2>
        <form>
          <FormControl label="name">
            <input name="title"/>
          </FormControl>
          <button>Add</button>
        </form>
      </section>
    );
  }
}
 
export default AddGoal;