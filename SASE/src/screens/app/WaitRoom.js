import React,{ Component } from "react";
import {
    ProgressBarAndroid, 
    View,
    Text
    } from "react-native";

export default class WaitRoom extends Component{
    state = {
        name: "",
        status: 0
    }

    componentDidMount(){
        this.setState({status: this.props.navigation.state.params.status});
        this.setState({name: this.props.navigation.state.params.name});
    }

    render(){
        return(
            <View>
                <ProgressBarAndroid styleAttr = "Horizontal" 
                    color = "#00FF00"
                    indeterminate = {false}
                    progress = {0.25}
                />
                
                <View style={{flexDirection: 'row'}}>
                    <Text style={{marginRight: 25}}>
                        Pedido feito
                    </Text>

                    <Text style={{marginRight: 25}}>
                        Preparando
                    </Text>
                    <Text style={{marginRight: 25}}>
                        Pronto
                    </Text>
                    <Text style={{marginRight: 25}}>
                        Pedido Finalizado
                    </Text>
                </View>

            </View>
        );
    }
}