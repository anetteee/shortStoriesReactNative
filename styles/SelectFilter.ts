import { StyleSheet } from "react-native";

const SelectFilter = StyleSheet.create({
  parentView: {
    marginTop: 25,
  },
  label: {
    fontSize: 16,
    color: "white",
    paddingBottom: 5,
  },
  dropdown: {
    padding: 5,
    color: "white",
    borderColor: "white",
    borderWidth: 1,
    position: "relative",
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
});

export default SelectFilter;
