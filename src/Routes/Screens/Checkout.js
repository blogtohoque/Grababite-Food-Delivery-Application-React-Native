import React, { Component } from "react";
import {connect} from 'react-redux';
import NumericInput from 'react-native-numeric-input';
import {addQuantity,decreaseQuantity,deleteItem} from '../../Store/actions/index';
import {Alert,  StyleSheet, TouchableHighlight,TouchableOpacity,TextInput,ImageBackground } from "react-native";
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
    delfees:"",
    cfirstName:"",
    clastName:"",
    cemail:"",
    cmobile:"",
    caddress:""
  };
  componentDidMount=()=>{
    setInterval(()=>{
      this.setState({
          date :new Date().toLocaleDateString(),
          Time:new Date().toLocaleTimeString()
      })
  },1000);

    var x=this.props.Hello;
    this.setState({
      cfirstName:x[0].firstName,
      clastName:x[0].lastName,
      cemail:x[0].email,
      cmobile:x[0].phoneNo,
      caddress:x[0].address
    });


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
  <Container style ={styles.content} >

      <View style={{backgroundColor:'rgb(179, 0, 0)', height:40}}>
       
                  <View style={{
                    flexDirection:"row", justifyContent:"space-between",fontSize:30,
                    paddingTop:5, paddingVertical:10,paddingHorizontal:'5%'
                    
                    }}>
                    
                      
                        <TouchableOpacity onPress={() => this.setState({ visibleModal: null })}>
                                        <Text style={{color:"white",fontFamily:"Brush Script Std,cursive"}}> 
                                        Cancel
                                          </Text>
                        </TouchableOpacity>
                    
                      
                      
                      
                    
                    
                    
                    <Text style={{color:"white",fontFamily:"Brush Script Std,cursive"}}>Address</Text>
                  
                  
                  </View>


                    
                    
      </View>
      <Content padder>
     
              <View style={{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:'2%',width:'100%' }}>

                      <View style={{flexDirection:"column",width:'50%',marginRight:'3%'}}>      
                                <Text style={{paddingTop:'5%',color:'rgb(179, 0, 0)',fontWeight:'500',fontSize:14,fontFamily:"Brush Script Std,cursive"}}>First Name</Text> 

                                <Item regular style={{marginTop:'4%',borderRadius:10,width:'100%'}}>
                                  <Input 

                                            value={this.state.cfirstName} 
                                            keyboardType="email-address"
                                            onChangeText={(inp)=>{
                                            this.setState({cfirstName:inp})
                                            
                                        }}     
                                        style={{width:'100%',fontSize:11}}
                                           
                                  />
                                </Item>  
                      </View>       
                      <View style={{flexDirection:"column",width:'50%'}}>
                                  <Text style={{paddingTop:'5%',color:'rgb(179, 0, 0)',fontWeight:'500',fontSize:14,fontFamily:"Brush Script Std,cursive"}}>Last Name</Text>
                      
                                  <Item regular style={{marginTop:'4%',borderRadius:10,width:'100%'}}>
                                    <Input  
                                              value={this.state.clastName}
                                              onChangeText={(inp)=>{
                                              this.setState({clastName:inp})
                                  }}
                                 style={{width:'100%',fontSize:11}}
                                    />

                                  </Item>
                      
                      
                      
                      </View>
                   
              </View>

              <View style={{flexDirection:"column",width:'90%'}}>
                      <Text style={{paddingTop:'5%',color:'rgb(179, 0, 0)',fontWeight:'500',fontSize:14,fontFamily:"Brush Script Std,cursive"}}>Address</Text>
                      <Item regular style={{marginTop:'4%',borderRadius:10,width:'100%'}}>
                                    <Input 
                                    value={this.state.caddress} 
                                    onChangeText={(inp)=>{
                                      this.setState({caddress:inp})
                                  }}
                                  style={{width:'100%',fontSize:11}}
                                    />
                      </Item>


              </View>      

              <View style={{flexDirection:"column",width:'90%'}}>
                      <Text style={{paddingTop:'5%',color:'rgb(179, 0, 0)',fontWeight:'500',fontSize:14,fontFamily:"Brush Script Std,cursive"}}>Area</Text>
                      <Item regular style={{marginTop:'4%',borderRadius:10,width:'100%'}}>
                                    <Input style={{fontSize:11}} placeholder='Area' />
                                    <Icons style={{paddingRight:10}} size={20} active name='md-pin' />
                                    
                      </Item>


              </View>      

              <View style={{flexDirection:"column",width:'90%'}}>
                      <Text style={{paddingTop:'5%',color:'rgb(179, 0, 0)',fontWeight:'500',fontSize:14,fontFamily:"Brush Script Std,cursive"}}>Phone No</Text>
                      <Item regular style={{marginTop:'4%',borderRadius:10,width:'100%'}}>
                                    <Input 
                                    value={this.state.cmobile}
                                    onChangeText={(inp)=>{
                                      this.setState({cmobile:inp})
                                  }}
                                  style={{width:'100%'}}
                                     />
                      </Item>


              </View>


                    <View style={{paddingTop:'10%', paddingLeft:'5%',paddingBottom:'10%',width:'90%'}}>
                                    <Button 
                                    style={{backgroundColor:'rgb(179, 0, 0)',width:'100%'}}
                                    onPress={() => this.setState({ visibleModal: null })}
                                    ><Text onPress={() => this.setState({ visibleModal: null })}
                                    style={{paddingLeft:'40%',paddingTop:'2%',color:'white',fontWeight:'500',fontSize:14,fontFamily:"Brush Script Std,cursive",width:'100%'}}
                                    >DONE</Text></Button>      

                    </View>


                 
                     





    
        </Content> 
       
      </Container>
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
    var custid=x[0]._id;
    var defees=this.props.dfees
  
    
    



    var datee=this.state.date;
    var orderedtime=this.state.Time;

    var subtotal=this.props.stotal;
   // var dFees=;
    var total=this.props.totall;
    var fooddetails=this.props.hex;    
    var OrderStatus="Pending";

    
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
axios.post("http://192.168.140.2:8000/maxID",
    {

    })
    .then(Responses=>{
      var check =Responses.data;
      if(typeof(check) === 'string'){
                    
        alert("Wrong Data");
              

      }
      else{
        //  console.log(datee);
          var oid= check[0].oID;
          oid=oid+1;
          console.log(oid);

        
axios.post("http://192.168.140.2:8000/Checkout",
{
    Address:add,
     date:datee,
     otime:orderedtime,
     subtotal:subtotal,
     dfees:defees,
     totals:total,
     fdetail:fooddetails,
     ostatus:OrderStatus,
     oid:oid,
     custid:custid
}
)
.then(Response=>{

    var check = Response.data;
//     var dude = check.split(" ");
    //       var token=dude[1];
//            var  fname=dude[0];
    console.log(check);
    console.log('hello');
  //  console.log(dude[1]);
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







      }
    })


      

  }




  render() {
    return (
      <Container style={{ width: "100%" }}>
        <View style={{backgroundColor:'#fff3e0', height:50,paddingTop:10,flexDirection:'row' }}>
        <Icons 
                                    style={{paddingLeft:10}} 
                                    onPress={()=>{this.props.navigation.goBack()}}
                                    name="md-arrow-back" 
                                    size={30}
                                    color='rgb(179, 0, 0)'
                            /> 
     <Text style={{paddingLeft:'25%',paddingTop:5, color:'rgb(179, 0, 0)',fontFamily:"Brush Script Std,cursive",fontWeight:"bold",fontSize:15}}>REVIEW ORDER</Text>

     
     </View>


<Content padder>

     <View style={{backgroundColor:'white'}}>
       
    
         
           
                      
                                        <Text style={{color:'rgb(179, 0, 0)',fontFamily:"Brush Script Std,cursive", fontSize:14, paddingLeft:13,paddingTop:3,fontWeight:'300' }}> 
                                        YOUR INFORMATION
                                          </Text>
                     
                    
                  
              
      </View>


      <View style={{marginTop:'2%'}} >
                        <TouchableOpacity  onPress={() => this.setState({ visibleModal: 'fancy' })} >
                                        <Text style={{color:'black',fontFamily:"Brush Script Std,cursive", fontSize:13,justifyContent:"center",paddingLeft:'28%'}}> 
                                        + Add Address
                                        </Text>
                        </TouchableOpacity>
      </View>

         


      <Modal
                                      isVisible={this.state.visibleModal === 'fancy'}
                                      backdropColor="rgba(0,0,0,0.8)"
                                     // backdropOpacity={0.8}
                                      animationIn="zoomInDown"
                                      animationOut="zoomOutUp"
                                      animationInTiming={600}
                                      animationOutTiming={600}
                                      backdropTransitionInTiming={600}
                                      backdropTransitionOutTiming={600}
                                      
                                    >
                                      {this.renderModalContent()}
        </Modal>


        <View style={{backgroundColor:'white',marginTop:'2%'}}>
       
     
         
           
      
                                        <Text style={{color:'rgb(179, 0, 0)',fontFamily:"Brush Script Std,cursive", fontSize:14, paddingLeft:13,fontWeight:'300'}}> 
                                        ORDER INSTRUCTIONS
                                          </Text>
                      
                    
                  
             
      </View>

      <View>

                      <Item regular style={{width:'80%',marginTop:'2%',borderRadius:10,marginLeft:10}}>
                                    <Input style={{fontSize:12}} placeholder="e.g Please call, don't ring the door bell   "/>
                      </Item>


      </View>




      <View style={{backgroundColor:'white',marginTop:'2%'}}>
       
      
         
           
                     
                                        <Text style={{color:'rgb(179, 0, 0)',fontFamily:"Brush Script Std,cursive", fontSize:14, paddingLeft:13,fontWeight:'300'}}> 
                                        PAYMENT METHOD
                                          </Text>
                    
                    
                  
             
      </View>

      <View>



          <ListItem>
            <CheckBox checked={this.state.cOn} onPress={this.cashCheck} />
            <Body>
              <Text style={{fontFamily:"Brush Script Std,cursive",fontWeight:"300",fontSize:11}}>Cash on Delivery</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox  checked={this.state.vOn}  onPress={this.cashCheck}/>
            <Body>
              <Text style={{fontFamily:"Brush Script Std,cursive",fontWeight:"300",fontSize:11}}>Pay by Credit Card</Text>
            </Body>
          </ListItem>



      </View>


      <View style={{backgroundColor:'white', marginTop:'2%'}}>
       
      
         
           
                   
                                        <Text style={{color:'rgb(179, 0, 0)',fontFamily:"Brush Script Std,cursive", fontSize:14, paddingLeft:13,fontWeight:'300'}}> 
                                        PROMO CODE
                                          </Text>
                       
                    
                  
            
      </View>

      <View>

                      <Item regular style={{width:'80%',marginTop:'2%',borderRadius:10,marginLeft:10}}>
                                    <Input style={{fontSize:11}} placeholder="Enter Code  "/>
                      </Item>


      </View>


         <View>

                      
                      <Button warning 
                      style={{width:'80%',height:40,marginTop:'7%',borderRadius:10,marginHorizontal:'10%',backgroundColor:'rgb(179, 0, 0)',paddingLeft:'20%'} }
                      onPress={this.placeOrder}
                      
                      ><Text style={{fontFamily:"Brush Script Std,cursive",fontSize:12,paddingBottom:'12%',fontWeight:'300'}} >PLACE MY ORDER</Text></Button>

      </View>



      </Content>

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