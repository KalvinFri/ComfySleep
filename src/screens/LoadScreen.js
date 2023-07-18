import { StyleSheet, View, Text, Pressable} from "react-native";

// Need to work on 
const ButtonPress1 = () => {
    console.log('Pressed Save');
}

const LoadScreen = () => {
return(
<View>
    <Pressable style={styles.Button1} onPress={ButtonPress1}> 
        Saved
    </Pressable> 
</View>
)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },

    Button1: {
    // Spacing
        position: 'absolute',
        marginRight: '250px',
        marginLeft: '75px',
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 20,
        paddingLeft: 20,
    // Font
        fontSize: '20px',
    // Border
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#000000',
        backgroundColor: '#a3a3a3'
    },

});

export default LoadScreen;