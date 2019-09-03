import React, { Component } from 'react'
import { Text, View ,StyleSheet } from 'react-native';
import {Container,Badge} from 'native-base';


import Icons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';


import FIcon from 'react-native-vector-icons/FontAwesome';

class OrderDetails extends Component {

    state = {
       
              
                  gotdata:
                  [ { id: 0, name: 'Zain Hassan', price:'300',OrderStatus:'pending',date:'2019-07-05',time:'02:17:54 AM',quantity:'2' ,vendorname:'ali', foodName:"Chicken Qorma" ,address:"House #36 Street 15-A Sector A Phase 4 Bahria Town",number:"03335848478",email:"ahsan@gmail.com" }],

                  
        
         
           }

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
                
            <Container>
                         
                         <View style={{backgroundColor:"#1c313a", height:50, flexDirection:"row",paddingTop:10 }}>
                                  <Icons 
                                                              style={{paddingLeft:10}} 
                                                              onPress={()=>{this.props.navigation.goBack()}}
                                                              name="md-arrow-back" 
                                                              size={30}
                                                              color="white"
                                                      /> 
                              <Text style={{paddingLeft:210,paddingTop:5, color:'white',fontFamily:"Brush Script Std,cursive",fontWeight:"bold",fontSize:20}}>Order Detail</Text>

                              <FIcon
                                name="cart-plus" style={{ paddingLeft:220,color:'white',paddingTop:3}} 
                                size={30} 
                                onPress={()=>{this.props.navigation.navigate('TripleJugarNavigation')}}
                                  />
                                
                                    {button}
                    </View>       


                           

                            

<View>
               {
                   this.state.gotdata.map((data)=>
               
                       <View style={Styles.mainView}  key={data.id} > 


                               <View >
                                   <View style={{flexDirection:"row"}}  >
                                          <View>
                                              <Icons 
                                                       style={{paddingTop:1}} 
                                                       name="md-clock" 
                                                       size={45}
                                                       color="orange"
                                               />
                                          </View>

                                          <View style={{marginLeft:8}} >
                                               <Text style={{fontSize:12}} > Amount {data.price}&nbsp;({data.quantity}&nbsp;items)</Text>
                                               <Text style={{fontSize:12}} > Status {data.OrderStatus} </Text>
                                          </View> 
                                  </View>     
                               </View>

                               <View >
                                          <Text style={{fontSize:12}} > {data.date} </Text>
                                          <Text style={{fontSize:12}} > {data.time} </Text>
                               </View>
                       </View>
                 
                       
                       )
               
               }      
</View>

<View style = {Styles.List1} >
<Text style=  {{fontSize:12}} >Items List</Text>
</View>

<View style={Styles.List2}>

    <View style={{flexDirection:"row",justifyContent:"space-between"}} >
             <Text style=  {{fontSize:12,fontWeight:'bold'}} > Food Name </Text>
             <Text style=  {{fontSize:12,fontWeight:'bold'}} > Quantity </Text>
             <Text style=  {{fontSize:12,fontWeight:'bold'}} > Price </Text>  
             <Text style=  {{fontSize:12,fontWeight:'bold'}} > Vendor Name </Text>  
    </View>
 
  {
      this.state.gotdata.map((data)=>
  
       <View key = {data.id} style={{flexDirection:"row",justifyContent:"space-between"}} >
           
            <Text style=  {{fontSize:12}} > {data.foodName}</Text>
            <Text style=  {{fontSize:12,marginRight:38}} > {data.quantity }</Text>
            <Text style=  {{fontSize:12,marginRight:38}} > {data.price }</Text>
            <Text style=  {{fontSize:12,marginRight:33}} > {data.vendorname }</Text>                            
 
       </View>
 

      )
  } 



</View>

<View style ={Styles.List3} >
          <Text style={{fontSize:10}} >Customer Details</Text>    
          <View>
              {
                  this.state.gotdata.map((data)=>
                  <View key = {data.id}>

                            <Text style ={{fontSize:12,fontWeight:'bold'}} > {data.name} </Text>
                            <Text style ={{fontSize:10}}>Delivery Address</Text>
                            <Text style ={{fontSize:12,fontWeight:'bold'}} > {data.address} </Text>

                            <View
                    style={{marginTop:6,
                        borderBottomColor: '#9ca2ad',
                        borderBottomWidth: 1,
                        backgroundColor:"white",
                        opacity:0.8
                    }}
                    />
                    <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10,marginBottom:10}}>
                                <Text style={{fontSize:10}} >
                                    Contact Number
                                </Text>

                                <Text style={{fontSize:10}} >
                                    {data.number}
                                </Text>

                    </View>

                    <View
                    style={{marginTop:6,
                        borderBottomColor: '#9ca2ad',
                        borderBottomWidth: 1,
                        backgroundColor:"white",
                        opacity:0.8
                    }}
                    />

                    <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10,marginBottom:10}}>
                                <Text style={{fontSize:10}} >
                                    Email
                                </Text>

                                <Text style={{fontSize:10}} >
                                    {data.email}
                                </Text>

                    </View>

                    <View
                    style={{marginTop:6,
                        borderBottomColor: '#9ca2ad',
                        borderBottomWidth: 1,
                        backgroundColor:"white",
                        opacity:0.8
                    }}
                    />

                    <View style={{marginTop:10,marginBottom:10}}>
                                <Text style={{fontSize:10}} >
                                    Order Details
                                </Text>
                    </View>

                    <View
                    style={{marginTop:6,
                        borderBottomColor: '#9ca2ad',
                        borderBottomWidth: 1,
                        backgroundColor:"white",
                        opacity:0.8
                    }}
                    />
                       <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10,marginBottom:10}}>
                                
                                <View>
                                        <Text style={{fontSize:10}} > Subtotal </Text>
                                        <Text style={{fontSize:10}} > Delivery Charges </Text>
                                        <Text style={{fontSize:10}} > Grand Total </Text>
                                        
                                </View>

                               <View>
                                        <Text style={{fontSize:10}} > Rs 120 </Text>
                                        <Text style={{fontSize:10}} > Rs 100 </Text>
                                        <Text style={{fontSize:10}} > Rs 220 </Text>
                               </View> 
                                   
                  </View>

                  </View>
                  )
              }


                    
          </View>   


 
</View> 
             



</Container>     
         


        )
    }
}


const mapStateToProps=state=>{
    return {
      count: state.Main.count
   
    };
  };
  export default connect(mapStateToProps,null)(OrderDetails);;
const Styles = StyleSheet.create({
    
    mainView:{
            flexDirection:"row",
            justifyContent:"space-between",
            paddingHorizontal:10,
            backgroundColor: 'white',
            borderRadius:5,
            marginHorizontal:10,
            color:'white',
            opacity:0.8,
            fontFamily:"Brush Script Std,cursive",
            marginTop:5,
            paddingVertical:6
            
    },

    List1:{
            marginTop:5,
            padding:10,
            opacity:0.8,
            borderWidth:1,
            borderRadius:5,
            borderColor:'#9ca2ad',
            backgroundColor:"white",
            fontFamily:"Brush Script Std,cursive",
            
    },

    List2:{
        marginTop:1,
        padding:10,
        borderWidth:1,
        borderRadius:5,
        borderColor:'#9ca2ad',
        backgroundColor:"white",
        fontFamily:"Brush Script Std,cursive",
    },
    List3:{
        marginTop:2,
        padding:10,
        borderWidth:1,
        borderRadius:5,
        borderColor:'#9ca2ad',
        backgroundColor:"white",
        fontFamily:"Brush Script Std,cursive",
    }
  

});