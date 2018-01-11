import React, { Component } from 'react';
import { Platform,  Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ButtonCard from '../components/ButtonCard';
import {STATUS_BAR_HEIGHT} from "../constants";
import LoginScreen from './LoginScreen'

class MainScreen extends Component {
    static navigationOptions = () => ({
        title: 'Home',
        headerStyle: {
            marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
            backgroundColor: '#2196F3',
        },
    });
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ButtonCard text1 = "Dieser Button führt zum Login-Screen." text2 = "Für weitere Informationen klicken!">
                <Button
                    onPress={() =>
                    navigate('Login', { name: 'Login' })}
                    title="Login"
                    color="#841584"
                    accessibilityLabel="Login"
                />
            </ButtonCard>
        );
    }
}

const MainScreenStackNavigator = StackNavigator({
    Main: {
        screen: MainScreen
    },
    Login: {
        screen: LoginScreen
    }
});

export default MainScreen;