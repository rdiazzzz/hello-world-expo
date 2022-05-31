import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";

export default function App() {
  function showToast() {
    ToastAndroid.showWithGravity(
      "Hello World",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  }

  function switchModeToast() {
    ToastAndroid.showWithGravity(
      "Switch Light or Dark mode",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <TouchableOpacity onPress={showToast}>
        <Text style={styles.text}>Hello World</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.switchMode} onPress={switchModeToast} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#4287f5",
    fontSize: 100,
  },

  switchMode: {
    backgroundColor: "#FFCC66",
    width: 30,
    height: 30,
    position: "absolute",
    top: 30,
    left: 20,
    borderRadius: 50,
  },
});
