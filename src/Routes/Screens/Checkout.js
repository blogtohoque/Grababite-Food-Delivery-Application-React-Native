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
  CheckBox
} from "native-base";
import Icons from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";
 class Checkout extends Component {
  state={
    v8: 0,
    visibleModalId: null,
    value:0,amount: 0
  };




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
     <Text style={{paddingLeft:40, color:'white',fontFamily:"500"}}>REVIEW ORDER</Text>

     
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




      <View style={{backgroundColor:"#1c313a", height:40, opacity:0.6}}>
       
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

      <ListItem selected={false} >
            <Left>
              <Text>Cash on Delivery</Text>
            </Left>
            <Right>
              <Radio
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={false}
              />
            </Right>
          </ListItem>
          <ListItem selected={true}>
            <Left>
              <Text>Pay by Credit Card</Text>
            </Left>
            <Right>
              <Radio
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={true}
              />
            </Right>
          </ListItem>

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


//address phone no   date timing, orderstatus