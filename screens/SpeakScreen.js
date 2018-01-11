import React from 'react'
import { StyleSheet, Picker, View, TextInput, Button, Text } from 'react-native'
import {Camera} from "expo";

export default class SpeakScreen extends React.Component {
    static navigationOptions = {
        title: 'Sprache'
    };

    state = {
        text: 'Platzhalter',
        language: 'de'
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, width: '80%', textAlign: 'center', marginBottom: 10}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <Picker
                    selectedValue={this.state.language}
                    style={styles.picker}
                    itemStyle={styles.itemStyle}
                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                    <Picker.Item label="Deutsch" value="de" />
                    <Picker.Item label="Englisch" value="en" />
                    <Picker.Item label="Französisch" value="fr" />
                    <Picker.Item label="Japanisch" value="ja" />
                </Picker>
                <Button
                    onPress={()=>{speak(this.state.text, this.state.language)}}
                    title="Text zu Sprache"
                    color="#841584"
                />
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
    itemStyle: {
        fontSize: 15,
        height: 75,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    picker: {
        width: '60%',
    },
});

const speak = function (text, lang) {
    Expo.Speech.speak(text, {
        language: lang
    });
};

