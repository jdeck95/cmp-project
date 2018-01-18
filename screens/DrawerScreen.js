import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'

export default class DrawerContainer extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text
                    onPress={() => navigation.navigate('Welcome')}
                    style={[styles.drawerItem, (this.props.activeItemKey === 'Welcome') ? styles.activeItem : null]}>
                    Welcome
                </Text>
                <Text
                    onPress={() => navigation.navigate('Hardware')}
                    style={[styles.drawerItem, (this.props.activeItemKey === 'Hardware') ? styles.activeItem : null]}>
                    Hardware
                </Text>
                <Text
                    onPress={() => navigation.navigate('Gallery')}
                    style={[styles.drawerItem, (this.props.activeItemKey === 'Gallery') ? styles.activeItem : null]}>
                    Gallery
                </Text>
                <Text
                    onPress={() => navigation.navigate('Impressum')}
                    style={[styles.drawerItem, (this.props.activeItemKey === 'Impressum') ? styles.activeItem : null]}>
                    Impressum
                </Text>
                <Text
                    onPress={() => navigation.navigate('Vibration')}
                    style={[styles.drawerItem, (this.props.activeItemKey === 'Vibration') ? styles.activeItem : null]}>
                    Vibration Test
                </Text>
                <Text
                    onPress={() => navigation.navigate('Time')}
                    style={[styles.drawerItem, (this.props.activeItemKey === 'Time') ? styles.activeItem : null]}>
                    Zeitanzeige
                </Text>
                <Text
                    onPress={() => navigation.navigate('ShareText')}
                    style={[styles.drawerItem, (this.props.activeItemKey === 'ShareText') ? styles.activeItem : null]}>
                    Share Text
                </Text>
                <Text
                    onPress={() => navigation.navigate('Swipeable')}
                    style={[styles.drawerItem, (this.props.activeItemKey === 'Swipeable') ? styles.activeItem : null]}>
                    Swipeable Displays
                </Text>
                <Text
                    onPress={() => navigation.navigate('loginStack')}
                    style={[styles.drawerItem, styles.logOut]}>
                    Logout
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6',
    },
    drawerItem: {
        backgroundColor: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        padding: 15,
        textAlign: 'center',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#e1e0e0'
    },
    logOut: {
        color: '#E73536'
    },
    activeItem: {
        backgroundColor: '#e1e0e0'
    }
});