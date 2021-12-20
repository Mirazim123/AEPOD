import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, TouchableOpacityBase, } from 'react-native'
import EysIcon from '../../../assets/Icons/EysIcon';
import EyesIcon from '../../../assets/Icons/EyesIcon';
import { FacebookIcon, GoogleIcon, PasswodIcon, EmailIcon, } from "../../../assets/Icons/Icon"
import { useNavigation } from '@react-navigation/native';
import NameScreen from "../UserName/NameScreen"

export default function RegisterScreen() {
    const navigation = useNavigation()
    const [hidePass, setHidePass] = useState(true);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.textBox}>
                <Text style={styles.textHeader}>Register on Aepod</Text>
                <Text
                    style={styles.textFooter}>
                    Create an Aepod account, We can’t wait to have you.

                </Text>
            </View>
            <View style={styles.textInputBox}>
                <View style={styles.styleView}>
                    <EmailIcon style={styles.mail} />
                    <TextInput style={styles.textInput} placeholder="Email Address" placeholderTextColor="#fff" selectionColor={'#fff'} />
                </View>
                <View style={styles.stylePassword}>
                    <View style={styles.password}>
                        <PasswodIcon style={styles.iconPassword} />
                        <TextInput style={styles.textInput} maxLength={8} secureTextEntry={hidePass ? false : true} placeholder="Password" placeholderTextColor="#fff" selectionColor={'#fff'} />
                    </View>
                    <TouchableOpacity style={styles.eyes} onPress={() => setHidePass(!hidePass)}  >
                        {
                            hidePass ? (
                                <EyesIcon />

                            ) : (
                                <EysIcon />
                            )
                        }
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.textBoottonBox}>
                <Text style={styles.textBotton}>
                    Or Login using social media
                </Text>
                <View style={styles.bottonBox}>
                    <TouchableOpacity style={styles.bottonContainer}>
                        <View style={styles.botton}>
                            <FacebookIcon style={styles.icon} />
                            <Text style={styles.boxtext}>Facebook</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottonContainer}>
                        <View style={styles.botton}>
                            <GoogleIcon style={styles.icon} />
                            <Text style={styles.boxtext}>Google</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.registerBox}>
                <TouchableOpacity
                    style={styles.registerContaienr}>
                    <Text style={styles.styleText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>
                    navigation.navigate(NameScreen)}>
                    <Text style={styles.textFooter}>Already have an account? Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0c9359',
    },
    mail: {
        opacity: 0.9,
        top: -10,
    },
    iconPassword: {
        opacity: 0.9,
        top: -10,
    },

    eyes: {
        top: -10,
        marginRight: 3,
    },
    icon: {
        opacity: 0.9,
        marginRight: 10,
    },
    textBox: {
        marginHorizontal: 25,
        marginTop: 100,
    },
    textFooter: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 26,
        marginTop: 16,
        marginTop: 27,
    },
    textHeader: {
        color: '#fff',
        fontSize: 32,
        fontWeight: '500',
        fontStyle: 'normal',
    },
    textInputBox: {
        marginTop: 25,

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
    styleView: {
        flexDirection: 'row',
        alignItems: "flex-end",
        borderBottomWidth: 1.5,
        borderColor: "#fff",
        opacity: 0.8,
        marginHorizontal: 25,
    },
    stylePassword: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        borderBottomWidth: 1.5,
        borderColor: "#fff",
        opacity: 0.8,
        marginHorizontal: 25,
        justifyContent: 'space-between',
    },
    password: {
        alignItems: 'flex-end',
        flexDirection: 'row',
    },
    bottonBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textBotton: {
        fontSize: 16,
        color: '#fff',
        marginLeft: 5,
    },
    textBoottonBox: {
        marginVertical: 50,
        marginHorizontal: 20,
    },
    bottonContainer: {
        borderWidth: 1.5,
        borderColor: '#fff',
        width: 170,
        height: 60,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
    },
    botton: {
        flexDirection: 'row',
        alignItems: "center"
    },
    boxtext: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',

    },
    registerBox: {
        marginHorizontal: 20,
        alignItems: 'center',
    },
    registerContaienr: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        width: '100%',
        backgroundColor: '#fff'
    },
    styleText: {
        color: '#0c9359',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 16,
    },
    passwordText: {
        marginHorizontal: 25,
        marginVertical: 15,
    },
    textPassword: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
})