import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Credentials from './Credentials';
import { getUser } from './reducers';
import { signin, signup } from './actions';
class Auth extends PureComponent {

  static propTypes = {
    user: PropTypes.object,
    signin: PropTypes.func.isRequired,
    signup: PropTypes.func.isRequired,
    location: PropTypes.object
  }

  render() {
    const { user, signin, signup, location } = this.props;

    return (
      <section>
        <Switch>
          <Route exact path="/auth/signin" component={() => (
            <div>
              <p>No account? <Link to="/auth/signup">Sign Up</Link></p>
              <Credentials action="Sign In" submit={signin}/>
            </div>
          )}/>
          <Route exact path="/auth/signup" component={() => (
            <div>
              <p>Already have an account? <Link to="/auth/signin">Sign In</Link></p>
              <Credentials action="Sign Up" submit={signup} allowName={true}/>
            </div>
          )}/>
          <Route exact path="/auth/signin"/>
          <Redirect to="/auth/signup"/>
        </Switch>
      </section>
    );
  }
}

export default connect(
  state => ({
    user: getUser(state)
  }),
  { signup, signin }
)(Auth);