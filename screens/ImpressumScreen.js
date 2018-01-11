import React from 'react'
import {Text, View} from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {WebBrowser} from 'expo';

export default class Impressum extends React.Component {

    static navigationOptions = {
        drawerLabel: 'Impressum',
        title: 'Impressum'
    };

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                <View style={styles.button}>
                    <Text>Die App wurde mit folgenden Technologien erstellt:</Text>
                </View>
                <View style={styles.button}>
                    <MaterialIcon.Button name="react" backgroundColor="#3b5998" onPress={()=>(this._handlePressButtonAsync('https://facebook.github.io/react-native/'))}>
                        React Native
                    </MaterialIcon.Button>
                </View>

                <View style={styles.button}>
                    <AwesomeIcon.Button name="chevron-up" backGroundColor="#3b5997" onPress={()=>(this._handlePressButtonAsync('https://expo.io'))}>
                        Expo Client
                    </AwesomeIcon.Button>
                </View>
            </View>
        );
    }

    _handlePressButtonAsync = async (link) => {
        await WebBrowser.openBrowserAsync(link);
    };
};

const styles = {
    button: {
        margin: 15
    }
};