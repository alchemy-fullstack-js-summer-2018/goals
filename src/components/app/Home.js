import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Home extends PureComponent {

  render() {

    return (
      <div>
        <p>You need goals...so sign up to start tracking them!</p>
        <Link to="/auth">Sign up now!</Link>
      </div>
    );
  }
}

export default Home;
