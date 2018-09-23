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
          {goal.goal}
          {goal.completed 
            ? 
            <span style={{ color: '#229954', }}> (Completed!)</span> 
            :
            <span style={{ color: '#FFC300' }}> (In progress)</span>
          }
        </li>
      );
    }
}
 
export default connect(
  null,
  { updateGoal }
)(Goal);