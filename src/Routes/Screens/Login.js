import React, { Component } from "react";
//import { navigator } from "react-native-navigation";
import {connect} from 'react-redux';
import axios from 'axios';
import { StyleSheet,Image,Modal, TouchableHighlight, View, Alert,  } from "react-native";
import {saveUserName} from '../../Store/actions/index';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Right,
  Body,
  Text,
  Form,
  Item,
  Input,
  Label
} from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';

class Login extends Component {
  static navigationOptions = {
    header:null,
  };
  state={
      name:"",
      password:"",
      modalVisible: false
  };
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  createAccountHandler = () => {
  //  this.props.navigator.push({
  //    screen: "awesome-places.Signup",
  //    title: "Signup"
  //  });
  this.props.navigation.navigate('SignUp');
  
  };

  nameChangeHandler=(val)=>{
      this.setState(
        {
          name:val
        }
      );
  }
  passwordChangeHandler=(val)=>{
    this.setState(
      {
        password:val
      }
    );
  }
  onLogin = async () => {
    
    var x=this.state.name;
    var y=this.state.password;
    axios.post('http://192.168.10.14:8000/getuser',
    {
            name:x,
            password:y
    })
    .then(async (Response) =>{
                  var check=Response.data;
                  
        //console.log(Response.data);

            var fn;
            var dude = check.split(" ");
            var token=dude[1];
            var  fname=dude[0];
            var key;
  //          console.log(this.props);
  //          console.log(typeof fname);

   //         console. log(fname[0])

      //      const obj = JSON.parse(fname);
                    
   //         fn=obj[0].firstName; //foo
            //obj['b'] //bar

       //     fn=fname["firstName"];
      // for (key in fname) {
      //      if (fname.hasOwnProperty(key)) {
       //         console.log(key + " = " + fname[key]);
       //     }
     //   }    

 //        console.log(" First name is " + fn);

            
            if(dude[0]==="do"){
                    
                    
    //redux sa conncet           this.props.OnLogin();   
    //idk                setAuthorizationToken(token);
 //                  this.setState({msg:check});
 //                   this.setState({open:true});
            //        this.render("http://localhost3000/");
           //        this.Component(mainPage);
          
          
        //  AsyncStorage.setItem('jwtToken',token);
        try{  
          await AsyncStorage.setItem('fullName',x);
          
          const full_name = await AsyncStorage.getItem('fullName');
          this.props.onLoginClick(full_name);
        
        // var full_name = AsyncStorage.getItem('fullName');
      //  store.dispatch({type:'FULL_NAME',name:x});
    //  console.log(x);
          // this.props.onLoginClick(full_name);
       
       
               }
        catch{
          Alert.alert("Problem with Async Storage");
        }
        this.props.navigation.navigate('Dashboard');




            }
            else{
                    this.setState({msg:"don't"});
                    alert("Wrong Password");
            }

    })
    .catch(error=>{
      
            console.log(error.data)
    })
    



  

    
  };
  render() {
   // console.log('login props')
  //  console.log(this.props)
    return (
      
      <Container style={{ width: "100%" }}>
        <Header style={{ backgroundColor:"#900C3F"}}>
          <Body>
            <Title style={styles.titlepad} >Login  </Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
      {/*   <Image source={require('../../assets/images/hehe.png')} style={{width:15,height:15}} />
*/}
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input onChangeText={this.nameChangeHandler} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input onChangeText={(event)=>this.passwordChangeHandler(event)} />
            </Item>
           
            <Button block style={{ marginTop: 20 , backgroundColor:"#900C3F"}} onPress={()=>this.onLogin()}>
              <Text>Login</Text>
            </Button>
            <View style={{marginTop: 22}}>
        <Modal
          style={styles.hehe}
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text padder style={{ marginLeft: 220, marginTop: 20 }} >Forgot Password?</Text>
        </TouchableHighlight>
        </View>
            <Text
              padder
              style={{ marginLeft: 180, marginTop: 25, fontFamily: 'Century Gothic' }}
              onPress={this.createAccountHandler}
            >
              New user? Create an account
            </Text>
            <Text>

                {this.state.name}

            </Text>
            <Text>

                {this.state.password} 

            </Text>
            <Text>

              username is {this.props.userName}

            </Text>
            
          </Form>
         
        </Content>
        <Footer>
          <FooterTab>
            <Button full style={{ backgroundColor:"#900C3F"}}>
              <Text>Grab A Bite</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
};

const styles = StyleSheet.create({
  titlepad: {
      paddingLeft: 20
  },
  hehe:{
    color:'green',backgroundColor:'red' 
  }


});

const mapStateToProps=state=>{

  return {
    userName:state.Main.userName
 
  };
};
const mapDispatchToProps = {
  onLoginClick: saveUserName
};
export default connect(mapStateToProps,mapDispatchToProps)(Login);
//connect(mapStateToProps,mapDispatchToProps)