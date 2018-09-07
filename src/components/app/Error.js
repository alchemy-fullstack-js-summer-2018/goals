import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getError } from './app-reducers';
import { clearError } from './app-actions';
import PropTypes from 'prop-types';

class Error extends PureComponent {

  static propTypes = {
    error: PropTypes.any,
    clearError: PropTypes.func.isRequired
  }

  componentDidUpdate() {
    if(!this.props.error) return;
    setTimeout(this.props.clearError, 3000);
  }

  render() {
    const { error } = this.props;
    if(!error) return null;

    const message = error.message || error.error || error;

    return (
      <pre>{message}</pre>
    );
  }
}

export default connect(
  state => ({
    error: getError(state)
  }),
  { clearError }
)(Error);