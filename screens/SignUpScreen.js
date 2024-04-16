import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPass, setRepeatPass] = useState('');

  const handleSignUp = () => {
    if (name == '' || email == '' || password == '' || repeatPass == '') {
      Alert.alert("Please fill out all of the fields!");
    } else if (password != repeatPass) {
      Alert.alert("Passwords do not match!");
    } else {
      navigation.navigate('Home');
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gather</Text>
      <TextInput style={styles.input} placeholder="Name" onChangeText={text => setName(text)}/>
      <TextInput style={styles.input} placeholder="Email" onChangeText={text => setEmail(text)}/>
      <TextInput style={styles.input} placeholder="Password" onChangeText={text => setPassword(text)} />
      <TextInput style={styles.input} placeholder="Repeat Password" onChangeText={text => setRepeatPass(text)}/>
      <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  signupButton: {
    width: "100%",
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  signupButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    padding: 10,
  },
  backButtonText: {
    color: "gray",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SignupScreen;
