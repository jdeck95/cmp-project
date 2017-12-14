import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ButtonCard extends Component {
    render () {
        return (
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', marginTop: 50 }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                    <View style = {{ flex: 0.9, justifyContent: 'flex-start', backgroundColor: 'lightgrey', borderRadius: 0, height: 110 }}>
                        <Text style={{ textAlign: 'center', marginTop: 10, marginBottom: 10 }}>
                            { this.props.text1 }{"\n"}
                            { this.props.text2 }
                        </Text>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                            <View style={{ flex: 0.8 }}>
                                { this.props.children }
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}