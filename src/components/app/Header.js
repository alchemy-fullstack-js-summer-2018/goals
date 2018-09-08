import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Error from './Error';
import { getUser } from '../auth/reducers';
import { logout } from '../auth/actions';

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
          <Link to="/goals">My Goals</Link>
          {user
            ? <Link to="/auth/signin" onClick={() => logout()}>Logout</Link>
            : <Link to="/auth/signin">Login</Link>
          }
        </nav>
        {user && <span>Welcome {user.name}!</span>}
        <Error/>
      </header>
    );
  }
}
 
export default connect(
  state => ({ user: getUser(state) }),
  { logout }
)(Header);