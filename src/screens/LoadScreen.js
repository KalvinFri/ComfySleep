import { StyleSheet, View, Text, Pressable, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import HorizontalLine from "../components/Line";

const ButtonPress1 = () => {
    console.log('Pressed Save');
}

const ButtonPress2 = () => {
    console.log('Pressed Recommended');
}

const LoadScreen = () => {
    const navigation = useNavigation();

      const ToSaveScreen = () => {
          console.log("Loading LoadScreen");
          navigation.navigate("LoadScreen");
      };
  
      const ToHomeScreen = () => {
          console.log("Loading HomeScreen");
          navigation.navigate("Home");
      };
      const ToProfileScreen = () => {
        console.log("Loading ProfileScreen");
        navigation.navigate("Profile");
      };

return(
<View style={styles.container1}>

{/* Saved & Recommended Buttons */}
 <View style={styles.SavedButtons}>
{/* Saved Button */}
    <Pressable style={styles.SaveButton} onPress={ButtonPress1}>
      <Text style={styles.SaveText}>Saved</Text>
    </Pressable>

{/* Recommendation button */}
    <Pressable style={styles.RecButton} onPress={ButtonPress2}>
        <Text style={styles.RecText}>Recommended</Text>
    </Pressable>
 </View>

{/* List Of Text */}
 <View style={styles.SavedOptions}>
    <Text style={styles.Option1}>
        #1 Name Number
    </Text>

    <Text style={styles.Option2}>
        #2 Name Number
    </Text>

    <Text style={styles.Option3}>
        #3 Name Number
    </Text>

    <Text style={styles.Option4}>
        #4 Name Number
    </Text>

    <Text style={styles.Option5}>
        #5 Name Number
    </Text>
 </View>
 {/*Navigation Bar*/}
 <View>
    <Pressable onPress={ToSaveScreen}>
        <Image style={styles.SavedScreenImage} source={{uri:'data:image/webp;base64,UklGRpADAABXRUJQVlA4WAoAAAAQAAAArwAArwAAQUxQSAoDAAABJyAQSOFmFxERg+TYtsJG+oACoLoJANsEQLsIQIiXf1K2xP8P7WYWEf2fAPmP7+PpLH4Wic8BAM1gIKzwOHDq1TLQ+PLAxU1tB+DY3ris1wF4rjxw3asNABvVA7NODQAS0x9mf0U7fzSiP8wWUd8/wPOH2eb0+hfPUjEdRP/4spFkTCfRj/iaOOKYcwZ/3+AoDkwn0X/j3BNUzDu1eODqr1nEfBLtPHC9WB0KTitjutlUzCfRPuYQTIaCV4NisuiYb0JUDCIUN6bNoGs4va4Q9CIUm+jHuSL6XWMzkDgmXqIfoektRI5LP2K4azQxfpw1L5ZDI1lJPXFiWaEZzORbEtNDxdkdXzaTCFWx71+8ya5SCOoXMR0qG0H+aCYZqoFAPpJJ1/EMB4DNZOgIYwfgLTJUG0UFIJa7TqGIQDMZOolCDgSLCN2Nw7jeVlfyNzDuKuKuqpbTejx5upYoRyDQHFw7UGjAdQBgyWQDgCOpXBEAAsnOVT8SyUEVxwc8x2DKOP2lAFHExUCQ9bzCfqUQVKbjCgj22+p6QWG/UggOvU0hXgn3Io+zlxBCv2hIHl9+5HakfiRhjAbQiR+BIls4FRkA3Gpe5wAglNVi09mBwrFbJJ0IhOWKjjyeshyUaG38bW1LdZOy1GECongUrsDTgUCVeAaQqBpNBlCo4Fk6X2IZGt0IJBUA0sxuFTj6x0bWKCJWQGDoaySCiDXg7LpStWtmEd/DTLZDsOonnq8ZZWhFAiSbceZmhAHeouNcVmhOr8LgYEBTy7hY1kBRisOkc6CoxIGraW4nQXFzGde3ucoC/My8MRnmMg+Kv/IYmPVzQgS0p/94PKEoioPJsmkc91Bm4sCNNnel41bTFdzshXw3/qzeTTjb72Y7q3cTzvLd+DMZ99LkYr2XcEXed/KSf9zjwJLN2XUsmuywrFlex1vVdYLVvs5mVdcJVnkdbyVjlSbmdZVgJ+81XvJPfhwwbm6VDvO0CggXyQx+jcoQ1tgZtjUqQ1gjM/g1ZNg1WbTahVXkbfWSfzIBVlA4IGAAAACwCQCdASqwALAAPt1utFSopiUjIEgBEBuJaW7hdgEbQBPa9FXCDIIaqk122i4QZBDVUmu20XCDIIaqk122i4QZBDVUmu20XCDIIaqk122i4QZBDVUfgAD+/0T0AAAAAAA='}} />
      </Pressable>

      <Pressable onPress={ToHomeScreen}>
        <Image style={styles.HomeScreenImage} source={{uri: 'data:image/webp;base64,UklGRgoCAABXRUJQVlA4WAoAAAAQAAAAqgAAqgAAQUxQSIQBAAABJyAQSOFmFxERg+zWtttWulecAgiIBTioABpgAabu6b8pSfZNk75eRP8ngNzeBHhQui8cByfTcT5yqbheU5kfgBO54dMtEfkIJY0XPh9ZVHzbkti/AqfQ8f1IQRRQEpjQHByuQreFEyUswTq0R6wqalhDTRhyoBssWyAxQQnzgu2IUmHdgkwzcIgO+xFCHKAEmPA42F2Fz+ZOnGBx1uF1+KriBsXVhGN2dIPn5khcobjp8D28VHhvTqY7sIsO/5sLCYDiYCLiYLOKmM1sD4LFqCPqsKkSBsVkIjAb3BC5GUgoFLWO2EOrIvqqNMOBVTribyqSAIrCCxkO/qoix/bVngT4i44sx2dV0kD5aCJR/qAi0/aBpIJy0ZHrOKvIdj2Z6YCJqCLfRkQzITARMi50S2mjd0qgPSdOakHOJalfPzhYSHH/8d9/jLLntMyc+J3SoFtKjUgyKkQzIyKqZqT5tmpERNNoU7lZ8YHEpqiQ2BQ6rWIxSLebrHT90NtYie5620JHVlA4IGAAAACwCQCdASqrAKsAPt1utFSopiUjIEgBEBuJaW7hdgEbQBPa9FXCDIIaqk122i4QZBDVUmu20XCDIIaqk122i4QZBDVUmu20XCDIIaqk122i4QZBDVUfgAD+/0T0AAAAAAA='}}/>
      </Pressable>

      <Pressable onPress={ToProfileScreen}>
      <Image style={styles.ProfileScreenImage} source={{uri: 'data:image/webp;base64,UklGRvQBAABXRUJQVlA4WAoAAAAQAAAArwAArwAAQUxQSG4BAAABJyAQSOFmFxERg8QGdOO2kuQMIMAaQGA1gF1ogEji/kvlIvnY8x+I6P8EhP8frkREyZ+6+G5Pzpz85O7K4KeLIye/uLtx8MubE3m91qMPgwWLC5lFowdDpjiQWTjiXaUueEuqw1UWT2hDrqAtuQ6WWTFiHRob1lXjgjU1GharfkqqTvqMXHUuX6mhU5CmTvsOuupcvlKHzoZUdRJS1olIQSdAT42GNTQK1qGxYVWNhBWWXA/gQ66gHXIbWpAL8EOq4FWphBeWTA8OHjKbB2FJ9OBilog+hPO1PXg5X2nBzbye69GPkNczPQZX3x+9BW8z3VAMfz/ORETRGaLFT3YiJ2iyYCM8YnHCIlYlnLpYuSeQdzb4BjHZZLOXFxvt0VhebLZHU3mx4R4tTTbdDJ1sfDdT2Xyysux1IycD7iYyQ0YLA6NYYFADB8qmN1GaWmbYqHXgbFoDp2hNnKbFwEoZKepUpPR3s0zAUed/egFWUDggYAAAALAJAJ0BKrAAsAA+3W60VKimJSMgSAEQG4lpbuF2ARtAE9r0VcIMghqqTXbaLhBkENVSa7bRcIMghqqTXbaLhBkENVSa7bRcIMghqqTXbaLhBkENVR+AAP7/RPQAAAAAAA=='}}/>
      </Pressable>
</View>
<View style={styles.LoadScreenBottomLine}>
<HorizontalLine />
</View>
</View>

// Fix so i can show more numbers

)};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
    },
    container1: {
        backgroundColor: '#baedfd',
      },

