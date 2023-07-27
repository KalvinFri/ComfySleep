import * as React from "react";
import { Button, StyleSheet, Text, View, useState } from "react-native";
import Modal from "react-native-modal";
import { TouchableOpacity } from "react-native-web";

export const Popup = () => {

    const popupclick = () => {
        setIsModalVisible = false
    }

    return (
        <TouchableOpacity onPress={popupclick}>
            <Text>Popup</Text>
        </TouchableOpacity>
    )
}

const PopupScreen = () => {
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const handleModal = () => setIsModalVisible(() => !isModalVisible);
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

            <View style={{ flex: 1 }}>
                <Text>Hello!</Text>
                <Button title="Hide modal" onPress={handleModal} />
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
        position:"relative",
        left:0,
        marginTop: 108,
        marginVertical: 30,
        top: 78,
        width: 160,
        height: 60,
        paddingTop: 13,
        borderRadius: 15,
        backgroundColor: '#571A66',
        color:"pink",

    },

    popupButton: {
  color:"#ffdeff"
    },
});

export default PopupScreen;