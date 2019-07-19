import React,{Component} from 'react';
import {TouchableOpacity,View} from 'react-native';
import {
    Text,Button,
    
  } from "native-base";
  
import AsyncStorage from '@react-native-community/async-storage';
export default class hey extends Component {
   state={
       x:"",
       y:""
   }
    componentDidMount=async ()=>{
        var full_name = await AsyncStorage.getItem('fullName');
        this.setState({x:full_name})
        console.log('fullname');
        console.log(this.state.x);
        this.setState({y:"1"})
        
    }
    render(){
                  
        console.log('fullname1');
        console.log(this.state.x);

                  let button;

                  if (this.state.x==null) {

                    button = (
                                          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Login')}}><Text >Login</Text></TouchableOpacity>
                                               
                              
                                          );
                  } 
                  else {
                  //  const full_name = await AsyncStorage.getItem('fullName');
                       
                  button = (
                              <Button 
                              onPress={ 
                              async ()=>{
                              await AsyncStorage.removeItem('fullName')
                              .then(async () =>{

                                this.props.navigation.navigate('Login');
                              })
                              .catch(error=>{
      
                                console.log(error.data)
                                console.log('bro nahi chalta remove t page')
                                })

                             
                              //     this.props.onLoginClick("");
                          //    this.props.navigator.push({
                          //     screen: "awesome-places.AuthScreen",
                          //     title: "Authentication"
                          //      });
                              }}>
                              <Text>Logout</Text></Button>
                  )
                  }











    return(
        
            <View>
                {button}


            </View>
    );
    }
}


