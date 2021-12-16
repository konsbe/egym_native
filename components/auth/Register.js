import React, { Component, useState } from "react";
import { View, Button, TextInput, Picker, AppRegistry } from "react-native";
// import DatePicker from "react-native-datepicker";
import DatePicker from "react-native-date-picker";

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
    // const [date, setDate] = useState(new Date());
    // const [open, setOpen] = useState(false);
    this.state = {
      firstName: "",
      lastName: "",
      genre: "",
      height: "",
      weight: "",
      email: "",
      password: "",
      injuries: "",
      gear: "",
      date: new Date(),
      open: false,
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
            firstName,
            lastName,
            genre,
            height,
            weight,
            email,
            injuries,
            gear,
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
          placeholder="firstname"
          onChangeText={(firstName) => this.setState({ firstName })}
        />
        <TextInput
          placeholder="lastname"
          onChangeText={(lastName) => this.setState({ lastName })}
        />
        <Picker
          selectedValue={this.state.genre}
          // style={{ height: 50, width: 150 }}
          onValueChange={(genre) => this.setState({ genre })}
        >
          <Picker.Item label="men" value="men" />
          <Picker.Item label="women" value="women" />
        </Picker>
        <DatePicker
          modal
          open={this.state.open}
          date={this.state.date}
          // onConfirm={(date, open) => {
          //   (open) => this.setState({ open });
          //   (date) => this.setState({ date });
          // }}
        />
        <TextInput
          placeholder="heigh"
          onChangeText={(heigh) => this.setState({ heigh })}
        />
        <TextInput
          placeholder="weight"
          onChangeText={(weight) => this.setState({ weight })}
        />
        <TextInput
          placeholder="injuries"
          onChangeText={(injuries) => this.setState({ injuries })}
        />
        <TextInput
          placeholder="gear"
          onChangeText={(gear) => this.setState({ gear })}
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
