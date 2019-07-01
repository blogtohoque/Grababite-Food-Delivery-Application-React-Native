import React, { Component } from 'react';
import { FlatList, Text, StyleSheet,View } from 'react-native';
import {ListItem} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const rows = [
  {id: 0, text: 'View'},
  {id: 1, text: 'Text'},
  {id: 2, text: 'Image'},
  {id: 3, text: 'ScrollView'},
  {id: 4, text: 'ListView'},
]
const extractKey = ({id}) => id;

export default class OrderHistory extends Component {
  static navigationOptions = {
    title:"Hello",
  }; 
  renderItem = ({item}) => {
    return (
      <View style={styles.row}>
        
        <ListItem>
          <Text> {item.text}</Text>
        </ListItem>
      </View>
    )
  }
  
  render() {
    return (
      <View> 
        
                            <Icon 
                                    style={{paddingLeft:10}} 
                                    onPress={()=>{this.props.navigation.openDrawer()}}
                                    name="md-menu" 
                                    size={30}
                            />
        


        <View><Text>hello</Text></View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
})
