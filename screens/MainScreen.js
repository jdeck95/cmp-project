import React, { Component } from 'react';
import { Platform,  Button } from 'react-native';
import { STATUS_BAR_HEIGHT } from '../constants';
import ButtonCard from '../components/ButtonCard';




class MainScreen extends Component {
    static navigationOptions = () => ({
        title: 'React Native Prototype',
        headerStyle: {
            marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
            backgroundColor: '#2196F3',
        },
    });

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ButtonCard text1 = "Dieser Button führt zur Aktivitätsänzeige." text2 = "Für weitere Informationen klicken!">
                <Button
                    onPress={() =>
                    navigate('Profile', { name: 'Aktivitätsanzeige' })}
                    title="Aktivitätsanzeige"
                    color="#841584"
                    accessibilityLabel="Aktivitätsanzeige"
                />
            </ButtonCard>
        );
    }
}

export default MainScreen;