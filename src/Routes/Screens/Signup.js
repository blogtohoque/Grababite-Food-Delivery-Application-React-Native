import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import axios from 'axios'

import Logo from './Logo';
import { Container } from 'native-base';
import { Content } from 'react-native-interactive-card';




export default class Signup extends Component {
  static navigationOptions = {
    header:null
  };

  state={

    fname:"",
    lname:"",
    email:"",
    mobile:"",
    Password:"",
    cPassword:"",
    role:"Customer",
    Address:"",
    Date:""
  };
  componentDidMount=()=>{
    var today = new Date(), date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    this.setState({Date:date});
  }

  onSignIn=()=>{
        var a = this.state.fname;
        var b = this.state.lname;
        var c = this.state.Password;
        var d = this.state.cPassword;
        var e = this.state.mobile;
        var f = this.state.email;
        var g = this.state.role;
        var h = this.state.Address;
        var i = this.state.Date;
        if(c===d){
                axios.post("http://192.168.10.8:8000/signup",
                  {
                      firstname:a,
                      lastname:b,
                      password:c,
                      mobile:e,
                      email:f,
                      role:g,
                      Address:h,
                      Date:i
                  }
                  )
                  .then(Response=>{
          
                      var check = Response.data;
                      if(check === "do")
                      {
                          
                          console.log(Response.data);
                          this.props.navigation.navigate('Login');
                          alert('Signup Successful');

                      }
                      else{
                          alert("SignUp Failed");
                      }
                          
                  })
                  .catch(error=>{
                      console.log(error.Response)
                  }
                  )
           }
        else
        {
            alert("password does not matches with confirm password")
        }



  }
 
	render() {
		return(
      <Container style={styles.container} >

     <ImageBackground source={require('../../../images/phoneimg1.jpg')} style={{width:'100%',height:'100%'}} >

    
		
<Content >



        
			   <Logo/>
         <View style={styles.container2}>
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="First Name"
              placeholderTextColor = 'rgb(179, 0, 0)'
              selectionColor="#fff"
              keyboardType="email-address"
              onChangeText={(ini)=>this.setState({fname:ini})}
              
          
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Last Name"
              placeholderTextColor = 'rgb(179, 0, 0)'
              onChangeText={(ini)=>this.setState({lname:ini})}
            
              />  
               <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = 'rgb(179, 0, 0)'
              onChangeText={(ini)=>this.setState({email:ini})}
            
              />  
              
               <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Mobile"
              placeholderTextColor = 'rgb(179, 0, 0)'
              keyboardType = 'decimal-pad'
              onChangeText={(ini)=>this.setState({mobile:ini})}
            
              />  
               <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              placeholderTextColor = 'rgb(179, 0, 0)'
              secureTextEntry = {true}
              onChangeText={(ini)=>this.setState({Password:ini})}
              /> 
               <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Confirm Password"
              placeholderTextColor = 'rgb(179, 0, 0)'
              secureTextEntry = {true}
              onChangeText={(ini)=>this.setState({cPassword:ini})}
              /> 
               <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Address"
              placeholderTextColor ='rgb(179, 0, 0)'
              onChangeText={(ini)=>this.setState({Address:ini})}
            
              /> 
               
           <TouchableOpacity style={styles.button}>
             <Text style={styles.buttonText} onPress ={this.onSignIn} >SignUp</Text>
           </TouchableOpacity>     
  		</View>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Already have an account?</Text>
					<TouchableOpacity onPress ={()=>this.props.navigation.navigate('Login')} > 
                    <  Text style={styles.signupButton}> 
                    Login
                    </Text>
            </TouchableOpacity>
				</View>
        </Content>
        </ImageBackground>
        </Container>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#455a64',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    marginBottom:'5%',
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  },

  container2 : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center',
    paddingTop:0
  },

  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.4)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:13,
    color:'#ffffff',
    marginVertical: 5,    
  },
  button: {
    width:300,
    backgroundColor:'rgba(179, 0, 0,0.4)',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
});