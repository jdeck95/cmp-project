import React, { Component } from 'react';
import {Platform, View} from 'react-native';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import store from './store';
import { Constants } from 'expo'

import LoginScreen from './screens/LoginScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import HardwareScreen from './screens/HardwareScreen'
import ImpressumScreen from './screens/ImpressumScreen'
import VibrationScreen from './screens/VibrationScreen'
import TimeScreen from './screens/TimeScreen'
import ShareTextScreen from './screens/ShareTextScreen'
import SwipeableScreen from './screens/SwipeableScreen'
import FloatingActionButtonScreen from './screens/FloatingActionButtonScreen'
import YoutubeScreen from './screens/YoutubeScreen'
import DropDownListScreen from './screens/DropDownListScreen'
import ChangeBackgroundScreen from './screens/ChangeBackgroundScreen'
import DrawerScreen from './screens/DrawerScreen'
import {STATUS_BAR_HEIGHT} from "./constants";


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
    Vibration: { screen: VibrationScreen },
    Time: { screen: TimeScreen },
    ShareText: { screen: ShareTextScreen },
    Swipeable: { screen: SwipeableScreen },
    FloatingActionButton: { screen: FloatingActionButtonScreen },
    Youtube: { screen: YoutubeScreen },
    ChangeBackground: { screen: ChangeBackgroundScreen },
    DropDownList: { screen: DropDownListScreen },
}, {
    gesturesEnabled: false,
    contentComponent: DrawerScreen
});

const DrawerNavigation = StackNavigator({
    DrawerStack: { screen: DrawerStack }
}, {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
        headerStyle: {backgroundColor: '#3399FF', marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,},
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
        headerStyle: {backgroundColor: 'red', marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0},
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
