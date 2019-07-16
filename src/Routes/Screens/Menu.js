import React, { Component } from "react";
import { Alert, Image, StyleSheet,TouchableOpacity,TextInput } from "react-native";
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
  CardItem,
  CheckBox,
  Badge
} from "native-base";

import Icons from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/FontAwesome';
import IC from 'react-native-vector-icons/FontAwesome5';
import Modal from "react-native-modal";
import NumericInput from 'react-native-numeric-input';
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
    gotmenu:[],
    visibleModalId: null,
    name:"",price:"",description:"",_id:"",vendorName:"",
    cOn:true,
    vOn:false,
    bottle:"",
    amount: 0,
    v8: 0,
    value:0, v9:0

  };
  changeAmount(text) {
    this.amount = text
  }
  customerCheck=()=>{
    var v=this.state.vOn   //false
    var c=this.state.cOn   //true

  this.setState(
    {
      cOn:v,
      vOn:c
    }
  )
  if(this.state.cOn==true)
  {
    this.setState(
      {
        bottle:"Coca Cola"
      }
    )
  }
  else{
    this.setState(
      {
        bottle:"Sprite"
      }
    )

  }      
}
closeModal=()=>{

  this.setState({ visibleModal: null });

}

  renderModalContent = (namefood,pricefood,descriptionfood,_idfood,vendorNamefood) => (
    <View style={styles.content}>
      <View style={{backgroundColor:"#1c313a", height:40}}>
       
                  <View style={{
                    flexDirection:"row", justifyContent:"space-between",marginRight:210 ,fontSize:30,
                    paddingTop:5, paddingVertical:10
                    
                    }}>
                    
                      
                        <TouchableOpacity onPress={() => this.setState({ visibleModal: null })}>
                                        <Text style={{color:"white",fontFamily:"century-gothic"}}> 
                                        Cancel
                                          </Text>
                        </TouchableOpacity>
                    
                      
                      
                      
                    
                    
                    
                    <Text style={{color:"white",fontFamily:"century-gothic"}}>Menu Item</Text>
                  
                  
                  </View>


                    
                    
      </View>
      <View style={{flexDirection:"column"}}>
       <Text style={{color:"black",fontWeight:"500",fontSize:20,fontFamily:"century-gothic",paddingLeft:10,paddingVertical:7}}>{this.state.name}</Text>
       <Text style={{color:"black",fontWeight:"300",fontSize:15,fontFamily:"century-gothic",paddingLeft:10,paddingVertical:7}}>PKR{this.state.price}</Text>
       <Text style={{color:"black",fontWeight:"100",fontSize:15,fontFamily:"century-gothic",paddingLeft:10,paddingVertical:7}}>{this.state.description}</Text>
                 
                    <Text  style={{color:"black",fontWeight:"500",fontSize:15,fontFamily:"century-gothic",paddingLeft:10,paddingVertical:15}}>Choose Your Drink</Text>
                    <List>
                          <ListItem>
                                  <CheckBox checked={this.state.cOn} onPress={this.customerCheck} />
                                  <Body>
                                  <Text>Coca Cola</Text>
                                  </Body>
                          </ListItem>
                          <ListItem>
                                <CheckBox  checked={this.state.vOn}  onPress={this.customerCheck}/>
                                <Body>
                                <Text>Sprite</Text>
                                </Body>
                          </ListItem>
                          
                    </List>
                    <Text style={{color:"black",fontWeight:"100",fontSize:15,fontFamily:"century-gothic",paddingLeft:10,paddingVertical:15}}>Special Instruction</Text>
                    <TextInput
                      editable = {true}
                      maxLength = {80}
                      spellCheck={true}
                      placeholder={"Add Instruction here..."}
                      placeholderTextColor={"grey"}
                    />

                      
                    <View style={{paddingHorizontal:10,paddingVertical:10, flexDirection:"row", justifyContent:"space-between" }}>

                                    <NumericInput
                                    initValue={this.state.v8}
                                    value={this.state.v8}
                                    onChange={
                                      (v8) => { 
                                                    if(v8>0)
                                                    {
                                         /*                
                                                      if(v8>this.state.v8)
                                                      {
                                                          this.props.onPlusClick(this.state.id,this.state.price);
                                                        this.setState({ 
                                                          v8:v8                                                    
                                                        })
                                                      }
                                                      else {
                                                        this.props.onMinusQuantityClick(this.state.id,this.state.price);  
                                                        this.setState({ 
                                                          v8:v8                                                    
                                                        })
                                                      }
                                                 */     
                                                      this.setState({ 
                                                        v8:v8                                                    
                                                      })
                                                    
                                                    }
                                              }
                                    
                                    } 
                                    totalWidth={80}
                                    totalHeight={40}
                                    textColor='black' 
                                    iconStyle={{ color: 'white' }}
                                    rightButtonBackgroundColor='#1c313a'
                                    leftButtonBackgroundColor='#1c313a' />

                                    <Button onPress={()=>{
                                      this.closeModal(),
                                      this.props.onPlusClick(this.state.name,this.state.price,this.state.description,this.state._id,this.props.vendorName)

                                    
                                    }} style={{backgroundColor:"#1c313a"}}><Text style={{color:"white",fontWeight:"300",fontSize:15,fontFamily:"century-gothic"}}>ADD TO BASKET</Text></Button>
                                    {/*this.props.onPlusClick(this.state.name,this.state.price,this.state.description,this.state._id,this.props.vendorName,this.state.v8) */}
                </View> 





      </View>
        
       
    </View>
  );
  plusClickHandler=(name,price,description,_id,vendorName)=>{
    this.setState({
      
      visibleModal: 'fancy',
      name:name,
      price:price,
      description:description,
      _id:_id,
      vendorName:vendorName,
      v8:1
    
    })
  };
  handleOnScroll = event => {
    this.setState({
      scrollOffset: event.nativeEvent.contentOffset.y,
    });
  };

  handleScrollTo = p => {
    if (this.scrollViewRef) {
      this.scrollViewRef.scrollTo(p);
    }
  };












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

