import React, { Component } from 'react';
import { Text, View ,StyleSheet, StatusBar, TextInput, TouchableOpacity, Image  } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import FIcon from 'react-native-vector-icons/FontAwesome';


class ProfileScreen extends Component {
    state={
      firstName:"First Name",
      lastName:"Last Name",
      email:"Email",
      mobile:"Mobile",
      cPassword:"Current Password",
      nPassword:"New Password",
      address:"Address"

    }

    componentDidMount=()=>{ 
      var x=this.props.Hello;
      console.log(x)

           
              this.setState({
                firstName:x[0].firstName,
                lastName:x[0].lastName,
                email:x[0].email,
                mobile:x[0].phoneNo,
                address:x[0].address
              });
      
       
    };
    updateProfile=()=>{
      var a = this.state.firstName;
      var b = this.state.lastName;
      var c = this.state.cPassword;
      var d = this.state.nPassword;
      var e = this.state.mobile;
      var h = this.state.address;
      var em = this.state.email;
      var DBOLDPASS = this.state.databaseOldPass;
     
      if(c===DBOLDPASS){
     //   console.log("dataabse wala pass "+DBOLDPASS+" old pass jo likha ha "+c+"Emailllll "+ em)
              axios.post("http://192.168.10.4:8000/updateProfileDelivery",
                {
                    firstname:a,
                    lastname:b,
                    password:d,
                    email:em,
                    mobile:e,
                    Address:h,
               
                }
                )
                .then(Response=>{
        
                    var check = Response.data;
                    if(check === "do")
                    {
                        
                        alert('Your Profile Updated Successfuly');
                        this.props.navigation.navigate('Dashboard');
                    }
                    else{
                        alert("Error Updating Profile");
                    }
                        
                })
                .catch(error=>{
                    console.log(error.Response)
                }
                )
         }
      else
      {
          alert("Your Old password is wrong")
      }

    }
 
    render() {
      
        return (
      
            <View style={styles.container} >

                        <View style={{backgroundColor:"#1c313a", height:50, flexDirection:"row",paddingTop:10 }}>
                                      <Icons 
                                                                  style={{paddingLeft:10}} 
                                                                  onPress={()=>{this.props.navigation.goBack()}}
                                                                  name="md-arrow-back" 
                                                                  size={30}
                                                                  color="white"
                                                          /> 
                                  <Text style={{paddingLeft:210,paddingTop:5, color:'white',fontFamily:"century-gothic",fontWeight:"bold",fontSize:20}}>My Profile</Text>

                                  <FIcon
                                    name="cart-plus" style={{ paddingLeft:210,color:'white',paddingTop:3}} 
                                    size={30} 
                                    onPress={()=>{this.props.navigation.navigate('TripleJugarNavigation')}}
                                      />
                                    
                                        
                        </View>


          <View style={{ 
                      paddingTop:90,
                      justifyContent:'center',
                      alignItems: 'center'
              }}>
                                <View style={styles.container2}>
                                            <Image
                                            style={{width: 50, height: 50,borderRadius:25}}
                                            source={require('../../assets/images/logo.png')}
                                            />
                                            <Text style={styles.logoText}>Grab A Bite</Text>	
                                </View>

                          <TextInput style={styles.inputBox} 
                              underlineColorAndroid='rgba(0,0,0,0)' 
                              value={this.state.firstName}
                              placeholderTextColor = "#ffffff"
                              selectionColor="#fff"
                              keyboardType="email-address"
                              onChangeText={(inp)=>{
                                  this.setState({firstName:inp})
                              }}
                              
                        />

                          <TextInput style={styles.inputBox} 
                              underlineColorAndroid='rgba(0,0,0,0)' 
                              value={this.state.lastName}
                              placeholderTextColor = "#ffffff"
                              onChangeText={(inp)=>{
                                this.setState({lastName:inp})
                            }}
                          />  

                              <TextInput style={styles.inputBox} 
                              underlineColorAndroid='rgba(0,0,0,0)' 
                              value={this.state.email}
                              placeholderTextColor = "#ffffff"
                              onChangeText={(inp)=>{
                                this.setState({email:inp})
                            }}
                              />  
                              
                              <TextInput style={styles.inputBox} 
                              underlineColorAndroid='rgba(0,0,0,0)' 
                              value={this.state.mobile}
                              placeholderTextColor = "#ffffff"
                              keyboardType = 'decimal-pad'
                              onChangeText={(inp)=>{
                                this.setState({mobile:inp})
                            }}
                              />  
                              <TextInput style={styles.inputBox} 
                              underlineColorAndroid='rgba(0,0,0,0)' 
                              placeholder="Current Password"
                              placeholderTextColor = "#ffffff"
                              secureTextEntry = {true}
                              onChangeText={(inp)=>{
                                this.setState({cPassword:inp})
                            }}
                              /> 
                              <TextInput style={styles.inputBox} 
                              underlineColorAndroid='rgba(0,0,0,0)' 
                              placeholder="New Password"
                              placeholderTextColor = "#ffffff"
                              secureTextEntry = {true}
                              onChangeText={(inp)=>{
                                this.setState({nPassword:inp})
                            }}
                              /> 
                              <TextInput style={styles.inputBox} 
                              underlineColorAndroid='rgba(0,0,0,0)' 
                              value={this.state.address}
                              placeholderTextColor = "#ffffff"
                              onChangeText={(inp)=>{
                                this.setState({address:inp})
                            }}
                              /> 
                              
                          <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText} onPress={this.updateProfile}>Update</Text>
                          </TouchableOpacity>  
                                
                          
           </View>            
               
            </View>
   
        )
    }
}



const mapStateToProps=state=>{
  return {
    count: state.Main.count,
    Hello: state.Main.userDetail
 
  };
};
export default connect(mapStateToProps,null)(ProfileScreen);

const styles = StyleSheet.create({
  container : {
    flex:1,
    
    backgroundColor:'#455a64',
  
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
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },

  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },


  container2: {
    justifyContent:'flex-end',
    alignItems: 'center'
  },
  logoText : {
    marginTop: 15,
    fontSize:18,
    color:'rgba(255, 255, 255, 0.7)',
    fontFamily:"century-gothic",
    fontWeight:"bold"

}
  
});