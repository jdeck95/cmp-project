import React from 'react'
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native'

export default class LoginScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                {/*<Text style={styles.text}>Welcome to the Prototype of a React Native App</Text>*/}
                <TouchableHighlight
                    style={{flex: 2, marginLeft: 50}}
                    onPress={()=>{this.props.navigation.navigate('drawerStack')}}>
                    <View style={styles.loginButton}>
                        <Text style={{color: 'white'}}>Login</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        top: -40,
        paddingBottom: 0
    },
    loginButton: {
        width: '80%',
        height: 60,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#3399FF',
        backgroundColor: '#3399FF',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
});