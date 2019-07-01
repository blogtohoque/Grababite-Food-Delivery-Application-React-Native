import React, { Component } from "react";
import { View, Text } from "react-native";

class Auth extends Component {
  componentDidMount=()=>{
    
    this.props.navigation.navigate('Dashboard');

  }
  render() {
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text >Auth Screen</Text>
      </View>
    );
  }
}
export default Auth;
