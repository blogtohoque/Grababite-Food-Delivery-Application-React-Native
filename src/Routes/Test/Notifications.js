import React, { Component } from 'react'
import { Text, View ,StyleSheet,Badge} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import {connect} from 'react-redux';


import FIcon from 'react-native-vector-icons/FontAwesome';


 class Notifications extends Component {



    state = {
        gotdata:[
        
            { id: 0, name: 'Zain Hassan', price:'300',OrderStatus:'pending',date:'2019-07-05',time:'02:17:54 AM' },
            { id: 1, name: 'Bilal Zafar', price:'180',OrderStatus:'processing',date:'2019-02-05',time:'07:17:54 AM' },
            { id: 2, name: 'Abdullah Baig', price:'100',OrderStatus:'pending',date:'2019-01-01',time:'10:17:54 AM' },
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
               

               <View style={{backgroundColor:"#fff3e0", height:50, flexDirection:"row",paddingTop:10 }}>
                                  <Icons 
                                                              style={{paddingLeft:10}} 
                                                              onPress={()=>{this.props.navigation.goBack()}}
                                                              name="md-arrow-back" 
                                                              size={30}
                                                              color='rgb(179, 0, 0)'
                                                      /> 
                              <Text style={{paddingLeft:'25%',paddingTop:5, color:'rgb(179, 0, 0)',fontFamily:"Brush Script Std,cursive",fontWeight:"bold",fontSize:20}}>Notifications</Text>

                              <FIcon
                                name="cart-plus" style={{ paddingLeft:220,color:'rgb(179, 0, 0)',paddingTop:3}} 
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
export default connect(mapStateToProps,null)(Notifications);

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
            paddingVertical:3
            
    }

});
  
