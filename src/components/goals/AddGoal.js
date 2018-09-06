import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FormControl from '../shared/FormControl';

class AddGoal extends PureComponent {

  state = {
    goal: ''
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    const { onSubmit } = this.props;
    event.preventDefault();
    if(!this.state.goal) return;
    onSubmit(this.state);
  }

  render() { 
    const { goal } = this.state;
    return (
      <section>
        <h2>Add a new goal!</h2>
        <form onSubmit={this.handleSubmit}>
          <FormControl label="name">
            <input name="goal" value={goal} onChange={this.handleChange}/>
          </FormControl>
          <button>Add</button>
        </form>
      </section>
    );
  }
}
 
export default AddGoal;