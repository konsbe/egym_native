import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [def, setDef] = useState("asd");
  const handleChange = () => {
    setDef("fdsfdsfds");
  };
  return (
    <View style={styles.container}>
      <Text>Hello from React Native</Text>
      <Text>go go go</Text>
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
});
