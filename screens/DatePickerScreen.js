import React, { Component } from 'react'
import {Platform} from 'react-native'
import {
    DatePickerIOS,
    View,
    Text,
    StyleSheet,
    DatePickerAndroid,
    Button
} from 'react-native'
import {WebBrowser} from "expo";

export default class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = { chosenDate: 'Wähle ein Datum!', osIsAndroid: true, newDate: new Date() };

        this.setDate = this.setDate.bind(this);
    }

    setDate(newDate) {
        this.setState({chosenDate: newDate})
    }

    renderAndroidButton() {
        if (Platform.OS === 'android') {
            return (
                <Button
                    onPress={() => this.openDatePickerAndroid()}
                    title="open DatePicker"
                    color="#841584"
                    accessibilityLabel="open DatePicker for Android"
                />
            );
        } else {
            return null;
        }
    }

    renderIOSPicker() {
        if (Platform.OS === 'ios') {
            return (
                <DatePickerIOS
                    date={this.state.newDate}
                    onDateChange={this.setDate}
                />
            );
        } else {
            return null;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{margin: 30, fontSize: 26, justifyContent: 'center'}}>{this.state.chosenDate}</Text>
                {this.renderIOSPicker()}
                {this.renderAndroidButton()}
            </View>
        )
    }

    openDatePickerAndroid = async () => {
        const chosenDate = await DatePickerAndroid.open({
            date: new Date()
        });
        this.setState({chosenDate: chosenDate.day + ' : ' + chosenDate.month+1 + ' : ' + chosenDate.year});
    };

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
})