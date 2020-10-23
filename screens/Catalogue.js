import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import {ListItem,Avatar} from 'react-native-elements';

const list = [
    {
    name: 'Shirt',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Cotton Shirts'
  },
  {
    name: 'Pant',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Pants'
  },
]

keyExtractor = (item, index) => index.toString()

renderItem = ({ item }) => {
    return(
  <ListItem bottomDivider >
    <Avatar title={item.name[0]} source={item.avatar_url && { uri: item.avatar_url }}/>
    <ListItem.Content>
      <ListItem.Title>{item.name}</ListItem.Title>
      <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
    </ListItem.Content>
    <ListItem.Chevron />
  </ListItem>
)}

export default class Catalogue extends React.Component{

    constructor(){
        super()
    }

    render(){
        return(
            <View style={{backgroundColor:'black'}}>
                <FlatList
      keyExtractor={this.keyExtractor}
      data={list}
      renderItem={this.renderItem}
    />
            </View>
        )
    }
}