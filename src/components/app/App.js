import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { connect } from 'react-redux';
import { tryLoadUser } from '../auth/actions';
import { getCheckedAuth } from '../auth/reducers';
import { addGoal } from '../goals/actions';
import Header from './Header';
import Auth from '../auth/Auth';
import GoalList from '../goals/GoalList';
import GoalItem from '../goals/GoalItem';
import AddGoal from '../goals/AddGoal';

class App extends PureComponent {

  static propTypes = {
    tryLoadUser: PropTypes.func.isRequired,
    checkedAuth: PropTypes.bool.isRequired,
    addGoal: PropTypes.func
  }

  componentDidMount() {
    this.props.tryLoadUser();
  }

  handleAdd = goal => {
    const { addGoal } = this.props;
    return addGoal(goal);
  }

  render() { 
    const { checkedAuth } = this.props;

    return (
      <Router>
        <div>
          <Header/>
          <main>
            { checkedAuth && 
            <Switch>
              <Route exact path="/" render={() => <h2>I am home</h2>}/>
              <Route path="/auth" component={Auth}/>
              <PrivateRoute exact path="/goals" component={GoalList}/>
              <PrivateRoute path="/goals/new" onSubmit={this.handleAdd} component={AddGoal}/>
              <PrivateRoute path="/goals/:id" component={GoalItem}/>
              <Redirect to="/auth" component={Auth}/>
            </Switch>}
          </main>
        </div>
      </Router>
    );
  }
}
 
export default connect(
  state => ({ checkedAuth: getCheckedAuth(state) }),
  { tryLoadUser, addGoal }
)(App);