import React, { Component } from "react";
import {connect} from 'react-redux'
//import {saveCity,saveUserName} from '../../Store/actions/index';
import {saveCity,saveUserName,saveUserDetail} from '../../Store/actions/index';
import AsyncStorage from '@react-native-community/async-storage';
import Icons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity,Image, ActivityIndicator,  StyleSheet,ImageBackground,Dimensions } from 'react-native';
import Carousel from 'simple-carousel-react-native';
import {
  Container,
  Content,
  Header,
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
 CardItem,
 Spinner 
} from "native-base";
import axios from 'axios';
import InteractiveCard  from 'react-native-interactive-card';
//import Carousel from 'react-native-snap-carousel';
//import startMainTabs from "../mainTabs/startMainTabs";
//import {createDrawerNavigator} from 'react-navigation';
//import homeScreen from '../../Screens/Auth/HomeScreen';
//import settingScreen from '../../Screens/Auth/SettingScreen';

const cardOptions = { overlayOpacity : 1 };
const contentOptions = { enterFrom: "right" };
const headerStyle = {
	backgroundColor: "#68E9FF", padding: 30, 
	marginBottom: 10, borderRadius: 5 
};
const textStyle = {
	fontSize: 40, opacity: 0.6,
	textAlign: 'center', fontWeight: 'bold'
};
const contentStyle = {
	width: "90%", padding: 50, 
	backgroundColor: "#E85F53"
};



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
    ),
    drawerLabel:()=> null,
   
  }

  state={
    gotdata:[],
    tokencheck:"",
    gotdataa:[],
    recievedData:false,
  }

  
  

  componentDidMount= async ()=>{
   // this.setState({loader:false});  
    fetch('http://192.168.10.8:8000/city')
        .then(res=> res.json())
        .then(gotdata=>this.setState({gotdata}))
        .then(async()=>{
        await  this.setState({recievedData:true});})
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

    }
    else
    {
                this.props.onLoginClick(full_name);
              
                
                var x=full_name;
            //    console.log('Hello');
           //     console.log(full_name)
                axios.post('http://192.168.10.8:8000/checkEmail',
                {
                        name:x,
                })
                .then((Response) =>{
                  var check=Response.data;
          //        console.log('check boy');
           //       console.log(check);

                  this.props.onLoginDetail(check);
                })
                .catch(error=>{
              
                    console.log(error.data)
                })

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
  _renderItem = ({item, index}) => {
    return (
        <View style={styles.slide}>
            <Text style={styles.title}>{ item.title }</Text>
        </View>
    );
};
  render() {

   //   console.log('Main Page props')
  //  console.log(this.props)
    let showData;
    if(this.state.recievedData===true)
    {
      showData=(

<Carousel
  color='#00FFFF'
  showScroll={ true }
  color={'rgba(255, 255, 255,0.9)'}
  dimmedColor={'black'}
  backgroundColor={'transparent'}
  bubbleWidth={15}
  bubleHeight={15}
  showScroll={false}
   >

  {
    this.state.gotdata? this.state.gotdata.map(print=>{
      return(
          <Card >
          
          <CardItem cardBody style={{borderTopLeftRadius:25,borderTopRightRadius:25,borderWidth:0}} >
            <Image source={require('../../assets/images/fm.jpg')} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>

          <CardItem>

                       <View><Text style={{color:'black',fontSize:11}}> Food From {print.name}'s Best Vendors. </Text></View>

          </CardItem>

          <CardItem style={{backgroundColor:'white',borderBottomLeftRadius:25,borderBottomRightRadius:25,borderWidth:0}}>
            <Body style={{borderWidth:0}} >

             <View style={{backgroundColor:'rgb(179, 0, 0)',width:'100%'}} >
                 <Button transparent style={{width:'100%',paddingLeft:'10%',paddingRight:'10%'}} >
                  <Text style={{color:'white',paddingLeft:'46%',fontFamily:"Brush Script Std,cursive",fontWeight:"bold",fontSize:15}} onPress={()=>{this.onViewClick(print.name); this.props.onCityAdd(print.name);}}>View</Text>
                </Button>
             </View>
               
             
                
            </Body>
        
          </CardItem>
      
          </Card>
      )
    }):null
  }
  
  
 </Carousel>

      )
    } 
    else{
      showData=(
        <View>
           <Spinner color='grey' />

        </View>
      )
    }   


    return (
      <Container style={{width:"100%", backgroundColor:'white'}}>
{/*     
          {this.props.Hello ? this.props.Hello.map(strResult=>(
            <View>
            <Text>  {strResult.email} OR {strResult.firstName} </Text>
            </View>
          )
          
          ):null
          
          }


    
    
          {this.state.loader ? <ActivityIndicator
          
          color = '#bc2b78'
          size = "large"
          style = {styles.activityIndicator}/> :null}
          
*/}

<ImageBackground source ={require('../../../images/phoneimg1.jpg')} style={{width:'100%',height:'100%'}} >
<Content padder style={{backgroundColor:'rgba(0,0,0,0.5)'}} >

        
{showData}













{/*<Button 
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
  

  */ }
  
</Content>

</ImageBackground>
        
        
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
    onLoginClick:(x)     =>dispatch(saveUserName(x)),
    onLoginDetail: (y)=>dispatch(saveUserDetail(y))
    
  };

};


export default connect(mapStateToProps,mapDispatchToProps)(MainPage);


const styles = StyleSheet.create ({
  tr:{
    flex: 1,
    transform: [
      
      { translateX: - Dimensions.get('window').width * 0.24 },
      { rotateY: '30deg'},

    ],
  },
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