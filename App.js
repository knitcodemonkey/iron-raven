import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Router from './Router';

export default class IronRaven extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // Wait to render until we have run our common_init_app action in componentWillMount method.
    return (
      <Router />
    );
  }
}

AppRegistry.registerComponent('IronRaven', () => IronRaven);
