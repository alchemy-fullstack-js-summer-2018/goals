import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateGoal } from './actions';

class Goal extends Component {
  
  static propTypes = {
    goal: PropTypes.object,
    updateGoal: PropTypes.func.isRequired
  }

  handleUpdate = () => {
    const { goal, updateGoal } = this.props;
    goal.completed = !goal.completed;
    updateGoal(goal);
  }

  render() {  
    const { goal } = this.props;
    return (
      <li onClick={this.handleUpdate}>
        <p>{goal.goal}</p>
        <p>{goal.completed ? 'true' : 'false'}</p>
      </li>
    );
  }
}
 
export default connect (
  null,
  { updateGoal }
)(Goal);