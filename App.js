import React, { Component } from 'react';
import {Platform, View} from 'react-native';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import store from './store';
import {STATUS_BAR_HEIGHT} from "./constants";

import LoginScreen from './screens/LoginScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import HardwareScreen from './screens/HardwareScreen'
import ImpressumScreen from './screens/ImpressumScreen'
import DrawerScreen from './screens/DrawerScreen'
import GalleryScreen from './screens/GalleryScreen'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation/>
      </Provider>
    );
  }
}

// drawer stack
const DrawerStack = DrawerNavigator({
    Welcome: { screen: WelcomeScreen },
    Hardware: { screen: HardwareScreen },
    Impressum: { screen: ImpressumScreen },
    Gallery: { screen: GalleryScreen},
}, {
    gesturesEnabled: false,
    contentComponent: DrawerScreen
});

const DrawerNavigation = StackNavigator({
    DrawerStack: { screen: DrawerStack }
}, {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
        headerStyle: {backgroundColor: '#3399FF', marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,},
        headerTitleStyle: {color: '#fff'},
        headerLeft:
            <View style={{paddingLeft: 15}}>
                <Icon name={'bars'} size={30} color={'white'} onPress={() => {
                    if (navigation.state.index === 0) {
                        navigation.navigate('DrawerOpen')
                    } else {
                        navigation.navigate('DrawerClose')
                    }
                }}/>
            </View>
    })
});

// login stack
const LoginStack = StackNavigator({
    loginScreen: { screen: LoginScreen },
}, {
    headerMode: 'float',
    navigationOptions: {
        headerStyle: {backgroundColor: 'red', marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0},
        headerTitleStyle: {color: '#fff'},
        title: 'You are not logged in'
    }
});

// Manifest of possible screens
const AppNavigation = StackNavigator({
    loginStack: { screen: LoginStack },
    drawerStack: { screen: DrawerNavigation }
}, {
    // Default config for all screens
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'loginStack'
});
