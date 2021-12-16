import React, { Component, useState, useEffect } from "react";
import { View, Button, TextInput } from "react-native";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import { getFirestore } from "firebase/firestore/lite";
// import firebase from "firebase";

import { firebaseConfig } from "./../../firebase/config";
import "firebase/firestore";

import { signUpUserStart } from "../../redux/User/user.actions";
import { addCalendarStart } from "../../redux/CalendarTracker/calendarTracker.actions";
import { addTrainingScheduleStart } from "./../../redux/WeekTraining/weekTraining.actions";

import { useDispatch, useSelector } from "react-redux";
const Register = () => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [genre, setGenre] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [email, setEmail] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [gear, setGear] = useState("");
  const [injuries, setInjuries] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [payment, setPayment] = useState(false);
  const [month, setMonth] = useState(false);
  const [calendarTracker, setCalendarTracker] = useState({});
  // this.state = {
  //   email: "",
  //   password: "",
  //   name: "",
  // };

  // this.onSignUp = this.onSignUp.bind(this);
  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setGenre("");
    setHeight("");
    setWeight("");
    // setNickName("");
    setEmail("");
    setBirthDay("");
    setPassword("");
    setConfirmPassword("");
    setInjuries("");
    setGear("");
    setErrors([]);
  };
  const lastProgram = new Date();
  // console.log(lastProgram, "sadsadasdasdasasdsdasdaasdsad");
  const handlePress = async (event) => {
    event.preventDefault();
    dispatch(addCalendarStart({ email }));
    dispatch(await addTrainingScheduleStart({ email }));
    dispatch(
      await signUpUserStart({
        firstName,
        lastName,
        genre,
        height,
        weight,
        email,
        birthDay,
        password,
        confirmPassword,
        injuries,
        gear,
        payment,
        month,
        calendarTracker,
        lastProgram,
      })
    );
  };
  // onSignUp() {
  //   const { email, password, name } = this.state;
  //   firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((result) => {
  //       firebase
  //         .firestore()
  //         .collection("users")
  //         .doc(firebase.auth().currentUser.uid)
  //         .set({
  //           name,
  //           email,
  //         });
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  // render() {
  return (
    <View>
      <TextInput
        placeholder="name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextInput
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        placeholder="password"
        secureTextEntry={true}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* <TextInput
          placeholder="firstName"
          onChangeText={(firstName) => this.setState({ firstName })}
        />
        <TextInput
          placeholder="lastName"
          onChangeText={(lastName) => this.setState({ lastName })}
        />
        <TextInput
          placeholder="genre"
          secureTextEntry={true}
          onChangeText={(genre) => this.setState({ genre })}
        />
        <TextInput
          placeholder="height"
          onChangeText={(height) => this.setState({ height })}
        />
        <TextInput
          placeholder="weight"
          onChangeText={(weight) => this.setState({ weight })}
        />
        <TextInput
          placeholder="injuries"
          secureTextEntry={true}
          onChangeText={(injuries) => this.setState({ injuries })}
        />
        <TextInput
          placeholder="gear"
          secureTextEntry={true}
          onChangeText={(gear) => this.setState({ gear })}
        />
        <TextInput
          placeholder="birthDay"
          secureTextEntry={true}
          onChangeText={(birthDay) => this.setState({ birthDay })}
        />
        <TextInput
          placeholder="email"
          secureTextEntry={true}
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })}
        />
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })}
        /> */}
      <Button onPress={handlePress} title="Sign Up" />
    </View>
  );
};

export default Register;
