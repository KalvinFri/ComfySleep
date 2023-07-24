import { StyleSheet, View, Text, Pressable, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import HorizontalLine from "../components/Line";

const LoadScreen = () => {

return(
<View style={styles.container1}>

{/* Saved & Recommended Buttons */}
 <View style={styles.SavedButtons}>
    <Text style={styles.SaveText}>Saved</Text>
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

{/* Bar at bottom */}
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
    SaveText: {
        fontSize: '25px',
        fontWeight: '500',
        marginLeft: '150px',
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
    marginTop: '700px',
  }
});

export default LoadScreen;