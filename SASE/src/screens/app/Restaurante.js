import React, { Component } from 'react';

import { View,
    Text,
    FlatList } from 'react-native';

import { ListItem } from 'react-native-elements';

export default class Restaurante extends Component{
    state = {
        restaurantes:[
            {id :"1",name:"restaurante 1"},
            {id :"2",name:"restaurante 2"},
            {id :"3",name:"restaurante 3"},
            {id :"4",name:"restaurante 4"},
            {id :"5",name:"restaurante 5"},
            {id :"6",name:"restaurante 6"},
            {id :"7",name:"restaurante 7"},
            {id :"8",name:"restaurante 8"},
            {id :"9",name:"restaurante 9"},
            {id :"10",name:"restaurante 10"},
            {id :"11",name:"restaurante 11"},
            {id :"12",name:"restaurante 12"},
            {id :"13",name:"restaurante 13"},
        ],
    }

    renderItem = ({item})=>(
        <ListItem
            key={item.id}
            leftAvatar={{source: require("../../assets/teste.jpg")}}
            title={item.name}
            subtitle={"Comida boa!"}
            onPress={_=>{
                this.props.navigation.navigate('RestScreen', {
                    name: item.name,
                    produtos: [
                    {id :"1",name:"Produto 1"},
                    {id :"2",name:"Produto 2"},
                    {id :"3",name:"Produto 3"},
                    {id :"4",name:"Produto 4"},
                    {id :"5",name:"Produto 5"},
                    {id :"6",name:"Produto 6"},
                    {id :"7",name:"Produto 7"},
                    {id :"8",name:"Produto 8"},
                    {id :"9",name:"Produto 9"},
                    {id :"10",name:"Produto 10"},
                    {id :"11",name:"Produto 11"},
                    {id :"12",name:"Produto 12"},
                    {id :"13",name:"Produto 13"},
                ]})
            }}
            bottomDivider
            chevron
        />
    )

    renderHeader = () => (
        <View style={{padding: 8, alignItems: 'center'}}>
            <Text style={{fontSize: 22}}> Escolha o restaurante: </Text>
        </View>
    )

    render(){
        return(
            <FlatList
                ListHeaderComponent={this.renderHeader}
                data ={this.state.restaurantes}
                renderItem={this.renderItem}
                keyExtractor = {item => item.id}
            />
        );
    }
}