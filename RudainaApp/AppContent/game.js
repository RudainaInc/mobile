import React from 'react';
import { Button, View, StyleSheet, Text} from 'react-native';

class GameScreen extends React.Component {
    static navigationOptions = {
      title: 'Game',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
            <View style={styles.header}> 
                <Text>This is the header</Text>
            </View>

            <View style={styles.content}>
                </View>
            <View style={styles.footer}>
                <Text>This is the footer</Text>
                </View>

        </View>
      );
    }
  }

  const styles = StyleSheet.create({
      container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',

      },
      footer: {
        flexDirection: 'row',
        flex: 1,
        marginTop: 520,
        width: 380,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }
  })

  export default GameScreen;