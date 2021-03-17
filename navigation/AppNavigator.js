import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AboutScreen from '../screens/AboutScreen';
import AddHomeScreen from '../screens/AddHomeScreen';
import HomeDetailsScreen from '../screens/HomeDetailsScreen';
import HomeListScreen from '../screens/HomeListScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const stackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="HomeList"
                component={HomeListScreen}
                options={{
                    title: 'HomeHunt'
                }}
            />
             <Stack.Screen 
                name="HomeDetails"
                component={HomeDetailsScreen}
            />
             <Stack.Screen 
                name="AddHome"
                component={AddHomeScreen}
            />
        </Stack.Navigator>
    )
}

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={stackNavigator}
                />
                <Tab.Screen
                    name="About"
                    component={AboutScreen}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;

