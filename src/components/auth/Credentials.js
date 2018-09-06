import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FormControl from '../shared/FormControl';

export default class Credentials extends PureComponent {

  static propTypes = {
    // submit: PropTypes.func.isRequired,
    // action: PropTypes.string.isRequired,
    allowName: PropTypes.bool
  };

  state = {
    name: '',
    email: '',
    password: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.submit(this.state)
      .catch(() => {});
  }

  render() {
    const { action, allowName = false } = this.props;
    const { name, email, password } = this.state;

    return (
      <form>
        { allowName && 
        <FormControl label="Name">
          <input name="name" value={name} onChange={this.handleChange}/>
        </FormControl>
        }

        <FormControl label="Email">
          <input name="email" value={email} onChange={this.handleChange}/>
        </FormControl>

        <FormControl label="Password">
          <input type="password" name="password" value={password} onChange={this.handleChange}/>
        </FormControl>

        <FormControl>
          <button>{action}</button>
        </FormControl>
      </form>
    );
  }
}