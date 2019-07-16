import React, { Component } from 'react'
import { Text, View ,StyleSheet,Badge} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import {connect} from 'react-redux';


import FIcon from 'react-native-vector-icons/FontAwesome';


 class OrderHistory extends Component {



    state = {
        gotdata:[
        
            { id: 0, name: 'Zain Hassan', price:'300',OrderStatus:'pending',date:'2019-07-05',time:'02:17:54 AM' },
            { id: 1, name: 'Bilal Zafar', price:'180',OrderStatus:'processing',date:'2019-02-05',time:'07:17:54 AM' },
            { id: 2, name: 'Abdullah Baig', price:'100',OrderStatus:'pending',date:'2019-01-01',time:'10:17:54 AM' },
            { id: 3, name: 'Bhatti', price:'500',OrderStatus:'pending',date:'2019-07-05',time:'02:17:54 AM' },
            { id: 4, name: 'Ali irfan', price:'180',OrderStatus:'processing',date:'2019-02-05',time:'07:17:54 AM' },
            { id: 5, name: 'Saad Ahmed', price:'150',OrderStatus:'pending',date:'2019-01-01',time:'10:17:54 AM' },
            { id: 6, name: 'Hamza', price:'500',OrderStatus:'pending',date:'2019-07-05',time:'02:17:54 AM' },
            { id: 7, name: 'Talha', price:'180',OrderStatus:'processing',date:'2019-02-05',time:'07:17:54 AM' },
            { id: 8, name: 'Arham', price:'150',OrderStatus:'pending',date:'2019-01-01',time:'10:17:54 AM' },
        ]
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
            <View>
               

               <View style={{backgroundColor:"#1c313a", height:50, flexDirection:"row",paddingTop:10 }}>
                                  <Icons 
                                                              style={{paddingLeft:10}} 
                                                              onPress={()=>{this.props.navigation.goBack()}}
                                                              name="md-arrow-back" 
                                                              size={30}
                                                              color="white"
                                                      /> 
                              <Text style={{paddingLeft:210,paddingTop:5, color:'white',fontFamily:"century-gothic",fontWeight:"bold",fontSize:20}}>My Orders</Text>

                              <FIcon
                                name="cart-plus" style={{ paddingLeft:220,color:'white',paddingTop:3}} 
                                size={30} 
                                onPress={()=>{this.props.navigation.navigate('TripleJugarNavigation')}}
                                  />
                                
                                    {button}
                    </View>


             <TouchableWithoutFeedback onPress={()=>{this.props.navigation.navigate('OrderDetails')}} >

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
                                                                <Text style={{fontSize:12}} >Order {data.id}</Text>
                                                                <Text style={{fontSize:12}} >{data.name}</Text>
                                                                <Text style={{fontSize:12}} >Amount Rs {data.price} </Text>
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
            </TouchableWithoutFeedback>

                  
            </View>
        )
    }
}


const mapStateToProps=state=>{
  return {
    count: state.Main.count
 
  };
};
export default connect(mapStateToProps,null)(OrderHistory);;

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
            fontFamily:"century-gothic",
            marginTop:5,
            paddingVertical:3
            
    }

});
  
