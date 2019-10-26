import React, { Component } from 'react';
import { View,
    Text,
    TextInput
    } from 'react-native';
import {
    CheckBox,
    Button
    }from 'react-native-elements';

import Gstyle from '../GlobalStyle'

export default class LoginScreen extends Component{
    state = {
        login: "",
        senha: "",
        check: false
    }

    render(){
        return(
            <View>
                <TextInput style = {[Gstyle.inputTextLoginScreen]}
                    placeholder = "Usuário"
                    onChange = {(v)=>this.setState({login:v})}
                    value = {this.state.login}
                />
                <TextInput style = {[Gstyle.inputTextLoginScreen]}
                    placeholder = "Senha"
                    onChange = {(v)=>this.setState({senha:v})}
                    value = {this.state.senha}
                    secureTextEntry = {true}
                />
                <CheckBox style = {[Gstyle.checkBoxLoginScreen]}
                    title = 'Continuar Conectado'
                    value = {this.state.check}
                    onChange = {()=>this.setState({check:!this.state.check})}
                />
                
                <Button style = {[Gstyle.buttonsLoginScreen]}
                    type = 'solid'
                    title = 'Login'
                />
                <Button style = {[Gstyle.buttonsLoginScreen]}
                    type = 'clear'
                    title = 'Esqueceu sua senha?'
                />
                <Button style = {[Gstyle.buttonsLoginScreen]}
                    type = 'clear'
                    title = 'Cadastre-se'
                />
            </View>
        );
    }
}