import React, { Component } from 'react';

import { View,
    Text,
    FlatList } from 'react-native';

import { ListItem } from 'react-native-elements';

export default class Restaurante extends Component{
    state = {
        restaurantes: []
    }

    componentDidMount(){
        fetch(`http://192.168.56.1:3000/rest`,{
            method: 'get'
        }).then((res)=>{
            return res.json();
        }).then((res)=>{
            this.setState({restaurantes: res})
        });
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
                    produtos: item.menu
                })
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