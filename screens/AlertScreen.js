import React, { Component } from 'react';

import { AppRegistry, StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class AlertScreen extends Component {


    ShowAlertDialog = () =>{

        Alert.alert(

            // This is Alert Dialog Title
            'Alert Dialog Title',

            // This is Alert Dialog Message.
            'Alert Dialog Message',
            [
                // First Text Button in Alert Dialog.
                {text: 'Ask me later', onPress: () => console.log('Ask me later Button Clicked')},

                // Second Cancel Button in Alert Dialog.
                {text: 'Cancel', onPress: () => console.log('Cancel Button Pressed'), style: 'cancel'},

                // Third OK Button in Alert Dialog
                {text: 'OK', onPress: () => console.log('OK ButtonPressed')},

            ]

        )

    }

    render() {

        return (

            <View style={styles.MainContainer}>

                <Button title="Show Alert Dialog " onPress={this.ShowAlertDialog} />

            </View>
        );
    }
}

const styles = StyleSheet.create({

    MainContainer :{

// Setting up View inside content in Vertically center.
        justifyContent: 'center',
        flex:1,
        margin: 10

    }

});

AppRegistry.registerComponent('Myproject', () => Myproject);