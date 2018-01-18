import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default class GalleryScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Gallery',
        title: 'Gallery'
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