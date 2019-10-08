import { createAppContainer, 
    createSwitchNavigator } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import Login from "./screens/auth/LoginScreen";
import Signup from "./screens/auth/SignupScreen";
import AuthLoading from "./screens/auth/AuthScreen";

import Main from "./screens/app/MainScreen";

const AuthNavigator = createStackNavigator({
    LoginScreen:{
        screen: Login
    },
    SignupScreen:{
        screen: Signup
    }
});

const AppNavigator = createStackNavigator({
    MainScreen:{
        screen: Main
    }
});

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        App: AppNavigator,
        Auth: AuthNavigator
    },{
        initialRouteName: 'AuthLoading'
    }
));
