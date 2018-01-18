import React, { Component } from 'react';

import { StyleSheet, View, Vibration, Button } from 'react-native'

const DURATION = 10000 ;

const PATTERN = [ 1000, 2000, 3000, 4000] ;

export default class VibrationScreen extends Component {


    StartVibrationFunction=()=>{

        // Device Will Vibrate for 10 seconds.
        Vibration.vibrate(DURATION) ;

        // Android Device Will Vibrate in pattern : Wait 1sec -> vibrate 2sec -> wait 3sec.
        // iOS Device Will Vibrate in pattern : Wait 1sec -> Vibrate -> wait 2sec -> Vibrate -> wait 3sec -> Vibrate

        // Vibration.vibrate(PATTERN)


        // Android Device Will Vibrate in above pattern Infinite Time.
        // iOS Device Will Vibrate in above pattern Infinite Time.

        // Vibration.vibrate(PATTERN, true)

    }

    StopVibrationFunction=()=>{

        // Stop Vibration.
        Vibration.cancel();


    }


    render() {

        return (

            <View style={styles.MainContainer}>

                <View style={{margin: 10}}>

                    <Button title = " Start Vibration " onPress = {this.StartVibrationFunction} />

                </View>

                <View style={{margin: 10}}>

                    <Button title = " Stop Vibration " onPress = {this.StopVibrationFunction} />

                </View>


            </View>

        );
    }
}

const styles = StyleSheet.create({

    MainContainer :{

        justifyContent: 'center',
        flex:1,
        margin: 10
    }


});