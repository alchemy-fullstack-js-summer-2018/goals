import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../auth/reducers';
import { logout } from '../auth/actions';
import PropTypes from 'prop-types';
// import Error from './Error';
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
              <Link to="/">Home</Link>&nbsp;
              {
                user
                  ? <Link to="/" onClick={this.handleLogout}>Logout</Link>
                  : <Link to="/auth">Login</Link>
              }
            </li>
          </ul>
        </nav>
        {user && <span>Welcome {user.name}!</span>}
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