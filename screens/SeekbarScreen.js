import React, {Component} from 'react';

import {AppRegistry, StyleSheet, Text, View, Slider, Switch, Alert} from 'react-native';

export default class SeekbarScreen extends Component {

    constructor() {

        super();

        this.state = {
            SliderValue: 0,
            SwitchOnValueHolder :  false
        }
    }

    ShowAlert = (value) => {
        this.setState({
            SwitchOnValueHolder: value
        })

        if (value == true) {
            //Perform any task here which you want to execute on Switch ON event.
            Alert.alert("Schalter ist an.");
        }
        else {
            //Perform any task here which you want to execute on Switch OFF event.
            Alert.alert("Schalter ist aus.");
        }
    }

    render() {

        return (

            <View style={styles.MainContainer}>
                <Text style={{fontSize: 20}}>Slider Value = {this.state.SliderValue}</Text>

                <Slider
                    step={1}
                    minimumValue={0}
                    maximumValue={100}
                    minimumTrackTintColor="#009688"
                    onValueChange={(ChangedValue) => this.setState({SliderValue: ChangedValue})}
                    style={{width: '100%', marginBottom: 30}}
                />

                <Text style={{fontSize: 18}}> Schalter </Text>

                <Switch
                    onValueChange={(value) => this.ShowAlert(value)}
                    style={{marginBottom: 10}}
                    value={this.state.SwitchOnValueHolder}/>
            </View>

        );
    }
}

const styles = StyleSheet.create({

    MainContainer: {

        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        margin: 10

    }

});

AppRegistry.registerComponent('Project', () => Project);