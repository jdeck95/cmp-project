import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { STATUS_BAR_HEIGHT } from '../constants';

class ActivityIndicator extends Component {
    static navigationOptions = () => ({
        title: 'Aktivitätsanzeige',
        headerStyle: {
            marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
            backgroundColor: '#2196F3',
        },
    });

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fdf5e6' }}>

            </View>
        );
    }
}

export default ActivityIndicator;