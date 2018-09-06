import React, { PureComponent } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import Credentials from './Credentials';
import { connect } from 'react-redux';
import { getUser } from './reducers';
import { signin, signup } from './actions';
class Auth extends PureComponent {

  render() {

    return (
      <div>
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
      </div>
    );
  }
}

export default connect(
  state => ({
    user: getUser(state)
  }),
  { signup, signin }
)(Auth);