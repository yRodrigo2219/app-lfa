import React, { Component } from 'react';
import { View,
    TextInput} from 'react-native';
import {
    Button
    } from 'react-native-elements';

import Gstyle from '../GlobalStyle'

export default class SignupScreen extends Component{

    state = {
        name: "",
        email: "",
        cpf: "",
        phone: ""
    }
    render(){
        return(
            <View>
                <TextInput style = {[Gstyle.inputSignUpScreen]}
                    placeholder = 'Nome Completo'
                    value = {this.state.name}
                    onChange = {(v)=>this.setState({name:v})}
                />
                <TextInput style = {[Gstyle.inputSignUpScreen]}
                    placeholder = 'E-mail'
                    value = {this.state.email}
                    onChange = {(v)=>this.setState({email:v})}
                />
                <TextInput style = {[Gstyle.inputSignUpScreen]}
                    placeholder = 'CPF'
                    value = {this.state.cpf}
                    onChange = {(v)=>this.setState({cpf:v})}
                />
                <TextInput style = {[Gstyle.inputSignUpScreen]}
                    placeholder = 'Telefone'
                    value = {this.state.phone}
                    onChange = {(v)=>this.setState({phone:v})}
                />
                <Button style = {[Gstyle.buttonSignUpScreen]}
                    type = 'solid'
                    title = 'Cadastrar'
                />
            </View>
        );
    }
}