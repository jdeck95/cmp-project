import React, { Component } from 'react';

import { StyleSheet, View, Platform, Text, FlatList, TouchableOpacity, Alert, ActivityIndicator, Image } from 'react-native';

export default class CangeViewScreen extends Component{

    constructor()
    {
        super();

        this.state = {

            GridColumnsValue: true,

            ButtonDefaultText: 'CHANGE TO GRIDVIEW',

            isLoading: true

        }
    }

    componentDidMount() {

        return fetch('https://reactnativecode.000webhostapp.com/FlowersList.php')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson
                }, function() {
                    // In this block you can do something with new state.
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    ChangeGridValueFunction =()=> {

        if(this.state.GridColumnsValue === true)

        {
            this.setState({

                GridColumnsValue: false,
                ButtonDefaultText : "CHANGE TO LISTVIEW"

            })
        }
        else{

            this.setState({

                GridColumnsValue: true,
                ButtonDefaultText : "CHANGE TO GRIDVIEW"

            })

        }

    }

    GetGridViewItem(item){

        Alert.alert(item);

    }

    render() {

        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (

            <View style={styles.MainContainer}>

                <FlatList

                    data={ this.state.dataSource }

                    renderItem={({item}) => <View style={{flex:1, flexDirection: 'column', margin:1}}>

                        <Image style={styles.ImageComponentStyle} source = {{ uri: item.flower_image_url }} />

                        <Text onPress={this.GetGridViewItem.bind(this, item.flower_name)} style={styles.ItemTextStyle} numberOfLines={1} >{item.flower_name}</Text>

                    </View>

                    }

                    numColumns = { this.state.GridColumnsValue ? 1 : 2 }

                    key = {( this.state.GridColumnsValue ) ? 'ONE COLUMN' : 'TWO COLUMN' }

                    keyExtractor={(item, index) => index}

                />

                <TouchableOpacity
                    style={styles.ButtonStyle}
                    activeOpacity = { .5 }
                    onPress={this.ChangeGridValueFunction} >

                    <Text style={styles.ButtonInsideTextStyle}> {this.state.ButtonDefaultText} </Text>

                </TouchableOpacity>

            </View>

        );
    }
}

const styles = StyleSheet.create({

    MainContainer :{

        justifyContent: 'center',
        flex:1,
        margin: 5,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0

    },

    ImageComponentStyle: {

        justifyContent: 'center',
        flex:1,
        alignItems: 'center',
        height: 100,
        backgroundColor: '#4CAF50'

    }
    ,

    ItemTextStyle: {

        color: '#fff',
        padding: 10,
        fontSize: 18,
        textAlign: 'center',
        backgroundColor: '#4CAF50',
        marginBottom: 5

    },

    ButtonStyle: {

        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        backgroundColor:'#FF9800',
        width: '100%',
        height: 50
    },

    ButtonInsideTextStyle:{
        color:'#fff',
        textAlign:'center',
    }

});