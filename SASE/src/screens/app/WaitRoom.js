import React,{ Component } from "react";
import {
    ProgressBarAndroid, 
    View,
    Text
    } from "react-native";

export default class WaitRoom extends Component{
    render(){
        return(
            <View>
                <ProgressBarAndroid styleAttr = "Horizontal" 
                color = "#00FF00"
                indeterminate = {false}
                progress = {0.25}
                />
                <Text>
                    Pedido feito
                </Text>

                <Text>
                    Preparando
                </Text>
                <Text>
                    Pronto
                </Text>
                <Text>
                    Pedido Finalizado
                </Text>
            </View>
        );
    }
}