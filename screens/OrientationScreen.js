import React, { Component } from 'react';

import { StyleSheet, View, Text } from 'react-native';

export default class OrientationScreen extends Component<{}> {

    constructor(){

        super();

        this.state = {

            OrientationStatus : '',

            Height_Layout : '',

            Width_Layout : '',

        }
    }

    componentDidMount(){

        this.DetectOrientation();

    }

    DetectOrientation(){

        if(this.state.Width_Layout > this.state.Height_Layout)
        {

            // Write Your own code here, which you want to execute on Landscape Mode.

            this.setState({
                OrientationStatus : 'Querformat'
            });
        }
        else{

            // Write Your own code here, which you want to execute on Portrait Mode.

            this.setState({
                OrientationStatus : 'Hochformat'
            });
        }

    }


    render() {

        return (

            <View style={styles.MainContainer} onLayout={(event) => this.setState({
                Width_Layout : event.nativeEvent.layout.width,
                Height_Layout : event.nativeEvent.layout.height
            }, ()=> this.DetectOrientation())}>

                <Text style={styles.TextStyle}> { this.state.OrientationStatus } </Text>

            </View>

        );
    }
}


const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },

    TextStyle :{
        fontSize : 20,
        color : '#000'
    }

});