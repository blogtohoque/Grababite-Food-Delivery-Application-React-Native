/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,Image,alert} from 'react-native';
import {
  Container,
  Header,
 Body,
 Content
} from "native-base";
import MainPage from './src/Routes/Screens/MainPage';
import LOGIN from './src/Routes/Screens/Login';
import Notifications from './src/Routes/Test/Notifications';
import Profile from './src/Routes/Test/Profile';
import OrderHistory from './src/Routes/Test/OrderHistory';
import Authen from './src/Routes/Test/Auth';
import SignUp from './src/Routes/Screens/Signup';
import Vendor from './src/Routes/Screens/Vendor';
import Menu from './src/Routes/Screens/Menu';
import Cart from './src/Routes/Screens/Cart';
import {createSwitchNavigator, createAppContainer ,createDrawerNavigator, createBottomTabNavigator, createStackNavigator, DrawerItems} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/FontAwesome';

import {Provider} from 'react-redux';
import configureStore from './src/Store/configureStore'


const store =configureStore();


class App extends Component {
  render() {
    return (
      <Provider store ={store}>
      <AppContainer/>
      </Provider>

      
    );
  }
}

export default App;
{/* 

const DashboardTabNavigator = createBottomTabNavigator({
    Feed,
    Profile,
    Settings
},{
  navigationOptions:({navigation})=>{
    const {routeName} = navigation.state.routes
    [navigation.state.index];
    return{
      headerTitle: routeName,
      
    };
  }
});
*/}
const cartStackPages= createStackNavigator({
  DashboardTabNavigator:Cart,
 // LoginPage:  LOGIN,
 // SignUp: SignUp,
 // Vendor: Vendor,
 // Menu: Menu,
 // Cart: Cart
  
},{
  defaultNavigationOptions:({navigation})=>{
   return{

    headerTitle: 'GRAB A BITE', 
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#1c313a'
      
      
    }, 
    headerLeft: <Icon 
      style={{paddingLeft:10}} 
      onPress={()=>{navigation.openDrawer()}}
      name="md-menu" 
      size={30}
      color="white"
      />
      
      
   };
   
  }

});
const LoginStackPages= createStackNavigator({
  LoginPage:  LOGIN,
  SignUp: SignUp
});
const MainStackAfterPages =createStackNavigator({
  
  Vendor: Vendor,
  Menu: Menu,
//  Cart: Cart

});

const DashboardStackNavigator= createStackNavigator({
  DashboardTabNavigator:MainPage,
 // LoginPage:  LOGIN,
 // SignUp: SignUp,
 // Vendor: Vendor,
 // Menu: Menu,
 // Cart: Cart
  
},{
  defaultNavigationOptions:({navigation})=>{
   return{

    headerTitle: 'GRAB A BITE', 
    headerTintColor: 'white',
    
    headerStyle: {
      backgroundColor: '#1c313a'
      
      
    }, 
    
    headerLeft: <Icon 
      style={{paddingLeft:10}} 
      onPress={()=>{navigation.openDrawer()}}
      name="md-menu" 
      size={30}
      color="white"
      />,
      headerRight:(
        <FIcon name="cart-plus" style={{ paddingRight:30}} size={30} color="white"
        onPress={()=>{navigation.navigate('TripleJugarNavigation')}}
        />
 

      )
      
   };
   
  }

});
const customDrawerContentComponenet=(props)=>(
  <Container>
    <Header style={{
      height:200,
      backgroundColor:'#1c313a',
      
      }}>
      <Body>
        <Image
        style={{
          height:150,
          width:150,
          borderRadius:75,
          alignSelf:"center",
          opacity:0.7
          
        }}
        source={require('./src/assets/images/logo.png')}
        />
      </Body>
    </Header>
    <Content style={{   backgroundColor:'white', opacity:0.7
   }}>
      <DrawerItems {...props}  /> 
    </Content>
  </Container>
);

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard:{
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
          <Icon name="md-home" style={{ color: "#1c313a" }}
          size={25}       
          color="#06191F"
     
          
          />
          
      ),
      drawerLabel: "Dashboard",
      labelStyle: {
        fontSize: 10,
        margin: 0,
        padding: 0,
        color:'red'
      },
   //   drawerLabelOptions: { 
   //     activeTintColor: 'red',   how to set dashboard color set krna ha
 //       inactiveTintColor: 'red',
    //                      },
    },
    
    screen:DashboardStackNavigator
  },
  Profile:{
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
          <FIcon name="users" style={{ color: "#1c313a" }}
          size={22} 
          
          color="#06191F"
          
          />
      ),
      drawerLabel: "Profile"
    },
    screen:Profile,
  },
  OrderHistory:{
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
          <FIcon name="history" style={{ color: "#1c313a" }} 
          size={25} 
          
          color="#06191F"
          
          />
      ),
      drawerLabel: "Order History"
    },
    screen:OrderHistory
  },
  Notifications:{
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
          <FIcon name="bell" style={{ color: "#1c313a" }}
          size={25} 
          
          color="#06191F"
          
          />
      ),
      drawerLabel: "Notification"
    },
    screen:Notifications
  },
  Login:{
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
          <FIcon name="lock" style={{ color: "#1c313a" }} 
          size={35} 
          
          color="#06191F"
          
          
          />
      ),
      drawerLabel: "Login"
    },
    screen:LOGIN
  },
  JugarNavigation:{
    navigationOptions:{
      drawerLabel: () => null
 },
    screen:MainStackAfterPages,
      
    



  },
  DoubleJugarNavigation:{
    navigationOptions:{
      drawerLabel: () => null
 },
    screen:LoginStackPages,
    
  },
  TripleJugarNavigation:{
    navigationOptions:{
      drawerLabel: () => null
 },
    screen:cartStackPages,
    
  },
  

},{
  initialRouteName:'Dashboard',
  
  contentComponent:customDrawerContentComponenet,
  contentOptions:{
   // drawerBackgroundColor:"transparent",
    labelStyle:{
      color:'#1c313a',
    }
  }
 // drawerOpenRoute:'DrawerOpen',
//  drawerCloseRoute:'DrawerClose',
//  drawerToggleRoute:'DrawerToggle',
});

const AppSwitchNavigator= createSwitchNavigator({
  Welcome: {screen: Authen},
  Dashboard: {screen: AppDrawerNavigator},
 // LoginPage: {screen: LOGIN},
 // SignUp: {screen:SignUp},
 // Vendor: {screen:Vendor},
 // Menu: {screen:Menu},
 // Cart: {screen:Cart}
});
const AppContainer= createAppContainer(AppSwitchNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
 
});
