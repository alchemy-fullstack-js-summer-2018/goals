import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { getGoalById } from './reducers';

class Goal extends PureComponent {

    static propTypes = {
      goal: PropTypes.object
    };

    render() { 
      const { goal } = this.props;

      return (
        <li>
          {goal.title}
        </li>
      );
    }
}
 
export default Goal;