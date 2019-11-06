import React,{ Component } from "react";
import {
    ProgressBarAndroid, 
    View,
    Text
    } from "react-native";

import { Image,
    ListItem } from 'react-native-elements';

export default class WaitRoom extends Component{
    state = {
        item: {},
        progress: 0
    }

    timer = setInterval(()=>{if(this.state.progress < 1){
        this.setState({progress: this.state.progress+0.01});
    }},500);    

    componentDidMount(){
        this.setState({item: this.props.navigation.state.params.item});
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render(){
        return(
            <View>
                <ListItem
                    key={this.state.item.id}
                    leftAvatar={{source: require("../../assets/teste.jpg")}}
                    title={this.state.item.name}
                    subtitle={this.state.item.desc}
                    bottomDivider
                />


                <ProgressBarAndroid styleAttr = "Horizontal" 
                    color = "#00FF00"
                    indeterminate = {false}
                    progress = {this.state.progress}
                    style={{}}
                />

                <View style={{flexDirection: 'row'}}>
                    <Text style={{marginLeft: 10 ,marginRight: 60}}>
                        Pagamento feito
                    </Text>

                    <Text style={{marginRight: 60}}>
                        Preparando
                    </Text>
                    <Text style={{}}>
                        Pronto
                    </Text>
                </View>

            </View>
        );
    }
}