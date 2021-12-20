import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/Home/HomeScreen/HomeScreen';
import { HomeIcon, MenuIcon, UserIcon, UserIcon1 } from "../../assets/Icons/Icon"
import Settings from '../../screens/settings/Settings';

const Tab = createBottomTabNavigator();

// const Tabs = () => {
//   return (
//     <Tab.Navigator
//       tabBarOptions={{
//         showLabel: false
//       }}
//     >
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="01" component={SettingsScreen} />
//       <Tab.Screen name="0" component={SttingsScreen} />
//     </Tab.Navigator>
//   )
// }


// export default Tabs;


function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function SttingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Setting</Text>
    </View>
  );
}


export default function TabsNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        showLabel: false, style: {
          ...styles.shodow
        }
      }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarLabelPosition: "beside-icon",
        tabBarIcon: ({ focused }) => (
          <View>
            <Image
              source={require("../../assets/logo.png")}
              resizeMode='contain'
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? "#48AE82" : "#AAABAA"
              }}
            />
          </View>

        ),
      }} />
      <Tab.Screen name="SttingsScreen" component={SettingsScreen} options={{
        tabBarLabelPosition: "beside-icon",
        tabBarIcon: ({ focused }) => (
          <View>
            <Image
              source={require("../../assets/menu.png")}
              resizeMode='contain'
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? "green" : "grey"
              }}
            />
          </View>

        ),
      }} />
      <Tab.Screen name="SEttingsScreen" component={Settings} options={{
        tabBarLabelPosition: "beside-icon",
        tabBarIcon: ({ focused }) => (
          <View>
            <Image
              source={require("../../assets/Frame.png")}
              resizeMode='contain'
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? "green" : "grey"
              }}
            />
          </View>

        ),
      }} />



    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shodow: {

  }

})