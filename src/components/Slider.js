//import React in our code
import React, {useState} from 'react';

//import all the components we are going to use
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

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
        <Text style={{color: 'black'}}>
          Value of slider is: {sliderValue}
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
    backgroundColor: '#ecf0f1',
  },

  button1: {
    marginTop: "50px"
  },

  SliderColor: {
  },
});

export default Slidercomp;