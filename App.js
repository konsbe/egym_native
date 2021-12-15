import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from "react-native"
import { Feather } from '@expo/vector-icons'

import {
  ProfileScreen,
  MyWokoutScreen,
  HomeScreen,
  TestScreen,
  CoursesScreen,
  SignOutScreen,
  SignInScreen
} from "./screens"
import SideBar from './components/SideBar';
const DrawerNavigator = createDrawerNavigator({
  ProfileScreen,
  MyWokoutScreen,
  HomeScreen,
  TestScreen,
  CoursesScreen,
  SignOutScreen,
  SignInScreen,
}, {
  contentComponent: props => <SideBar {...props}/>
});

export default createAppContainer(DrawerNavigator);
// import "./styles.css";

// export default function App() {
//   const [def, setDef] = useState("asd");
//   const handleChange = () => {
//     setDef("fdsfdsfds");
//   };
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Hello from React Native</Text>
//       <Text>go go go</Text>
//       <Text>asd</Text>
//       <TextInput
//         style={{
//           height: 40,
//           borderColor: "gray",
//           borderWidth: 1,
//         }}
//         // onChange={handleChange}
//         defaultValue={def}
//       />
//       <Button title="Press me" onPress={handleChange} />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     backgroundColor: "red",
//     color: 'green',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
