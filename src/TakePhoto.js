import React, { Component } from 'react';
import Camera from 'react-native-camera';

export default class TakePhoto extends React.Component {
    render() {
        return (
            <View style={styles.container}>
             <Camera
                 ref={(cam) => {
                   this.camera = cam;
                 }}
                 style={styles.preview}
                 aspect={Camera.constants.Aspect.fill}>
                 <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[Take a photo]</Text>
             </Camera>
            </View>
          );
    }

    takePicture() {
        this.camera.capture()
          .then((data) => console.log(data))
          .catch(err => console.error(err));
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    }
});
  