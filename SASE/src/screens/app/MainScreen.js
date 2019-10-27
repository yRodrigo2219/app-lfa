import React,{ Component } from "react";
import { View, FlatList } from "react-native";
import { Image,
    Button, 
    ListItem } from 'react-native-elements';

export default class MainScreen extends Component{
    state = {
        pedidos:[{status:"Processando pagamento",name:"Produto 1", id: "0"},]
    }

    componentDidMount(){

    }
    
    renderItem = ({item})=>(
        <ListItem
            key={item.id}
            leftAvatar={{source: require("../../assets/teste.jpg")}}
            title={item.name}
            subtitle={item.status}
            onPress={_=>{
                this.props.navigation.navigate('WaitScreen', {name: item.name, status: item.status})
            }}
            bottomDivider
            chevron
        />
    )

    render(){
        return(
            <View style={{padding: 8}}>
                <Button 
                    title='Selecionar restaurante'
                    onPress={_=>{
                        this.props.navigation.navigate('RestauranteScreen');
                    }}
                />

                <FlatList
                    ListHeaderComponent={this.renderHeader}
                    data ={this.state.pedidos}
                    renderItem={this.renderItem}
                    keyExtractor = {item => item.id}
                />
            </View>
        );
    }
}