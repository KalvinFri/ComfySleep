import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GradientComponentBG = () => {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#F7E7FF', '#B932FF']}
          style={styles.gradient}
          start={[0, 0]}
          end={[1, 1]}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    gradient: {
      flex: 1,
    },
  });
export default GradientComponentBG;