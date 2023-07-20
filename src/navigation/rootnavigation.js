import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import LoadScreen from "../screens/LoadScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();
export default function RootNavigation() {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component ={HomeScreen} />
            <Tab.Screen name="LoadScreen" component ={LoadScreen} />
            <Tab.Screen name="Profile" component ={ProfileScreen} />
        </Tab.Navigator>
    )
}