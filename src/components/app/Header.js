import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../auth/reducers';
import { logout } from '../auth/actions';
import PropTypes from 'prop-types';
import Error from './Error';
import styles from './Header.css';

class Header extends Component {

  static propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func.isRequired
  };
  
  handleLogout = () => {
    this.props.logout();
  };

  render() {
    const { user } = this.props;

    return (
      <div className={styles.header}>
        <nav id="nav-ul">
          <ul>
            <li>
              <NavLink
                to="/"
                style={{ color: '#2c3e50', textDecoration: 'none', fontWeight: 'bold' }} 
                exact activeStyle={{ color: 'white', borderBottom: '2px solid #F4F9F4', fontWeight: 'bold' }}
              >Home</NavLink>
              {
                user
                  ? <NavLink
                    to="/"
                    onClick={this.handleLogout}
                    style={{ color: '#2c3e50', textDecoration: 'none', fontWeight: 'bold' }} 
                    exact activeStyle={{ color: 'white', borderBottom: '2px solid #F4F9F4', fontWeight: 'bold' }}
                  >Logout</NavLink>
                  : <NavLink
                    to="/auth"
                    style={{ color: '#2c3e50', textDecoration: 'none', fontWeight: 'bold' }} 
                    exact activeStyle={{ color: 'white', borderBottom: '2px solid #F4F9F4', fontWeight: 'bold' }}
                  >Login</NavLink>
              }
            </li>
          </ul>
        </nav>
        <Error/>
      </div>
    );
  }
}

export default connect(
  state => ({
    user: getUser(state)
  }),
  { logout }
)(Header);