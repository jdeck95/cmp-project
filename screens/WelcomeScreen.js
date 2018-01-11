import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default class WelcomeScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Welcome',
        title: 'Welcome'
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Willkommen zu dem Prototype einer React Native App</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})