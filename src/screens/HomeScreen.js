// Imports
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Slidercomp from "../../components/Slider";

const Home = () => {
  return (
<View >
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

export default Home;
