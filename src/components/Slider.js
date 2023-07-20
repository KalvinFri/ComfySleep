//import React in our code
import React, {useState} from 'react';
import { CircularSlider } from 'react-native-elements-universe';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

//import all the components we are going to use
import Slider from '@react-native-community/slider';

// const SaveButton = () => {
//   const [savedValue, setSavedValue] = useState(0);



//   return (
//   <button>
//     Saved
//   </button>
//   )
// }

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
      Save
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
        <Slider
          maximumValue={100}
          minimumValue={1}
          minimumTrackTintColor="#1aa6e5"
          maximumTrackTintColor="#000000"
          step={1}
          value={sliderValue}
          onValueChange={HandleSliderChange}
          />

        {/* <CircularSlider 
        maximumValue={100}
        minimumValue={1}
        maxAngle={90}
        trackRadius={90}
        thumbRadius={5}
        trackWidth={2}
        step={1}
        trackColor={"blue"}
        thumbColor={"blue"}
        value={sliderValue}
        onChange={HandleSliderChange}
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
    marginTop: '125px',
    marginLeft:'155px',
  },

  button1: {
//Font
  color: '#000',
  fontFamily: 'Inter',
  fontSize: '20px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: 'normal',
//Spacing
    position:'absolute',
    marginTop: "800px",
    marginLeft: '5px',
    paddingLeft: '150px',
    paddingRight: '150px',
    paddingTop: '10px',
    paddingBottom: '10px',
  },

  SliderColor: {
  },
});

export default Slidercomp;