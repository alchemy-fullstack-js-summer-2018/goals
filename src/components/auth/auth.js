import React, { PureComponent } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Credentials from './Credentials';
// import styles from './Auth.css';

class Auth extends PureComponent {

  static propTypes = {
    signin: PropTypes.func.isRequired,
    signup: PropTypes.func.isRequired
  };
    
  render() { 
    const { signin, signup } = this.props;

    return (
      <section>
        <h2>Auth Component</h2>
        <Switch>
          <Route path="/auth/signin" component={() => (
            <div>
              <p>Not yet registered? <Link to="/auth/signup">Sign Up</Link></p>
              <Credentials action="Sign In" submit={signin}/>
            </div>
          )}/>
          <Route path="/auth/signup" component={() => (
            <div>
              <p>Already have an account? <Link to="/auth/signin">Sign In</Link></p>
              <Credentials action="Sign Up" submit={signup}/>
            </div>
          )}/>
          <Redirect to="/auth/signin"/>
        </Switch>
      </section>
    );
  }
}
 
export default Auth;