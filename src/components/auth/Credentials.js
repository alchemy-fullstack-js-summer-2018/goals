import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FormControl from '../shared/FormControl';

class Credentials extends PureComponent {

  state = {
    name: '',
    email: '',
    password: ''
  }

  static propTypes = {
    submit: PropTypes.func.isRequired,
    action: PropTypes.string.isRequired,
    allowName: PropTypes.bool
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.submit(this.state)
      .catch(() => {});
  }

  render() { 
    const { name, email, password } = this.state;
    const { action, allowName = false } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        { allowName && 
          <FormControl label="name">
            <input name="name" value={name} onChange={this.handleChange}/>
          </FormControl>
        }
        <FormControl label="email">
          <input name="email" value={email} onChange={this.handleChange}/>
        </FormControl>
        
        <FormControl label="password">
          <input 
            type="password" 
            name="password" 
            value={password}
            onChange={this.handleChange}
          />
        </FormControl>

        <FormControl>
          <button>{action}</button>
        </FormControl>
      </form>
    );
  }
}
 
export default Credentials;