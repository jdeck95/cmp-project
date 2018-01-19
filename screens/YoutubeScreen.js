import React, { Component } from 'react';

import { StyleSheet, View, WebView, Platform } from 'react-native';

export default class YoutubeScreen extends Component<{}> {

    render() {
        return (

            <View style={{ height: 380 }}>

                <WebView
                    style={ styles.WebViewContainer }
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: 'https://www.youtube.com/watch?v=u_rYBUQagvA' }}
                />

            </View>

        );
    }
}

const styles = StyleSheet.create({

    WebViewContainer: {

        marginTop: (Platform.OS == 'ios') ? 20 : 0,

    }

});