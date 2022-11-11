import { Colors } from ".";
import { Dimensions, StyleSheet } from "react-native";

var width = Dimensions.get("window").width; //full width
//var height = Dimensions.get("window").height; //full height

const containerStyles = StyleSheet.create({
    scrollContainer: {
      flex: 1,
      width: width,
    },
    parentContainer: {
      width: "100%",
      //padding: 20,
      //margin: 5,
    },
  });

export default containerStyles;