// Buttons
    SavedButtons: {
        position:'absolute',
        marginTop:'25px',
        marginBottom:'726px',
    },

    SaveButton: {
        position: 'absolute',
        marginLeft:'40px',
        marginRight:'200px',

    },

    SaveText: {
        fontSize: '25px',
        fontWeight: '500',
    },

    RecButton: {
        //Spacing
        marginLeft: '200px',
        marginRight: '40px',
    },

    RecText: {
        fontSize: '25px',
        fontWeight: '500',
    },

// Text Options
    SavedOptions: {
    // Font
        position:'absolute',
        fontFamily: 'Inter',
        fontSize: '20px',
        fontWeight: '500',
    // Color
    // Margin
        marginTop: '100px',
        marginLeft: '20px',
        marginRight: '20px',
        marginBottom: '500px',
    },

    Option1: {
    // Font
    color: '#000',
    fontFamily: 'Inter',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '500',
// Box
    display: 'flex',
    width: '350px',
    height: '55px',
    gap: '10px',
    borderRadius: '15px',
    backgroundColor: '#D9D9D9',
    },

    Option2: {
    // Font
    color: '#000',
    fontFamily: 'Inter',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '500',
// Box
    display: 'flex',
    width: '350px',
    height: '55px',
    gap: '10px',
    borderRadius: '15px',
    backgroundColor: '#D9D9D9',
    marginTop: '25px',
     
    },

    Option3: {
    // Font
        color: '#000',
        fontFamily: 'Inter',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: '500',
    // Box
        display: 'flex',
        width: '350px',
        height: '55px',
        gap: '10px',
        borderRadius: '15px',
        backgroundColor: '#D9D9D9',
        marginTop: '25px',
    },

    Option4: {
        // Font
            color: '#000',
            fontFamily: 'Inter',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: '500',
        // Box
            display: 'flex',
            width: '350px',
            height: '55px',
            gap: '10px',
            borderRadius: '15px',
            backgroundColor: '#D9D9D9',
            marginTop: '25px',
        },

    Option5: {
            // Font
            color: '#000',
            fontFamily: 'Inter',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: '500',
            // Box
            display: 'flex',
            width: '350px',
            height: '55px',
            gap: '10px',
            borderRadius: '15px',
            backgroundColor: '#D9D9D9',
            marginTop: '25px',
        },

// Navigation bar thingy
  SavedScreenImage: {
    position: 'absolute',
    width: '49px',
    height: '49px',
    resizeMode: 'stretch',
    marginTop:'667px',
    marginLeft:'20px',
  },

  HomeScreenImage: {
    position: 'absolute',
    width: '42px',
    height: '42px',
    resizeMode: 'stretch',
    marginTop:'667px',
    marginLeft: '175px',
  },

  ProfileScreenImage: {
    position: 'absolute',
    width: '52px',
    height: '52px',
    resizeMode: 'stretch',
    marginTop:'667px',
    marginLeft: '315px',
  },

  LoadScreenBottomLine: {
    marginTop: '647px',
  }
});

export default LoadScreen;