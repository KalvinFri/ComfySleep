import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HorizontalLine from "../components/PageComponents/Line";

const LoadScreen = () => {

    return (
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

    )
};

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
        fontSize: 25,
        fontWeight: '500',
        marginLeft: 150,
    },

    // Text Options
    SavedOptions: {
        // Font
        position: 'absolute',
        fontSize: 20,
        fontWeight: '500',
        // Color
        // Margin
        marginTop: 100,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 500,
    },

    Option1: {
        // Font
        color: '#FFF',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '500',
        // Box
        display: 'flex',
        width: 350,
        height: 55,
        gap: 10,
        borderRadius: "50%",
        backgroundColor: '#571A66',
    },

    Option2: {
        // Font
        color: '#FFF',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '500',
        // Box
        display: 'flex',
        width: 350,
        height: 55,
        gap: 10,
        borderRadius: 15,
        backgroundColor: '#571A66',
        marginTop: 25,

    },

    Option3: {
        // Font
        color: '#FFF',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '500',
        // Box
        display: 'flex',
        width: 350,
        height: 55,
        gap: 10,
        borderRadius: 15,
        backgroundColor: '#571A66',
        marginTop: 25,
    },

    Option4: {
        // Font
        color: '#FFF',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '500',
        // Box
        display: 'flex',
        width: 350,
        height: 55,
        gap: 10,
        borderRadius: 15,
        backgroundColor: '#571A66',
        marginTop: 25,
    },

    Option5: {
        // Font
        color: '#FFF',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '500',
        // Box
        display: 'flex',
        width: 350,
        height: 55,
        gap: 10,
        borderRadius: 15,
        backgroundColor: '#571A66',
        marginTop: 25,
    },

    LoadScreenBottomLine: {
        marginTop: 637,
    }
});

export default LoadScreen;