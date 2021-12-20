import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, TextInputBase, TouchableOpacityBase, } from 'react-native'
import { PlusIcon, CheckIcon } from "../../../assets/Icons/Icon"

export default function SetYouUp() {
    return (
        <View style={styles.header}>
            <View style={{ marginTop: 100 }}>
                <Text style={styles.welocme}>
                    Let’s set you up
                </Text>
                <Text style={styles.grow}>
                    Sync your Aepods with the app for added functionality
                </Text>
                <View>
                    <View style={styles.IdBox}>
                        <View style={styles.left}>
                            <Text style={{ color: "#fff", fontSize: 20, paddingHorizontal: 20, paddingTop: 15 }}>Upstairs Pod</Text>
                            <Text style={{ color: "#fff", fontSize: 14, paddingHorizontal: 20 }}>ID: 1344295024</Text>
                        </View>
                        <View style={styles.right}>
                            <Text style={{ color: "#fff", justifyContent: "space-between", alignItems: "center", marginRight: 1 }}>Synced  </Text><CheckIcon />
                        </View>
                    </View>
                    <View style={styles.IdBox}>
                        <View style={styles.left}>
                            <Text style={{ color: "#fff", fontSize: 20, paddingHorizontal: 20, paddingTop: 15 }}>Upstairs Pod</Text>
                            <Text style={{ color: "#fff", fontSize: 14, paddingHorizontal: 20 }}>ID: 1344295024</Text>
                        </View>
                        <View style={styles.right}>
                            <Text style={{ color: "#fff", justifyContent: "space-between", alignItems: "center", marginRight: 8 }}>Synced</Text><CheckIcon />
                        </View>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.IdBox2}>
                            <Text style={{ color: "#Fff", }}>Sync new Aepod</Text>
                            <PlusIcon />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.container}>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity>
                        <Text style={styles.btn1}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-end",
        height: "34%"
    },
    header: {
        backgroundColor: '#0C9359',
        width: "100%",
        height: "100%",
    },
    welocme: {
        fontSize: 32,
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
    IdBox: {
        backgroundColor: "#25AC73",
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
    },
    IdBox2: {
        backgroundColor: "#25AC73",
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    left: {
        // width: "50%",
    },
    right: {
        marginLeft: 270,
        top: -45,
        flexDirection: "row",
        marginHorizontal: 10
    },


});