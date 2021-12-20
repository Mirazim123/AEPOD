import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableOpacityBase } from 'react-native'
import LoginScreen from "../Login/LoginScreen/LoginScreen"
import RegisterScreen from '../Login/Register/RegisterScreen';


export default function () {
    const navigation = useNavigation()
    return (
        <View style={styles.header}>
            <Image source={require('../../assets/11.png')} style={{ marginTop: 40, marginLeft: 20, }} />
            <Image style={styles.img} source={require('../../assets/kruk1.png')} />
            <Image style={styles.img} source={require('../../assets/kruk2.png')} />
            <Image style={styles.img1} source={require('../../assets/kruk3.png')} />
            <View>
                <View style={styles.container}>
                    <Text style={styles.welocme}>Welcome to Aepod</Text>
                    <Text style={styles.grow}>Grow plants easily from your home with our award-winning pods</Text>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity onPress={() => navigation.navigate(RegisterScreen)} >
                            <Text style={styles.btn1}
                            >Register</Text>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate(LoginScreen)}>
                            <Text style={styles.btn2}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-end",
        // height: "92%",
        marginTop: -500
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
    btn2: {
        textAlign: "center",
        width: 350,
        paddingVertical: 15,
        borderRadius: 10,
        color: "#fff",
        borderWidth: 2,
        borderColor: "white",
        fontSize: 17
    },
    img: {
        marginTop: -170,
        marginLeft: -50
    },
    img1: {
        marginTop: -170,
        // marginLeft: -50
    },
})

