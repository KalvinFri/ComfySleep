import React, { useState, useEffect } from 'react';
import { Button, Pressable, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { TextInput } from "react-native";
import Slidercomp from "../Slider/Slider";
import HorizontalLine from "./Line";
import useSliderValue from '../../hooks/useSliderValue';

// export const Popup = (props) => {

//     const popupclick = () => {
//         setIsModalVisible = false
//     }

//     return (
//         <TouchableOpacity onPress={popupclick}>
//             <Text>Popup</Text>
//         </TouchableOpacity>
//     )
// }

export const PopupScreen = () => {
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    // object destructuring
    const { sliderValue } = useSliderValue()

    return (
        <View style={styles.container}>
            <View style={styles.separator} >
                <Button
                    title="Save"
                    onPress={handleModal}
                    style={styles.popupButton} />

            </View>
            <Modal
                isVisible={isModalVisible}
                animationIn="bounceInDown"
            >

                <View style={styles.SaveModal}>
                    <Text style={styles.CurrentStateText}>Current Value: {sliderValue}  </Text>
                    <Text style={styles.EnterNameText}>Enter Name</Text>
                    <HorizontalLine style={styles.HorizontalLine1} />
                    <TextInput clearTextOnFocus style={styles.SaveButtonInput} >
                        <Text>
                            Name
                        </Text>
                    </TextInput>
                        <TouchableOpacity onPress={handleModal} style={styles.CancelModalButton}>
                            <Text style={styles.CancelModalText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleModal} style={styles.SaveModalButton}>
                            <Text style={styles.SaveModalText}>Save</Text>
                        </TouchableOpacity>
                </View>
            </Modal>
        </View >
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    text: {
        fontSize: 16,
        fontWeight: "400",
        textAlign: "center",
    },
    separator: {
        position: "relative",
        left: 0,
        marginTop: 108,
        marginVertical: 30,
        top: 170,
        width: 160,
        height: 60,
        paddingTop: 13,
        borderRadius: 15,
        backgroundColor: '#571A66',
        color: "pink",

    },

    popupButton: {
        color: "#ffdeff",
    },

    SaveModal: {
        flex: 1,
        backgroundColor: '#CD6FFE',
        marginTop: 200,
        marginBottom: 350,
        marginLeft: 35,
        marginRight: 35,
        borderRadius: 15,
    },

    HorizontalLine1: {
        position: "absolute",
        top: 100,
    },

    CurrentStateText: {
        top: 30,
        left: 57,
        alignItems: 'center',
        color: '#FFDEFF',
        fontSize: 25,
        marginBottom:15,
    },

    EnterNameText: {
        top: 45,
        left: 80,
        color: '#56047C',
        fontSize: 25,
    },

    SaveButtonInput: {
        top: 55,
        left: 60,
        marginRight: 110,
        color: '#56047C',
        backgroundColor: 'FFF',
        fontSize: 25,
        borderWidth: 3,
        borderColor: "#56047C",
        borderRadius: 15,
    },

    CancelModalButton: {
        backgroundColor: "#571A66",
        top: 85,
        left: 30,
        width: 100,
        height: 50,
        borderRadius: 10,
    },

    CancelModalText: {
        height: 35,
        width: 100,
        paddingLeft: 10,
        paddingTop: 10,
        color: '#FFDEFF',
        fontSize: 25,
    },

    SaveModalButton: {
        backgroundColor: "#571A66",
        top: 35,
        left: 190,
        height: 50,
        width: 70,
        borderRadius: 10,
    },

    SaveModalText: {
        height: 50,
        width: 70,
        paddingLeft: 10,
        paddingTop: 10,
        marginRight: 230,
        color: '#FFDEFF',
        fontSize: 25,
    },

    HorizontalLine1: {
        top: 800,
        position:"relative",
    },
});

export default PopupScreen;