import React, { Component } from 'react';
import { View,
    Text,
    FlatList,
    Alert } from 'react-native';
    
import { Image,
    ListItem } from 'react-native-elements';

export default class RestaurantScreen extends Component{
    state = {
        produtos:[],
        name: ""
    }

    componentDidMount(){
        this.setState({produtos: this.props.navigation.state.params.produtos});
        this.setState({name: this.props.navigation.state.params.name});
    }

    renderItem = ({item}) =>(
        <ListItem
            key={item.id}
            leftAvatar={{source: require("../../assets/teste.jpg")}}
            title={item.name}
            subtitle={"Comida boa!"}
            badge={{value: "R$ 0.99"}}
            onPress={_=>{this.renderAlert(item)}}
            bottomDivider
        />
    )

    renderAlert = item =>{
        Alert.alert(
            'Deseja mesmo fazer o pedido?',
            `${item.name} por R$ 0.99`,
            [
                {text: 'Confirmar', onPress: () => this.confirmBuy(item)},
                {text: 'Cancelar'}
            ]
        );
    }

    confirmBuy = item =>{
        console.log('Comprando...');
    }

    renderHeader = ()=>(
        <View style={{padding: 8, alignItems: 'center'}}>
            <Image 
            source={require("../../assets/teste.jpg")}
            style={{ width: 100, height: 100 }}
            />
            
            <Text style={{fontSize: 22}}> {this.state.name} </Text>
        </View>
    )

    render(){
        return(
            <FlatList
                ListHeaderComponent={this.renderHeader}
                data ={this.state.produtos}
                renderItem={this.renderItem}
                keyExtractor = {item => item.id}
            />
        );
    }
}