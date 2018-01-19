import React, { Component } from 'react';

import { StyleSheet, View, Alert, TextInput, Text } from 'react-native';

export default class CountLetterScreen extends Component {

    constructor()
    {
        super();

        this.state={

            TextValue : ''

        }
    }

    GetValueFunction = (ValueHolder) =>{

        var Value = ValueHolder.length.toString() ;

        this.setState({TextValue : Value}) ;

    }

    render() {
        return (

            <View style={styles.MainContainer}>

                <Text style={styles.TextStyle}> { this.state.TextValue } </Text>

                <TextInput

                    placeholder="Enter Text here"

                    onChangeText={ ValueHolder => this.GetValueFunction(ValueHolder) }

                    style={styles.TextInputStyle}
                />

            </View>

        );
    }
}

const styles = StyleSheet.create(
    {
        MainContainer: {

            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            margin: 10

        },

        TextInputStyle:{

            textAlign: 'center',
            height: 50,
            width: '90%'
        },

        TextStyle: {

            textAlign: 'center',
            fontSize: 25

        }

    });