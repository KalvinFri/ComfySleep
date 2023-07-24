import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import LoadScreen from "../screens/LoadScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Icon } from 'react-native-elements';
import { StyleSheet, View } from "react-native";
const Tab = createBottomTabNavigator();

export default function RootNavigation() {
    return (

        <Tab.Navigator style={styles.NavBar}
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = 'home'; // Change this to the name of the icon you want to use for the Home tab
                    } else if (route.name === 'LoadScreen') {
                        iconName = 'cloud'; // Change this to the name of the icon you want to use for the LoadScreen tab
                    } else if (route.name === 'Profile') {
                        iconName = 'user'; // Change this to the name of the icon you want to use for the Profile tab
                    }
                    return <Icon type="font-awesome" name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'blue', // Change the color for the active tab
                inactiveTintColor: 'Black', // Change the color for the inactive tabs
            }}
        >
            <Tab.Screen name="LoadScreen" component={LoadScreen} />
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>

    )
}

const styles = StyleSheet.create({
    NavBar: {
        height: '10px',
    },
})