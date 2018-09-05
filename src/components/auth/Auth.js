import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import Credentials from './Credentials';

class Auth extends PureComponent {

  static propTypes = {
    location: PropTypes.object
  };

  render() { 
    // const { location } = this.props;
    return (
      <section>
        <Switch>
          <Route path="auth/signin" component={() => (
            <div>
              <p>Not yet registered? <Link to="/auth/signup">Sign Up</Link></p>
              <Credentials action="Sign In" submit={signin}/>
            </div>
          )}/>
          <Route path="/auth/signup" render={(_ => (
            <div>
              <p>Already have an account? <Link to ="/auth/signin">Sign In</Link></p>
              <Credentials action="Sign Up" submit={signup} allowName={true}/>
            </div>
          ))}/>
          <Redirect to="/auth/signin"/>
        </Switch>
      </section>
    );
  }
}
 
export default Auth;