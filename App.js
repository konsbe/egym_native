import { StatusBar } from 'expo-status-bar';
import React from 'react';

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import * as firebase from "firebase";


// if (firebase.apps.length === 0) {
//   firebase.initializeApp(firebaseConfig)
// }
import { Provider } from "react-redux";
import { store } from "./redux/createStore";

import { NavigationContainer } from "@react-navigation/native";
// import { NavigationContainer } from '@react-navigation/native';
import LandingScreen from "./components/auth/Landing";
import RegisterScreen from "./components/auth/Register";
import { createStackNavigator } from "@react-navigation/stack";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAKGtxpI1t-NUD86ZbmOE12EXV418I7Bu4",
  authDomain: "gymapp-9291d.firebaseapp.com",
  projectId: "gymapp-9291d",
  storageBucket: "gymapp-9291d.appspot.com",
  messagingSenderId: "643174384847",
  appId: "1:643174384847:web:528390978fa691cacba3ba",
  measurementId: "G-LBG8EJ24TG",
};

firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landings">
          <Stack.Screen
            name="Landing"
            component={LandingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}







// import { StatusBar } from 'expo-status-bar';
// import React, { useState } from "react";
// import { StyleSheet, Text, View, TextInput, Button } from "react-native";


// import {
//   createAppContainer,
//   DrawerItems,
//   SafeAreaView,
//   contentOptions,
// } from "react-navigation";
// import { createDrawerNavigator } from "react-navigation-drawer";
// import { Dimensions } from "react-native";
// import { Feather } from "@expo/vector-icons";

// import {
//   ProfileScreen,
//   MyWokoutScreen,
//   HomeScreen,
//   TestScreen,
//   CoursesScreen,
//   SignOutScreen,
//   SignInScreen,
// } from "./screens";
// import SideBar from "./components/SideBar";
// const DrawerNavigator = createDrawerNavigator(
//   {
//     ProfileScreen: {
//       screen: ProfileScreen,
//       navigationOptions: {
//         drawerIcon: ({ tintColor }) => <Feather name="user" size={16} />,
//       },
//     },
//     MyWokoutScreen: {
//       screen: MyWokoutScreen,
//       navigationOptions: {
//         drawerIcon: ({ tintColor }) => <Feather name="earlybirds" size={16} />,
//       },
//     },

//     HomeScreen: {
//       screen: HomeScreen,
//       navigationOptions: {
//         drawerIcon: ({ tintColor }) => <Feather name="home" size={16} />,
//       },
//     },
//     TestScreen: {
//       screen: TestScreen,
//       navigationOptions: {
//         drawerIcon: ({ tintColor }) => <Feather name="trending-up" size={16} />,
//       },
//     },
//     CoursesScreen: {
//       screen: CoursesScreen,
//       navigationOptions: {
//         drawerIcon: ({ tintColor }) => (
//           <Feather name="shopping-bag" size={16} />
//         ),
//       },
//     },
//     SignOutScreen: {
//       screen: SignOutScreen,
//       navigationOptions: {
//         drawerIcon: ({ tintColor }) => <Feather name="log-out" size={16} />,
//       },
//     },
//     SignInScreen: {
//       screen: SignInScreen,
//       navigationOptions: {
//         drawerIcon: ({ tintColor }) => <Feather name="log-in" size={16} />,
//       },
//     },
//   },
//   {
//     contentComponent: (props) => <SideBar {...props} />,
//   }
// );

// export default createAppContainer(DrawerNavigator);
// // import "./styles.css";

// // export default function App() {
// //   const [def, setDef] = useState("asd");
// //   const handleChange = () => {
// //     setDef("fdsfdsfds");
// //   };
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Hello from React Native</Text>
// //       <Text>go go go</Text>
// //       <Text>asd</Text>
// //       <TextInput
// //         style={{
// //           height: 40,
// //           borderColor: "gray",
// //           borderWidth: 1,
// //         }}
// //         // onChange={handleChange}
// //         defaultValue={def}
// //       />
// //       <Button title="Press me" onPress={handleChange} />
// //       <StatusBar style="auto" />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   title: {
// //     backgroundColor: "red",
// //     color: 'green',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });
