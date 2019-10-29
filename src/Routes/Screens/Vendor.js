import React, { Component } from "react";
import {connect} from 'react-redux';
import {saveVendor} from '../../Store/actions/index';
import {Image,StyleSheet,TouchableOpacity,ImageBackground} from 'react-native';
import {
  Container,
  Content,
  Button,
  Left,
  Right,
  Body,
  Text,
 
  Thumbnail,
  View,
  Card,Icon,CardItem,
  Badge
} from "native-base";


//import { DrawerActions } from 'react-navigation';
import Icons from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";
import FIcon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import StarRating from 'react-native-star-rating';
class Vendor extends Component {
    
  
  static navigationOptions = {
    header:null
  };
  state={
    gotdata:[],
    starCount:3.5,
    visibleModal: null,
    Reviews:[

      {id:'1',name:'Hamza Hanif',review:'Best Vendor in Town for Desi Food',date:'31/08/2019'},
      {id:'2',name:'Bilal Zafar',review:'Food from this vendor was Not upto the mark',date:'31/08/2019'},
      {id:'3',name:'Talha Rafique',review:'This Vendor has got some taste in hands',date:'31/08/2019'},
      {id:'4',name:'Usama Bhatti',review:'Serving from this vendor is really Good',date:'31/08/2019'},
      {id:'5',name:'Asad Tariq',review:'hats off to this vendor',date:'31/08/2019'},
      {id:'6',name:'Asad Tariq',review:'hats off to this vendor',date:'31/08/2019'},
      {id:'7',name:'Asad Tariq',review:'hats off to this vendor',date:'31/08/2019'},

    ]
  }
  
  renderModalContent = (namefood,pricefood,descriptionfood,_idfood,vendorNamefood) => (
    <View style={styles.content}>

       <View style={{
         flexDirection:"row", justifyContent:"space-between",fontSize:30,
         paddingTop:5, paddingVertical:10,paddingHorizontal:'5%',backgroundColor:"#1c313a"
         
         }}>
         
           <View>
               <TouchableOpacity onPress={() => this.setState({ visibleModal: null })}>
                                 <Text style={{color:"white",fontFamily:"Brush Script Std,cursive"}}> 
                                   Cancel
                                   </Text>
                 </TouchableOpacity>
           </View>
          
         
           
           
           
         
         
         <View>
                <Text style={{color:'rgb(179, 0, 0)',fontFamily:"Brush Script Std,cursive"}}>Menu Item</Text>
         </View>
         
       
       
       </View>

       <View style={{paddingTop:"3%",backgroundColor:"white"}}>

         {
           this.state.Reviews? this.state.Reviews.map((rev)=>{
             return(
               <View key = {rev.id} style={{borderWidth:2,borderColor:'grey',overflow:"scroll"}} >
                     <View style ={{marginRight:60}} >
                          <Icons 
                                          style={{paddingLeft:10,paddingTop:5}} 
                                          name="md-contact" 
                                          size={30}
                                          color="black"
                                  /> 
                     </View>
                     <View style = {{marginRight:50}} >
                       <Text>{rev.review}</Text>
                     </View>
                            

               </View>
             )
           }):null
         }
       </View>      
       
    </View>
  );


  onViewClick = () => {
 //   this.props.navigator.push({
   //   screen: "awesome-places.Menu",
   //   title: "Menu"
   // });
   this.props.navigation.navigate('Menu');
  };

  onStarRatingPress(rating) {
  //  this.setState({
    //  starCount: rating
    //});
  }
  componentDidMount=()=>{
   
    fetch('http://192.168.140.2:8000/city')
    .then(res=> res.json())
    .then(gotdata=>this.setState({gotdata}));
   
    
    
//this.props.navigation.dispatch(DrawerActions.closeDrawer());
//this.props.navigation.dispatch(DrawerActions.openDrawer());
  };
  closeModal=()=>{

    this.setState({ visibleModal: null });
  
  }
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
      <Container style={{ width: "100%" }}>
        <ImageBackground source ={require('../../../images/phoneimg1.jpg')} style={{width:'100%',height:'100%'}}>

       
        <View style={{backgroundColor:"#fff3e0", height:57, flexDirection:"row",paddingTop:10 }}>
        <Icons 
                                    style={{paddingLeft:10,paddingTop:5}} 
                                    onPress={()=>{this.props.navigation.openDrawer()}}
                                    name="md-menu" 
                                    size={30}
                                    color='rgb(179, 0, 0)'
                            /> 
     <Text style={{paddingLeft:'25%',paddingTop:5, color:'rgb(179, 0, 0)',fontFamily:"Brush Script Std,cursive",fontWeight:"bold",fontSize:20}}>{this.props.cityname} </Text>

