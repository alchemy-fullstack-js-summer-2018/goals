import React, { PureComponent } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

class Auth extends PureComponent {

  render() {

    return (
      <div>
        <h5>Hello Auth!</h5>
        <main>
          <Switch>
            <Route exact path="/auth/signup" component={() => (
              <div>
                <p>No account? <Link to="/auth/signup">Sign Up</Link></p>
              </div>
            )}/>
            <Route exact path="/auth/signin" component={() => (
              <div>
                <p>Already have an account? <Link to="/auth/signup">Sign In</Link></p>
              </div>
            )}/>
            <Route exact path="/auth/signin"/>
            <Redirect to="/auth/signup"/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default Auth;
