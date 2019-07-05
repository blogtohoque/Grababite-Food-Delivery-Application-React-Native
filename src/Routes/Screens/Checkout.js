import React, { Component } from "react";
import {connect} from 'react-redux';
import NumericInput from 'react-native-numeric-input';
import {addQuantity,decreaseQuantity,deleteItem} from '../../Store/actions/index';
import {Alert,  StyleSheet, TouchableHighlight,TouchableOpacity } from "react-native";
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

 class Checkout extends Component {
  state={
    v8: 0,
  };
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
  minusclick=(id,price,quantity)=>{

    if(quantity==1)
    {
      this.props.onDeleteClick(id,price,quantity)
    }
    else{
      this.props.onMinusQuantityClick(id,price);
    }
    

  }
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
     <Text style={{paddingLeft:40, color:'white',fontFamily:"500"}}>Checkout Page </Text>

     
     </View>
     <View style={{backgroundColor:"#1c313a", height:40, opacity:0.6}}>
       
       <View style={{
         flexDirection:"row", fontSize:30,
         
         
         }}>
         
           
             <TouchableOpacity onPress={() => this.setState({ visibleModal: null })}>
                             <Text style={{color:"black",fontFamily:"century-gothic",fontWeight:"500", fontSize:20, paddingLeft:13,paddingTop:3 }}> 
                             Food
                               </Text>
             </TouchableOpacity>
         
           
           
           
         
         
         
       
       </View>


         
         
</View>










        <Content padder>
        

         <View style={{paddingHorizontal:15}}>
          <Text style={{color:"black",fontFamily:"century-gothic",fontWeight:"500", fontSize:20 }}>
          {this.props.VendorName}
          </Text>
         <Text>Estimated Delivery Time: 30 Minutes</Text>
         </View>

         <Text style={{color:"#1c313a",  opacity:0.6, fontSize:38}}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - -</Text>

           
            
      <View >
          {/**style={{flexDirection:"row",paddingHorizontal:10}} */}
            {this.props.hex.map(strResult=>(
              <View key={strResult.id} style={{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:15}} >


                    <View style={{flexDirection:"row",paddingVertical:5}} >
                           
                              <View>
                                  <NumericInput
                                                    initValue={strResult.quantity}
                                                    value={strResult.quantity}
                                                    onChange={
                                                      (quan) => { 
                                                                    if(quan>strResult.quantity)
                                                                    {
                                                                      this.props.onPlusQuantityClick(strResult.id,strResult.price)
                                                                    }
                                                                    else{
                                                                      this.minusclick(strResult.id,strResult.price,strResult.quantity)       
                                                                    }
                                                              }
                                                    
                                                    } 
                                                    totalWidth={50}
                                                    totalHeight={25}
                                                    textColor='black' 
                                                    iconStyle={{ color: 'white' }}
                                                    rightButtonBackgroundColor='#1c313a'
                                                    leftButtonBackgroundColor='#1c313a' />

                                          </View>
                              {/*
                              <TouchableHighlight onPress={()=>this.minusclick(strResult.id,strResult.price,strResult.quantity)}>
                                                
                                                        <Text>-  </Text>
                                                    </TouchableHighlight>
                                                      
                                                      <Text>  {strResult.quantity}</Text>
                                                    <TouchableHighlight onPress={()=>this.props.onPlusQuantityClick(strResult.id,strResult.price)}>
                                                      <Text >  +</Text>
                                                      </TouchableHighlight>
                                              
                                              */}  
                                                      <View>
                                                            <Text>  {strResult.name} ( {strResult.vendorName} )</Text>
                                                      </View>
                                                      
                                </View>

                                <View style={{flexDirection:"row"}} >

                                    <View>
                                          <Text >PKR {strResult.price}</Text>
                                    </View>
                                      
                                      <View>
                                            <Icon name="ios-trash" onPress={()=>this.props.onDeleteClick(strResult.id,strResult.price,strResult.quantity)} style={{ color: "#1c313a" }}
                                                  size={15}       
                                                  color="#1c313a"
                                            
                                                  
                                            />
                                      </View>
                                     
                                      
                                </View>

              </View>
            ))}
         
    </View>            
    
            <Text style={{color:"#1c313a",  opacity:0.6, fontSize:38}}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - -</Text>
           <View >
                    <View style={{justifyContent:"space-between",flexDirection:"row",paddingHorizontal:15,paddingVertical:5}}>
                        <Text> Subtotal: </Text>  
                        <Text> PKR {this.props.stotal}</Text> 
                          
                    </View>                        

                    <View style={{justifyContent:"space-between",flexDirection:"row",paddingHorizontal:15}}>
                          <Text> Delivery Fee: </Text>  
                          <Text> PKR {this.props.dfees}</Text> 
                            
                    </View>                        

                    <Text style={{color:"#1c313a",  opacity:0.6, fontSize:38}}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - -</Text>
           

                    <View style={{justifyContent:"space-between",flexDirection:"row",paddingHorizontal:15}}>
                          <Text style={{color:"#1c313a",fontWeight:"bold"}}> Total: </Text>  
                          <Text style={{color:"#1c313a", fontWeight:"bold"}}> PKR {this.props.totall}</Text> 
                            
                    </View>                        
          </View>            
      <View style={{paddingTop:15}}>                                         
          <Button full style={{backgroundColor:"#1c313a" , }}>
            <Text onPress={this.onPlaceOrderClick} style={{color:"white",fontFamily:"century-gothic",fontWeight:"300", fontSize:25}}>GO TO CHECKOUT</Text>
          </Button>
      </View>
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
    VendorName:state.Main.vendor,
    count: state.Main.count
  };
}
mapDispatchToProps=dispatch=>{
  return{
    onMinusQuantityClick: (id,price)=>dispatch(decreaseQuantity(id,price)),
    onPlusQuantityClick:(id,price)=>dispatch(addQuantity(id,price)),
    onDeleteClick: (id,price,quantity)=>dispatch(deleteItem(id,price,quantity))
  };

}
export default connect(mapStateToProps,mapDispatchToProps)(Checkout);