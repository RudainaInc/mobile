import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Button,
  } from 'react-native';
  import { Constants, Permissions, ImagePicker } from 'expo';

const { width } = Dimensions.get('window')

class DocScreen extends React.Component {
      state = {
        image: null,
      };
      pickFromGallery = async () => {
        const permissions = Permissions.CAMERA_ROLL;
        const { status } = await Permissions.askAsync(permissions);

        console.log(permissions, status);
        if(status === 'granted') {
          let image = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
            //mediaTypes: 'Images',
          }).catch(error => console.log(permissions, { error }));
          console.log(permissions, 'SUCCESS', image);
          
        }
      }

      pickFromCamera = async () => {
        const permissions = Permissions.CAMERA;
        const { status } = await Permissions.askAsync(permissions);

        console.log(permissions, status);
        if(status === 'granted') {
          let image = await ImagePicker.launchCameraAsync({
            mediaTypes: 'Images',
          }).catch(error => console.log(permissions, { error }));
          console.log(permissions, 'SUCCESS', image);
        }
      }


    render() {
      let { image } = this.state;
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Pick an image from camera roll"
          onPress={this._takeCamera}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
      );
    }
    _pickImage = async () => {
      const permissions = Permissions.CAMERA;
      const { status } = await Permissions.askAsync(permissions);
      if(status === 'granted') {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: 'Images',
          allowsEditing: true,
          aspect: [4, 3],
        });
        console.log(result);
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }
      }
    };

    _takeCamera = async () => {
      const permissions = Permissions.CAMERA;
      const { status } = await Permissions.askAsync(permissions);
        if(status === 'granted') {
          let result = await ImagePicker.launchCameraAsync({
            mediaTypes: 'Images',
            allowsEditing: true,
            aspect: [4, 3],
          });
        console.log(result);
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }
      }
    };
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
    },
  })

  export default DocScreen;