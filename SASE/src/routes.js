import { createAppContainer, 
    createSwitchNavigator } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import Login from "./screens/auth/LoginScreen";
import Signup from "./screens/auth/SignupScreen";
import AuthLoading from "./screens/auth/AuthScreen";

import Main from "./screens/app/MainScreen";
import Rest from "./screens/app/RestaurantScreen";
import Wait from "./screens/app/WaitRoom";

const AuthNavigator = createStackNavigator({
    SignupScreen:{
        screen: Signup
    },
    LoginScreen:{
        screen: Login
    },
    
    
});

const AppNavigator = createStackNavigator({
    RestScreen:{
        screen: Rest
    },
    MainScreen:{
        screen: Main
    },
    WaitScreen:{
        screen: Wait
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
