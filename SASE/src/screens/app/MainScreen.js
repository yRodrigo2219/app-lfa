import React,{ Component } from "react";
import { View, FlatList, AsyncStorage } from "react-native";
import { Image,
    Button, 
    ListItem } from 'react-native-elements';

export default class MainScreen extends Component{
    state = {
        user: "",
        pedidos: []
    }

    getPedidos = _=>{
        fetch(`http://192.168.56.1:3000/?login=${this.state.user}`,{
            method: 'get'
        }).then((res)=>{
            return res.json();
        }).then((res)=>{
            this.setState({pedidos: res});
        });
    }

    async componentDidMount(){
        this.setState({user: await AsyncStorage.getItem('user')});
        this.getPedidos();
    }
    
    renderItem = ({item})=>(
        <ListItem
            key={item.id}
            leftAvatar={{source: require("../../assets/teste.jpg")}}
            title={item.name}
            subtitle={item.status}
            onPress={_=>{
                this.props.navigation.navigate('WaitScreen', {item: item})
            }}
            bottomDivider
            chevron
        />
    )

    logout = async _=>{
        AsyncStorage.setItem('userToken', 'false');
        this.props.navigation.navigate('AuthLoading');
    }

    renderHeader = _=>(
        <View style={{flexDirection:'row', width:'100%'}}>
            <Button
                containerStyle={{width:'5%'}}
                buttonStyle={{backgroundColor:'red'}}
                title='!'
                titleStyle={{fontWeight: 'bold'}}
                onPress={this.logout}
            />

            <Button
                containerStyle={{width:'85%'}}
                title='Selecionar restaurante'
                onPress={_=>{
                    this.props.navigation.navigate('RestauranteScreen');
                }}
            />

            <Button
                containerStyle={{width:'10%'}}
                buttonStyle={{backgroundColor:'darkblue'}}
                title='⟳'
                titleStyle={{fontWeight: 'bold'}}
                onPress={this.getPedidos}
            />
        </View>
    )

    render(){
        return(
            <FlatList
                    ListHeaderComponent={this.renderHeader}
                    data ={this.state.pedidos}
                    renderItem={this.renderItem}
                    keyExtractor = {item => item.id}
            />
        );
    }
}