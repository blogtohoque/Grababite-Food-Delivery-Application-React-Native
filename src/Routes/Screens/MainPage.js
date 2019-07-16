import React, { Component } from "react";
import {connect} from 'react-redux'
//import {saveCity,saveUserName} from '../../Store/actions/index';
import {saveCity,saveUserName} from '../../Store/actions/index';
import AsyncStorage from '@react-native-community/async-storage';
import Icons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity,Image, ActivityIndicator,  StyleSheet } from 'react-native';
import {
  Container,
  Content,
  
  Button,
  Left,
  Right,
  Body,
  Text,
  List,
  ListItem,
  Thumbnail,
  Icon,
  View,
 Card,
 CardItem
} from "native-base";
//import Carousel from 'react-native-snap-carousel';
//import startMainTabs from "../mainTabs/startMainTabs";
//import {createDrawerNavigator} from 'react-navigation';
//import homeScreen from '../../Screens/Auth/HomeScreen';
//import settingScreen from '../../Screens/Auth/SettingScreen';
class MainPage extends Component {
  constructor(props) {
    super(props); 
    this.onLoginClick = this.onLoginClick.bind(this);  
  }
  static defaultNavigationOptions ={
    drawerIcon:(
      <Image 
            source={require('../../assets/images/2152.png')} 
            style={{
              height:24,
              width:24
            }} 
        />
    )
  }

  state={
    gotdata:[],tokencheck:"", loader: true
  }
  

  componentDidMount= async ()=>{
   // this.setState({loader:false});  
    fetch('http://192.168.10.4:8000/city')
        .then(res=> res.json())
        .then(gotdata=>this.setState({gotdata}))
        .catch(error=>{
          console.log("Error in retrieving data from Backend. ");
   //       console.log(loader);
  });
  //console.log("LOADER FALSE HO NA");
  //console.log(this.state.loader);
  
  //const full_name = AsyncStorage.getItem('fullName');
 // if(full_name)
 //         {
              //setAuthorizationToken(localStorage.jwtToken);
 //             store.dispatch({type:'SAVE_USERNAME',userName:full_name});   
//          }

    // ye karna ha abhe 2 lines neche wale if k check ma if token exist then ye
      
    const full_name = await AsyncStorage.getItem('fullName');
    
    if(full_name===null)
    {

    }else{
      this.props.onLoginClick(full_name);
    }
      
   // this.setState({
  //    tokencheck:full_name
 //   });
 // console.log("FULL NAME ");
 //  console.log(full_name);
}
  




  onSideBar = () => {
  //  this.props.navigation.openDrawer;
  };
  onViewClick = async (name) => {
 
  //  await AsyncStorage.setItem('city_name',name); 
 
    this.props.navigation.navigate('Vendor');
  //  this.props.navigator.push({
   //   screen: "awesome-places.VendorPage",
   //   title: "Vendors"
   // });
  };
  onLoginClick=()=>{
   // this.props.navigator.push({
   //   screen: "awesome-places.AuthScreen",
  //    title: "Authentication"
 //   });
    this.props.navigation.navigate('LoginPage'); 
    

  };
  _renderItem ({item, index}) {
    return (
        <View style={styles.slide}>
            <Text style={styles.title}>{ item.title }</Text>
        </View>
    );
};
  render() {

      console.log('Main Page props')
    console.log(this.props)
    


    return (
      <Container style={{width:"100%", backgroundColor:'white'}}>
{/*     
          {this.state.loader ? <ActivityIndicator
          
          color = '#bc2b78'
          size = "large"
          style = {styles.activityIndicator}/> :null}
*/}
          <Content padder>


          { this.state.gotdata ? this.state.gotdata.map(print  => {
              
              return (
                <Card>
                <CardItem key={print.id} style={{backgroundColor:"#1c313a"    } }>
                <Left>
                  <Thumbnail source={require('../../assets/images/logo.png')} />
                  <Body >
                    <Text style={{color:"white"}}>{print.name}</Text>
                    <Text note style={{color:"white"}}>Grab A Bite</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={require('../../assets/images/fm.jpg')} style={{height: 200, width: null, flex: 1}}/>
              </CardItem>
              <CardItem style={{backgroundColor:"#1c313a"}}>
                <Left>
                  <Button transparent>
                    <Icon active name="thumbs-up"  style={{color:"white"}}/>
                    <Text style={{color:"white"}}>12 Likes</Text>
                  </Button>
                </Left>
                <Body>

                <Button transparent>
                <Icon active name="chatbubbles" style={{color:"white"}} />
                      <Text style={{color:"white"}} onPress={()=>{this.onViewClick(print.name); this.props.onCityAdd(print.name);}}>View</Text>
                    </Button>
                </Body>
                <Right>
                  <Text style={{color:"white"}}>11h ago</Text>
                </Right>
              </CardItem>
          
              </Card>
          
          
          
          
          
              )
            }
          ):null
        }





          

          <Button 
          onPress={ async ()=>{
           await AsyncStorage.removeItem('fullName');
          this.props.navigation.navigate('Dashboard');
     //     this.props.onLoginClick("");
      //    this.props.navigator.push({
     //     screen: "awesome-places.AuthScreen",
     //     title: "Authentication"
     //      });
           }}>
          <Text>Logout</Text></Button>
          
          <TouchableOpacity>
           <Icon size={30} name="ios-trash" color="red"/>
          </TouchableOpacity>
          <Text>Grab A Bite  Logged in user is {this.props.userName}</Text>
          {this.props.Hello ? this.props.Hello.map(strResult=>(
            <View>
            <Text>  {strResult.email} OR {strResult.firstName} </Text>
            </View>
          )
          
          ):null
          
          }
          
        </Content>
        
      </Container>
    );
  }
}
const mapStateToProps=state=>{
  return {
    cityname:state.Main.city,
    userName:state.Main.userName,
    Hello: state.Main.userDetail
  };
};
const mapDispatchToProps = dispatch=>{
  return{
    onCityAdd:(cityName) =>dispatch(saveCity(cityName)),
    onLoginClick:(x)     =>dispatch(saveUserName(x))
    
  };

};


export default connect(mapStateToProps,mapDispatchToProps)(MainPage);


const styles = StyleSheet.create ({
  container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     marginTop: 70
  },
  activityIndicator: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     height: 80
  }
})