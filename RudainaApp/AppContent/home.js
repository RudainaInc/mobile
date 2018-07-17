import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image} from 'react-native';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome Rudaina',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
          <View style = {styles.header}>
            <Image style = {styles.logo}
            source={require('../webContent/RudainaLogo.png')}
            />
          
          </View>

          <View style = {styles.content}>
              <Text style = {styles.welcomeText}>Please login!</Text>

              <View style={styles.Input}>
                  <Text style={styles.InputTitle}>Username: </Text>
                  <TextInput style={styles.inputContainer} 
                      secureTextEntry={false}
                      placeholder="Please enter your username!"
                      onChangeText={(text) => this.setState({text})}
                    />
              </View>
              
              <View style={styles.Input}> 
                  <Text style={styles.InputTitle}>Password: </Text>
                  <TextInput style={styles.inputContainer}
                      title ="Password: "
                      secureTextEntry={true}
                      placeholder="Please enter your password!"
                      onChangeText={(text) => this.setState({text})}
                  />
                </View>
              <View>
                  <Button style={styles.submitButton}
                  
                    onPress={() => navigate('Profile')}
                    title="Submit"
                  />

                  <Button style={styles.submitButton}
                    onPress={() => navigate('Guest')}
                    title="Continue as guest!"
                  />
                </View>
          </View>

          <View style={styles.footer}>
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
    alignItems: 'flex-start',
  },
  logo: {
    width: 100,
    height: 85,
    marginLeft: 15,
  },
  content: {
    backgroundColor: 'skyblue',
    width: 380,
    height: 450,
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    width: 380,
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  welcomeText: {
    marginTop: 30,
    flexDirection: 'row',
    fontSize: 30,
    flexDirection: 'row',
  },
  inputContainer: {
    width: 200,
    height: 35,
    marginTop: 10,
    backgroundColor: '#fff',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    
  },
  Input: {
    marginTop: 15,
    flexDirection: 'column',
    justifyContent:'space-between',
    borderTopColor: '#000000',
    borderTopColor: 1,
    borderLeftColor: '#000000',
    borderLeftColor: 1,
  },
  InputTitle: {
    fontSize: 20,
    //fontFamily: AvenirNext-UltraLight,
  },
  submitButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderLeftColor: '#000000',
    borderLeftColor: 1,
    backgroundColor: '#fff',
    color: 'red',
  }
});

export default HomeScreen;
