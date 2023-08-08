// Imports
import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import Slidercomp from "../components/Slider/Slider";
import GradientComponentBG from "../components/PageComponents/BGGradient";
import { useFonts } from "expo-font";
import PopupScreen from "../components/Slider/SavePopup";
import CustomValuePopup from "../components/Slider/CustomValuePopup";
import axios from "axios";
import useSliderValue from "../hooks/useSliderValue";
import useSavedSliderValue from "../hooks/useSavedSliderValue";
import PreferenceScreen from "./PreferenceScreen";


const HomeScreen = () => {
  // Settings usestates
  const { sliderValue } = useSliderValue()
  // holder variable to temp store the saved value before transfering it.
  const { savedSliderValue, setSavedSliderValue } = useSavedSliderValue(null)
  // This is the variable for the slider value
  const [parentValue, setParentValue] = useState(sliderValue);
  // Actual mattress value
  const [mattressValue, setMattressValue] = useState(0)


  // Axios
  const [stiffness, setStiffness] = useState({})
  const api = axios.create({
    baseURL: `http://172.20.10.14/`
  });
  api.get('/flex').then(res => {
    setStiffness(res.data);
    console.log(stiffness);
  });

  // Turns the mattress on after button click
  const TurnMattressOn = () => {
    const api = axios.create({
      baseURL: `http://172.20.10.14/`
    });
    api.get('/on').then(res => {
      setStiffness(res.data);
      console.log("Turned Mattress On");
    });
  }

  // Turns the mattress off after button click
  const TurnMattressOff = () => {
    const api = axios.create({
      baseURL: `http://172.20.10.14/`
    });
    api.get('/off').then(res => {
      setStiffness(res.data);
      console.log("Turned Mattress Off");
    });
  }

  const SetSlidertoPreferencePress = () => { 
    // navigation.navigate("Home");
    const api = axios.create({
        baseURL: `http://172.20.10.14/`
      });
      api.get('/on50').then(res => {
        setStiffness(res.data);
        console.log(stiffness);
      });
} 

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
        <Slidercomp value={parentValue} realValue={mattressValue} />
      </View>

      {/* Save button */}
      <View style={styles.PopupScreenSliderButton}>
        <PopupScreen setValue={setSavedSliderValue} value={parentValue} />
      </View>

      {/* LoadCustomButton */}
      <CustomValuePopup setValue={setParentValue} value={parentValue} />

      {/* Buttons for turning mattress on and off */}
      <View>
        <TouchableOpacity onPress={TurnMattressOn} style={styles.OnButton}>
          <Text style={styles.OnButtonText}>On</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={TurnMattressOff} style={styles.OffButton}>
          <Text style={styles.OffButtonText}>Off</Text>
        </TouchableOpacity>
      </View>

      {/* Line at Bottom */}
      <View style={styles.HomeScreenBottomLine}></View>

      <TouchableOpacity onPress={SetSlidertoPreferencePress}>
          <Text>TEST</Text>
        </TouchableOpacity>
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
  OnButton: {
    left: 25,
    top: 650,
    width: 160,
    height: 60,
    paddingTop: 13,
    borderRadius: 15,
    backgroundColor: '#CD6FFE',
    color: "#FFFFFF",
  },

  OnButtonText: {
    alignItems: 'center',
    color: '#FFFFFF',
    fontSize: 25,
    paddingLeft: 60,
    paddingTop: 1,
  },

  OffButton: {
    position: 'absolute',
    left: 215,
    top: 650,
    width: 160,
    height: 60,
    paddingTop: 13,
    borderRadius: 15,
    backgroundColor: '#CD6FFE',
    color: "#FFFFFF",
  },

  OffButtonText: {
    alignItems: 'center',
    color: '#FFFFFF',
    fontSize: 25,
    paddingLeft: 60,
    paddingTop: 1,
  },
});

export default HomeScreen;
