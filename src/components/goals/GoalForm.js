import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GoalForm extends Component {

  state = {
    goal: ''
  }

  static propTypes = {
    onComplete: PropTypes.func.isRequired
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onComplete({
      goal: this.state.goal
    });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() { 
    const { goal } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Goal:
          <input name="goal" value={goal} onChange={this.handleChange}/>
        </label>
        <button>Add</button>
      </form>
    );
  }
}
 
export default GoalForm;