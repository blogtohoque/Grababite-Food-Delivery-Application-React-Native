/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet , View,Image,Text} from 'react-native';


 class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 50, height: 50,borderRadius:25}}
          source={require('../../assets/images/logo.png')}
        />
        <Text style={styles.logoText}>Grab A Bite</Text>	
   
      </View>
    );
  }
}

export default Logo;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent:'flex-end',
    alignItems: 'center'
  },
  logoText : {
    marginVertical: 15,
    fontSize:18,
    color:'rgb(179, 0, 0)',
    fontFamily:"Brush Script Std,cursive",
    fontWeight:"bold"
}

});
