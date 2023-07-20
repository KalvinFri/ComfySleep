import { StyleSheet, View, Text, Pressable} from "react-native";
import { Button } from "react-native";

const ButtonPress1 = () => {
    console.log('Pressed Save');
}

const ButtonPress2 = () => {
    console.log('Pressed Recommended');
}

const LoadScreen = () => {
return(
<View>
 <View style={styles.SavedButtons}>

{/* Saved Button */}
    <Pressable style={styles.SaveButton} onPress={ButtonPress1}>
      <Text style={styles.SaveText}>Saved</Text>
    </Pressable>

{/* Recommendation button */}
    <Pressable style={styles.RecButton} onPress={ButtonPress2}>
        <Text>Recommended</Text>
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
 </View>
</View>

// Fix so i can show more numbers

)};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },

// Buttons

    SavedButtons: {
        position:'absolute',
        marginTop:'50px',
        marginBottom:'726px',
    },

    SaveButton: {
        position: 'absolute',
        marginLeft:'40px',
        marginRight:'200px',
        padding:'11px',
        backgroundColor:'#D9D9D9',

    },

    SaveText: {

    },

    RecButton: {
        //Spacing
        marginLeft: '230px',
        marginRight: '40px',
        padding: '11px' ,
        backgroundColor:'#D9D9D9',
    },

// Text
    SavedOptions: {
    // Font
        position:'absolute',
        color: '#000',
        fontFamily: 'Inter',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 'normal',
    // Color
        backgroundColor: '#D9D9D9',
    // Margin
        marginTop: '100px',
        marginLeft: '20px',
        marginRight: '20px',
    },

    Option1: {
    // Font
        color: '#000',
        fontFamily: 'Inter',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 'normal',
    // Padding
        display: 'flex',
        padding: '11px',
        alignItems: 'flexStart',
        gap: '8px',
        backgrounColor: '#D9D9D9',
    // Spacing
    },
    Option2: {
    // Font
        color: '#000',
        fontFamily: 'Inter',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 'normal',
    // Padding
        padding: '11px',
        marginTop: '50px',
        marginBottom: '477px',
        backgrounColor: '#D9D9D9',
    },

    Option3: {
    // Font
        color: '#000',
        fontFamily: 'Inter',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 'normal',
    // Padding
        padding: '11px',
        marginTop: '100px',
        marginBottom: '450px',
        backgrounColor: '#D9D9D9',

    },
});

export default LoadScreen;