import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Button,
  } from 'react-native';
  import { Constants, Permissions, ImagePicker } from 'expo';
  import Icon from 'react-native-vector-icons/FontAwesome';
  import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
const dimensions = Dimensions.get('window')

class DocScreen extends React.Component {
      state = {
        image: null,
      };

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
    

    render() {
      let { image } = this.state;
      return (
        <View style={styles.container}>
          <View style = {styles.header}>
            <Image style = {styles.logo}
              source={require('../webContent/RudainaLogo.png')}
            />
          </View>

          <View style = {styles.content}>
              <View style= {styles.contentButtonPanel}>
                <View style= {styles.ButtonPanel}>
                    <Icon.Button name="image" style = {styles.contentButton} onPress={this._pickImage}>
                        </Icon.Button>
                  </View>
                <View style= {styles.ButtonPanel}>
                    <Icon.Button name="camera" style = {styles.contentButton} onPress={this._takeCamera}>
                        </Icon.Button>
                  </View>
              
                </View>
              <View>
                  {image &&
                    <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                </View>
                
            </View> 
          <View style={styles.footer}>
                <Icon.Button name="file" backgroundColor="black" onPress={() => navigate('Doc')}>
                    </Icon.Button>
                  <Icon.Button name="file" backgroundColor="black" onPress={() => navigate('Tracker')}>
                    </Icon.Button>
                  <Icon.Button name="file" backgroundColor="black" onPress={() => navigate('Game')}>
                    </Icon.Button>
                  
                  <Menu ref={this.setMenuRef} button={<Icon.Button name="bars" backgroundColor="black" onPress={this.showMenu}/>}>
                      <MenuItem onPress={this.hideMenu}>Item 1</MenuItem>
                      <MenuItem onPress={this.hideMenu}>Item 2</MenuItem>
                      <MenuItem onPress={this.hideMenu} disabled> Item 3</MenuItem>
                      <MenuDivider />
                      <MenuItem onPress={this.hideMenu}>Item 4</MenuItem>
                    </Menu>
            </View>
      </View>
          
        
        
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    header: {
      backgroundColor: 'powderblue',
      width: dimensions.width,
      height: dimensions.height*0.15,
      alignItems: 'flex-start',
    },
     logo: {
       width: dimensions.width*0.20,
       height: dimensions.height*0.15,
       marginLeft: dimensions.width*0.15,
     },
    content: {
      backgroundColor: 'skyblue',
      width: dimensions.width,
      height: dimensions.height*0.65,
      alignItems: 'center',
    },
    contentButtonPanel: {
      flexDirection: 'row',
      width: dimensions.width,
      height: dimensions.height*0.15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    ButtonPanel: {
      marginLeft: dimensions.width*0.07,
      marginRight: dimensions.width*0.07,
    },
    contentButton: {
      marginLeft: dimensions.width*0.1,
      marginRight: dimensions.width*0.1,
      height:dimensions.height*0.15,
      width: dimensions.width*0.15,
    },
    footer: {
      marginRight: dimensions.width*0.2,
      marginLeft: dimensions.width*0.01,
      flexDirection: 'row',
      width: dimensions.width,
      height: dimensions.height*0.1,
      backgroundColor: 'steelblue',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    
  })

  export default DocScreen;