import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Modal, View, Text, TouchableNativeFeedback, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import { Switch } from 'react-native-switch'
import { Iconsmall, MenuIcon } from '../../../assets/Icons/Icon'

const deviceHeight = Dimensions.get("window").height
export class BottomPopup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }


    show = () => {
        this.setState({ show: true })
    }

    close = () => {
        this.setState({ show: false })
    }

    renderOutsideTouchable(onTouch) {
        const view = <View style={{ flex: 1, width: "100%" }} />
        if (!onTouch) return view

        return (
            <TouchableNativeFeedback onPress={onTouch} style={{ flex: 1, width: "100%" }}>
                {view}
            </TouchableNativeFeedback>
        )
    }
    state = {
        toggled: false
    }
    toggleSwitch = (value) => {
        this.setState({ toggled: value })
    }
    render() {
        let { show } = this.state

        const { onTouchableOutside, title } = this.props

        return (
            <Modal
                animationType={'slide', 'fade'}
                transparent={true}
                visible={show}
                onRequestClose={this.close}
            >
                <View style={{ flex: 1, backgroundColor: "#000000AA", justifyContent: "flex-end", }}>
                    {this.renderOutsideTouchable(onTouchableOutside)}
                    <View style={styles.background}>
                        <View>
                            <Text style={styles.title}>
                                Light Status
                            </Text>
                            <View style={styles.box}>
                                <Text style={styles.text} >
                                    Lights
                                </Text>
                                <Switch onValueChange={this.toggleSwitch}
                                    value={this.state.toggled} />
                            </View>
                            <View style={styles.box}>

                                <Text style={styles.text} >
                                    Automatic Settings
                                </Text>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                                        <Text style={{ marginRight: 15 }}>Off at Sunset </Text>
                                        <Iconsmall />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity>
                                <View style={{ marginLeft: 140, marginTop: 30, }}>
                                    <Text style={{ fontSize: 18, color: "#06492C", }}>Go to Settings</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal >
        )
    }
}


const styles = StyleSheet.create({

    box: {
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderTopColor: "#AAABAA",
        borderBottomColor: "#AAABAA",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginHorizontal: 10,
        paddingVertical: 2,

    },
    background: {
        backgroundColor: "#fff",
        width: "100%",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 10,
        maxHeight: deviceHeight * 0.4,
        paddingBottom: 50
    },
    title: {
        fontSize: 20,
        fontWeight: "500",
        color: "#06492C",
        marginTop: 25,
        marginLeft: 140,
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        paddingVertical: 15,
        color: "#06492C"
    },
    image: {
        width: 20,
        height: 20
    }
})