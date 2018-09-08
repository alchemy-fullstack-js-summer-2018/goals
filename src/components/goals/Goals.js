import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGoalsById } from './reducers';
import { getUser } from '../auth/reducers';
import { loadGoals } from './actions';
import Goal from './Goal';

export class Goals extends Component {
  static propTypes = {
    loadGoals: PropTypes.func.isRequired,
    goals: PropTypes.array.isRequired,
    user: PropTypes.object
  }

  componentDidMount = () => {
    this.props.loadGoals();
  }
  

  render() {
    const { user, goals } = this.props;
    return (
      <section>
        <h1>{user.name}&apos;s Goals</h1>
        {goals &&
          <ul>
            {goals.map(goal => (
              <Goal
                key={goal._id}
                goal={goal}
              />
            ))}
          </ul>
        }
      </section>
    );
  }
}


export default connect(
  state => ({
    goals: getGoalsById(state),
    user: getUser(state)
  }),
  { loadGoals }
)(Goals);
