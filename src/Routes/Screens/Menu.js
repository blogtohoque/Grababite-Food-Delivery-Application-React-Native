import React, { Component } from "react";
import { Alert, Image } from "react-native";
import {connect} from 'react-redux';
import {addItem} from '../../Store/actions/index';
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Text,
  List,
  ListItem,
  Thumbnail,
  View,
  Header,
  Item,
  Icon,
  Input,
  Card,
  CardItem
} from "native-base";

import Icons from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/FontAwesome';
class Menu extends Component {
  static navigationOptions = {
    header:null
  /* 
    title:'Menu',
    headerTintColor: 'white',
    
    headerStyle: {
      backgroundColor: '#1c313a'
      
      
    },
    headerRight:(
      <FIcon name="cart-plus" style={{ paddingRight:30}} size={30} color="white"
      onPress={()=>{this.props.navigation.navigate('TripleJugarNavigation')}}
      />


  ),
*/
  };
  state={
    gotdata:[],
    gotmenu:[]
  }
  onCheckoutClick = () => {
   // this.props.navigator.push({
  //    screen: "awesome-places.Cart",
   //   title: "Cart"
  //  });
  this.props.navigation.navigate('TripleJugarNavigation');
  };
  componentDidMount=()=>{
        
    fetch('http://192.168.10.7:8000/food')
    .then(res=> res.json())
    .then(gotdata=>this.setState({gotdata}));
 
    fetch('http://192.168.10.7:8000/menu')
    .then(res=> res.json())
    .then(gotmenu=>this.setState({gotmenu}));    
    



  }

  Alertme = (namefood,pricefood,descriptionfood,_idfood,vendorNamefood) => {
    Alert.alert(
      "Food Details of" + vendorNamefood,
      namefood +" Added to Cart",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  };
  render() {
    return (
      <Container style={{ width: "100%" }}>
        <View style={{backgroundColor:"#1c313a", height:50, flexDirection:"row",paddingTop:10 }}>
        <Icons 
                                    style={{paddingLeft:10}} 
                                    onPress={()=>{this.props.navigation.goBack()}}
                                    name="md-arrow-back" 
                                    size={30}
                                    color="white"
                            /> 
     <Text style={{paddingLeft:40, color:'white'}}>GRAB A BITE </Text>

     <FIcon
      name="cart-plus" style={{ paddingLeft:370,color:'white'}} 
      size={30} 
      onPress={()=>{this.props.navigation.navigate('TripleJugarNavigation')}}
        />
     </View>
          <Header searchBar rounded style={{backgroundColor: '#1c313a'}}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search Food" />
            <Icon name="ios-people" />
        

          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content padder>
          


          <View>
          {
            this.state.gotmenu ? this.state.gotmenu.map(print => {
            if(print.vendorName === this.props.vendorName){
            return (
            <View>
               
            {print.foodID.map((item, key) => {
            return (
            <View  key = {key}>
            {
                
                    this.state.gotdata ? this.state.gotdata.map(abc => {
                        if(abc._id === item){  //name description or price
                        return (
                                    <Card thumbnail>
          
                                    <CardItem key={key} style={{backgroundColor:"#1c313a"}}>
                                  <Left>
                                    <Thumbnail source={require('../../assets/images/logo.png')} />
                                    <Body>
                                    <Text style={{color:"white"}}>{abc.name}</Text>
                                      <Text style={{color:"white"}} note numberOfLines={1}>
                                        {abc.description}
                                      </Text>
                                      <Text style={{color:"white"}}>Rs{abc.price} </Text>
                                  
                                    </Body>
                                  </Left>
                                  <Right>
                                  <Button transparent>
                                          <Icons  name="ios-add-circle-outline" size={30} style={{color:"white"}} onPress={()=>{this.Alertme(abc.name,abc.price,abc.description,abc._id,this.props.vendorName),this.props.onPlusClick(abc.name,abc.price,abc.description,abc._id,this.props.vendorName)}} /> 
                                          
                                          </Button>

                                  </Right>
                                </CardItem>
                    


                        














                                  
                                  </Card>                 
                        )
                        } 
                        }) : null
                
                
                
            
        
        
        
        
        
        
        
        }

           
        
        
           
           
        
            </View>
            )
            })
            }
            </View>
            )
            } 
            }) : null
           
        }

          </View>    




















        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text onPress={this.onCheckoutClick}>Checkout</Text>
              <Text>Vendor name is {this.props.vendorName}</Text>
            </Button>
          </FooterTab>
        </Footer>
        
      </Container>
    );
  }
}
mapStateToProps=(state)=>{
  return{
    vendorName:state.Main.vendor,
    
  };
}
mapDispatchToProps=(dispatch)=>{
  return{
    onPlusClick:(name,price,description,_id,vendorName)=>dispatch(addItem(name,price,description,_id,vendorName))
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu);