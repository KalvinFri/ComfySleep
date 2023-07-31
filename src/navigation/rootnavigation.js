import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import LoadScreen from "../screens/PreferenceScreen";
import ProfileScreen from "../screens/ProfileScreen";
import GradientComponentBG from '../components/PageComponents/BGGradient';
import { Icon } from 'react-native-elements';
import { StyleSheet, View } from "react-native";
import PreferenceScreen from '../screens/PreferenceScreen';

const Tab = createBottomTabNavigator();

export default function RootNavigation() {
    return (

        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: { backgroundColor: '#CD6FFE', height: 80, borderRadius: 15, },
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = 'home'; // Change this to the name of the icon you want to use for the Home tab
                    } else if (route.name === 'Preferences') {
                        iconName = 'cloud'; // Change this to the name of the icon you want to use for the LoadScreen tab
                    } else if (route.name === 'Profile') {
                        iconName = 'user'; // Change this to the name of the icon you want to use for the Profile tab
                    }
                    return <Icon type="font-awesome" name={iconName} size={40} color={color} marginTop={15} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#571A66', // Change the color for the active tab
                inactiveTintColor: '#FFFFFF', // Change the color for the inactive tabs
                showLabel: false,
            }}
        >
            <Tab.Screen name="Preferences" component={PreferenceScreen} />
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>

    )
}