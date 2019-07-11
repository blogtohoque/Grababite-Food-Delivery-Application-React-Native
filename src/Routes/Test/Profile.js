import React, { Component } from "react";
import axios from 'axios';
import {View,StyleSheet,Image, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {
  Container,
  Content,
  Button,
  Badge,
  Text,
  Form,
  Item,
  Input,
  Label,
} from "native-base";

import Icons from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/FontAwesome';

class Profile extends Component {
  static navigationOptions = {
    title:"Hello",
  }; 
  state={
    cOn:true,
    vOn:false,
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
  fnChange=(val)=>{
      this.setState({
        fname:val
      })
  }
  lnChange=(val)=>{
    this.setState({
      lname:val
    })
  }
  emailChange=(val)=>{
    this.setState({
      email:val
    })
  }
  mobileChange=(val)=>{
    this.setState({
      mobile:val
    })
  }
  passwordChange=(val)=>{
    this.setState({
      Password:val
    })
  }
  cpasswordChange=(val)=>{
    this.setState({
      cPassword:val
    })
  }
  addressChange=(val)=>{
    this.setState({
      Address:val
    })
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
          axios.post("http://192.168.10.14:8000/signup",
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
                 //    this.props.navigator.push({
               //       screen: "awesome-places.AuthScreen",
             //         title: "Grab A Bite"
           //         });

           this.props.navigation.navigate('Dashboard');

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
        else{
            alert("password does not matches with confirm password");
        }



  }


  render() {
    const itemexist = this.props.count;
    let button;

    if (itemexist!="0") {
      button = (
                <Badge style={{backgroundColor:"orange",width:25,height:25}}>
                <Text>{this.props.count}</Text>
                </Badge>
      );
    } 
    else {
      
    }
    return (
      <Container style={{ width: "100%" }}>

      <View style={{backgroundColor:"#1c313a", height:57, flexDirection:"row",paddingTop:10 }}>
              <Icons 
                                          style={{paddingLeft:10,paddingTop:5}} 
                                          onPress={()=>{this.props.navigation.openDrawer()}}
                                          name="md-menu" 
                                          size={30}
                                          color="white"
                                  /> 
          <Text style={{paddingLeft:220,paddingTop:5, color:'white',fontFamily:"century-gothic",fontWeight:"bold",fontSize:20}}>Profile </Text>

          <FIcon
            name="cart-plus" style={{ paddingLeft:190,color:'white',paddingTop:3}} 
            size={30} 
            onPress={()=>{this.props.navigation.navigate('TripleJugarNavigation')}}
              />
              {button}
      </View>

        <Content padder>
        <View style={styles.container2}>
              <Image
              style={{width: 50, height: 50,borderRadius:25}}
              source={require('../../assets/images/logo.png')}
              />
              <Text style={styles.logoText}>Grab A Bite</Text>	
        </View>
          <Form>
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="First Name"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
         />
            <Item floatingLabel last>
              <Label>Last Name</Label>
              <Input onChangeText={this.lnChange}/>
            </Item>
            <Item floatingLabel last>
              <Label> Email</Label>
              <Input onChangeText={this.emailChange} />
            </Item>
            <Item floatingLabel last>
              <Label>Mobile </Label>
              <Input onChangeText={this.mobileChange}/>
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input  onChangeText={this.passwordChange}/>
            </Item>
            <Item floatingLabel last>
              <Label>Confirm Password</Label>
              <Input onChangeText={this.cpasswordChange}/>
            </Item>
            <Item floatingLabel last>
              <Label>Address</Label>
              <Input onChangeText={this.addressChange}/>
            </Item>
            <Button block style={{ marginTop: "6%" }} onPress={this.onSignIn}>
              <Text>Update Profile</Text>
            </Button>
            <Text>
              {this.state.role}
            {this.state.fname}
            {this.state.lname}
            {this.state.email}
            {this.state.mobile}
            {this.state.Password}
            {this.state.cPassword}
            {this.state.Address}
            
            
            </Text>
          </Form>
        </Content>
    
      </Container>
    );
  }
}


const mapStateToProps=state=>{
  return {
    count: state.Main.count
 
  };
};
export default connect(mapStateToProps,null)(Profile);;

const styles = StyleSheet.create({
container2: {
  flexGrow: 1,
  justifyContent:'flex-end',
  alignItems: 'center'
},
inputBox: {
  width:300,
  backgroundColor:'rgba(255, 255,255,0.2)',
  borderRadius: 25,
  paddingHorizontal:16,
  fontSize:16,
  color:'#ffffff',
  marginVertical: 5,
  
  
},


});


{/*




<View style={styles.container2}>
<Image
style={{width: 50, height: 50,borderRadius:25}}
source={require('../img/GrabLogo.png')}
/>
<Text style={styles.logoText}>Grab A Bite</Text>	
</View>

<TextInput style={styles.inputBox} 
underlineColorAndroid='rgba(0,0,0,0)' 
placeholder="First Name"
placeholderTextColor = "#ffffff"
selectionColor="#fff"
keyboardType="email-address"
/>

<TextInput style={styles.inputBox} 
underlineColorAndroid='rgba(0,0,0,0)' 
placeholder="Last Name"
placeholderTextColor = "#ffffff"

/>  

<TextInput style={styles.inputBox} 
underlineColorAndroid='rgba(0,0,0,0)' 
placeholder="Email"
placeholderTextColor = "#ffffff"

/>  

<TextInput style={styles.inputBox} 
underlineColorAndroid='rgba(0,0,0,0)' 
placeholder="Mobile"
placeholderTextColor = "#ffffff"
keyboardType = 'decimal-pad'

/>  
<TextInput style={styles.inputBox} 
underlineColorAndroid='rgba(0,0,0,0)' 
placeholder="Current Password"
placeholderTextColor = "#ffffff"
secureTextEntry = {true}
/> 
<TextInput style={styles.inputBox} 
underlineColorAndroid='rgba(0,0,0,0)' 
placeholder="New Password"
placeholderTextColor = "#ffffff"
secureTextEntry = {true}
/> 
<TextInput style={styles.inputBox} 
underlineColorAndroid='rgba(0,0,0,0)' 
placeholder="Address"
placeholderTextColor = "#ffffff"

/> 

<TouchableOpacity style={styles.button}>
<Text style={styles.buttonText}>Update</Text>
</TouchableOpacity>  


*/}
