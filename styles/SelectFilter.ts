import { StyleSheet } from "react-native";

const SelectFilter = StyleSheet.create({
    dropdown: {
      marginLeft: 10,
      marginRight: 10,
      padding: 5,

      color: "white",
      borderColor: "white",
      borderWidth: 1,
      // width: "95%",
      // alignSelf: "center",
      // alignItems: "center",
      // justifyContent: "center",
      // textAlign: "center",
      position: "relative",
      
    },
    parentView: {
      flex: 1,
      flexDirection: "column",
      marginTop: 30,
      // minHeight: 120,
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      fontSize: 16,
      color: "lightgray",
    },
    selectedTextStyle: {
      fontSize: 16,
      color: "white",
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    label: {
      fontSize: 16,
      color: "white",
      paddingLeft: 10,
      // paddingTop: 20,
      paddingBottom: 5,
  }
  });
  
  export default SelectFilter;