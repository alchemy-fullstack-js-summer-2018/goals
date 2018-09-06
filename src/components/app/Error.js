import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getError } from './reducers';
import { clearError } from './actions';

class Error extends PureComponent {
  static propTypes = {
    error: PropTypes.any,
    clearError: PropTypes.func.isRequired
  };

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