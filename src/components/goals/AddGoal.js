import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormControl from '../shared/FormControl';
import { addGoal } from '../goals/actions';

class AddGoal extends PureComponent {

  state = {
    name: '',
    description: ''
  };

  static propTypes = {
    addGoal: PropTypes.func
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleAdd = event => {
    event.preventDefault();
    const { addGoal } = this.props;
    addGoal(this.state);
    this.setState({ name: '', description: '' });
  };

  render() {
    const { name, description } = this.state;

    return (
      <section>
        <h2> Add a New Goal</h2>
        <form onSubmit={this.handleAdd}>
          <FormControl label="name">
            <input name="name" value={name} onChange={this.handleChange}/>
          </FormControl>
          <FormControl label="description">
            <input name="description" value={description} onChange=
              {this.handleChange}/>
          </FormControl>
          <button>Add</button>
        </form>
      </section>
    );
  }
}

export default connect(
  null,
  { addGoal }
)(AddGoal);