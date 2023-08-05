import { StyleSheet, View, Text, Pressable, Image, TouchableOpacity, Touchable, ScrollView, SafeAreaView, FlatList } from "react-native";
import React, { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import HorizontalLine from "../components/PageComponents/Line";
import GradientComponentBG from "../components/PageComponents/BGGradient";
import { useFonts } from "@expo-google-fonts/shrikhand";
import axios from "axios";

const PreferenceScreen = () => {
    // Axios
    const api = axios.create({
        baseURL: `http://localhost:8080`
    })
    // Variables
    let [preferenceList, setPreferenceList] = useState();

    // Axios
    api.get('/preferences/data').then(res => {
        setPreferenceList(res.data);
    })

    // Fonts
    const [loaded] = useFonts({
        Shrikhand: require('../assets/fonts/Shrikhand-Regular.ttf')
    })
    if (!loaded) {
        return null;
    }


    const SetSlidertoPreferencePress = () => {
        setSliderValue(this.value)
    }


    return (
        <View style={styles.container1}>

            {/* Saved & Recommended Buttons */}
            <View style={styles.SavedButtons}>
                <Text style={styles.SaveText}>Mattress Preferences</Text>
            </View>

            {/* List Of Text */}

            <View style={styles.SavedOptions}>
                <SafeAreaView style={styles.container}>
                    <ScrollView style={styles.PreferenceList}>
                        {preferenceList?.map(preference =>

                            <TouchableOpacity style={styles.Options} onPress={SetSlidertoPreferencePress}>
                                <View style={styles.OptionsText}>
                                    <Text style={styles.Option}>{preference.name}</Text>
                                    <Text style={styles.Option}>{preference.value}</Text>
                                </View>
                            </TouchableOpacity>

                        )}
                    </ScrollView>
                </SafeAreaView>
            </View>


            <GradientComponentBG />
        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
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
        top: 200,
        left: 20,
        right: 20,
        height: 500,

    },
    PreferenceList: {
        contentSize: 20,
    },

    Options: {
        padding: 10,
        width: 350,
        height: 55,
        gap: 10,
        borderRadius: 15,
        backgroundColor: '#CD6FFE',
        marginBottom: 30,
        flex: 1,
        flexDirection: 'row', // To arrange the elements horizontally
        justifyContent: 'space-between', // To add space between the elements
    },

    OptionsText: {
        flex: 1,
        flexDirection: 'row', // To arrange the elements horizontally
        justifyContent: 'space-between', // To add space between the elements
        alignItems: 'center', // To center the elements vertically
    },
    Option: {
        // Font
        color: '#FFF',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '500',
    },

});

export default PreferenceScreen;

// display inline vs display block