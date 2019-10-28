import React, { Component } from 'react';
import { View,
    TextInput,
    AsyncStorage } from 'react-native';
import {
    Button
    } from 'react-native-elements';

import Gstyle from '../GlobalStyle'

export default class SignupScreen extends Component{

    state = {
        name: "",
        login: "",
        senha: "",
        cpf: "",
        phone: "",
        pedidos: []
    }

    signup = _=>{
        fetch(`http://192.168.56.1:3000/signup`,{
            method: 'post',
            headers:{
                "Content-Type": 'application/json'
            },
            body:JSON.stringify(this.state)
        }).then((res)=>{
            return res.json();
        }).then(async(res)=>{
            if(res){
                await AsyncStorage.setItem('user', this.state.login);
                this.props.navigation.navigate('App');
            }else{
                alert(res);
            }
        });
    }

    render(){
        return(
            <View>
                <TextInput style = {[Gstyle.inputSignUpScreen]}
                    placeholder = 'Nome Completo'
                    value = {this.state.name}
                    onChangeText = {(v)=>this.setState({name:v})}
                />
                <TextInput style = {[Gstyle.inputSignUpScreen]}
                    placeholder = 'E-mail'
                    value = {this.state.login}
                    onChangeText = {(v)=>this.setState({login:v})}
                />
                <TextInput style = {[Gstyle.inputSignUpScreen]}
                    placeholder = 'Senha'
                    value = {this.state.senha}
                    onChangeText = {(v)=>this.setState({senha:v})}
                    secureTextEntry = {true}
                />
                <TextInput style = {[Gstyle.inputSignUpScreen]}
                    placeholder = 'CPF'
                    value = {this.state.cpf}
                    onChangeText = {(v)=>this.setState({cpf:v})}
                />
                <TextInput style = {[Gstyle.inputSignUpScreen]}
                    placeholder = 'Telefone'
                    value = {this.state.phone}
                    onChangeText = {(v)=>this.setState({phone:v})}
                />

                <Button style = {[Gstyle.buttonSignUpScreen]}
                    type = 'solid'
                    title = 'Cadastrar'
                    onPress = {this.signup}
                />
            </View>
        );
    }
}