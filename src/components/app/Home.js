import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../auth/reducers';

class Home extends PureComponent {

  static propTypes = {
    user: PropTypes.object
  };

  render() {
    const { user } = this.props;

    return (
      <div>
        {user && <p>Welcome, {user.name}</p>}
        <p>You need goals...so start tracking them!</p>
        {!user && <Link to="/auth">Sign up now!</Link>}
      </div>
    );
  }
}

export default connect(
  state => ({
    user: getUser(state)
  })
)(Home);
