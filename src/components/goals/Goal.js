import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateGoal } from './actions';

class Goal extends PureComponent {

    static propTypes = {
      goal: PropTypes.object,
      updateGoal: PropTypes.func
    };

    handleCompleted = () => {
      const { updateGoal, goal } = this.props; 
      const { completed } = goal;
      goal.completed = !completed;
      updateGoal(goal);
    };

    render() { 
      const { goal } = this.props;

      return (
        <li onClick={this.handleCompleted}>
          {goal.title}
          {goal.completed ? 
            <span style={{ color: '#8CC152' }}>All done!</span> :
            <span style={{ color: '#E9573F' }}>Not done!</span>
          }
        </li>
      );
    }
}
 
export default connect(
  null,
  { updateGoal }
)(Goal);