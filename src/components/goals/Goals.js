import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Goal from './Goal';
import AddGoal from './AddGoal';
import { connect } from 'react-redux';
import { getGoalList } from './reducers';
import { loadGoals } from './actions';

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
        <ol>
          {goals.map(goal => <Goal key={goal._id} goal={goal}/>)}
        </ol>
      </section>
    );
  }
}
 
export default connect(
  state => ({ goals: getGoalList(state) }),
  { loadGoals }
)(Goals);