import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUser } from '../auth/reducers';
import { logout } from '../auth/actions';
import Error from './Error';

class Header extends Component {

  static propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func.isRequired
  };

  render() { 
    const { user, logout } = this.props;

    return (
      <header>
        <section>
          {user && <span>Logged in as {user.profile.name}</span>}
          <h1><NavLink exact to="/">Goals</NavLink></h1>
          <nav>
            <ul>
              <li>
                {user
                  ? <NavLink to="/" onClick={logout}>Logout</NavLink>
                  : <NavLink to="/auth">Login</NavLink>
                }
              </li>
            </ul>
          </nav>
        </section>

        <Error/>
      </header>
    );
  }
}
 
export default connect(
  state => ({ user: getUser(state) }),
  { logout }
)(Header);