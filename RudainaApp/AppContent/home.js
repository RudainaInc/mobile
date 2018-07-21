import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, Dimensions} from 'react-native';

var dimensions = Dimensions.get('screen');

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
    flexDirection: 'row',
    width: dimensions.width,
    height: dimensions.height*0.2,
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
   welcomeText: {
     marginTop: dimensions.height*0.08,
     flexDirection: 'row',
     fontSize: 30,
     flexDirection: 'row',
   },
   inputContainer: {
     width: dimensions.width*0.55,
     height: dimensions.height*0.06,
     marginTop: dimensions.height*0.01,
     backgroundColor: '#fff',
     borderBottomColor: '#000000',
     borderBottomWidth: 1,
    
   },
   Input: {
     marginTop: dimensions.height*0.02,
     flexDirection: 'column',
     justifyContent:'space-between',
     borderTopColor: '#000000',
     borderTopColor: 1,
     borderLeftColor: '#000000',
     borderLeftColor: 1,
   },
   InputTitle: {
     fontSize: 20,
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
