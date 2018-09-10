import React, { PureComponent } from 'react';
import styles from './AddGoal.css';
import FormControl from '../shared/FormControl';

class AddGoal extends PureComponent {

  render() {

    return (
      <section className={styles['add-goal']}>
        <h2>Add a goal</h2>
        <form>
          <FormControl label="Name">
            <input name="name"/>
          </FormControl>

          <FormControl label="Type">
            <select>
              <option>goal</option>
              <option>goaly</option>
              <option>goaler</option>
            </select>
          </FormControl>

          {/* add checkbox? complete field?*/}

          <button>Add</button>
        </form>
      </section>

    );
  }
}

export default AddGoal;