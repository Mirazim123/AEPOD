import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TouchableOpacityBase, TouchableNativeFeedbackBase, TouchableOpacityComponent, Touchable, TouchableHighlight } from 'react-native'
import { Moslashtirish, BigSmall, Wind, HomeIcon, Adrop, Thermometer, Bulb, Wifi, Vesi, Sveti } from "../../../assets/Icons/Icon"
import MenuScreen from '../../MenuScreen/MenuScreen'
import { BottomPopup } from './BottomPopup'

export default function HomeScreen() {
    let popupRef = React.createRef()
    const onShowPopup = () => {
        popupRef.show()
    }
    const onClosePopup = () => {
        popupRef.close()
    }
    const navigation = useNavigation()
    return (
        <View>
            <View style={styles.Header}>
                <Text style={styles.HeaderText}>Hello, Isaac 🌿</Text>
                <TouchableOpacity><Moslashtirish /></TouchableOpacity>
            </View>
            <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
                <Image style={styles.image} source={require('../../../assets/12.png')} />
                <Image style={styles.image} source={require('../../../assets/12.png')} />
                <Image style={styles.image} source={require('../../../assets/12.png')} />
            </ScrollView>
            <View style={{ alignItems: "center" }} >
                <View style={styles.Box}>
                    <View style={{ marginRight: 50 }}>
                        <Text style={{ marginBottom: 5, fontSize: 18, color: "#111" }}>Charlie’s Garden</Text>
                        <Text style={{ fontSize: 14, opacity: 0.3, color: "#111" }}>ID: 1344295024</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate(MenuScreen)}><BigSmall /></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.top}>
                    <Image style={{ width: 100 }} source={require('../../../assets/13.png')} />
                </View>
            </View>
            <View style={{ marginTop: -20 }}>
                <ScrollView style={{ height: "45%" }}>
                    <View style={styles.container4}>
                        <TouchableOpacity Press={onShowPopup}>
                            <View style={styles.container} >
                                <Wind />
                                <Text style={styles.text1}>Humidityeys</Text>
                                <Text style={styles.text2}>74%</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity Press={onShowPopup}>
                            <View style={styles.container} >
                                <Thermometer />
                                <Text style={styles.text1}>Temperature</Text>
                                <Text style={styles.text2}>23°c</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity Press={onShowPopup}>
                            <View style={styles.container} >
                                <Adrop />
                                <Text style={styles.text1}>Water Level</Text>
                                <Text style={styles.text2} >85%</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container3} >
                        <TouchableOpacity onPress={onShowPopup}>
                            <View style={styles.container} >
                                <Image style={{ width: 20, height: 20 }} source={require('../../../assets/wifi.png')} />
                                <Text style={styles.text1}>Connectivity</Text>
                                <Text style={styles.text2}>Online</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onShowPopup}>
                            <View style={styles.container2} >
                                <Text style={styles.textbig1}>Nutrient Level</Text>
                                <View style={styles.textbig2}>
                                    <Vesi /><Text style={styles.textbig3}>5 grams left</Text>
                                </View>
                                <View style={styles.box}>
                                    <Sveti /><Text style={styles.textbig3}>Refill in 2 days</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.box1} >
                        <TouchableOpacity onPress={onShowPopup}>
                            <View style={styles.container2} >
                                <Text style={styles.textbig1}>Nutrient Level</Text>
                                <View style={styles.textbig2}>
                                    <Vesi /><Text style={styles.textbig3}>5 grams left</Text>
                                </View>
                                <View style={styles.box}>
                                    <Sveti /><Text style={styles.textbig3}>Refill in 2 days</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={onShowPopup}>
                            <View style={styles.container} >
                                <Bulb />
                                <Text style={styles.text1}>Connectivity</Text>
                                <Text style={styles.text2}>Online</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            <BottomPopup
                title="Light Status"
                ref={(target) => popupRef = target}
                onTouchableOutside={onClosePopup} />
        </View >
    )
}


const styles = StyleSheet.create({
    HeaderText: {
        fontSize: 28,
        fontWeight: "500",
        marginRight: 50
    },
    Header: {
        marginTop: 35,
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: "space-around"
    },
    image: {
        marginVertical: 35,
        marginHorizontal: 10
    },
    Box: {
        top: -80,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingHorizontal: 35,
        justifyContent: "space-between",
        paddingVertical: 10,
        borderRadius: 10,
        elevation: 2,
        shadowOpacity: 0.2,
        shadowColor: '#000',
        shadowOffset: { height: 15, width: 0, },
        shadowRadius: 15,
    },
    container: {
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 17,
        marginHorizontal: 5,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 1,
        // },
        // shadowOpacity: 0.20,
        // shadowRadius: 1.41,

        // elevation: 2,
    },
    container1: {
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginHorizontal: 5,
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    top: {
        top: - 50
    },
    container2: {
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        paddingRight: 65,
        marginHorizontal: 5,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 5,
    },
    container3: {
        flexDirection: "row",
        marginHorizontal: 15,
        paddingVertical: 10,
    },
    container4: {
        flexDirection: "row",
        marginHorizontal: 15,
    },
    text1: {
        marginVertical: 10,
        color: "#06492C",
    },
    text2: {
        fontSize: 18,
        color: "#06492C",
    },
    textbig1: {
        fontSize: 14
    },
    textbig2: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10
    }, textbig3: {
        color: "#06492C",
        fontSize: 18,
        paddingLeft: 7
    },
    box: {
        flexDirection: "row",
        alignItems: "center",
    },
    box1: {
        flexDirection: "row",
        marginHorizontal: 15,
    }

});