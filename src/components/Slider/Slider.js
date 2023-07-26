//import React in our code
import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

//import all the components we are going to use
import Slider from '@react-native-community/slider';
import CircleSlider from "react-native-circle-slider";
import CircularProgress from 'react-native-circular-progress-indicator';
// import { CircularSlider } from 'react-native-react-native-rounded-slider';

const Slidercomp = () => {
  const [sliderValue, setSliderValue] = useState(1);
  const [savedValue, setSavedValue] = useState(null);

  const SaveButton = () => {

    const SaveButtonClick = () => {
      setSavedValue(sliderValue);
      // Console is behind
      console.log('Saved Value:', savedValue);
    }


    return (
      <TouchableOpacity style={styles.SaveButton} onPress={SaveButtonClick}>
      <Text style={styles.SaveButtonText}>Save</Text>
      </TouchableOpacity>
    )
  }

  const HandleSliderChange = (value) => {
    setSliderValue(value);
    console.log('Slider Value:', value);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.ProgressBar}>
        <CircularProgress
          value={sliderValue}
          inActiveStrokeColor={'#DA5FF9'}
          activeStrokeColor={'#CD6FFE'}
          inActiveStrokeOpacity={0.2}
          progressValueColor={'#fff'}
          valueSuffix={'%'}
        />
      </View>
      <SaveButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  SaveButton: {
    position: 'absolute',
    marginLeft: 90,
    marginTop: 500,
    width: 160,
    height: 60,
    paddingTop: 13,
    paddingLeft: 53,
    
    borderRadius: 15,
  backgroundColor: '#571A66',
  },

  SaveButtonText: {
    // fontFamily: 'Shrikhand',
    fontSize: 25,
    color: '#FFDEFF',
  },

  SliderValueText: {
    // Font
    color: '#000',
    fontSize: 50,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
    //Spacing
    position: 'absolute',
    marginTop: 0,
    marginLeft: 135,
  },

  ProgressBar: {
    marginLeft: 110,
    marginTop: 100,
  },

  SliderColor: {
  },
});

export default Slidercomp;