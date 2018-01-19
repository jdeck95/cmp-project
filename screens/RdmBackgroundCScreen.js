import React, { Component } from 'react';

import { StyleSheet, View, Button } from 'react-native';

export default class RdmBackgroundCScreen extends Component {

    constructor(){

        super();

        this.state={

            ColorHolder : '#00BCD4'

        }
    }

    ChangeColorFunction=()=>
    {

        var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

        this.setState({

            ColorHolder : ColorCode

        })
    }

    render() {
        return (

            <View style={[styles.MainContainer, { backgroundColor: this.state.ColorHolder }]} >

                <Button title="Hintergrundfarbe ändern" onPress={this.ChangeColorFunction} />

            </View>

        );
    }
}

const styles = StyleSheet.create(
    {
        MainContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }

    });