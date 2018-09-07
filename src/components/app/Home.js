import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <h2>Home Page</h2>
        <h3><NavLink exact to="/auth/signup">Sign Up</NavLink> to start adding goals!</h3>
      </div>
    );
  }
}
 
export default Home;