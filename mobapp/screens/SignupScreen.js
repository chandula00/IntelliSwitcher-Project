import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SignupScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const signUp = () => {};

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#35155D",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{ height: 120, objectFit: "contain" }}
          source={require("../assets/lightbulb.png")}
        />
        <Text
          style={{
            fontSize: 40,
            marginTop: 10,
            marginBottom: 10,
            color: "#fff",
            fontFamily: "Raleway-SemiBold",
          }}
        >
          IntelliSwitcher
        </Text>
        <View style={{ paddingVertical: 30 }}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholder="Enter your email"
            placeholderTextColor="#ccc"
          />

          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="Enter your password"
            placeholderTextColor="#ccc"
          />

          <Text style={styles.label}>Re-enter Password:</Text>
          <TextInput
            style={styles.input}
            value={rePassword}
            onChangeText={setRePassword}
            secureTextEntry
            placeholder="Re-enter your password"
            placeholderTextColor="#ccc"
          />
        </View>
        <TouchableOpacity
          style={{
            paddingVertical: 10,
            paddingHorizontal: 30,
            borderRadius: 20,
            backgroundColor: "#FCD308",
            flexDirection: "row",
          }}
          onPress={signUp}
        >
          <Text style={{ fontSize: 18, fontWeight: "500", marginLeft: 10 }}>
            Create Account
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "#fff",
    paddingBottom: 5,
    fontSize: 17,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: 300,
    color: "#fff",
  },
});

export default SignupScreen;
