import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGoalList } from './reducers';
import { loadGoals } from './actions';
import Goal from './Goal';
import AddGoal from './AddGoal';

class Goals extends PureComponent {

  static propTypes = {
    loadGoals: PropTypes.func.isRequired,
    goals: PropTypes.array
  };

  componentDidMount() {
    this.props.loadGoals();
  }

  render() {
    const { goals } = this.props; 
    if(!goals) return null;
    return (
      <section>
        <h2>Goals</h2>
        <AddGoal/>
        <ul>
          {goals.map(goal => <Goal key={goal._id} goal={goal}/>)}
        </ul>
      </section>
    );
  }
}
 
export default connect(
  state => ({ goals: getGoalList(state) }),
  { loadGoals }
)(Goals);