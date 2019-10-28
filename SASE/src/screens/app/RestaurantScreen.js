import React, { Component } from 'react';
import { View,
    Text,
    FlatList,
    Alert, 
    AsyncStorage} from 'react-native';
    
import { Image,
    ListItem } from 'react-native-elements';

export default class RestaurantScreen extends Component{
    state = {
        produtos:[],
        name: "",
        user: ""
    }

    async componentDidMount(){
        this.setState({produtos: this.props.navigation.state.params.produtos});
        this.setState({name: this.props.navigation.state.params.name});
        this.setState({user: await AsyncStorage.getItem('user')});
    }

    renderItem = ({item}) =>(
        <ListItem
            key={item.id}
            leftAvatar={{source: require("../../assets/teste.jpg")}}
            title={item.name}
            subtitle={item.desc}
            badge={{value: "R$ "+item.price}}
            onPress={_=>{this.renderAlert(item)}}
            bottomDivider
        />
    )

    renderAlert = item =>{
        Alert.alert(
            'Deseja mesmo fazer o pedido?',
            `${item.name} por R$ ${item.price}`,
            [
                {text: 'Confirmar', onPress: () => this.confirmBuy(item)},
                {text: 'Cancelar'}
            ]
        );
    }

    confirmBuy = item =>{
        fetch(`http://192.168.56.1:3000/pedido?login=${this.state.user}&pedido=${encodeURIComponent(JSON.stringify(item))}`,{
            method: 'post'
        }).then((res)=>{
            return res.json();
        }).then((res)=>{
            if(!res.ok){
                Alert.alert('Erro na compra', 'Tente novamente em instantes');
            }
        });
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