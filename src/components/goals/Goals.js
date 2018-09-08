import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGoals } from './reducers';
import { getUser } from '../auth/reducers';
import { loadGoals, addGoal } from './actions';
import Goal from './Goal';
import GoalForm from './GoalForm';

export class Goals extends Component {

  state = {
    editing: false
  }
  
  static propTypes = {
    loadGoals: PropTypes.func.isRequired,
    addGoal: PropTypes.func.isRequired,
    goals: PropTypes.array.isRequired,
    user: PropTypes.object
  };

  componentDidMount = () => {
    this.props.loadGoals();
  };

  handleAdd = goal => {
    const { addGoal } = this.props;
    return addGoal(goal)
      .then(() => this.toggleAdd());
  };

  toggleAdd = () => {
    this.setState(({ editing }) => ({ editing: !editing }));
  };

  render() {
    const { editing } = this.state;
    const { user, goals } = this.props;

    return (
      <section>
        {editing
          ? <GoalForm submit={this.handleAdd} onCancel={this.toggleAdd}/>
          : <Fragment>
            <h1>{user.name}&apos;s Goals</h1>
            <button onClick={this.toggleAdd}>Add a goal</button>
          </Fragment>
        }
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
    goals: getGoals(state),
    user: getUser(state)
  }),
  { loadGoals, addGoal }
)(Goals);
