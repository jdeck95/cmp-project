import React from 'react';
import { Text, View, TouchableOpacity, Image, CameraRoll } from 'react-native';
import { Camera, Permissions, ImagePicker } from 'expo';
import {NavigationActions} from 'react-navigation';
import Ionicon from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const navigateAction = NavigationActions.navigate({
    routeName: 'Hardware',
    params: {},
    action: NavigationActions.navigate({ routeName: 'Gallery'})
});

export default class CameraExample extends React.Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
        activePic: 'https://www.appcoda.com/wp-content/uploads/2015/04/react-native-1024x631.png'
    };

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <Camera style={{ flex: 1 }} type={this.state.type} ref={ref => { this.camera = ref; }}>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                flexDirection: 'row',
                            }}>
                            <TouchableOpacity
                                style={{
                                    flex: 0.1,
                                    alignSelf: 'flex-end',
                                    alignItems: 'center',
                                }}
                                onPress={() => {
                                    this.setState({
                                        type: this.state.type === Camera.Constants.Type.back
                                            ? Camera.Constants.Type.front
                                            : Camera.Constants.Type.back,
                                    });
                                }}>
                                <Ionicon name="ios-refresh-circle-outline" size={30} color="white"/>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    alignSelf: 'flex-end',
                                    alignItems: 'center'
                                }}
                                onPress={async () => {
                                    if (this.camera) {
                                        let photo = await this.camera.takePictureAsync();
                                        CameraRoll.saveToCameraRoll(photo.uri).then(() => {
                                            this.setState({activePic: photo.uri});
                                        });
                                    }
                                }}>
                                <FontAwesome name="camera" size={70} color="white"/>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{alignSelf: 'flex-end'}}
                                onPress={() => {
                                    ImagePicker.launchImageLibraryAsync();
                                }}>
                                <Image
                                    style={{width: 50, height: 80}}
                                    source={{uri: this.state.activePic}}
                                />
                            </TouchableOpacity>
                        </View>
                    </Camera>
                </View>
            );
        }
    }
}