     <FIcon
      name="cart-plus" style={{ paddingLeft:'25%',color:'rgb(179, 0, 0)',paddingTop:3}} 
      size={30} 
      onPress={()=>{this.props.navigation.navigate('TripleJugarNavigation')}}
        />
        {button}



     </View>
        <Content padder style={{backgroundColor:'rgba(0,0,0,0.5)'}} >
          
          
   

            {
                                this.state.gotdata ? this.state.gotdata.map(print => {
                                if (print.name === this.props.cityname){
                                return (
                                <View key={print.key} >
                                    {print.data}
                                {print.vendorNameList.map((item, key) => {
                                return(
                                  <Card key={key}>
                                  <CardItem key={key} style={{backgroundColor:"#fff3e0"}}>
                                  <Left>
                                    <Thumbnail source={require('../../assets/images/logo.png')} />
                                    <Body>
                                      <Text style={{color:'rgb(179, 0, 0)'}}>{item}</Text>
                                      <Text note style={{color:'rgb(179, 0, 0)'}}>Grab A Bite</Text>
                                    </Body>
                                  </Left>
                                </CardItem>
                                    <CardItem cardBody>
                                    <Image source={require('../../assets/images/fm.jpg')} style={{height: 200, width: null, flex: 1}}/>
                                  </CardItem>
                                  <CardItem style={{backgroundColor:"#fff3e0"}}>
                             
                                  <Body>

                                    <View style={{display:'flex',justifyContent:'space-around',flexDirection:'row'}} >
                                                   <View>


                                                      <StarRating
                                                        disabled={true}
                                                        maxStars={5}
                                                        rating={this.state.starCount}
                                                        emptyStarColor= {'black'}
                                                        fullStarColor = {'rgb(179, 0, 0)'}
                                                        starSize = {20}
                                                        starStyle ={{marginTop:13}}


                                                        />
                                                                                          
                                                   </View>
                                  

                                                  <View style={{marginLeft:'10%'}} >
                                                           <Button transparent>
                                                                <Text style={{color:'rgb(179, 0, 0)',fontFamily: "Brush Script Std",fontWeight:"bold",fontSize:15}} onPress={()=>{this.onViewClick(); this.props.onVendorAdd(item);}}>View</Text>
                                                           </Button>
                                                  </View>

                                                  <View style={{marginLeft:'9%'}}>
                                                           <Button transparent onPress={()=>{this.setState({visibleModal: 'fancy'})}}>
                                                                <Text style={{color:'rgb(179, 0, 0)',fontFamily: "Brush Script Std",fontWeight:"bold",fontSize:15,marginLeft:'5%'}} > Reviews </Text>
                                                           </Button>
                                                  </View>
                                                  

                                    </View>
                  
                                  
                                  </Body>
                                
                                </CardItem>
                                </Card>               
                                )
                                })
                                }
                                </View>
                                )
                                } 
                                }) : null
                               
                            }




            
          
        </Content>
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
                                      style={{overflow:"scroll",width:"100%",paddingRight:"15%"}}
                                    >
                                      {this.renderModalContent()}
        </Modal>
        </ImageBackground>
      </Container>
    );
  }
}



const mapStateToProps=state=>{
  return {
    cityname:state.Main.city,
    count: state.Main.count
 
  };
};
const mapDispatchToProps=dispatch=>{
  return{
    onVendorAdd:(vendorName) =>dispatch(saveVendor(vendorName))

  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Vendor);

const styles = StyleSheet.create({

  content: {
    backgroundColor: 'white',
   
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    marginRight:"10%",

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

})