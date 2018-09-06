import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../auth/actions';
import { getUser } from '../auth/reducers';

class Header extends Component {

  static propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func.isRequired
  }

  render() { 
    const { logout, user } = this.props;

    return (
      <header>
        <h1>Fuck you burke holland</h1>
        <h2>You son of a bitch</h2>
        <nav>
          <Link to="/">Home</Link>
          &nbsp;
          <Link to="/goals">Goals</Link>
          &nbsp;
          {user ? 
            <Link to="/auth/signin" onClick={() => logout()}>Logout</Link> :
            <Link to="/auth/signin">Login</Link>
          }
        </nav>
      </header>
    );
  }
}
 
export default connect(
  state => ({ user: getUser(state) }),
  { logout }
)(Header);