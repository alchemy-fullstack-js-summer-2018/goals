import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Goal from './Goal';

class Goals extends Component {

  static propTypes = {
    goals: PropTypes.array
  }
  
  render() { 
    const { goals } = this.props;
    return (
      <ul >
        {goals.map(goal => (
          <Goal
            key={goal._id}
            goal={goal}
          />
        ))}
      </ul>
    );
  }
}
 
export default Goals;