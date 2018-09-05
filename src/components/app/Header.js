import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends PureComponent {

  static propTypes = {
    user: PropTypes.object
  }

  render() {
    const { user } = this.props;

    return (
      <div>
        <h1>Life Goals</h1>
        <nav>
          <Link to="/">Home</Link>
          &nbsp;
          <Link to="/goals">Goals</Link>
          &nbsp;
          {
            user
              ? <Link to="/" onClick={this.handleLogout}>Logout</Link>
              : <Link to="/auth">Login</Link>
          }
        </nav>
      </div>
    );
  }
}

export default Header;
