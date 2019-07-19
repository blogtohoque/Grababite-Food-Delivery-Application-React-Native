import React, { Component } from "react";
import Hello from './t';
import {Image} from 'react-native';
import {
    Container,
    Header,
   Body,
   Content,
   Text,
   Button
  } from "native-base";
import {DrawerItems} from 'react-navigation';
export default class customDrawerContentComponent extends Component
{
    
    constructor(props) {
        super(props);
        
      }
    
    render(){
        return(

            <Container>
            <Header style={{
              height:200,
              backgroundColor:'#1c313a',
              
              }}>
              <Body>
                <Image
                style={{
                  height:150,
                  width:150,
                  borderRadius:75,
                  alignSelf:"center",
                  opacity:0.7
                  
                }}
                source={require('../src/assets/images/logo.png')}
                />
                
        
              </Body>
            </Header>
            <Content style={{   backgroundColor:'white', opacity:0.7
           }}>
              <DrawerItems {...this.props}  /> 
        
        
           {/*button*/}
           
           
         <Hello {...this.props}/>
           
           
           
           
           
           
           
           
            </Content>
          </Container>
        )
    }
}