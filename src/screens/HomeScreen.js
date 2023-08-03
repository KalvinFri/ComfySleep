// Imports
import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import Slidercomp from "../components/Slider/Slider";
import GradientComponentBG from "../components/PageComponents/BGGradient";
import { useFonts } from "expo-font";
import PopupScreen from "../components/Slider/SavePopup";
import LoadCustomPreference from "../components/Slider/CustomValuePopup";
import axios from "axios";
import { TouchableOpacity } from "react-native-web";
import useSliderValue from "../hooks/useSliderValue";

// Axios
const api = axios.create({
  baseURL: `http://localhost:8080`
});
api.get('/preferences/data').then(res => {
  setPreferenceList(res.data);
});


const SetSlidertoPreference = () => {
  // const navigation = useNavigation();
  setParentValue(preference.value)
  navigation.navigate('Home');
  
}

const HomeScreen = () => {
  const { sliderValue } = useSliderValue()
  const [parentValue, setParentValue] = useState(sliderValue);

  const [loaded] = useFonts({
    Shrikhand: require('../assets/fonts/Shrikhand-Regular.ttf')
  })

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      
      <Text style={styles.HomeText}> Home </Text>

      {/* Progress Bar */}
      <View style={styles.Slidercomp}>
        <Slidercomp value={parentValue}/>
      </View>

      {/* Save button */}
      <View style={styles.PopupScreenSliderButton}>

        <PopupScreen />
      </View>

      {/* LoadCustomButton */}
      <LoadCustomPreference setValue={setParentValue}/>
      {/* Line at Bottom */}
      <View style={styles.HomeScreenBottomLine}></View>

      {/* Gradient */}
      <GradientComponentBG />
    </View >
  );
}

// Styling
const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#baedfd',
  },

  HomeText: {
    alignItems: 'center',
    marginLeft: 160,
    fontSize: 25,
    top: 100,
    fontFamily: 'Shrikhand',
    color: '#FDF6FF',
  },

  Slidercomp: {
    position: 'absolute',
    marginTop: 25,
    marginLeft: 30,
  },

  PopupScreenSliderButton: {
    top: 275,
  },
});

export default HomeScreen;
