import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import store from './store';
import MainScreen from './screens/MainScreen';
import ActivityIndicator from "./screens/ActivityIndicator";

export default class App extends Component {
  render() {
    const MainNavigator = StackNavigator({
        Main: { screen: MainScreen },
        Profile: { screen: ActivityIndicator  }
    });

    return (
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
    );
  }
}
