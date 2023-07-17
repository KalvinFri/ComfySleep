//import React in our code
import React, {useState} from 'react';

//import all the components we are going to use
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

import Slider from '@react-native-community/slider';

const Slidercomp = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [consoleText, setConsoleText] = useState('');
  
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
          minimumTrackTintColor="pink"
          maximumTrackTintColor="#000000"
          step={1}
          value={sliderValue}
          onValueChange={HandleSliderChange}
        />
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
});

export default Slidercomp;
