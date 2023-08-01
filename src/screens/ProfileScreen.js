// Imports
import React from "react";
import { StyleSheet, View, Text, Pressable, Image, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HorizontalLine from "../components/PageComponents/Line";
import GradientComponentBG from "../components/PageComponents/BGGradient";
import ProfileMattress from "../assets/images/ProfileMattress.png"

const ProfileScreen = () => {
 const navigation = useNavigation();

    return (
<View>

<View style={styles.MattressImage}>
    <Image source={ProfileMattress}></Image>
</View>

{/* Background Color */}
    <View>
 <GradientComponentBG />
 </View>
</View>
    )
}
const styles = StyleSheet.create({
});


export default ProfileScreen;