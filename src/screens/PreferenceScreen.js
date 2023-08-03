import { StyleSheet, View, Text, Pressable, Image, TouchableOpacity, Touchable, ScrollView, SafeAreaView, FlatList} from "react-native";
import React, { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import HorizontalLine from "../components/PageComponents/Line";
import GradientComponentBG from "../components/PageComponents/BGGradient";
import { useFonts } from "@expo-google-fonts/shrikhand";
import axios from "axios";
import { FlatList } from "react-native-web";

const PreferenceScreen = () => {

    const api = axios.create({
        baseURL: `http://localhost:8080`
    })

    let [preferenceList, setPreferenceList ] = useState();

    api.get('/preferences/data').then(res =>{
        setPreferenceList(res.data);
    })

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
            <SafeAreaView style={styles.container}>
                <FlatList>
                {preferenceList?.map(preference=>
               
                    <TouchableOpacity style={styles.Options}>
                        <View style={styles.OptionsText}>
                        <Text style={styles.Option}>{preference.name}</Text>
                        <Text style={styles.Option}>{preference.value}</Text>
                        </View> 
                    </TouchableOpacity>
                
                )}
            </FlatList>
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
        marginTop: 200,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 500,
        
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