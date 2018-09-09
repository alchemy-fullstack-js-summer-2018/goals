import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleComplete } from './actions';
import GoalDisplay from './GoalDisplay';
import styles from './Goal.css';

class Goal extends PureComponent {

  static propTypes = {
    goal: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
  };

  handleToggle = () => {
    const { toggleComplete, goal } = this.props;
    return toggleComplete(goal._id);
  };

  render() {
    const { goal } = this.props;
    const { completed } = goal;
    return (
      <li
        onClick={this.handleToggle}
        className={[completed && styles.completed].join(' ')}
      >
        <GoalDisplay goal={goal}/>
      </li>
    );
  }
}

export default connect(
  null,
  { toggleComplete }
)(Goal);