import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, CameraRoll } from 'react-native'

export default class GalleryScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Gallery',
        title: 'Gallery'
    };

    constructor(props){
        super(props);
        this.state = {
            photos: []
        }
    }

    componentWillMount() {
        CameraRoll.getPhotos({
            first: 20,
        })
            .then(r => {
                this.setState({ photos: r.edges });
                console.log(this.state);
            })
            .catch((err) => {
                //Error Loading Images
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>20 neueste Bilder:</Text>
                <ScrollView>
                    {this.state.photos.map((p, i) => {
                        return (
                            <Image
                                key={i}
                                style={{
                                    width: 400,
                                    height: 600,
                                }}
                                source={{ uri: p.node.image.uri }}
                            />
                        );
                    })}
                </ScrollView>
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

    text: {
        fontSize: 26,
        margin: 30,
        borderBottomWidth: 2,
        borderBottomColor: '#000'
    }
});