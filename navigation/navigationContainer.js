import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../screens/Login/LoginScreen/LoginScreen"
import RegisterScreen from "../screens/Login/Register/RegisterScreen"
import Home from "../screens/Home/Home"
import SetYouUp from '../screens/Login/SetYouUp/SetYouUp';
import NameScreen from '../screens/Login/UserName/NameScreen';
import HomeScreen from '../screens/Home/HomeScreen/HomeScreen';
import TabsNavigation from './tabsnavigation/Tabsnavigation';
import MenuScreen from '../screens/MenuScreen/MenuScreen'

const Stack = createNativeStackNavigator();

export const MyStack = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="SetYouUp" component={SetYouUp} />
                <Stack.Screen name="NameScreen" component={NameScreen} />
                <Stack.Screen name="HomeScreen" component={TabsNavigation} />
                <Stack.Screen name="MenuScreen" component={MenuScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};