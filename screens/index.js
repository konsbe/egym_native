import React from "react";

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Screen from "./Screen";

export const ProfileScreen = ({ navigation }) => (
  <Screen style={styles.container} navigation={navigation} name="Profile" />
);
export const MyWokoutScreen = ({ navigation }) => (
  <Screen navigation={navigation} name="My Workout" />
);
export const HomeScreen = ({ navigation }) => (
  <Screen navigation={navigation} name="Home" />
);
export const TestScreen = ({ navigation }) => (
  <Screen navigation={navigation} name="Test" />
);
// export const ProfileScreen = ({navigation}) => <Screen navigation={navigation} name="Profile"/>
export const CoursesScreen = ({ navigation }) => (
  <Screen navigation={navigation} name="Courses" />
);
export const SignInScreen = ({ navigation }) => (
  <Screen navigation={navigation} name="SignIN" />
);
export const SignOutScreen = ({ navigation }) => (
  <Screen navigation={navigation} name="SignOut" />
);
const styles = StyleSheet.create({
  container: {
    color: "red",

    // textAlign: "right",
  },
});
