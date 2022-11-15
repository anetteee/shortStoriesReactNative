import { Colors } from ".";
import { Dimensions, StyleSheet } from "react-native";

var width = Dimensions.get("window").width; //full width
//var height = Dimensions.get("window").height; //full height

export const containers = StyleSheet.create({
    headerContainer: {
      paddingTop:10,
      minHeight: 120,
      textAlign: "center",
      alignContent: "center"
    },
  
    searchContainer: {
      minHeight: 120,
    },
    filterContainer: {
      marginTop: 30,
      paddingTop:10,
      minHeight: 120,
    },
    sortContainer: {
      marginTop: 30,
      paddingTop:10,
      minHeight: 120,
    },
  });

export const wrappers = StyleSheet.create({
  yellow: {
    borderWidth: 1, 
    borderColor: "yellow"
  }, 
  purple: {
    borderWidth: 1, 
    borderColor: "purple"
  }, 
  pink: {
    borderWidth: 1, 
    borderColor: "#FFB6C1"

  }
});