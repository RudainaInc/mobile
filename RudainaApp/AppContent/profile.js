import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { Constants } from 'expo';

class ProfileScreen extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  };
  static navigationOptions = {
    title: 'Profiles!',
  };
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

          <View style={styles.header}>
            <Text>This is the header area!</Text>
          </View>

          <View style={styles.content}>
              <Text>This is the content area!</Text>
            </View>

          <View style={styles.footer}>
              <Button style={styles.submitButton}
                onPress={() => navigate('Doc')}
                title="Docs"
              />

              <Button style={styles.submitButton}
                onPress={() => navigate('Tracker')}
                title="Tracker"
              />

              <Button style={styles.submitButton}
                onPress={() => navigate('Game')}
                title="Fleppy"
              />

              <Button style={styles.submitButton}
                onPress={this._onPressButton}
                title="Menu"
              />
          </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: 'powderblue',
    width: 380,
    height: 85,
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'skyblue',
    width: 380,
    height: 450,
    alignItems: 'center',
  },
  submitButton: {
    margin: 30,
    marginVertical:20,
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    width: 380,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
})

export default ProfileScreen;
