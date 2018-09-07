import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGoals } from './reducers';
import { addGoal, loadGoals } from './actions';
import GoalForm from './GoalForm';
import Goals from './Goals';

class Dashboard extends Component {

  state = {
    toggle: false
  }
 
  static propTypes = {
    user: PropTypes.object,
    goals: PropTypes.array,
    loadGoals: PropTypes.func.isRequired,
    addGoal: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.loadGoals();
  }

  handleToggle = () => {
    const { toggle } = this.state;
    this.setState({ toggle: !toggle });
  }

  render() { 
    const { toggle } = this.state;
    const { goals, addGoal } = this.props;
    return (
      <div>
        <section>
          { toggle 
            ? <GoalForm onComplete={addGoal}
            /> 
            : <button onClick={this.handleToggle}>Add a Goal</button>
          }
        </section>

        {goals &&
          <section>
            <Goals
              goals={goals}
            />
          </section>
        }
      </div>
    );
  }
}
 
export default connect(
  state => ({
    goals: getGoals(state)
  }),
  { loadGoals, addGoal } 
)(Dashboard);
