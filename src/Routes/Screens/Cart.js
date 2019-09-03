import React, { Component } from "react";
import {connect} from 'react-redux';
import NumericInput from 'react-native-numeric-input';
import {addQuantity,decreaseQuantity,deleteItem} from '../../Store/actions/index';
import {Alert,  StyleSheet, TouchableHighlight,TouchableOpacity,ImageBackground } from "react-native";
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
        <ImageBackground source ={require('../../../images/phoneimg1.jpg')} style={{width:'100%',height:"100%"}} >
        <View style={{backgroundColor:"#fff3e0", height:50, flexDirection:"row",paddingTop:10 }}>
        <Icons 
                                    style={{paddingLeft:10}} 
                                    onPress={()=>{this.props.navigation.goBack()}}
                                    name="md-arrow-back" 
                                    size={30}
                                    color='rgb(179, 0, 0)'
                            /> 
     <Text style={{paddingLeft:'32%',paddingTop:5, color:'rgb(179, 0, 0)',fontFamily: "Brush Script Std,cursive",fontWeight:"bold",fontSize:20}}>BASKET </Text>

     
     </View>
  {/*   <View style={{backgroundColor:'rgba(0,0,0,0.8)', height:40,}}>
       
       <View style={{
         flexDirection:"row", fontSize:30,
         
         
         }}>
         
           
          <TouchableOpacity onPress={() => this.setState({ visibleModal: null })}>
                             <Text style={{color:'rgb(179, 0, 0)',fontFamily: "Brush Script Std,cursive",fontWeight:"500", fontSize:20, paddingLeft:13,paddingTop:3 }}> 
                             Food
                               </Text>
        </TouchableOpacity>
         
           
           
           
         
         
         
       
       </View>


         
         
</View>*/}










        <Content padder style={{backgroundColor:"rgba(0,0,0,0.5)"}} >
        
<View style={{backgroundColor:'white',borderRadius:15,paddingTop:20}} >


         <View style={{paddingHorizontal:15}}>
          <Text style={{color:'rgb(179, 0, 0)',fontFamily: "Brush Script Std,cursive", fontSize:15 }}>
          {this.props.VendorName}
          </Text>
         <Text style={{color:'rgb(179, 0, 0)'}} >Estimated Delivery Time: 30 Minutes</Text>
         </View>

         <Text style={{color:'rgb(179, 0, 0)',  opacity:0.6, fontSize:30}}>- - - - - - - - - - - - - - - - - - -</Text>

           
            
      <View >
          {/**style={{flexDirection:"row",paddingHorizontal:10}} */}
            {this.props.hex.map(strResult=>(
              <View key={strResult.id} style={{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:15}} >

                           
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
                                                    totalWidth={80}
                                                    totalHeight={30}
                                                    textColor='black' 
                                                    iconStyle={{ color: 'white' }}
                                                    rightButtonBackgroundColor='rgb(179, 0, 0)'
                                                    leftButtonBackgroundColor='rgb(179, 0, 0)' />

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
                                                            <Text style={{color:'rgb(179, 0, 0)',fontSize:11}} >  {strResult.name} ( {strResult.vendorName} )</Text>
                                                      </View>
                                                      
                           


                                    <View>
                                          <Text style={{color:'rgb(179, 0, 0)',fontSize:11}} >PKR {strResult.price}</Text>
                                    </View>
                                      
                                      <View>
                                            <Icon name="ios-trash" onPress={()=>this.props.onDeleteClick(strResult.id,strResult.price,strResult.quantity)} style={{ color: 'rgb(179, 0, 0)' }}
                                                  size={11}       
                                                 
                                            
                                                  
                                            />
                                      </View>
                                     
                                      
                                

              </View>
            ))}
         
    </View>            
    
            <Text style={{color:'rgb(179, 0, 0)',  opacity:0.6, fontSize:30}}>- - - - - - - - - - - - - - - - - - -</Text>
           <View >
                    <View style={{justifyContent:"space-between",flexDirection:"row",paddingHorizontal:15,paddingVertical:5}}>
                        <Text style={{color:'rgb(179, 0, 0)',fontSize:11}} > Subtotal: </Text>  
                        <Text style={{color:'rgb(179, 0, 0)',fontSize:11}} > PKR {this.props.stotal}</Text> 
                          
                    </View>                        

                    <View style={{justifyContent:"space-between",flexDirection:"row",paddingHorizontal:15}}>
                          <Text style={{color:'rgb(179, 0, 0)',fontSize:11}} > Delivery Fee: </Text>  
                          <Text style={{color:'rgb(179, 0, 0)',fontSize:11}}> PKR {this.props.dfees}</Text> 
                            
                    </View>                        

                    <Text style={{color:'rgb(179, 0, 0)',  opacity:0.6, fontSize:30}}>- - - - - - - - - - - - - - - - - - -</Text>
           

                    <View style={{justifyContent:"space-between",flexDirection:"row",paddingHorizontal:15}}>
                          <Text style={{color:'rgb(179, 0, 0)',fontWeight:"bold",fontSize:11}}> Total: </Text>  
                          <Text style={{color:'rgb(179, 0, 0)', fontWeight:"bold",fontSize:11}}> PKR {this.props.totall}</Text> 
                            
                    </View>                        
          </View>            
      <View style={{paddingTop:15}}>                                         
          <Button full style={{backgroundColor:'rgb(179, 0, 0)'}}>
            <Text onPress={()=>{this.props.navigation.navigate('CheckoutPage')}} style={{color:'white',fontFamily: "Brush Script Std,cursive", fontSize:20}}>GO TO CHECKOUT</Text>
         </Button>
          
      </View>
      </View>
      
        </Content>
        </ImageBackground>
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
    totall:state.Main.total,
    VendorName:state.Main.vendor,
    dfees:state.Main.deliveryFees

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