// Imports
import React from "react";
import { StyleSheet, View, Text, Pressable, Image, Slider } from "react-native";
import Slidercomp from "../components/Slider/Slider";
import GradientComponentBG from "../components/PageComponents/BGGradient";
import { useNavigation } from "@react-navigation/native";
import CircularProgress from 'react-native-circular-progress-indicator';
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";


const HomeScreen = () => {

  const [loaded] = useFonts({
    Shrikhand: require('../assets/fonts/Shrikhand-Regular.ttf')
  })

  if(!loaded){
    return null;
  }
  
  return (
    <View style={styles.container}>

      <Text style={styles.HomeText}> Home </Text>


      {/* Progress Bar */}
      <View style={styles.Slidercomp}>
        <Slidercomp />

      </View>

      {/* Cloud */}

      <View>
        <Image style={styles.HomeScreenCloud} source={{ uri: 'data:image/webp;base64,UklGRugEAABXRUJQVlA4WAoAAAAQAAAArwAAewAAQUxQSMoBAAABJyAQSOFmFxERg+zatuO2uQBZAJaJAhiGBcAKCphu/02J4vBwo++I/k8A7G+NJP9u0BpePLkp+cPz2ct48fIiovHGRULjrYuAX948DZd4uxss8P48QNhI7ttBfYDR3IvH2QOJjzpjjScX9GeircbT//iws/RL09HQSuPOTrcWzSSad1a6vclIov1spA5AZyJwxNlEGmI3UYegs8AxJwPrINFAGiQbqIPQQBvFP8dRZ1nxsTDM/tg6DHU5Wf5/lcaZHwpN1IsDxydC58j7AyvHfmClqEBRoauqFJUoKnRVlaICVVVVgaqqhngHNc43JFlNxHQtUOXPpSSDu7vQdDC7U4FKszuTpHA/U7VwOdHF0H8IVJs/rHI4HRU9+ajp4XTQBeUDKvYAVklRFgEUTV5WBKqmDDRNdLImWREUvcuiLifLy5q/rv37aqr4fVVZ5etaZQVZUJXRRe1osoqoiFXUDIiagK7JA1UTgCQpA4Ck/a0pmt+SIv8WFOGw6dmPkp75CF2O+1DVZHwMaqZPqGLciaAl4myV4k6hC4k4n4S4C6gyIi53ERnXQ9fgb8AqYcKtax9vwc2hjbbg/m2o7PFk2MbZ8HjYhnS4ClZQOCD4AgAAkBYAnQEqsAB8AD7daKtPKKakIi0UCMkQG4lpbt0J9g7Jf8bj/e3kVw67+Z4IaQKaT42XsvogEkY6C+mIAZ5+jP+3dzP7oAROkjNIh/lKl3vMBgmj+2ImA3Gl/7nHuVboyLbOTd/VkBamo5KWwJ0JVo03rk2x6RsoFPliAo9y3lSjEZ85Jiij0up9WLLIqAZAd4rNf1b/QoPqt/rcjhVuUAfZKNeZHMinAjQgPvlNGt4IRFRsBXp8fmzwhNcAAP7znaY1dyB2nM7RC8oSr/dIsGzrvdVbARmDVBJZ6bk3/sc4UiLXXbars7F0l8MVs4qU6e8YYDaSJcstz4eXGqX1qI2qn3K1evp4ZyeWYIm4iuETdlIvkPpUkJCCuxsALZ0KY+AoKkbDtVQ8MmUQPhmo5/Qusf94jtPbzfKfeeZa3TW8PfFD1tuYd63Jl3768LtirHPILZiSe97XiL+786KeuEBnlEEOs8/Hej2rIGTmEcb2HVZ6FlpkpvLqtvZUs3tf/hIiNlPPAeA0KBwwEsmEuanzX+zZwnwg5bph3GNW2cvT1USkKrUYdLWejLYT/N6IcYjwhJHmQuft/6unhLfLVr//yGQj7ueW33q5j70KK4P5iGsJmH7TW48BlgQFT4XVH9iEPCP5LgkU8MBORyv2amcsg/qrvIBfa9MAjLDtLAF3E9z0YZpV8FD07GgCaMsYq1FcVZPxmcOwROYy0TE3WYbq03WKHoxbyNGPU8Hzpv5z5RFZQEBaFeoHdoUPSddLq4X2NYB/iEvr5L0wD795bk5jyB0ygCnv4IOHuvUgwe+i76dS7sjMK027gKgIi4WFrdbeUOtJlo15OSoKBohNqC10r2J9o7f4yMnGRtXOb/+qs3j/oNRlmfWiRs6CYABgef/BD/pWWBURylzDn8VVLyUawyZ1YPlDEJ6nLY158n/sAeBkOumCWtprf5aXfdfwPoH6vyX33kDITB/hTC2jEFe6v/OgD7HiPyurVF1Xbp3kgTxMnKAgAA==' }} />
      </View>

      {/* Line at Bottom */}
      <View style={styles.HomeScreenBottomLine}>
      </View>
    <GradientComponentBG />
</View >
  );
}

// Styling
const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#baedfd',
  },

  HomeText: {
    alignItems: 'center',
    marginLeft: 160,
    fontSize: 25,
    top: 100,
    fontFamily: 'Shrikhand',
    color: '#56047C',
  },

  Slidercomp: {
    position: 'absolute',
    marginTop: 25,
    marginLeft: 30,
  },
});

export default HomeScreen;
