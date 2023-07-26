import { StyleSheet, View, Text, Pressable, Image, TouchableOpacity, Touchable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HorizontalLine from "../components/PageComponents/Line";
import GradientComponentBG from "../components/PageComponents/BGGradient";

const LoadScreen = () => {

    return (
        <View style={styles.container1}>

            {/* Saved & Recommended Buttons */}
            <View style={styles.SavedButtons}>
                <Text style={styles.SaveText}>Saved</Text>
            </View>

            {/* List Of Text */}
            <View style={styles.SavedOptions}>
                <TouchableOpacity>
                    <Text style={styles.Option1}>
                        Name                                       Number
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.Option2}>
                        Name                                       Number
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.Option3}>
                        Name                                       Number
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.Option4}>
                        Name                                       Number
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.Option5}>
                        Name                                       Number
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Bar at bottom */}
            <View style={styles.LoadScreenBottomLine}>
                <HorizontalLine />
            </View>
            <GradientComponentBG />
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
        // backgroundColor: '#baedfd',
    },

    // Buttons
    SaveText: {
        fontSize: 25,
        fontWeight: '500',
        marginLeft: 160,
    },

    // Text Options
    SavedOptions: {
        // Font
        position: 'absolute',
        fontSize: 20,
        fontWeight: '500',
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
        paddingTop: 15,
        paddingLeft: 20,
        width: 350,
        height: 55,
        gap: 10,
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
        paddingTop: 15,
        paddingLeft: 20,
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
        paddingTop: 15,
        paddingLeft: 20,
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
        paddingTop: 15,
        paddingLeft: 20,
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
        paddingTop: 15,
        paddingLeft: 20,
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