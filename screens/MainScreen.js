import { Button } from 'react-native';
import React, { Component } from 'react';
import { View, Platform, Text } from 'react-native';
import { STATUS_BAR_HEIGHT } from '../constants';




class MainScreen extends Component {
    static navigationOptions = () => ({
        title: 'Übersicht',
        headerStyle: {
            height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 54,
            backgroundColor: '#2196F3'
        },
        headerTitleStyle: {
            marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
            color: 'white'
        },
        headerLeft: <View><Text>Icon</Text></View>
    });

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, backgroundColor: 'black' }}>
                {<Button
                    onPress={() =>
                        navigate('Profile', { name: 'Aktivitätsanzeige' })}
                    title="Aktivitätsanzeige"
                    color="#841584"
                    accessibilityLabel="Aktivitätsanzeige"
                />}

            </View>

        );
    }
}

export default MainScreen;