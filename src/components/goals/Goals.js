import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../auth/reducers';
import { getGoals } from './reducers';
import { loadGoals, addGoal } from './actions';
import GoalForm from './GoalForm';
import styles from './Goals.css';

export class Goals extends PureComponent {

  state = {
    adding: false
  };

  static propTypes = {
    user: PropTypes.object.isRequired,
    loadGoals: PropTypes.func.isRequired,
    addGoal: PropTypes.func.isRequired
  };

  componentDidMount() {
  }

  handleAdd = goal => {
    const { addGoal } = this.props;
    return addGoal(goal)
      .then(() => this.toggleAdding());
  };

  toggleAdding = () => {
    this.setState(({ adding }) => ({ adding: !adding }));
  };

  render() { 
    const { adding } = this.state;
    const { user } = this.props;

    return (
      <div className={styles.goals}>
        {adding 
          ? <GoalForm submit={this.handleAdd}/>
          : <p onClick={this.toggleAdding}>Add a Goal</p>
        }
        <h2>YOU ARE {user.name}!</h2>
      </div>
    );
  }
}
 
export default connect(
  state => ({
    user: getUser(state),
    goals: getGoals(state)
  }),
  { loadGoals, addGoal }
)(Goals);
