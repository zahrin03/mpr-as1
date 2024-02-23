import { TextInput, Pressable, View, StyleSheet, Text } from "react-native"
import React from "react"
import CustomButton from "../components/CustomButton"

function StartGameScreen() {
    return (
        <View style={styles.container}>
            <TextInput />
            <CustomButton>Reset</CustomButton>
            <CustomButton>Confirm</CustomButton>
        </View>

    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#72063c',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black'
    }
})