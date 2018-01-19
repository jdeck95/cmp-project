import React, { Component } from 'react';

import { AppRegistry, StyleSheet, Text, View, Button, Dimensions,Alert } from 'react-native';

export default class HeightWidthScreen extends Component {

    GetHeightFunction = () =>
    {
        const Height_Holder = Dimensions.get('window').height;

        Alert.alert("Gerät Höhe: " + Height_Holder);
    }

    GetWidthFunction = () =>
    {
        const Width_Holder = Dimensions.get('window').width;

        Alert.alert("Gerät Breite: " + Width_Holder);
    }

    render() {
        return (
            <View style={styles.MainContainer}>

                <View style={styles.ButtonStyle}>

                    <Button title = "Gerät Höhe" onPress = { this.GetHeightFunction }/>

                </View>

                <View style={styles.ButtonStyle}>

                    <Button title = "Gerät Breite" onPress = { this.GetWidthFunction } />

                </View>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
        margin: 10,
    },

    ButtonStyle: {

        margin: 10

    }

});

AppRegistry.registerComponent('Project', () => Project);