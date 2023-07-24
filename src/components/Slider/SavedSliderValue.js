import React from 'react';
import { View, Text } from 'react - native';
import { sliderValue } from './Slider'; 


const screenContent = () => {
    // Get the current value of the slider
    const value12 = sliderValue();
    // Display the value in the component
    return (
        <View>
            <Text>{value12}</Text>
        </View>
    );
};
export default screenContent;