import React from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import { DrawerNavigatorItems } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";

export default Sidebar = (props) => (
  <ScrollView>
    <ImageBackground
      source={require("../assets/abstract.jpg")}
      style={{ width: undefined, padding: 16, paddingTop: 48 }}
    >
      {/* <Image source={recuire("../assets/snatch.jpg")} style={styles.profile} /> */}
      <Text style={styles.name}>My User Name</Text>
    </ImageBackground>
    <View style={styles.container}>
      <DrawerNavigatorItems {...props} />
    </View>
  </ScrollView>
);
const styles = StyleSheet.create({
  container: {
    // float: "right",
    flex: 1,
    // marginTop: 50,
    // float: "right",
    // display: "flex",

    // justifyContent: "flex-end",
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#FFF",
  },
  name: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "800",
    marginVertical: 8,
  },
});
