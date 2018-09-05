import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';

class Header extends Component {

  // static propTypes = {

  // }

  render() { 
    return (
      <header>
        <h1>Fuck you burke holland</h1>
        <h2>You son of a bitch</h2>
        <nav>
          <Link to="/">Home</Link>
          &nbsp;
          <Link to="/goals">Goals</Link>
        </nav>
      </header>
    );
  }
}
 
export default Header;