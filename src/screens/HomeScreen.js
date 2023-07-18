// Imports
import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Slidercomp from "../../components/Slider";

const HomeScreen = () => {
  return (
<View>
  <Slidercomp />
</View>
  );
}

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});

export default HomeScreen;
