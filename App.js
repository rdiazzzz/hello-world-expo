import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
  useColorScheme,
} from "react-native";
import { version } from "./src/config.json";
import * as Linking from "expo-linking";

export default function App() {
  // detect device dark or light mode
  const colorScheme = useColorScheme();

  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  const themeIconStyle =
    colorScheme === "light" ? styles.lightIcon : styles.darkIcon;

  const themeText = colorScheme === "light" ? "Light mode" : "Dark mode";

  const themeTextStyle =
    colorScheme === "light" ? styles.lightText : styles.darkText;

  // toast message
  function showToast() {
    console.log("Hello World clicked!");
    ToastAndroid.showWithGravity(
      "Hello World",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  }

  function switchThemeToast() {
    ToastAndroid.showWithGravity(
      "Switch Light or Dark mode (Coming Soon)",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  }

  function urlSupport() {
    ToastAndroid.showWithGravity(
      "Thanks for the Support !",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
    Linking.openURL("https://sociabuzz.com/zenkaa7/tribe");
  }

  // function switchTheme() {
  //   if (colorScheme === "light") {
  //     console.log("light");
  //   } else {
  //     console.log("dark");
  //   }
  // }

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <StatusBar style="auto" />

      <TouchableOpacity onPress={showToast}>
        <Text style={styles.text}>Hello World</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[themeIconStyle]} onPress={switchThemeToast} />
      <Text style={[themeTextStyle]}>{themeText}</Text>

      <Text style={styles.version}>{version}</Text>

      <TouchableOpacity onPress={urlSupport}>
        <Text style={styles.support}>❤️</Text>
      </TouchableOpacity>
    </View>
  );
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  lightContainer: {
    backgroundColor: "#fff",
  },

  darkContainer: {
    backgroundColor: "#000",
  },

  text: {
    color: "#4287f5",
    fontSize: 100,
  },

  lightIcon: {
    backgroundColor: "#FFCC66",
    width: 30,
    height: 30,
    position: "absolute",
    top: 30,
    left: 10,
    borderRadius: 50,
  },

  darkIcon: {
    backgroundColor: "#4287f5",
    width: 30,
    height: 30,
    position: "absolute",
    top: 30,
    left: 10,
    borderRadius: 50,
  },

  lightText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFCC66",
    position: "absolute",
    top: 27,
    left: 50,
  },

  darkText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#4287f5",
    position: "absolute",
    top: 27,
    left: 50,
  },

  version: {
    color: "#565656",
    opacity: 50,
    position: "absolute",
    bottom: 0,
    right: 0,
  },

  support: {
    fontSize: 25,
    position: "absolute",
    bottom: 480,
    left: 160,
  },
});
