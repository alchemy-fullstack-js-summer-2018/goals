import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { getGoalById } from './reducers';
import { loadGoal } from './actions';

class GoalDetail extends PureComponent {

  static propTypes = {
    loadGoal: PropTypes.func.isRequired,
    match: PropTypes.object,
    goal: PropTypes.object,
  };

  componentDidMount() {

    const { loadGoal, match } = this.props;
    loadGoal(match.params.id);
  }

  render() {
    const { goal, match } = this.props;
    if(!goal) return null;
    const { url } = match;

    return (
      <article>
        <h3>{goal.name} : {goal.description}</h3>

        <Switch>
          <Route path={`${url}/paragraph`} render={() => {
            return <ListView goals={goal}/>;
          }}/>

          <Route path={`${url}/list`} render={() => {
            return <ListView goals={goal.name}/>;
          }}/>

          <Redirect to={`${url}/list`}/>
    
        </Switch>
      </article>
    );
  }
}

const ParagraphView = ({ goals }) => (
  <p>My goal is {goals.join(', ')}</p>
);
ParagraphView.propTypes = { goals: PropTypes.array };

const ListView = ({ goals }) => (
  <ul>
    {goals.map((goal, i) => <li key={i}>{goal}</li>)}
  </ul>
);
ListView.propTypes = { goals: PropTypes.array };

export default connect(
  (state, { match }) => ({
    goal: getGoalById(state, match.params.id)
  }),
  { loadGoal }
)(GoalDetail);
