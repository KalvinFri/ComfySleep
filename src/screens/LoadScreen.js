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

  LoadScreenBottomLine: {
    marginTop: '729px',
  }
});

export default LoadScreen;