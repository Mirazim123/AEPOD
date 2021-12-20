import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, TextInputBase, } from 'react-native'
import { UserIcon } from "../../../assets/Icons/Icon"


export default function NameScreen() {
    return (
        <View style={styles.header}>
            <View style={{ marginTop: 100 }}>
                <Text style={styles.welocme}>
                    Let’s personalize your experience
                </Text>
                <Text style={styles.grow}>
                    What can we call you? Could be your name, a nickname or something funny ☺.
                </Text>
                <View style={styles.styleView}>
                    <UserIcon style={styles.mail} />
                    <TextInput style={styles.textInput} placeholder="Name" placeholderTextColor="#fff" selectionColor={'#fff'} />
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity>
                        <Text style={styles.btn1}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-end",
        height: "55%"
    },
    header: {
        backgroundColor: '#0C9359',
        width: "100%",
        height: "100%",
    },
    welocme: {
        fontSize: 28,
        marginLeft: 20,
        color: "#fff"
    },
    grow: {
        fontSize: 18,
        marginHorizontal: 20,
        marginVertical: 20,
        color: "#fff"
    },
    btn1:
    {
        backgroundColor: "#fff",
        textAlign: "center",
        width: 350,
        paddingVertical: 15,
        borderRadius: 10,
        color: "green",
        fontSize: 17,
        marginVertical: 15,
    },
    styleView: {
        flexDirection: 'row',
        alignItems: "flex-end",
        borderBottomWidth: 1.5,
        borderColor: "#fff",
        opacity: 0.8,
        marginHorizontal: 25,
    },
    textInput: {
        fontSize: 18,
        borderColor: '#fff',
        marginTop: 35,
        paddingBottom: 10,
        paddingHorizontal: 10,
        color: '#fff',
        width: "85%",
    },
    mail: {
        opacity: 0.9,
        top: -10,
    },


});