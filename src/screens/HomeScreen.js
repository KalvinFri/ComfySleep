// Imports
import React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import Slidercomp from "../components/Slider";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
const navigation = useNavigation();

    const ToSaveScreen = () => {
      console.log("Image pressed!");
      navigation.navigate("LoadScreen");
    };


  return (

<View>
  <Text style={styles.ControllerText}> Controller </Text>
    <Slidercomp />

      <Pressable onPress={ToSaveScreen}>
        <Image style={styles.SavedScreenImage} source={{uri:'data:image/webp;base64,UklGRpADAABXRUJQVlA4WAoAAAAQAAAArwAArwAAQUxQSAoDAAABJyAQSOFmFxERg+TYtsJG+oACoLoJANsEQLsIQIiXf1K2xP8P7WYWEf2fAPmP7+PpLH4Wic8BAM1gIKzwOHDq1TLQ+PLAxU1tB+DY3ris1wF4rjxw3asNABvVA7NODQAS0x9mf0U7fzSiP8wWUd8/wPOH2eb0+hfPUjEdRP/4spFkTCfRj/iaOOKYcwZ/3+AoDkwn0X/j3BNUzDu1eODqr1nEfBLtPHC9WB0KTitjutlUzCfRPuYQTIaCV4NisuiYb0JUDCIUN6bNoGs4va4Q9CIUm+jHuSL6XWMzkDgmXqIfoektRI5LP2K4azQxfpw1L5ZDI1lJPXFiWaEZzORbEtNDxdkdXzaTCFWx71+8ya5SCOoXMR0qG0H+aCYZqoFAPpJJ1/EMB4DNZOgIYwfgLTJUG0UFIJa7TqGIQDMZOolCDgSLCN2Nw7jeVlfyNzDuKuKuqpbTejx5upYoRyDQHFw7UGjAdQBgyWQDgCOpXBEAAsnOVT8SyUEVxwc8x2DKOP2lAFHExUCQ9bzCfqUQVKbjCgj22+p6QWG/UggOvU0hXgn3Io+zlxBCv2hIHl9+5HakfiRhjAbQiR+BIls4FRkA3Gpe5wAglNVi09mBwrFbJJ0IhOWKjjyeshyUaG38bW1LdZOy1GECongUrsDTgUCVeAaQqBpNBlCo4Fk6X2IZGt0IJBUA0sxuFTj6x0bWKCJWQGDoaySCiDXg7LpStWtmEd/DTLZDsOonnq8ZZWhFAiSbceZmhAHeouNcVmhOr8LgYEBTy7hY1kBRisOkc6CoxIGraW4nQXFzGde3ucoC/My8MRnmMg+Kv/IYmPVzQgS0p/94PKEoioPJsmkc91Bm4sCNNnel41bTFdzshXw3/qzeTTjb72Y7q3cTzvLd+DMZ99LkYr2XcEXed/KSf9zjwJLN2XUsmuywrFlex1vVdYLVvs5mVdcJVnkdbyVjlSbmdZVgJ+81XvJPfhwwbm6VDvO0CggXyQx+jcoQ1tgZtjUqQ1gjM/g1ZNg1WbTahVXkbfWSfzIBVlA4IGAAAACwCQCdASqwALAAPt1utFSopiUjIEgBEBuJaW7hdgEbQBPa9FXCDIIaqk122i4QZBDVUmu20XCDIIaqk122i4QZBDVUmu20XCDIIaqk122i4QZBDVUfgAD+/0T0AAAAAAA='}} />
      </Pressable>

      <Pressable>
        <Image style={styles.HomeScreenImage} source={{uri: 'data:image/webp;base64,UklGRgoCAABXRUJQVlA4WAoAAAAQAAAAqgAAqgAAQUxQSIQBAAABJyAQSOFmFxERg+zWtttWulecAgiIBTioABpgAabu6b8pSfZNk75eRP8ngNzeBHhQui8cByfTcT5yqbheU5kfgBO54dMtEfkIJY0XPh9ZVHzbkti/AqfQ8f1IQRRQEpjQHByuQreFEyUswTq0R6wqalhDTRhyoBssWyAxQQnzgu2IUmHdgkwzcIgO+xFCHKAEmPA42F2Fz+ZOnGBx1uF1+KriBsXVhGN2dIPn5khcobjp8D28VHhvTqY7sIsO/5sLCYDiYCLiYLOKmM1sD4LFqCPqsKkSBsVkIjAb3BC5GUgoFLWO2EOrIvqqNMOBVTribyqSAIrCCxkO/qoix/bVngT4i44sx2dV0kD5aCJR/qAi0/aBpIJy0ZHrOKvIdj2Z6YCJqCLfRkQzITARMi50S2mjd0qgPSdOakHOJalfPzhYSHH/8d9/jLLntMyc+J3SoFtKjUgyKkQzIyKqZqT5tmpERNNoU7lZ8YHEpqiQ2BQ6rWIxSLebrHT90NtYie5620JHVlA4IGAAAACwCQCdASqrAKsAPt1utFSopiUjIEgBEBuJaW7hdgEbQBPa9FXCDIIaqk122i4QZBDVUmu20XCDIIaqk122i4QZBDVUmu20XCDIIaqk122i4QZBDVUfgAD+/0T0AAAAAAA='}}/>
      </Pressable>
</View>
  );
}

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },

  ControllerText: {
    alignItems:'center',
    marginLeft:'150px',
  },

  SavedScreenImage: {
    position: 'absolute',
    width: '50px',
    height: '50px',
    resizeMode: 'stretch',
    marginTop:'490px',
    marginLeft:'20px',
  },

  HomeScreenImage: {
    position: 'absolute',
    width: '50px',
    height: '50px',
    resizeMode: 'stretch',
    marginTop:'490px',
    marginLeft: '175px',
  },
});

export default HomeScreen;
