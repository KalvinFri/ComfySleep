import { StyleSheet, View, Text, Pressable, Image, TouchableOpacity, Touchable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HorizontalLine from "../components/PageComponents/Line";
import GradientComponentBG from "../components/PageComponents/BGGradient";
import { useFonts } from "@expo-google-fonts/shrikhand";
const PreferenceScreen = () => {

    const [loaded] = useFonts({
        Shrikhand: require('../assets/fonts/Shrikhand-Regular.ttf')
    })

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container1}>

            {/* Saved & Recommended Buttons */}
            <View style={styles.SavedButtons}>
                <Text style={styles.SaveText}>Mattress Preferences</Text>
            </View>

            {/* List Of Text */}
            <View style={styles.SavedOptions}>
                <TouchableOpacity style={styles.Option1}>
                    <Text style={styles.Option1Text}>
                        Name                                       Number
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Option2}>
                    <Text style={styles.Option2Text}>
                        Name                                       Number
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Option3}>
                    <Text style={styles.Option3Text}>
                        Name                                       Number
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Option4}>
                    <Text style={styles.Option4Text}>
                        Name                                       Number
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Option5}>
                    <Text style={styles.Option5Text}>
                        Name                                       Number
                    </Text>
                </TouchableOpacity>
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
        left: 55,
        marginTop: 100,
        color: '#FFFFFF',
        fontFamily: 'Shrikhand',
    },

    // Text Options
    SavedOptions: {
        // Font
        position: 'absolute',
        fontSize: 20,
        fontWeight: '500',
        // Margin
        marginTop: 200,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 500,
    },

    Option1: {
        paddingTop: 15,
        paddingLeft: 20,
        width: 350,
        height: 55,
        gap: 10,
        borderRadius: 15,
        backgroundColor: '#CD6FFE',
    },

    Option1Text: {
        // Font
        color: '#FFF',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '500',
    },

    Option2: {
        paddingTop: 15,
        paddingLeft: 20,
        width: 350,
        height: 55,
        gap: 10,
        backgroundColor: '#CD6FFE',
        marginTop: 25,
        borderRadius: 15,
    },

    Option2Text: {
        // Font
        color: '#FFF',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '500',
    },

    Option3: {
        display: 'flex',
        paddingTop: 15,
        paddingLeft: 20,
        width: 350,
        height: 55,
        gap: 10,
        borderRadius: 15,
        backgroundColor: '#CD6FFE',
        marginTop: 25,
    },

    Option3Text: {
        // Font
        color: '#FFF',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '500',
    },

    Option4: {
        paddingTop: 15,
        paddingLeft: 20,
        width: 350,
        height: 55,
        gap: 10,
        backgroundColor: '#CD6FFE',
        marginTop: 25,
        borderRadius: 15,
    },

    Option4Text: {
        // Font
        color: '#FFF',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '500',
    },

    Option5: {
        paddingTop: 15,
        paddingLeft: 20,
        width: 350,
        height: 55,
        gap: 10,
        backgroundColor: '#CD6FFE',
        marginTop: 25,
        borderRadius: 15,
    },

    Option5Text: {
        // Font
        color: '#FFF',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '500',
    },
});

export default PreferenceScreen;