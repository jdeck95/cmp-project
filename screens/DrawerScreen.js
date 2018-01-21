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
                    onPress={() => navigation.navigate('DatePicker')}
                    style={[styles.drawerItem, (this.props.activeItemKey === 'DatePicker') ? styles.activeItem : null]}>
                    DatePicker
                </Text>
                <Text
                    onPress={() => navigation.navigate('Vibration')}
                    style={[styles.drawerItem, (this.props.activeItemKey === 'Vibration') ? styles.activeItem : null]}>
                    Vibration
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
                 onPress={() => navigation.navigate('Numpad')}
                 style={[styles.drawerItem, (this.props.activeItemKey === 'Numpad') ? styles.activeItem : null]}>
                 Zahlenblock
                </Text>
                 <Text
                     onPress={() => navigation.navigate('ChangeView')}
                     style={[styles.drawerItem, (this.props.activeItemKey === 'ChangeView') ? styles.activeItem : null]}>
                     ListView/GridView
                 </Text>
                 <Text
                     onPress={() => navigation.navigate('Progressbar')}
                     style={[styles.drawerItem, (this.props.activeItemKey === 'Progressbar') ? styles.activeItem : null]}>
                     Ladebalken
                 </Text>
                <Text
                    onPress={() => navigation.navigate('Orientation')}
                    style={[styles.drawerItem, (this.props.activeItemKey === 'Orientation') ? styles.activeItem : null]}>
                    Displayausrichtung erkennen
                </Text>
                 <Text
                     onPress={() => navigation.navigate('HeightWidth')}
                     style={[styles.drawerItem, (this.props.activeItemKey === 'HeightWidth') ? styles.activeItem : null]}>
                     Gerät Höhe/Breite
                 </Text>
                 <Text
                     onPress={() => navigation.navigate('Seekbar')}
                     style={[styles.drawerItem, (this.props.activeItemKey === 'Seekbar') ? styles.activeItem : null]}>
                     Native Regler
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