import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialIcons} from "@expo/vector-icons";

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

const AboutStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="About"
                component={AboutScreen}
            />
        </Stack.Navigator>
    )
}

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                // wrapping the definition in parens return it automatically (doesn't need return statement)
                screenOptions={({route}) => ({
                    tabBarIcon: () => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = 'home'
                        } else if (route.name === 'About') {
                            iconName = 'info'
                        }
                        // inner function that will return the icon. Parens return tabBarIcon function automatically
                        return <MaterialIcons name={iconName} size={24} />
                    }
                })}
            >
                <Tab.Screen
                    name="Home"
                    component={stackNavigator}
                />
                <Tab.Screen
                    name="About"
                    component={AboutStackNavigator}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;

