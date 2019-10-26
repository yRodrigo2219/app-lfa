import React, { Component } from 'react';
import { View,
    Text,
    FlatList } from 'react-native';
import { Button,
    Image } from 'react-native-elements';

import Gstyle from '../GlobalStyle'

export default class MainScreen extends Component{
    state = {
        produtos:[
            {id :1,name:"Produto 1"},
            {id :2,name:"Produto 2"},
            {id :3,name:"Produto 3"},
            {id :4,name:"Produto 4"},
            {id :5,name:"Produto 5"},
            {id :6,name:"Produto 6"},
            {id :7,name:"Produto 7"},
            {id :8,name:"Produto 8"},
            {id :9,name:"Produto 9"},
            {id :10,name:"Produto 10"},
            {id :11,name:"Produto 11"},
            {id :12,name:"Produto 12"},
            {id :13,name:"Produto 13"},
        ],
    }

    renderItem = ({item})=>(
        <View>
            <Button
                title = {item.name}
            />
        </View>
    )
    render(){
        return(
            <View>
                <Image
                    source={{uri:"./assets/teste.jpg"}}
                    style={{ width: 60, height: 60 }}
                />
                <FlatList style = {[Gstyle.buttonsRestProd]}
                data ={this.state.produtos}
                renderItem={this.renderItem}
                keyExtractor = {item => item.id}
                />
            </View>
        );
    }
}