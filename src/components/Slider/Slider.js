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
      <TouchableOpacity />
    )
  }

  const HandleSliderChange = (value) => {
    setSliderValue(value);
    console.log('Slider Value:', value);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/*Text to show slider value*/}
        <Text style={styles.SliderValueText}>
          {sliderValue}
        </Text>
        <View style={styles.ProgressBar}>
        <CircularProgress
          value={90}
          inActiveStrokeColor={'#2ecc71'}
          inActiveStrokeOpacity={0.2}
          progressValueColor={'#fff'}
          valueSuffix={'%'}
        />
        </View>
        {/* <CircleSlider 
        value={1}
        min={1}
        max={100}
        strokeWidth={20}
        strokeColor={'#000'}
        meterColor={'#fff'}
        onValueChange={HandleSliderChange}
      /> */}

        {/* <Slider
          maximumValue={100}
          minimumValue={1}
          minimumTrackTintColor="#1aa6e5"
          maximumTrackTintColor="#000000"
          step={1}
          value={sliderValue}
          onValueChange={HandleSliderChange}
          /> */}

        <SaveButton />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
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
    marginLeft: 90,
  },

  SliderColor: {
  },
});

export default Slidercomp;