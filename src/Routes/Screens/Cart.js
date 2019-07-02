import React, { Component } from "react";
import {connect} from 'react-redux';

import {addQuantity,decreaseQuantity,deleteItem} from '../../Store/actions/index';
import {Alert,  StyleSheet, TouchableHighlight } from "react-native";
import {
  Container,
  Content,
  Button,
  Left,
  Right,
  Body,
  Text,
  Input,
  Label,
  List,
  ListItem,
  Thumbnail,
  View,Icon
} from "native-base";
import Icons from 'react-native-vector-icons/Ionicons';

 class Cart extends Component {
  onPlaceOrderClick = () => {
    Alert.alert(
      "Order Placed",
      "Your Order will be delivered in 45-60 Minutes, Thank you.",
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

     
     </View>
        <Content padder>
          <List>
            

              {this.props.hex.map(strResult=>(

                      <ListItem thumbnail key={strResult.id} >
                      <Left>
                        <Thumbnail
                          square
                          source={{ url: "/Users/arkhitech/Desktop/Biriyani.png" }}
                        />
                      </Left>
                      <Body >



                              <View key={strResult.id}  style={styles.inputContainer} >
                                              
                                              
                              {/*     <button onClick={this.props.onMinusQuantityClick}>-</button>{this.props.quantity}<button onClick={this.props.onPlusQuantityClick} >+</button> x &nbsp;{this.props.name}&nbsp;{this.props.price} Rs
                              */}
                                     <TouchableHighlight onPress={()=>this.props.onMinusQuantityClick(strResult.id,strResult.price)}>
                                        <Text>-  </Text>
                                     </TouchableHighlight>
                                      
                                       <Text>  {strResult.quantity}</Text>
                                     <TouchableHighlight onPress={()=>this.props.onPlusQuantityClick(strResult.id,strResult.price)}>
                                      <Text >  +</Text>
                                      </TouchableHighlight>
                                      <Text>  x</Text>
                                      <Text>  {strResult.name} ( {strResult.vendorName} )</Text>
                                      <TouchableHighlight onPress={()=>this.props.onDeleteClick(strResult.id,strResult.price,strResult.quantity)}>
                                      <Text >  Delete</Text>
                                      </TouchableHighlight>
                                     

                              </View>
                                              
              </Body>
              <Right>
                <Button transparent>
                  <Text>Rs {strResult.price}</Text>
                </Button>
                
              </Right>
            </ListItem>



                              ))} 



              
              
             
            <ListItem thumbnail>
              <Left />
              <Body>
                <Text>Subtotal</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Rs {this.props.stotal}</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left />
              <Body>
                <Text>Delivery Fees</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Rs {this.props.dfees}</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left />
              <Body>
                <Text>Total</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Rs {this.props.totall}</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left />
              <Body>
                <Text>Address</Text>
              </Body>
              <Right>
                <Body>
                  <Input>
                    <Label>Please enter Address Info </Label>
                  </Input>
                </Body>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left />
              <Body>
                <Text>Phone#</Text>
              </Body>
              <Body>
                <Input>
                  <Label>Please enter Address Info </Label>
                </Input>
              </Body>
            </ListItem>
            <ListItem thumbnail>
              <Left />
              <Body>
                <Text>Payment</Text>
              </Body>
              <Right>
                <Body>
                  <Text>Select Payment Method</Text>
                </Body>
              </Right>
            </ListItem>
          </List>
          <Button full>
            <Text onPress={this.onPlaceOrderClick}>Place Order</Text>
          </Button>
        </Content>
        <Text>{this.props.VendorName} Cart</Text>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    flexDirection: "row",
    
  },
  
});
mapStateToProps=state=>{
  return{
    hex:state.Main.cart,
    stotal:state.Main.subTotal,
    dfees:state.Main.deliveryFees,
    totall:state.Main.total,
    VendorName:state.Main.vendor
  };
}
mapDispatchToProps=dispatch=>{
  return{
    onMinusQuantityClick: (id,price)=>dispatch(decreaseQuantity(id,price)),
    onPlusQuantityClick:(id,price)=>dispatch(addQuantity(id,price)),
    onDeleteClick: (id,price,quantity)=>dispatch(deleteItem(id,price,quantity))
  };

}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);