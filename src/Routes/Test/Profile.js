import React, { Component } from "react";
import axios from 'axios';
import {
  Container,
  Content,
  Button,
  
  Text,
  Form,
  Item,
  Input,
  Label,
} from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';

export default class Profile extends Component {
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
            alert("password does not matches with confirm password")
        }



  }


  render() {
    return (
      <Container style={{ width: "100%" }}>
       <Icon 
                                    style={{paddingLeft:10}} 
                                    onPress={()=>{this.props.navigation.openDrawer()}}
                                    name="md-menu" 
                                    size={30}
                            />
       
       
        <Content padder>
          <Form>
            <Item floatingLabel>
              <Label>First Name</Label>
              <Input onChangeText={this.fnChange} />
            </Item>
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
