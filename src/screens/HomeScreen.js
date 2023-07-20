// Imports
import React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import Slidercomp from "../components/Slider";
import { useNavigation } from "@react-navigation/native";
import HorizontalLine from "../components/Line";



const HomeScreen = () => {
const navigation = useNavigation();

const ToSaveScreen = () => {
  console.log("Loading LoadScreen");
  navigation.navigate("LoadScreen");
};

const ToHomeScreen = () => {
    console.log("Loading HomeScreen");
    navigation.navigate("Home");
};
  return (

<View style={styles.container}>
  <Text style={styles.RemoteText}> Remote </Text>
  <View style={styles.Slidercomp}>
    <Slidercomp />
  </View>
<View>
  <Image style={styles.HomeScreenCloud} source={{uri: 'data:image/webp;base64,UklGRugEAABXRUJQVlA4WAoAAAAQAAAArwAAewAAQUxQSMoBAAABJyAQSOFmFxERg+zatuO2uQBZAJaJAhiGBcAKCphu/02J4vBwo++I/k8A7G+NJP9u0BpePLkp+cPz2ct48fIiovHGRULjrYuAX948DZd4uxss8P48QNhI7ttBfYDR3IvH2QOJjzpjjScX9GeircbT//iws/RL09HQSuPOTrcWzSSad1a6vclIov1spA5AZyJwxNlEGmI3UYegs8AxJwPrINFAGiQbqIPQQBvFP8dRZ1nxsTDM/tg6DHU5Wf5/lcaZHwpN1IsDxydC58j7AyvHfmClqEBRoauqFJUoKnRVlaICVVVVgaqqhngHNc43JFlNxHQtUOXPpSSDu7vQdDC7U4FKszuTpHA/U7VwOdHF0H8IVJs/rHI4HRU9+ajp4XTQBeUDKvYAVklRFgEUTV5WBKqmDDRNdLImWREUvcuiLifLy5q/rv37aqr4fVVZ5etaZQVZUJXRRe1osoqoiFXUDIiagK7JA1UTgCQpA4Ck/a0pmt+SIv8WFOGw6dmPkp75CF2O+1DVZHwMaqZPqGLciaAl4myV4k6hC4k4n4S4C6gyIi53ERnXQ9fgb8AqYcKtax9vwc2hjbbg/m2o7PFk2MbZ8HjYhnS4ClZQOCD4AgAAkBYAnQEqsAB8AD7daKtPKKakIi0UCMkQG4lpbt0J9g7Jf8bj/e3kVw67+Z4IaQKaT42XsvogEkY6C+mIAZ5+jP+3dzP7oAROkjNIh/lKl3vMBgmj+2ImA3Gl/7nHuVboyLbOTd/VkBamo5KWwJ0JVo03rk2x6RsoFPliAo9y3lSjEZ85Jiij0up9WLLIqAZAd4rNf1b/QoPqt/rcjhVuUAfZKNeZHMinAjQgPvlNGt4IRFRsBXp8fmzwhNcAAP7znaY1dyB2nM7RC8oSr/dIsGzrvdVbARmDVBJZ6bk3/sc4UiLXXbars7F0l8MVs4qU6e8YYDaSJcstz4eXGqX1qI2qn3K1evp4ZyeWYIm4iuETdlIvkPpUkJCCuxsALZ0KY+AoKkbDtVQ8MmUQPhmo5/Qusf94jtPbzfKfeeZa3TW8PfFD1tuYd63Jl3768LtirHPILZiSe97XiL+786KeuEBnlEEOs8/Hej2rIGTmEcb2HVZ6FlpkpvLqtvZUs3tf/hIiNlPPAeA0KBwwEsmEuanzX+zZwnwg5bph3GNW2cvT1USkKrUYdLWejLYT/N6IcYjwhJHmQuft/6unhLfLVr//yGQj7ueW33q5j70KK4P5iGsJmH7TW48BlgQFT4XVH9iEPCP5LgkU8MBORyv2amcsg/qrvIBfa9MAjLDtLAF3E9z0YZpV8FD07GgCaMsYq1FcVZPxmcOwROYy0TE3WYbq03WKHoxbyNGPU8Hzpv5z5RFZQEBaFeoHdoUPSddLq4X2NYB/iEvr5L0wD795bk5jyB0ygCnv4IOHuvUgwe+i76dS7sjMK027gKgIi4WFrdbeUOtJlo15OSoKBohNqC10r2J9o7f4yMnGRtXOb/+qs3j/oNRlmfWiRs6CYABgef/BD/pWWBURylzDn8VVLyUawyZ1YPlDEJ6nLY158n/sAeBkOumCWtprf5aXfdfwPoH6vyX33kDITB/hTC2jEFe6v/OgD7HiPyurVF1Xbp3kgTxMnKAgAA=='}} />
</View>


{/*(Navigation Bar*/}
<View>
    <Pressable onPress={ToSaveScreen}>
        <Image style={styles.SavedScreenImage} source={{uri:'data:image/webp;base64,UklGRpADAABXRUJQVlA4WAoAAAAQAAAArwAArwAAQUxQSAoDAAABJyAQSOFmFxERg+TYtsJG+oACoLoJANsEQLsIQIiXf1K2xP8P7WYWEf2fAPmP7+PpLH4Wic8BAM1gIKzwOHDq1TLQ+PLAxU1tB+DY3ris1wF4rjxw3asNABvVA7NODQAS0x9mf0U7fzSiP8wWUd8/wPOH2eb0+hfPUjEdRP/4spFkTCfRj/iaOOKYcwZ/3+AoDkwn0X/j3BNUzDu1eODqr1nEfBLtPHC9WB0KTitjutlUzCfRPuYQTIaCV4NisuiYb0JUDCIUN6bNoGs4va4Q9CIUm+jHuSL6XWMzkDgmXqIfoektRI5LP2K4azQxfpw1L5ZDI1lJPXFiWaEZzORbEtNDxdkdXzaTCFWx71+8ya5SCOoXMR0qG0H+aCYZqoFAPpJJ1/EMB4DNZOgIYwfgLTJUG0UFIJa7TqGIQDMZOolCDgSLCN2Nw7jeVlfyNzDuKuKuqpbTejx5upYoRyDQHFw7UGjAdQBgyWQDgCOpXBEAAsnOVT8SyUEVxwc8x2DKOP2lAFHExUCQ9bzCfqUQVKbjCgj22+p6QWG/UggOvU0hXgn3Io+zlxBCv2hIHl9+5HakfiRhjAbQiR+BIls4FRkA3Gpe5wAglNVi09mBwrFbJJ0IhOWKjjyeshyUaG38bW1LdZOy1GECongUrsDTgUCVeAaQqBpNBlCo4Fk6X2IZGt0IJBUA0sxuFTj6x0bWKCJWQGDoaySCiDXg7LpStWtmEd/DTLZDsOonnq8ZZWhFAiSbceZmhAHeouNcVmhOr8LgYEBTy7hY1kBRisOkc6CoxIGraW4nQXFzGde3ucoC/My8MRnmMg+Kv/IYmPVzQgS0p/94PKEoioPJsmkc91Bm4sCNNnel41bTFdzshXw3/qzeTTjb72Y7q3cTzvLd+DMZ99LkYr2XcEXed/KSf9zjwJLN2XUsmuywrFlex1vVdYLVvs5mVdcJVnkdbyVjlSbmdZVgJ+81XvJPfhwwbm6VDvO0CggXyQx+jcoQ1tgZtjUqQ1gjM/g1ZNg1WbTahVXkbfWSfzIBVlA4IGAAAACwCQCdASqwALAAPt1utFSopiUjIEgBEBuJaW7hdgEbQBPa9FXCDIIaqk122i4QZBDVUmu20XCDIIaqk122i4QZBDVUmu20XCDIIaqk122i4QZBDVUfgAD+/0T0AAAAAAA='}} />
      </Pressable>

      <Pressable onPress={ToHomeScreen}>
        <Image style={styles.HomeScreenImage} source={{uri: 'data:image/webp;base64,UklGRgoCAABXRUJQVlA4WAoAAAAQAAAAqgAAqgAAQUxQSIQBAAABJyAQSOFmFxERg+zWtttWulecAgiIBTioABpgAabu6b8pSfZNk75eRP8ngNzeBHhQui8cByfTcT5yqbheU5kfgBO54dMtEfkIJY0XPh9ZVHzbkti/AqfQ8f1IQRRQEpjQHByuQreFEyUswTq0R6wqalhDTRhyoBssWyAxQQnzgu2IUmHdgkwzcIgO+xFCHKAEmPA42F2Fz+ZOnGBx1uF1+KriBsXVhGN2dIPn5khcobjp8D28VHhvTqY7sIsO/5sLCYDiYCLiYLOKmM1sD4LFqCPqsKkSBsVkIjAb3BC5GUgoFLWO2EOrIvqqNMOBVTribyqSAIrCCxkO/qoix/bVngT4i44sx2dV0kD5aCJR/qAi0/aBpIJy0ZHrOKvIdj2Z6YCJqCLfRkQzITARMi50S2mjd0qgPSdOakHOJalfPzhYSHH/8d9/jLLntMyc+J3SoFtKjUgyKkQzIyKqZqT5tmpERNNoU7lZ8YHEpqiQ2BQ6rWIxSLebrHT90NtYie5620JHVlA4IGAAAACwCQCdASqrAKsAPt1utFSopiUjIEgBEBuJaW7hdgEbQBPa9FXCDIIaqk122i4QZBDVUmu20XCDIIaqk122i4QZBDVUmu20XCDIIaqk122i4QZBDVUfgAD+/0T0AAAAAAA='}}/>
      </Pressable>
</View>
{/* Line at Bottom */}
<View style={styles.HomeScreenBottomLine}>
    <HorizontalLine />
      {/* <View style={styles.HomeScreenBottomLine2}>
        <HorizontalLine />
      </View> */}
</View>
</View>
  );
}

// Styling
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#baedfd',
  },

  RemoteText: {
    alignItems:'center',
    marginLeft:'150px',
    fontSize: '25px',
    fontFamily: 'Inter',
  },

  Slidercomp: {
    marginTop: '100px',
  },

  HomeScreenCloud: {
    position: 'absolute',
    width: '87px',
    height: '61px',
    resizeMode: 'stretch',
    marginTop:'200px',
    marginLeft:'155px',
  },


  SavedScreenImage: {
    position: 'absolute',
    width: '50px',
    height: '50px',
    resizeMode: 'stretch',
    marginTop:'477px',
    marginLeft:'20px',
  },

  HomeScreenImage: {
    position: 'absolute',
    width: '50px',
    height: '50px',
    resizeMode: 'stretch',
    marginTop:'477px',
    marginLeft: '175px',
  },

  HomeScreenBottomLine: {
    marginTop: '457px',
  },
  HomeScreenBottomLine2: {
    marginTop: '500px',
  },
});

export default HomeScreen;
