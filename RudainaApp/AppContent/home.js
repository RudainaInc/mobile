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
            <Image
            //source={require('')}
            />
          
          </View>

          <View style = {styles.content}>
              <Text style = {styles.welcomeText}>Please login!</Text>

              <View style={styles.Input}>
                  <Text style={styles.InputTitle}>Username: </Text>
                  <TextInput style={styles.textInput} 
                              secureTextEntry={false}
                              StyleSheet ={styles.textInput}
                              placeholder="Please enter your username!"
                              onChangeText={(text) => this.setState({text})}
                  />
              </View>
              
              <View style={styles.Input}> 
                  <Text style={styles.InputTitle}>Password: </Text>
                  <TextInput style={styles.textInput}
                      title ="Password: "
                      secureTextEntry={true}
                      StyleSheet ={styles.textInput}
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
    alignItems: 'center',
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
  textInput: {
    width: 200,
  },
  Input: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  InputTitle: {
  },
  submitButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default HomeScreen;
