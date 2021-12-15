import React, { Component } from "react";
import { View, Button, TextInput } from "react-native";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import { getFirestore } from "firebase/firestore/lite";
// import firebase from "firebase";

import { firebaseConfig } from "./../../firebase/config";
import "firebase/firestore";

export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
    };

    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    const { email, password, name } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .set({
            name,
            email,
          });
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="name"
          onChangeText={(name) => this.setState({ name })}
        />
        <TextInput
          placeholder="email"
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })}
        />

        <Button onPress={() => this.onSignUp()} title="Sign Up" />
      </View>
    );
  }
}

export default Register;

// <TextInput
//         placeholder="firstName"
//         onChangeText={(firstName) => this.setState({ firstName })}
//       />
//       <TextInput
//         placeholder="lastName"
//         onChangeText={(lastName) => this.setState({ lastName })}
//       />
//       <TextInput
//         placeholder="genre"
//         secureTextEntry={true}
//         onChangeText={(genre) => this.setState({ genre })}
//       />
//       <TextInput
//         placeholder="height"
//         onChangeText={(height) => this.setState({ height })}
//       />
//       <TextInput
//         placeholder="weight"
//         onChangeText={(weight) => this.setState({ weight })}
//       />
//       <TextInput
//         placeholder="injuries"
//         secureTextEntry={true}
//         onChangeText={(injuries) => this.setState({ injuries })}
//       />
//       <TextInput
//         placeholder="gear"
//         secureTextEntry={true}
//         onChangeText={(gear) => this.setState({ gear })}
//       />
//       <TextInput
//         placeholder="birthDay"
//         secureTextEntry={true}
//         onChangeText={(birthDay) => this.setState({ birthDay })}
//       />
//       <TextInput
//         placeholder="email"
//         secureTextEntry={true}
//         onChangeText={(email) => this.setState({ email })}
//       />
//       <TextInput
//         placeholder="password"
//         secureTextEntry={true}
//         onChangeText={(password) => this.setState({ password })}
//       />
//       <TextInput
//         placeholder="password"
//         secureTextEntry={true}
//         onChangeText={(password) => this.setState({ password })}
//       />
