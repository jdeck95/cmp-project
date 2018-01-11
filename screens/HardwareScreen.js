import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TabNavigator } from 'react-navigation'
import CameraScreen from "./CameraScreen";
import SpeakScreen from "./SpeakScreen";

export default class HardwareScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Hardware',
        title: 'Hardware'
    };

    render() {
        return (
            <Tabs/>
        )
    }
}

const Tabs = TabNavigator({
    Kamera: {
        screen: CameraScreen
    },
    Sprache: {
        screen: SpeakScreen
    }
}, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#e91e63',
        style: {
            backgroundColor: '#3399FF'
        }
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});