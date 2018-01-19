import React, { Component } from 'react';

import { AppRegistry, StyleSheet, View, TextInput} from 'react-native';

export default class NumpadScreen extends Component {

    render() {
        return (

            <View style={styles.MainContainer}>

                <TextInput

                    placeholder="Text Input For Numeric Value"

                    style={styles.TextInputStyle}

                    keyboardType={'numeric'}

                />

            </View>

        );
    }
}

const styles = StyleSheet.create({

    MainContainer :{

        justifyContent: 'center',
        flex:1,
        margin: 10
    },

    TextInputStyle: {

        textAlign: 'center',

    }

});