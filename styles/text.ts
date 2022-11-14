import { Colors } from ".";
import { StyleSheet } from "react-native";

const textStyles = StyleSheet.create({
    title: {
      color: Colors.white.s10,
      fontWeight: "bold",
      fontSize: 30,
      textAlign: "center",
      padding: 10,
    },
    title2: {
      color: Colors.white.s10,
      fontWeight: "bold",
      fontSize: 15,
      textAlign: "center",
    },
    text: {
      color: Colors.white.s10,
      textAlign: "center",
      borderColor: "red",
      borderWidth: 1,
    }
  });

export default textStyles;