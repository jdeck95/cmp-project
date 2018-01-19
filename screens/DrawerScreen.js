import React from 'react'
import { StyleSheet,ScrollView, Text, View, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'

export default class DrawerContainer extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
             <ScrollView contentContainerStyle={styles.contentContainer}>
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
                    onPress={() => navigation.navigate('Vibration')}
                    style={[styles.drawerItem, (this.props.activeItemKey === 'Vibration') ? styles.activeItem : null]}>
                    Vibration
                </Text>
                <Text
                    onPress={() => navigation.navigate('Time')}
                    style={[styles.drawerItem, (this.props.activeItemKey === 'Time') ? styles.activeItem : null]}>
                    Zeitanzeige
                </Text>
                <Text
                    onPress={() => navigation.navigate('ShareText')}
                    style={[styles.drawerItem, (this.props.activeItemKey === 'ShareText') ? styles.activeItem : null]}>
                    Text teilen
                </Text>
                <Text
                    onPress={() => navigation.navigate('Swipeable')}
                    style={[styles.drawerItem, (this.props.activeItemKey === 'Swipeable') ? styles.activeItem : null]}>
                    wischbare Displays
                </Text>
                <Text
                    onPress={() => navigation.navigate('FloatingActionButton')}
                    style={[styles.drawerItem, (this.props.activeItemKey === 'FloatingActionButton') ? styles.activeItem : null]}>
                    Fliegender Aktionsbutton
                </Text>
                <Text
                    onPress={() => navigation.navigate('Youtube')}
                    style={[styles.drawerItem, (this.props.activeItemKey === 'Youtube') ? styles.activeItem : null]}>
                    Youtube Video
                </Text>
                <Text
                    onPress={() => navigation.navigate('ChangeBackground')}
                    style={[styles.drawerItem, (this.props.activeItemKey === 'ChangeBackground') ? styles.activeItem : null]}>
                    Hintergrundanimation
                </Text>
                <Text
                    onPress={() => navigation.navigate('DropDownList')}
                    style={[styles.drawerItem, (this.props.activeItemKey === 'DropDownList') ? styles.activeItem : null]}>
                    Item Liste
                </Text>
                 <Text
                     onPress={() => navigation.navigate('CountLetter')}
                     style={[styles.drawerItem, (this.props.activeItemKey === 'CountLetter') ? styles.activeItem : null]}>
                     Zeichen zählen
                 </Text>
                 <Text
                     onPress={() => navigation.navigate('Numpad')}
                     style={[styles.drawerItem, (this.props.activeItemKey === 'Numpad') ? styles.activeItem : null]}>
                     Zahlenblock
                 </Text>
                <Text
                    onPress={() => navigation.navigate('Impressum')}
                    style={[styles.drawerItem, (this.props.activeItemKey === 'Impressum') ? styles.activeItem : null]}>
                    Impressum
                </Text>
                <Text
                    onPress={() => navigation.navigate('loginStack')}
                    style={[styles.drawerItem, styles.logOut]}>
                    Logout
                </Text>
             </ScrollView>
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