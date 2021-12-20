import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Pencil, Icon, Bigsmall, Iconsmall, Bulb, Thermometer, Setting } from "../../assets/Icons/Icon"

export default function Settings() {
  return (
    <View style={styles.back}>
      <View style={styles.imageContainer}>
        <Image style={styles.img1} source={require('../../assets/kruk03.png')} />
        <Image style={styles.img2} source={require('../../assets/kruk02.png')} />
        <Image style={styles.img} source={require('../../assets/kruk01.png')} />
      </View>
      <View style={styles.Header}>
        <Text style={styles.HeaderText}>Hello, Isaac 🌿</Text>
        <TouchableOpacity><Pencil /></TouchableOpacity>
      </View>
      <View style={styles.backContainer}>
        <View style={styles.container}>
          <View style={styles.box}>
            <Image source={require('../../assets/basket.png')} />
            <Text style={styles.text}>Visit the Aepod Store</Text>
          </View>
          <TouchableOpacity>
            <Bigsmall />
          </TouchableOpacity>
        </View>
        <Text style={styles.text1}>Buy attachments and supplements for your Aepod. Orders typically arrive in 3 working days</Text>
      </View>
      <View style={styles.backContainer}>
        <View style={styles.box1}>
          <View style={styles.imgbox}>
            <Image style={{ width: 20, height: 20 }} source={require('../../assets/wifi.png')} />
            <Text style={styles.text01} >
              Language
            </Text>
          </View>
          <TouchableOpacity>
            <View style={{ flexDirection: "row", alignItems: "center", }}>
              <Text style={{ marginRight: 15 }}>English </Text>
              <Iconsmall />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.box1}>
          <View style={styles.imgbox}>
            <Bulb />
            <Text style={styles.text01} >
              Currency
            </Text>
          </View>
          <TouchableOpacity>
            <View style={{ flexDirection: "row", alignItems: "center", }}>
              <Text style={{ marginRight: 15 }}>USD</Text>
              <Iconsmall />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.box1}>
          <View style={styles.imgbox}>
            <Thermometer />
            <Text style={styles.text01} >
              Temperature Unit
            </Text>
          </View>
          <TouchableOpacity>
            <View style={{ flexDirection: "row", alignItems: "center", }}>
              <Text style={{ marginRight: 15 }}>Celsius </Text>
              <Iconsmall />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.box01}>
          <View style={styles.imgbox}>
            <Setting />
            <Text style={styles.text01} >
              Sync Settings
            </Text>
          </View>
          <TouchableOpacity>
            <View style={{ flexDirection: "row", alignItems: "center", }}>
              <Text style={{ marginRight: 15 }}></Text>
              <Iconsmall />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    height: "35%",
    flexDirection: "row"
  },
  img1: {
    marginTop: 70
  },
  img: {
    marginLeft: "-20%"
  },
  img2: {
    marginTop: -40,
    marginLeft: "-40%"
  },
  HeaderText: {
    fontSize: 28,
    fontWeight: "500",
    marginRight: 50
  },
  Header: {
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: "space-around"
  },
  back: {
    backgroundColor: "#E5E5E5",
    flex: 1
  },
  backContainer: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    marginTop: 25

  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderColor: "#AAABAA",
    paddingVertical: 15
  },
  box: {
    flexDirection: "row",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10
  },
  text1: {
    paddingVertical: 15
  },
  box1: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 10,
    paddingVertical: 2,
    borderBottomWidth: 0.5,
    borderColor: "#AAABAA",
  },
  box01: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 10,
    paddingVertical: 2,
  },
  text01: {
    fontSize: 15,
    paddingVertical: 15,
    color: "#06492C",
    marginLeft: 15,
    marginTop: -5
  },
  imgbox: {
    flexDirection: "row",
    alignItems: "center"
  }
})