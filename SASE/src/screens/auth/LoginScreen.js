import React, { Component } from 'react';
import { View,
    Text,
    TextInput,
    Alert,
    AsyncStorage
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
        check: true
    }

    login = async _=>{
        fetch(`http://192.168.56.1:3000/login?login=${this.state.login}&senha=${this.state.senha}`,{
            method: 'post'
        }).then((res)=>{
            return res.json();
        }).then(async(res)=>{
            if(res){
                await AsyncStorage.setItem('user', this.state.login);
                if(this.state.check){
                    await AsyncStorage.setItem('userToken', 'true');
                }
                this.props.navigation.navigate('App');
            }else{
                this.props.navigation.navigate('AuthLoading');
            }
        });
    }

    render(){
        return(
            <View style={{padding: 20, paddingTop: "30%"}}>
                <TextInput style = {[Gstyle.inputTextLoginScreen]}
                    placeholder = "Email"
                    onChangeText = {(v)=>this.setState({login: v})}
                    value = {this.state.login}
                />
                <TextInput style = {[Gstyle.inputTextLoginScreen]}
                    placeholder = "Senha"
                    onChangeText  = {(v)=>this.setState({senha:v})}
                    value = {this.state.senha}
                    secureTextEntry = {true}
                />
                <CheckBox style = {[Gstyle.checkBoxLoginScreen]}
                    title = 'Continuar Conectado'
                    checked = {this.state.check}
                    onPress = {()=>this.setState({check: !this.state.check})}
                />
                
                <Button style = {[Gstyle.buttonsLoginScreen]}
                    type = 'solid'
                    title = 'Login'
                    onPress = {this.login}
                />
                <Button style = {[Gstyle.buttonsLoginScreen]}
                    type = 'clear'
                    title = 'Esqueceu sua senha?'
                    onPress = {()=>Alert.alert('Recuperação de senha', 'Temporariamente indisponivel!')}
                />

                <Button style = {[Gstyle.buttonsLoginScreen]}
                    type = 'clear'
                    title = 'Cadastre-se'
                    onPress = {()=>this.props.navigation.navigate('SignupScreen')}
                />
            </View>
        );
    }
}