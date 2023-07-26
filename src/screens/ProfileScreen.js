// Imports
import React from "react";
import { StyleSheet, View, Text, Pressable, Image, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HorizontalLine from "../components/PageComponents/Line";
import GradientComponentBG from "../components/PageComponents/BGGradient";

const ProfileScreen = () => {
 const navigation = useNavigation();

    return (
<View>
 <GradientComponentBG />
</View>
    )
}

export default ProfileScreen;