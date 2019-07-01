import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Notifications extends Component {
  static navigationOptions = {
    title:"Hello",
  }; 
  render() {
    
    return (
      <Container>
        <Icon 
                                    style={{paddingLeft:10}} 
                                    onPress={()=>{this.props.navigation.openDrawer()}}
                                    name="md-menu" 
                                    size={30}
                            />


        <Header />
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={require('../../assets/images/logo.png')} />
                <Body>
                  <Text>Notification 1</Text>
                  <Text note>June 26, 2019</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={require('../../assets/images/2152.png')} style={{height: 200, width: 200, flex: 1}}/>
                <Text>
                 HELLO I AM USAMA M8
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}