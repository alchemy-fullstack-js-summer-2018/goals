import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Goal extends PureComponent {

  static propTypes = {
    goal: PropTypes.object.isRequired
  };

  render() {
    const { goal } = this.props;

    return (
      <p><strong>{goal.name}</strong>: {goal.description}</p>
    );
  }
}
