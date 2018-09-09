import React, { PureComponent } from 'react';
import FormControl from '../shared/FormControl';
import PropTypes from 'prop-types';

class GoalForm extends PureComponent {

  state = {
    name: '',
    description: ''
  };

  static propTypes = {
    submit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
  };

  handleSubmit = event => {
    event.preventDefault();
    if(!this.state.name || !this.state.description) return;
    this.props.submit(this.state);
  };

  handleCancel = event => {
    event.preventDefault();
    this.props.onCancel();
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { name, description } = this.state;

    return (
      <section>
        <h2>Add a New Goal</h2>
        <form onSubmit={this.handleSubmit}>
          <FormControl label="Goal">
            <input name="name" value={name} onChange={this.handleChange}/>
          </FormControl>

          <FormControl label="Description">
            <textarea name="description" onChange={this.handleChange} value={description} placeholder="Goal description..."></textarea>
          </FormControl>

          <button>Add</button>
          <button onClick={this.handleCancel}>Cancel</button>
        </form>
      </section>
    );
  }
}

export default GoalForm;