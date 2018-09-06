import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Error from './Error';

class Header extends Component {
  static propTypes = {
    user: PropTypes.object,
  };

  render() {
    const { user } = this.props;
    return (
      <header>
        <h1>Goals</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/me/goals">My Goals</Link>
          {user
            ? <Link to="/" onClick={this.handleLogout}>Logout</Link>
            : <Link to="/auth">Login</Link>
          }
        </nav>
        {user && <span>Welcome {user.name}!</span>}
        <Error/>
      </header>
    );
  }
}
 
export default Header;