//import React in our code
import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

//import all the components we are going to use
import Slider from '@react-native-community/slider';
import CircleSlider from "react-native-circle-slider";
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
    <button style={styles.button1} onClick={() => SaveButtonClick()}>
      <Text>Save</Text>
    </button>
    )
  }

  const HandleSliderChange = (value) => {
    setSliderValue(value);
    console.log('Slider Value:', value);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {/*Text to show slider value*/}
        <Text style={styles.SliderValueText}>
        {sliderValue}
        </Text>

        {/*Slider with max, min, step, and initial value*/}
      <CircleSlider 
        value={1}
        min={1}
        max={100}
        strokeWidth={20}
        strokeColor={'#000'}
        meterColor={'#fff'}
        // onValueChange={HandleSliderChange}
      />

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
    fontFamily: 'Inter',
    fontSize: '50px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
//Spacing
    position: 'absolute',
    marginTop: '0px',
    marginLeft:'135px',
  },

  button1: {
//Font
  position: 'absolute',
  color: '#000',
  fontFamily: 'Inter',
  fontSize: '20px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: 'normal',
//Spacing
    position:'absolute',
    marginTop: "800px",
    marginLeft: '80px',
    paddingLeft: '50px',
    paddingRight: '50px',
    paddingTop: '10px',
    paddingBottom: '10px',
  },

  SliderColor: {
  },
});

export default Slidercomp;