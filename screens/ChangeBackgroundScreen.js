import React, { Component } from 'react';

import { View, Text, StyleSheet, Animated, Platform } from 'react-native';

export default class ChangeBackgroundScreen extends Component<{}>
{
    constructor()
    {
        super();

        this.Animation = new Animated.Value(0);
    }

    componentDidMount()
    {
        // If you want to Start the animation on button click then call this function on button onPress event.
        this.StartBackgroundColorAnimation();
    }


    StartBackgroundColorAnimation = () =>
    {
        this.Animation.setValue(0);

        Animated.timing(
            this.Animation,
            {
                toValue: 1,
                duration: 15000
            }
        ).start(() => { this.StartBackgroundColorAnimation() });
    }

    render()
    {
        const BackgroundColorConfig = this.Animation.interpolate(
            {
                inputRange: [ 0, 0.2, 0.4, 0.6, 0.8, 1 ],

                outputRange: [ '#FFEB3B', '#CDDC39', '#009688', '#03A9F4', '#3F51B5', '#FFEB3B' ]

            });

        return(

            <Animated.View style = {[ styles.MainContainer, { backgroundColor: BackgroundColorConfig } ]}>


                {/* Put all your components Here Inside the Root Animated View. */}

                <Text style = {styles.TextStyle}>Hintergrund ändert sich farblich</Text>


            </Animated.View>
        );
    }
}

const styles = StyleSheet.create(
    {
        MainContainer:
            {
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                marginTop: (Platform.OS == 'ios') ? 20 : 0
            },

        TextStyle: {

            color: "#000",
            fontSize: 20,
            textAlign: 'center'
        }
    });