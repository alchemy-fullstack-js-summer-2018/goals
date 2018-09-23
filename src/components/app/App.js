import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PrivateRoute from './PrivateRoute';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { tryLoadUser } from '../auth/actions';
import { getCheckedAuth } from '../auth/reducers';
import Header from './Header';
// import Home from './Home';
import Auth from '../auth/Auth';
import Goals from '../goals/Goals';
import Goal from '../goals/Goal';

class App extends PureComponent {
  static propTypes = {
    tryLoadUser: PropTypes.func.isRequired,
    checkedAuth: PropTypes.bool.isRequired
  };

  componentDidMount() {
    this.props.tryLoadUser();
  }

  render() {
    const { checkedAuth } = this.props;

    return (
      <Router>
        <div>
          <Header/>
          <main>
            {checkedAuth &&
            <Switch>
              <Route exact path="/" render={() => <h2>This is Home</h2>}/>
              <Route path="/auth" component={Auth}/>
              <PrivateRoute exact path="/goals" component={Goals}/>
              <PrivateRoute path="/goals/:id" component={Goal}/>
              <Redirect to="/auth" component={Auth}/>
            </Switch>
            }
          </main>
        </div>
      </Router>
    );
  }
}
 
export default connect(
  state => ({ checkedAuth: getCheckedAuth(state) }),
  { tryLoadUser }
)(App);