//jgjhgh


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
                              <Text style={{paddingLeft:180,paddingTop:5, color:'white',fontFamily:"century-gothic",fontWeight:"bold",fontSize:20}}>{this.props.vendorName}</Text>

                              <FIcon
                                name="cart-plus" style={{ paddingLeft:230,color:'white',paddingTop:3}} 
                                size={30} 
                                onPress={()=>{this.props.navigation.navigate('TripleJugarNavigation')}}
                                  />
                                
                                    {button}
                    </View>


          <Header searchBar rounded style={{backgroundColor: '#1c313a'}}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search Food" />
            <IC name="utensils" size={20} style={{paddingRight:15}}/>
        
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content padder>
          
        <Button
          onPress={() => this.setState({ visibleModal: 'fancy' })}
          >
            <Text> Fancy</Text>
        </Button>


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
                                          <Icons  name="ios-add-circle-outline" size={30} style={{color:"white"}} onPress={()=>{this.plusClickHandler(abc.name,abc.price,abc.description,abc._id,this.props.vendorName)}} /> 
                                          {/*this.Alertme(abc.name,abc.price,abc.description,abc._id,this.props.vendorName),this.props.onPlusClick(abc.name,abc.price,abc.description,abc._id,this.props.vendorName) */}
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


          




          <Modal
                                      isVisible={this.state.visibleModal === 'fancy'}
                                      backdropColor="#B4B3DB"
                                      backdropOpacity={0.8}
                                      animationIn="zoomInDown"
                                      animationOut="zoomOutUp"
                                      animationInTiming={600}
                                      animationOutTiming={600}
                                      backdropTransitionInTiming={600}
                                      backdropTransitionOutTiming={600}
                                      style={{padding:40}}
                                    >
                                      {this.renderModalContent()}
        </Modal>














        </Content>
        
        
      </Container>
    );
  }
}
mapStateToProps=(state)=>{
  return{
    vendorName:state.Main.vendor,
    hex:state.Main.cart,
    count: state.Main.count
    
  };
}
mapDispatchToProps=(dispatch)=>{
  return{
    onPlusClick:(name,price,description,_id,vendorName)=>dispatch(addItem(name,price,description,_id,vendorName)),
    onMinusQuantityClick: (id,price)=>dispatch(decreaseQuantity(id,price)),
    onPlusQuantityClick:(id,price)=>dispatch(addQuantity(id,price)),
  };
}




export default connect(mapStateToProps,mapDispatchToProps)(Menu);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  content: {
    backgroundColor: 'white',
    justifyContent:"space-around",
   
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  scrollableModal: {
    height: 300,
  },
  scrollableModalContent1: {
    height: 200,
    backgroundColor: '#87BBE0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableModalText1: {
    fontSize: 20,
    color: 'white',
  },
  scrollableModalContent2: {
    height: 200,
    backgroundColor: '#A9DCD3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableModalText2: {
    fontSize: 20,
    color: 'white',
  },
  customBackdrop: {
    flex: 1,
    backgroundColor: '#87BBE0',
    alignItems: 'center',
  },
  customBackdropText: {
    marginTop: 10,
    fontSize: 17,
  },
});