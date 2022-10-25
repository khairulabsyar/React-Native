import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";

export default function App() {
  const [newText, setNewText] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ImageBackground
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
          }}
          resizeMode="contain"
          style={styles.image}
        >
          <TouchableOpacity
            onPress={() => alert("Hello, world!")}
            style={{ backgroundColor: "lightpink" }}
          >
            <Text style={{ fontSize: 20, color: "#fff" }}>I'm a button </Text>
          </TouchableOpacity>
        </ImageBackground>
        <TextInput
          style={styles.input}
          placeholder="Hello World"
          onChangeText={setNewText}
        ></TextInput>
        <Text style={styles.text}>{newText}</Text>
        <StatusBar style="auto" />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 385,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "purple",
    fontWeight: "bold",
    fontSize: 30,
    backgroundColor: "lightgreen",
    width: "100%",
  },
  input: {
    backgroundColor: "lightpink",
    width: "80%",
    padding: 10,
    borderWidth: 1,
    height: 45,
    flex: -1,
  },
});
