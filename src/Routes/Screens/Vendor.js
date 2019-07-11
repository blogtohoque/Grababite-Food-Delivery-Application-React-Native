import React, { Component } from "react";
import {connect} from 'react-redux';
import {saveVendor} from '../../Store/actions/index';
import {Image} from 'react-native';
import {
  Container,
  Content,
  Button,
  Left,
  Right,
  Body,
  Text,
 
  Thumbnail,
  View,
  Card,Icon,CardItem,
  Badge
} from "native-base";


//import { DrawerActions } from 'react-navigation';
import Icons from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
class Vendor extends Component {
    
  
  static navigationOptions = {
    header:null
  };
  state={
    gotdata:[],
  }
  onViewClick = () => {
 //   this.props.navigator.push({
   //   screen: "awesome-places.Menu",
   //   title: "Menu"
   // });
   this.props.navigation.navigate('Menu');
  };
  componentDidMount=()=>{
   
    fetch('http://192.168.10.8:8000/city')
    .then(res=> res.json())
    .then(gotdata=>this.setState({gotdata}));
   
    
    
//this.props.navigation.dispatch(DrawerActions.closeDrawer());
//this.props.navigation.dispatch(DrawerActions.openDrawer());
  };



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
     <Text style={{paddingLeft:220,paddingTop:5, color:'white',fontFamily:"century-gothic",fontWeight:"bold",fontSize:20}}>{this.props.cityname} </Text>

     <FIcon
      name="cart-plus" style={{ paddingLeft:180,color:'white',paddingTop:3}} 
      size={30} 
      onPress={()=>{this.props.navigation.navigate('TripleJugarNavigation')}}
        />
        {button}



     </View>
        <Content padder>
          
          
   

            {
                                this.state.gotdata ? this.state.gotdata.map(print => {
                                if (print.name === this.props.cityname){
                                return (
                                <View key={print.key} >
                                    {print.data}
                                {print.vendorNameList.map((item, key) => {
                                return(
                                  <Card key={key}>
                                  <CardItem key={key} style={{backgroundColor:"#1c313a"}}>
                                  <Left>
                                    <Thumbnail source={require('../../assets/images/logo.png')} />
                                    <Body>
                                      <Text style={{color:"white"}}>{item}</Text>
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
                                      <Icon active name="thumbs-up" style={{color:"white"}} />
                                      <Text style={{color:"white"}}>12 Likes</Text>
                                    </Button>
                                  </Left>
                                  <Body>
                  
                                  <Button transparent>
                                  <Icon active name="chatbubbles" style={{color:"white"}}/>
                                  <Text style={{color:"white"}} onPress={()=>{this.onViewClick(); this.props.onVendorAdd(item);}}>View</Text>
                                       </Button>
                                  </Body>
                                  <Right>
                                    <Text style={{color:"white"}}>11h ago</Text>
                                  </Right>
                                </CardItem>
                                </Card>               
                                )
                                })
                                }
                                </View>
                                )
                                } 
                                }) : null
                               
                            }




            
          
        </Content>
        
      </Container>
    );
  }
}

const mapStateToProps=state=>{
  return {
    cityname:state.Main.city,
    count: state.Main.count
 
  };
};
const mapDispatchToProps=dispatch=>{
  return{
    onVendorAdd:(vendorName) =>dispatch(saveVendor(vendorName))

  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Vendor);