//import React, { Component, PureComponent } from 'react';
import React, { PureComponent } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class Home extends PureComponent {
  state = {
    name: 'Goal 1',
    description: 'pet 7 cats'
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { name, description } = this.state;

    return (
      <section>
        <p>
          name: <input name="name" value={name} onChange={this.handleChange}/>
        </p>
        <p>
          color: <input name="description" value={description} onChange={this.handleChange}/>
        </p>

        <ChildComponent name={name}/>

        <WithRouterDisplay>
          <span>{name}</span>
        </WithRouterDisplay>

        <Tabs>
          <TabList>
            <Tab>some thing 1</Tab>
            <Tab>some thing 2</Tab>
            <Tab>some thing 3</Tab>
          </TabList>

          <TabPanel>
            <h2>sweet sweet content</h2>
          </TabPanel>

          <TabPanel>
            <h2>less sweet content</h2>
          </TabPanel>

          <TabPanel>
            <h2>boring shit</h2>
          </TabPanel>
        </Tabs>
      </section>
    );
  }
}

class Display extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
    location: PropTypes.object
  };

  render() {
    const { children, location } = this.props;
    console.log('we children', children);
    return (
      <div>
        <h3>Display Component</h3>
        {children}
        <div>{location.pathname}</div>
      </div>
    );
  }
}

const WithRouterDisplay = withRouter(Display);

class ChildComponent extends PureComponent {
    static propTypes = {
      name: PropTypes.string
    };
    render() {
      const { name } = this.props;
      console.log('ChildComponent render()');

      return (
        <p>
          Name: {name}
        </p>
      );
    }
}

export default Home;