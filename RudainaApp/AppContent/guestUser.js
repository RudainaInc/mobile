import React from 'react';
import { StyleSheet, View, Alert, Text, Image, Dimensions} from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import ImageSlider from 'react-native-image-slider';
import Icon from 'react-native-vector-icons/FontAwesome';

var dimensions = Dimensions.get('screen');

class GuestScreen extends React.Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  };
  static navigationOptions = {
    title: 'Guest!',
  };
  _menu = null;
 
  setMenuRef = ref => {
    this._menu = ref;
  };
 
  hideMenu = () => {
    this._menu.hide();
  };
 
  showMenu = () => {
    this._menu.show();
  };
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

          <View style={styles.header}>
            <Image style = {styles.logo}
                source={require('../webContent/RudainaLogo.png')}
              />
          </View>

          <View style={styles.content}>
              <ImageSlider images={[
                  'http://placeimg.com/640/480/any',
                  'http://placeimg.com/640/480/any',
                  'http://placeimg.com/640/480/any'
                ]}/>
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

export default GuestScreen;
