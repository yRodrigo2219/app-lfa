import { createAppContainer, 
    createSwitchNavigator } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import Login from "./screens/auth/LoginScreen";
import Signup from "./screens/auth/SignupScreen";
import AuthLoading from "./screens/auth/AuthScreen";

import Main from "./screens/app/MainScreen";
import Rest from "./screens/app/RestaurantScreen";
import Wait from "./screens/app/WaitRoom";
import Restaurante from "./screens/app/Restaurante";

const AuthNavigator = createStackNavigator({
    SignupScreen:{
        screen: Signup
    },
    LoginScreen:{
        screen: Login
    },
});

const AppNavigator = createStackNavigator({
    MainScreen:{
        screen: Main
    },
    RestauranteScreen:{
        screen: Restaurante
    },
    WaitScreen:{
        screen: Wait
    },
    RestScreen:{
        screen: Rest
    },
});

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        App: AppNavigator,
        Auth: AuthNavigator
    },{
        initialRouteName: 'App'
    }
));
