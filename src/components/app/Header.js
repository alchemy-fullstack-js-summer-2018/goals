import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../auth/reducers';
import { logout } from '../auth/actions';

class Header extends Component {

  static propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func.isRequired
  }

  handleLogout = () => {
    this.props.logout();
  }

  render() { 
    const { user } = this.props;

    return (
      <div>
        <h1>Goal App</h1>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink exact to="/goals">Goals</NavLink>
            </li>
            <li>
              { user
                ? <NavLink to ="/" onClick={this.handleLogout}>Logout</NavLink>
                : <NavLink exact to="/auth">Login</NavLink>
              }
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
 
export default connect(
  state => ({ user: getUser(state) }),
  { logout }
)(Header);