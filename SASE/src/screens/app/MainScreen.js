import React, { Component } from 'react';
import { View,
    Text,
    FlatList } from 'react-native';
import { Button } from 'react-native-elements';

import Gstyle from '../GlobalStyle'

export default class MainScreen extends Component{
    state = {
        restaurantes:[
            {id :1,name:"restaurante 1"},
            {id :2,name:"restaurante 2"},
            {id :3,name:"restaurante 3"},
            {id :4,name:"restaurante 4"},
            {id :5,name:"restaurante 5"},
            {id :6,name:"restaurante 6"},
            {id :7,name:"restaurante 7"},
            {id :8,name:"restaurante 8"},
            {id :9,name:"restaurante 9"},
            {id :10,name:"restaurante 10"},
            {id :11,name:"restaurante 11"},
            {id :12,name:"restaurante 12"},
            {id :13,name:"restaurante 13"},
        ],
    }

    renderItem = ({item})=>(
        <Button
        title = {item.name}
        />
    )
    render(){
        return(
            <View style ={[Gstyle.mainScreen]}>
                <Text>
                    Selecione o Restaurante
                </Text>
                <FlatList style = {[Gstyle.buttonsMainScreen]}
                    data ={this.state.restaurantes}
                    renderItem={this.renderItem}
                    keyExtractor = {item => item.id}
                />
            </View>
        );
    }
}