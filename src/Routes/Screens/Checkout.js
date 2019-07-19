import React, { Component } from "react";
import {connect} from 'react-redux';
import NumericInput from 'react-native-numeric-input';
import {addQuantity,decreaseQuantity,deleteItem} from '../../Store/actions/index';
import {Alert,  StyleSheet, TouchableHighlight,TouchableOpacity,TextInput } from "react-native";
import {
  Container,
  Content,
  Button,
  Left,
  Right,
  Radio,
  Body,
  Text,
  Input,
  Label,
  Item,
  List,
  ListItem,
  Thumbnail,
  View,Icon,
  CheckBox,
} from "native-base";
import Icons from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";
import axios from 'axios';
 class Checkout extends Component {
  state={
    v8: 0,
    visibleModalId: null,
    value:0,amount: 0,
    cOn:true,
    vOn:false,
    role:"Cash on Delivery",
    date:"",
    Time:"",
    address:"",
    delfees:""
  };
  componentDidMount=()=>{
    setInterval(()=>{
      this.setState({
          date :new Date().toLocaleDateString(),
          Time:new Date().toLocaleTimeString()
      })
  },1000)
  }

  cashCheck=()=>{
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
        role:"Pay by Credit Card"
      }
    )
  }
  else{
    this.setState(
      {
        role:"Cash on Delivery"
      }
    )

  }      
}


  closeModal=()=>{

    this.setState({ visibleModal: null });
  
  }
  renderModalContent = () => (
    <View style={styles.content}>
      <View style={{backgroundColor:"#1c313a", height:40}}>
       
                  <View style={{
                    flexDirection:"row", justifyContent:"space-between",marginRight:210 ,fontSize:30,
                    paddingTop:5, paddingVertical:10,paddingLeft:10
                    
                    }}>
                    
                      
                        <TouchableOpacity onPress={() => this.setState({ visibleModal: null })}>
                                        <Text style={{color:"white",fontFamily:"century-gothic"}}> 
                                        Cancel
                                          </Text>
                        </TouchableOpacity>
                    
                      
                      
                      
                    
                    
                    
                    <Text style={{color:"white",fontFamily:"century-gothic"}}>Address</Text>
                  
                  
                  </View>


                    
                    
      </View>
      <View >
              <View style={{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:10}}>
                      <View style={{flexDirection:"column"}}>      
                                <Text style={{paddingTop:10,color:"black",fontWeight:"500",fontSize:15,fontFamily:"century-gothic"}}>First Name</Text> 

                                <Item regular style={{width:180,height:40,marginTop:8,borderRadius:10}}>
                                  <Input placeholder='First Name' />
                                </Item>  
                      </View>       
                      <View style={{flexDirection:"column",paddingRight:60}}>
                                  <Text style={{paddingTop:10,color:"black",fontWeight:"500",fontSize:15,fontFamily:"century-gothic"}}>Last Name</Text>
                      
                                  <Item regular style={{width:180,height:40,marginTop:8,borderRadius:10}}>
                                    <Input placeholder='Last Name' />
                                  </Item>
                      
                      
                      
                      </View>
                   
              </View>

              <View style={{flexDirection:"column"}}>
                      <Text style={{paddingTop:10, paddingLeft:10,color:"black",fontWeight:"500",fontSize:15,fontFamily:"century-gothic"}}>Address</Text>
                      <Item regular style={{width:400,height:40,marginTop:8,borderRadius:10,marginLeft:10}}>
                                    <Input placeholder='Address' />
                      </Item>


              </View>      

              <View style={{flexDirection:"column"}}>
                      <Text style={{paddingTop:10, paddingLeft:10,color:"black",fontWeight:"500",fontSize:15,fontFamily:"century-gothic"}}>Area</Text>
                      <Item regular style={{width:400,height:40,marginTop:8,borderRadius:10,marginLeft:10}}>
                                    <Input placeholder='Area' />
                                    <Icons style={{paddingRight:10}} size={20} active name='md-pin' />
                                    
                      </Item>


              </View>      

              <View style={{flexDirection:"column"}}>
                      <Text style={{paddingTop:10, paddingLeft:10,color:"black",fontWeight:"500",fontSize:15,fontFamily:"century-gothic"}}>Phone No</Text>
                      <Item regular style={{width:400,height:40,marginTop:8,borderRadius:10,marginLeft:10}}>
                                    <Input placeholder='Phone No' />
                      </Item>


              </View>


                    <View style={{paddingTop:20, paddingLeft:10,paddingBottom:20}}>
                                    <Button 
                                    style={{backgroundColor:"#1c313a"}}
                                    ><Text 
                                    style={{width:400,height:60,color:"white",fontWeight:"400",fontSize:15,fontFamily:"century-gothic",paddingLeft:185,marginTop:35}}
                                    >DONE</Text></Button>      

                    </View>


                 
                     





      </View>
        
       
    </View>
  );


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




  placeOrder=()=>{
    var x=this.props.Hello;
  //  console.log(datee);
    var add= x[0].address;
    var defees=this.props.defees
  
    
    



    var datee=this.state.date;
    var orderedtime=this.state.Time;

    var subtotal=this.props.stotal;
   // var dFees=;
    var total=this.props.totall;
    var fooddetails=this.props.hex;    
    var OrderStatus="Pending";

    Alert.alert(
      'Order',
      "Your order has been placed, you'll get confirmation in a while.",
      [
       
        {text: 'OK', onPress: () => this.props.navigation.navigate('Dashboard')},
      ],
      {cancelable: false},
    );
    console.log(add);
    console.log(datee);
    console.log(orderedtime);
    console.log(subtotal);
    console.log(defees);
    console.log(total);
    console.log(fooddetails);
    console.log(OrderStatus)
 //Order foodDetail(foodid,quantity,vendorname,etc)  Date, SubTotal 
 //DeliveryFees Total OrderStatus OrderedTime Recievedtime Address oid 
      //reci
 //username
   
//address phone no   date timing, orderstatus


{/* 

axios.post("http://192.168.1.28:8000/Checkout",
    {
        Address:add,
         date:datee,
         otime:orderedtime,
         subtotal:subtotal,
         dfees:defees,
         totals:total,
         fdetail:fooddetails,
         ostatus:OrderStatus

    }
    )
    .then(Response=>{

        var check = Response.data;
        if(check === "do")
        {
          Alert.alert(
            'Order',
            "Your order has been placed, you'll get confirmation in a while.",
            [
             
              {text: 'OK', onPress: () => this.props.navigation.navigate('Dashboard')},
            ],
            {cancelable: false},
          );
             console.log(Response.data);
        }
        else{
            alert("Order Failed");
        }
            
    })
     .catch(error=>{
        console.log(error.Response);
        console.log('kuti');
     }
     )

    */} 
      

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
     <Text style={{paddingLeft:220,paddingTop:5, color:'white',fontFamily:"century-gothic",fontWeight:"bold",fontSize:20}}>REVIEW ORDER</Text>

     
     </View>
     <View style={{backgroundColor:"#1c313a", height:40, opacity:0.6}}>
       
       <View style={{
         flexDirection:"row", fontSize:30,
         
         
         }}>
         
           
                        <TouchableOpacity >
                                        <Text style={{color:"black",fontFamily:"century-gothic",fontWeight:"500", fontSize:20, paddingLeft:13,paddingTop:3 }}> 
                                        YOUR INFORMATION
                                          </Text>
                        </TouchableOpacity>
                    
                  
       </View>         
      </View>


      <View style={{padding:10}}>
                        <TouchableOpacity  onPress={() => this.setState({ visibleModal: 'fancy' })} >
                                        <Text style={{color:"#1c313a",fontFamily:"century-gothic",fontWeight:"500", fontSize:20,justifyContent:"center",paddingLeft:200, paddingTop:15,opacity:0.6 }}> 
                                        + Add Address
                                        </Text>
                        </TouchableOpacity>
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


        <View style={{backgroundColor:"#1c313a", height:40, opacity:0.6}}>
       
       <View style={{
         flexDirection:"row", fontSize:30,
         
         
         }}>
         
           
                        <TouchableOpacity >
                                        <Text style={{color:"black",fontFamily:"century-gothic",fontWeight:"500", fontSize:20, paddingLeft:13,paddingTop:3 }}> 
                                        ORDER INSTRUCTIONS
                                          </Text>
                        </TouchableOpacity>
                    
                  
       </View>         
      </View>
      <View>

                      <Item regular style={{width:580,height:40,marginTop:15,borderRadius:10,marginLeft:10}}>
                                    <Input placeholder="e.g Please call, don't ring the door bell   "/>
                      </Item>


      </View>




      <View style={{backgroundColor:"#1c313a", height:40, opacity:0.6,marginTop:10}}>
       
       <View style={{
         flexDirection:"row", fontSize:30,
         
         
         }}>
         
           
                        <TouchableOpacity >
                                        <Text style={{color:"black",fontFamily:"century-gothic",fontWeight:"500", fontSize:20, paddingLeft:13,paddingTop:3 }}> 
                                        PAYMENT METHOD
                                          </Text>
                        </TouchableOpacity>
                    
                  
       </View>         
      </View>
      <View>



          <ListItem>
            <CheckBox checked={this.state.cOn} onPress={this.cashCheck} />
            <Body>
              <Text style={{fontFamily:"century-gothic",fontWeight:"300"}}>Cash on Delivery</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox  checked={this.state.vOn}  onPress={this.cashCheck}/>
            <Body>
              <Text style={{fontFamily:"century-gothic",fontWeight:"300"}}>Pay by Credit Card</Text>
            </Body>
          </ListItem>



      </View>


      <View style={{backgroundColor:"#1c313a", height:40, opacity:0.6, marginTop:10}}>
       
       <View style={{
         flexDirection:"row", fontSize:30,
         
         
         }}>
         
           
                        <TouchableOpacity >
                                        <Text style={{color:"black",fontFamily:"century-gothic",fontWeight:"500", fontSize:20, paddingLeft:13,paddingTop:3 }}> 
                                        PROMO CODE
                                          </Text>
                        </TouchableOpacity>
                    
                  
       </View>         
      </View>
      <View>

                      <Item regular style={{width:580,height:40,marginTop:15,borderRadius:10,marginLeft:10}}>
                                    <Input placeholder="Enter Code  "/>
                      </Item>


      </View>


         <View>

                      
                      <Button warning 
                      style={{width:580,height:40,marginTop:15,borderRadius:10,marginLeft:10,backgroundColor:"#1c313a",paddingLeft:185} }
                      onPress={this.placeOrder}
                      
                      ><Text style={{fontFamily:"century-gothic"}} >PLACE MY ORDER</Text></Button>

      </View>




     {/*   <Text>{this.props.VendorName} Cart</Text>         */} 
       </Container>
    );
  }
}
const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    flexDirection: "row",
    
  },

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
mapStateToProps=state=>{
  return{
    hex:state.Main.cart,
    stotal:state.Main.subTotal,
    dfees:state.Main.deliveryFees,
    totall:state.Main.total,
    VendorName:state.Main.vendor,
    count: state.Main.count,
    Hello: state.Main.userDetail
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


//address phone no   date timing, orderstatus