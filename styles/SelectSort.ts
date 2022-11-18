import { StyleSheet } from "react-native";

const SelectSort = StyleSheet.create({
  dropdown: {
    marginLeft: 10,
    marginRight: 10,
    padding: 5,

    // height: 50,
    // width: "100%",
    borderColor: "white",
    borderWidth: 1,
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
  parentView: {
    flex: 1,
    // minHeight: 120,

    // flexDirection: "column",
  },
  label: {
    fontSize: 16,
    color: "white",
    paddingLeft: 10,
    // paddingTop: 20,
    paddingBottom: 5,
  },
});

export default SelectSort;
