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

    timer = setInterval(()=>{this.getPedidos()}, 1000);

    async componentDidMount(){
        this.setState({user: await AsyncStorage.getItem('user')});
        this.getPedidos();
    }

    componentWillUnmount(){
        clearInterval(this.timer);
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
        <View style={{flexDirection:'row', width:'100%', marginTop: 10, marginBottom: 10}}>
            <Button
                containerStyle={{width:'5%', marginLeft: '2%'}}
                buttonStyle={{backgroundColor:'red'}}
                title='!'
                titleStyle={{fontWeight: 'bold'}}
                onPress={this.logout}
            />

            <Button
                containerStyle={{width:'75%', marginLeft:'4%', marginRight:'4%'}}
                title='Selecionar restaurante'
                onPress={_=>{
                    this.props.navigation.navigate('RestauranteScreen');
                }}
            />

            <Button
                containerStyle={{width:'8%'}}
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