//import React in our code
import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
//import all the components we are going to use
import CircularProgress from 'react-native-circular-progress-indicator';
// import { CircularSlider } from 'react-native-react-native-rounded-slider';
import { color } from 'react-native-reanimated';
import useSliderValue from '../../hooks/useSliderValue';
import PopupScreen from './SavePopup'
import CustomValuePopup from './CustomValuePopup';
import useSavedSliderValue from '../../hooks/useSavedSliderValue';


// ehy dont u use useHooks? 
//wait so-- u guys are trying to get values from childComponnet to paret=ntCompomen? 
const Slidercomp = (props) => {
  const { sliderValue, setSliderValue } = useSliderValue();
  const { savedValue, setSavedValue } = useSavedSliderValue();
  const [local, setLocal] = useState(sliderValue)
  const { value } = props

  const HandleSliderChange = () => {

    console.log('Slider Value:', sliderValue);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.ProgressBar}>
        <CircularProgress
          value={value}
          onAnimationComplete={HandleSliderChange}
          inActiveStrokeColor={'#DFA0FF'}
          activeStrokeWidth={30}
          activeStrokeColor={'#FFFFFF'}
          inActiveStrokeWidth={30}
          inActiveStrokeOpacity={0.5}
          radius={120}
          maxValue={100}
          valueSuffix={'%'}
          progressValueColor={'#FDF6FF'}
        />
      </View>
      <Text style={styles.FirmnessScaleText}> Firmness Scale </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  PopupScreenSliderButton: {
    left: 53,
  },

  FirmnessScaleText: {
    fontSize: 30,
    top: 125,
    left: 73,
    color: '#FFFFFF'
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
    backgroundColor: '#CD6FFE',
  },

  SaveButtonText: {
    // fontFamily: 'Shrikhand',
    fontSize: 25,
    color: '#FFFFFF',
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
    marginLeft: 135,
  },

  ProgressBar: {
    // marginLeft: 50,
    // marginTop: 100,
    left: 50,
    top: 100,
  },

  SliderColor: {
  },
});

export default Slidercomp;