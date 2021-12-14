import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

// import "./styles.css";

export default function App() {
  const [def, setDef] = useState("asd");
  const handleChange = () => {
    setDef("fdsfdsfds");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello from React Native</Text>
      <Text>go go go</Text>
      <Text>asd</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
        // onChange={handleChange}
        defaultValue={def}
      />
      <Button title="Press me" onPress={handleChange} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: "red",
    color: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
