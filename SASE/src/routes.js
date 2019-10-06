import { createStackNavigator, 
    createAppContainer, 
    createSwitchNavigator,
    createMaterialTopTabNavigator } from 'react-navigation';

import Login from "./screens/Login";

const AuthNavigator = createStackNavigator({
    LoginScreen: Login
});

export default createAppContainer(AuthNavigator);
