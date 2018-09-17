import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormControl from '../shared/FormControl';
import { addGoal } from '../goals/actions';

class AddGoal extends PureComponent {

  state = {
    goal: ''
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
    this.setState({ goal: '' });
  };

  render() { 
    const { goal } = this.state;
    return (
      <section>
        <h2>Add a new goal!</h2>
        <form onSubmit={this.handleAdd}>
          <FormControl label="name">
            <input name="goal" value={goal} onChange={this.handleChange}/>
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
